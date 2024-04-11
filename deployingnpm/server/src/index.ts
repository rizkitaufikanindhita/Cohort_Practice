import express from "express";
import { z } from "zod";
import { userSchema, UserData } from "@rizkitaufik/usertype";

const app = express();

const port = 3000;

app.post("/add", (req: any, res: any) => {
  const userVerif = userSchema.safeParse(req.body);
  const userData: UserData = req.body;
  if (userVerif.success) {
    res.json({
      msg: "ok",
    });
  }
});

app.listen(port, () => {
  console.log(`server up at ${port}`);
});
