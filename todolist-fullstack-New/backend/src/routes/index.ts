import express from "express";
import userEndpoint from "../routes/user";
import todoEndpoint from "../routes/todo";

const router = express.Router();

router.use("/user", userEndpoint);
router.use("/todo", todoEndpoint);

export default router;
