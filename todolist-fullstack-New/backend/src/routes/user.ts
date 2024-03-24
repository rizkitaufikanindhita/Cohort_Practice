import express, { Request, Response } from "express";
import response from "../utils/response";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../utils/db";
import zodTypes from "../utils/zodTypes";
import authMiddleware from "../middleware/authMiddleware";
import statusCode from "../utils/statusCode";

const router = express.Router();
const jwtPassword: any = process.env.JWT_SECRET;
const { signUpTypes, signInTypes } = zodTypes;

interface RequestWithDecode extends Request {
  decode?: any;
}

type Input = {
  username: string;
  password: string;
};

type Input2 = {
  firstName: string;
  lastName: string;
};

type Signup = Input & Input2;

const expired: number = 60 * 60 * 1;

router.post("/signup", async (req: Request, res: Response) => {
  const { username, password, firstName, lastName }: Signup = req.body;
  const passwordString: string = password.toString();
  const signUpSchema = signUpTypes.safeParse(req.body);

  if (signUpSchema.success) {
    const userData = await prisma.user.findFirst({
      where: { username },
    });
    if (userData) {
      response(statusCode.Conflict, "User Telah Terdaftar", res);
    } else {
      const hashPassword = await bcrypt.hash(passwordString, 10);
      await prisma.user.create({
        data: {
          username: username.toLowerCase(),
          password: hashPassword,
          firstName: firstName.toLowerCase(),
          lastName: lastName.toLowerCase(),
        },
      });
      const userDataNew = await prisma.user.findFirst({ where: { username } });
      const id: any = userDataNew?.id;
      const token: string = jwt.sign({ username, id }, jwtPassword, {
        expiresIn: expired,
      });
      response(
        statusCode.OK,
        {
          message: "User Berhasil Ditambahkan",
          token: token,
        },
        res
      );
    }
  } else {
    response(statusCode.Bad_Request, signUpSchema.error.errors, res);
  }
});

router.post("/signin", async (req: Request, res: Response) => {
  const { username, password }: Input = req.body;
  const signInSchema = signInTypes.safeParse(req.body);
  if (signInSchema.success) {
    const userData = await prisma.user.findFirst({ where: { username } });
    if (userData) {
      const passwordVerif = await bcrypt.compare(password, userData.password);
      if (passwordVerif) {
        const id: string = userData.id;
        const username: string = userData.username;
        const token: string = jwt.sign({ username, id }, jwtPassword, {
          expiresIn: expired,
        });
        response(
          statusCode.OK,
          {
            message: "Login berhasil",
            token: token,
          },
          res
        );
      } else {
        response(statusCode.Unauthorized, "Password Salah", res);
      }
    } else {
      response(statusCode.Not_Found, "Username Tidak Terdaftar", res);
    }
  } else {
    response(statusCode.Bad_Request, signInSchema.error.errors, res);
  }
});

router.put(
  "/",
  authMiddleware,
  async (req: RequestWithDecode, res: Response) => {
    const { username, password, firstName, lastName }: Signup = req.body;
    const { id } = req.decode;
    const signUpSchema = signUpTypes.safeParse(req.body);
    if (signUpSchema.success) {
      const hashPassword = await bcrypt.hash(password, 10);
      const userData: any = await prisma.user.findFirst({ where: { id } });
      const userPassword = await bcrypt.compare(password, userData.password);
      let passwordBaru;
      if (userPassword) {
        passwordBaru = userData.password;
      } else {
        passwordBaru = hashPassword;
      }

      const edit = await prisma.user.update({
        where: { id: id },
        data: {
          username: username,
          password: passwordBaru,
          firstName: firstName,
          lastName: lastName,
        },
      });
      if (edit) {
        response(statusCode.OK, "update berhasil", res);
      } else {
        response(statusCode.Bad_Request, "error", res);
      }
    } else {
      response(statusCode.Bad_Request, signUpSchema.error.errors, res);
    }
  }
);

export default router;
