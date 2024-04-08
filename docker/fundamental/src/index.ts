import express from "express";

const app = express();

const port = 3000;

app.get("/", (req: any, res: any) => {
  res.json({
    msg: "berhasil diakses",
  });
});

app.listen(port, () => {
  console.log(`server up at ${port}`);
});
