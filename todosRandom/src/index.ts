import express, { Request, Response } from "express";
import cors from "cors";
import swaggerui from "swagger-ui-express";
import { swaggerDocument } from "./swagger";

const port = 3300;
const app = express();

app.use(cors());
app.use("/api-docs", swaggerui.serve, swaggerui.setup(swaggerDocument));

const todos: object[] = [
  { no: 1, todos: "todo 1", status: "process" },
  { no: 2, todos: "todo 2", status: "process" },
  { no: 3, todos: "todo 3", status: "process" },
  { no: 4, todos: "todo 4", status: "process" },
  { no: 5, todos: "todo 5", status: "process" },
  { no: 6, todos: "todo 6", status: "process" },
];

app.get("/", (_req: Request, res: Response) => {
  let listTodo = [];
  for (let i = 0; i < 5; i++) {
    if (Math.random() > 0.5) {
      listTodo.push(todos[i]);
    }
  }
  res.json({
    msg: listTodo,
    data: "Data fetched successfully",
    about: "Todo task random API",
  });
});

app.listen(port, () => {
  console.log(`server up at ${port}`);
});
