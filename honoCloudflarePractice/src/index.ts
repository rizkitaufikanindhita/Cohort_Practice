import { Hono } from "hono";
import authmiddleware from "./middleware/authmiddleware";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

const todo = [
  {
    no: 1,
    title: "task 1",
    description: "task 1 with extra step should be done eod",
  },
  {
    no: 2,
    title: "task 2",
    description: "task 2 with extra step should be done eod",
  },
  {
    no: 3,
    title: "task 3",
    description: "task 3 with extra step should be done eod",
  },
  {
    no: 4,
    title: "task 4",
    description: "task 4 with extra step should be done eod",
  },
  {
    no: 5,
    title: "task 5",
    description: "task 5 with extra step should be done eod",
  },
];

app.get("/show", authmiddleware, async (c) => {
  const todoList = todo.map((item) => ({
    no: item.no,
    title: item.title,
    description: item.description,
  }));
  return c.json(todoList);
});

export default app;
