const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const response = require("./response");

const fs = require("fs");
const path = require("path");

app.use(express.json());

app.get("/", (req, res) => {
  response(200, "Backend Todo", res);
});

// show todo from file
app.get("/show", (req, res) => {
  try {
    const path = "TodoList.txt";
    fs.readFile(path, "utf-8", (err, data) => {
      response(200, data, res);
    });
  } catch (err) {
    response(404, err, res);
  }
});

// post todo in file
app.post("/add", (req, res) => {
  try {
    const path = "TodoList.txt";
    const { todo } = req.body;
    fs.writeFile(path, todo, (err) => {
      if (err) {
        response(404, "error", res);
      } else {
        response(200, "berhasil ditambah", res);
      }
    });
  } catch (err) {
    response(404, err, res);
  }
});

app.listen(port, () => {
  console.log(`Server up in ${port}`);
});
