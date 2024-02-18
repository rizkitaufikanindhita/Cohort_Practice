const express = require("express");
const router = express.Router();
const app = express();
const response = require("../utils/response");
const {
  UserSignupSchema,
  UserSigninSchema,
  TodoPostSchema,
} = require("../utils/types");
const bcrypt = require("bcrypt");

const userMiddleware = require("../middleware/userMiddleware");

require("dotenv").config();
const jwtPassword = process.env.JWT_SECRET;
const jwt = require("jsonwebtoken");

const { User, Todo } = require("../db/db");

const cors = require("cors");

app.use(express.json());
app.use(cors());

router.get("/", (req, res) => {
  response(200, "route user", res);
});

router.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  const passwordNew = password.toString();
  const userFormat = UserSignupSchema.safeParse(req.body);

  if (userFormat.success) {
    const userData = await User.findOne({ username });
    if (userData) {
      response(409, "user telah terdaftar", res);
    } else {
      const encryptPassword = await bcrypt.hash(passwordNew, 10);
      await User.create({
        username,
        password: encryptPassword,
      });
      response(200, "user berhasil ditambah", res);
    }
  } else {
    response(400, userFormat.error.errors, res);
  }
});

router.post("/signin", async (req, res) => {
  const { username, password } = req.body;
  const userFormat = UserSigninSchema.safeParse(req.body);
  const passwordNew = password.toString();
  const expired = 60 * 60 * 1;

  if (userFormat.success) {
    const userData = await User.findOne({ username });
    if (userData) {
      const verifPassword = await bcrypt.compare(
        passwordNew,
        userData.password
      );
      const id = userData._id;
      if (verifPassword) {
        const token = jwt.sign({ username, id }, jwtPassword, {
          expiresIn: expired,
        });
        response(200, `Bearer ${token}`, res);
      } else {
        response(400, "password salah", res);
      }
    } else {
      response(404, "user tidak terdaftar", res);
    }
  } else {
    response(400, userFormat.error.errors, res);
  }
});

router.post("/todo", userMiddleware, async (req, res) => {
  const { title, description } = req.body;
  const decode = req.decode;
  const todoFormat = TodoPostSchema.safeParse(req.body);
  if (todoFormat.success) {
    await Todo.create({
      idUser: decode.id,
      title: title,
      description: description,
    });
    response(200, "todo added", res);
  } else {
    response(400, todoFormat.error.errors, res);
  }
});

let valueDone = false;
router.put("/todo/:id", userMiddleware, async (req, res) => {
  const id = req.params.id;
  let value = !valueDone;
  await Todo.updateOne(
    {
      _id: id,
    },
    {
      completed: value,
    }
  );
  valueDone = value;
  response(200, "data berhasil diubah", res);
});

router.get("/todo", userMiddleware, async (req, res) => {
  const decode = req.decode;
  const id = decode.id;
  const dataTodo = await Todo.find({ idUser: id });
  response(200, dataTodo, res);
});

router.delete("/todo/:idTodo", userMiddleware, async (req, res) => {
  const decode = req.decode;
  const idUSer = decode.id;
  const idTodo = req.params.idTodo;
  const dataDeleted = await Todo.findOneAndDelete({
    _id: idTodo,
    idUser: idUSer,
  });
  if (dataDeleted) {
    response(200, "todo deleted", res);
  } else {
    response(400, "gagal menghapus cek id", res);
  }
});

module.exports = router;
