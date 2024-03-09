const express = require("express");
const router = express.Router();
const { Accounts } = require("../db/db");
const authMiddleware = require("../middleware/authMiddleware");
const response = require("../utils/response");
const mongoose = require("mongoose");

router.get("/balance", authMiddleware, async (req, res) => {
  const { id } = req.decode;
  const data = await Accounts.findOne({ userId: id });
  if (data) {
    response(200, data.balance, res);
  } else {
    response(404, "error", res);
  }
});

router.post("/transfer", authMiddleware, async (req, res) => {
  const session = await mongoose.startSession();

  session.startTransaction();

  const { to, amount } = req.body;
  const amountInt = parseInt(amount);
  const { id } = req.decode;

  const data = await Accounts.findOne({ userId: id }).session(session);

  if (!data || data.balance <= 0) {
    await session.abortTransaction();
    response(400, "balance tidak cukup", res);
  }

  const toData = await Accounts.findOne({ userId: to }).session(session);

  if (!toData) {
    await session.abortTransaction();
    response(400, "user tidak ditemukan", res);
  }

  await Accounts.updateOne(
    { userId: id },
    { $inc: { balance: -amountInt } }
  ).session(session);

  await Accounts.updateOne(
    { userId: to },
    { $inc: { balance: +amountInt } }
  ).session(session);

  await session.commitTransaction();

  response(200, "Saldo berhasil ditransfer", res);
});

module.exports = router;
