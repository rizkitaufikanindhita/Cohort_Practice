const express = require("express");
const router = express.Router();
const { Accounts } = require("../db/db");
const authMiddleware = require("../middleware/authMiddleware");
const response = require("../utils/response");

router.get("/balance", authMiddleware, async (req, res) => {
  const { id } = req.decode;
  const data = await Accounts.findOne({ userId: id });
  if (data) {
    response(200, data.balance, res);
  } else {
    response(404, "error", res);
  }
});

module.exports = router;
