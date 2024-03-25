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
    const addTodoSchema = addTodoTypes.safeParse(req.body);
    if (addTodoSchema.success) {
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
    } else {
      response(statusCode.Not_Implemented, addTodoSchema.error.errors, res);
    }
  }
);

router.get(
  "/",
  authMiddleware,
  async (req: RequestWithDecode, res: Response) => {
    const { id } = req.decode;
    const result = await prisma.todo.findMany({
      where: { userId: id },
      select: {
        id: true,
        title: true,
        description: true,
        done: true,
      },
    });
    result
      ? response(statusCode.OK, result, res)
      : response(statusCode.Not_Found, "Tidak ada data", res);
  }
);

router.delete(
  "/:id",
  authMiddleware,
  async (req: RequestWithDecode, res: Response) => {
    const { id } = req.params;
    const result = await prisma.todo.delete({ where: { id: id } });
    result
      ? response(statusCode.OK, "Item Telah Dihapus", res)
      : response(statusCode.Not_Found, "Item Gagal Dihapus", res);
  }
);

router.put(
  "/:id",
  authMiddleware,
  async (req: RequestWithDecode, res: Response) => {
    const { id } = req.params;
    const result = await prisma.todo.update({
      where: { id: id },
      data: {
        done: true,
      },
    });
    result
      ? response(statusCode.OK, "Item Berhasil Diupdate", res)
      : response(statusCode.Not_Found, "Item Gagal Diupdate", res);
  }
);

export default router;
