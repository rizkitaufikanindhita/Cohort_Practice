import { z } from "zod";
import express from "express";

const app = express();

const userScheme = z.object({
  id: z.number().min(5),
  name: z.string(),
  age: z.number(),
});

type userFormat = z.infer<typeof userScheme>;

app.put("/update", (req: any, res: any) => {
  const dataInput: userFormat = req.body;
  const data = userScheme.safeParse(req.body);

  if (data.success) {
    // logic update dengan dataInput
  }
});
