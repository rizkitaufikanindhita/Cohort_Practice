const request = require("supertest");
const assert = require("assert");
const express = require("express");
const app = express();
// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second

let numberOfRequestsForUser = 0;

// setInterval(() => {
//   numberOfRequestsForUser = {};
// }, 1000);

const requestCount = (req, res, next) => {
  numberOfRequestsForUser += 1;
  console.log(`jumlah request : ${numberOfRequestsForUser}`);
  next();
};

const rateLimitter = (req, res, next) => {
  if (numberOfRequestsForUser > 5) {
    res.json({
      message: "block please wait 3s",
      status: 404,
    });
    // kalau sudah block diharuskan nunggu 3 detik
    setTimeout(() => {
      numberOfRequestsForUser = 0;
    }, 3000).then(requestCount);
  } else {
    next();
  }
};

const middleware = [requestCount, rateLimitter];

app.use(...middleware);

app.get("/user", function (req, res) {
  res.status(200).json({ name: "john" });
});

app.post("/user", function (req, res) {
  res.status(200).json({ msg: "created dummy user" });
});

app.use((err, req, res, next) => {
  res.json(err);
});

app.listen(3000, () => {
  console.log("Server up in port 3000");
});

module.exports = app;
