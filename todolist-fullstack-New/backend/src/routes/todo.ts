import express, { Request, Response } from "express";
import authMiddleware from "../middleware/authMiddleware";
import zodTypes from "../utils/zodTypes";
import prisma from "../utils/db";
import statusCode from "../utils/statusCode";
import response from "../utils/response";

const router = express.Router();
const { addTodoTypes } = zodTypes;

interface RequestWithDecode extends Request {
  decode?: any;
}

type InputTodo = {
  title: string;
  description: string;
};

router.post(
  "/add",
  authMiddleware,
  async (req: RequestWithDecode, res: Response) => {
    const { title, description }: InputTodo = req.body;
    const userId: string = req.decode.id;
    const result = await prisma.todo.create({
      data: {
        title: title,
        description: description,
        userId: userId,
      },
    });

    result
      ? response(statusCode.OK, "Todo Berhasil Ditambahkan", res)
      : response(
          statusCode.Unprocessable_Entity,
          "Todo Gagal Ditambahkan",
          res
        );
  }
);

export default router;
