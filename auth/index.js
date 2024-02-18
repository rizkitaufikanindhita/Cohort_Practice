const express = require("express");
const app = express();
const port = 3000;

const jwt = require("jsonwebtoken");
const jwtPassword = "123";

app.use(express.json());

const ALL_USERS = [
  {
    username: "rizki@gmail.com",
    password: "rizki123",
    name: "rizki",
  },
  {
    username: "taufik@gmail.com",
    password: "taufik123",
    name: "taufik",
  },
  {
    username: "reysa@gmail.com",
    password: "reysa123",
    name: "reysa",
  },
];

const userExist = (username, password) => {
  return ALL_USERS.some(
    (e) => e.username === username && e.password === password
  );
};

app.get("/", (req, res) => {
  res.json("backend up");
});

app.post("/signin", (req, res) => {
  const { username } = req.body;
  const { password } = req.body;
  // return jwt with username encrypted

  const expiredIn = 60 * 60 * 1;
  const token = jwt.sign({ username: username }, jwtPassword, {
    expiresIn: expiredIn,
  });

  if (!userExist(username, password)) {
    res.json("data tidak ada");
  } else {
    res.json({
      username: username,
      status: 200,
      token, // untuk ngasih tau user
    });
  }
});

app.get("/users", (req, res) => {
  // headers - authorization header
  // return an array of all users if user is signed in (token is correct)
  //return 403 status code if not
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    const listUsers = ALL_USERS.filter((e) => e.username != username);
    res.json(listUsers);
  } catch (err) {
    res.json({
      error: err,
      status: 403,
    });
  }
});

app.use((err, req, res, next) => {
  console.log(err);
});

app.listen(port, () => {
  console.log(`server up at ${port}`);
});

// lamjut 01:00:00
