// DONE //
/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
const { error } = require("console");
const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());

const filePath =
  "E:/Harkirat Singh Cohort/2. Cohort 2 MERN, Devops, System Design 0-100/Practice/assignments/week-2/02-nodejs/files/a.txt";

app.get("/", (req, res) => {
  res.json("ok");
});

app.get("/files", (req, res) => {
  fs.readFile(filePath, "utf-8", (error, data) => {
    res.json({ data: data, status: 200 });
  });
});

app.get("/file/:filename", (req, res) => {
  const filename = req.params.filename;
  let path = `E:/Harkirat Singh Cohort/2. Cohort 2 MERN, Devops, System Design 0-100/Practice/assignments/week-2/02-nodejs/files/${filename}`;
  fs.readFile(path, "utf-8", (error, data) => {
    res.json({ data: data, status: 200 });
  });
});

app.get("*", (req, res) => {
  res.json({ message: "server not found", status: 404 });
});

app.listen(3000, () => {
  console.log("Server up");
});

module.exports = app;
