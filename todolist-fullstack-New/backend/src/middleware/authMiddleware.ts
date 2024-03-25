import { Request, Response, NextFunction } from "express";
import response from "../utils/response";
import jwt from "jsonwebtoken";
import prisma from "../utils/db";
import statusCode from "../utils/statusCode";

interface AuthRequest extends Request {
  decode?: any; // Optional property to allow for undefined
}

const jwtPassword: any = process.env.JWT_SECRET;

const authMiddleware = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const token: any = req.headers.authorization;
  if (!token) {
    response(statusCode.Unauthorized, "token not provided", res);
  } else {
    const decode: any = jwt.verify(token.split(" ")[1], jwtPassword);
    const id = decode.id;
    const userData = await prisma.user.findFirst({ where: { id } });
    if (userData) {
      req.decode = decode;
      next();
    } else {
      response(statusCode.Unauthorized, "id tidak terdaftar", res);
    }
  }
};

export default authMiddleware;
