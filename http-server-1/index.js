const express = require("express");
const app = express();
require("dotenv").config(); // konfigure env di index.js
const port = process.env.PORT;

const response = require("./response");

// middleware
app.use(express.json()); //menggunakan ini untuk menerima json dari req.body

app.get("/", (req, res) => {
  console.log("Processing...");
  // urutannya dari processing lalu for lalu res jadi akan lama ketika mau ngirim res karena for
  // let a = 0;
  // for (let i = 0; i < 10000000000; i++) {
  //   a += i;
  // }
  // -- //

  // urutannya dari processing lalu for (masuk ke web apis karena async pakai settimeout) lalu res jadi akan cepat ketika mau ngirim res karena for nya pakai async
  // setTimeout(() => {
  //   let a = 0;
  //   for (let i = 0; i < 100000000; i++) {
  //     a += i;
  //   }
  //   console.log(a);
  // }, 3000);
  response(200, "My Backend API", res);

  // urutannya :
  // req => headers, body, query params
  // logic
  // res
});

app.post("/tambah", (req, res) => {
  const { authorization } = req.headers;
  console.log({ authorization });
  const { nama } = req.body;
  console.log({ nama });
  // console.log({ nama });
  response(200, "Berhasil ditambah", res);
});

app.post("/backend-api/conversation", (req, res) => {
  const { message } = req.body;
  console.log({ message });
  // Machine Learning Logic according by message
  response(200, { output: "2 + 2 = 4" }, res);
});

app.post("/check", (req, res) => {
  const { role } = req.query;
  if (role == "admin") {
    response(200, { role }, res);
  } else {
    response(404, { role: "not found" }, res);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// lanjut 02:25

// PR = buat todo list disimpan di a.txt
