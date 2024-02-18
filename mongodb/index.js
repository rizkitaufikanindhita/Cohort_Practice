const express = require("express");
const app = express();
const port = 3000;

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://rizkitaufik:up8tEvp2vjnuwDLo@cluster0.fbkhbdb.mongodb.net/userData" // /userData buat collection baru
);
const User = mongoose.model("Users", {
  username: String,
  password: String,
  name: String,
});

const jwt = require("jsonwebtoken");
const jwtPassword = "123";

app.use(express.json());

app.get("/", (req, res) => {
  res.json("backend up");
});

app.post("/signup", async (req, res) => {
  const { username, password, name } = req.body;

  const existingUser = await User.findOne({ username: username });

  if (existingUser) {
    res.json({
      message: "user exist",
    });
  } else {
    // opsi 1
    // const user = new User({
    //   username: username,
    //   password: password,
    //   name: name,
    // });
    // user.save();

    // opsi 2 (preferred)
    await User.create({ username: username, password: password, name: name });
    res.json({
      message: "user created",
    });
  }
});

app.post("/signin", async (req, res) => {
  const { username, password } = req.body;
  // return jwt with username encrypted

  const expiredIn = 60 * 60 * 1;
  const token = jwt.sign({ username: username }, jwtPassword, {
    expiresIn: expiredIn,
  });

  const existingUser = await User.findOne({ username, password });

  if (!existingUser) {
    res.json("data tidak ada");
  } else {
    res.json({
      username: username,
      status: 200,
      token, // untuk ngasih tau user
    });
  }
});

app.get("/users", async (req, res) => {
  // headers - authorization header
  // return an array of all users if user is signed in (token is correct)
  //return 403 status code if not
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    const listUsers = await User.find();
    const filteredUsers = listUsers.filter((e) => e.username != username);
    res.json(filteredUsers);
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

// lamjut 02:02:00
