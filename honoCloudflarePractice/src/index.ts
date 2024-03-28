import { Hono } from "hono";
import authmiddleware from "./middleware/authmiddleware";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { z } from "zod";
import { env } from "hono/adapter";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.post("/add", authmiddleware, async (c) => {
  const { DATABASE_URL } = env<{ DATABASE_URL: string }>(c);
  const prisma = new PrismaClient({
    datasourceUrl: DATABASE_URL,
  }).$extends(withAccelerate()); // penting

  const addSchema = z.object({
    title: z.string().min(2).max(20),
    description: z.string().min(2).max(200),
  });
  const body = await c.req.json();
  const addVerif = addSchema.safeParse(body);

  if (addVerif.success) {
    await prisma.todo.create({
      data: {
        title: body.title,
        description: body.description,
      },
    });
  } else {
    return c.json({
      message: addVerif.error.errors,
    });
  }

  return c.json({
    message: "add todo success",
  });
});

app.get("/show", authmiddleware, async (c) => {
  const { DATABASE_URL } = env<{ DATABASE_URL: string }>(c);
  const prisma = new PrismaClient({
    datasourceUrl: DATABASE_URL,
  }).$extends(withAccelerate()); // penting untuk menunjukkan kalau masuk ke connection pool dulu baru ke db

  const todoData = await prisma.todo.findMany({});
  return c.json({
    message: todoData,
  });
});

export default app;
