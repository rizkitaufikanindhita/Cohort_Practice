const express = require("express");
const router = express.Router();
const userEndpoints = require("./user");
const accountEndpoints = require("./accounts");

router.use("/user", userEndpoints);
router.use("/account", accountEndpoints);

module.exports = router;
