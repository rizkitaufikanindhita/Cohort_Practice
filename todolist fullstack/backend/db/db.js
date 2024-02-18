const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://rizkitaufik:up8tEvp2vjnuwDLo@cluster0.fbkhbdb.mongodb.net/todolist"
);

// schema
const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const TodoSchema = new mongoose.Schema({
  idUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  title: String,
  description: String,
  completed: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.model("User", UserSchema);
const Todo = mongoose.model("Todo", TodoSchema);

module.exports = {
  User,
  Todo,
};
