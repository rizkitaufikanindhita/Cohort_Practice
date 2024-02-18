const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
const { z } = require("zod");
const express = require("express");
const app = express();

app.use(express.json());

const port = 3000;

/**
 * Generates a JWT for a given username and password.
 *
 * @param {string} username - The username to be included in the JWT payload.
 *                            Must be a valid email address.
 * @param {string} password - The password to be included in the JWT payload.
 *                            Should meet the defined length requirement (e.g., 6 characters).
 * @returns {string|null} A JWT string if the username and password are valid.
 *                        Returns null if the username is not a valid email or
 *                        the password does not meet the length requirement.
 */

const schema = z.object({
  username: z.string().email(),
  password: z.string().min(6),
});

function signJwt(username, password) {
  const token = jwt.sign({ username, password }, jwtPassword);
  return token;
}

/**
 * Verifies a JWT using a secret key.
 *
 * @param {string} token - The JWT string to verify.
 * @returns {boolean} Returns true if the token is valid and verified using the secret key.
 *                    Returns false if the token is invalid, expired, or not verified
 *                    using the secret key.
 */
function verifyJwt(token) {
  const tokenVerif = jwt.verify(token, jwtPassword);
  return tokenVerif;
}

/**
 * Decodes a JWT to reveal its payload without verifying its authenticity.
 *
 * @param {string} token - The JWT string to decode.
 * @returns {object|false} The decoded payload of the JWT if the token is a valid JWT format.
 *                         Returns false if the token is not a valid JWT format.
 */
function decodeJwt(token) {
  const tokenDecode = jwt.decode(token);
  return tokenDecode;
}

app.get("/", (req, res) => {
  res.json("UP");
});

app.post("/signin", (req, res) => {
  const { username, password } = req.body;
  const userData = schema.safeParse(req.body);
  if (!userData.success) {
    res.json("null");
  }
  const token = signJwt(username, password);
  res.json({
    message: "login berhasil",
    token,
  });
});

app.get("/dashboard", (req, res) => {
  const tokenData = req.headers.authorization;
  try {
    const result = verifyJwt(tokenData);
    if (result) {
      res.json(true);
    }
  } catch (err) {
    res.json(false);
  }
});

app.get("/decode", (req, res) => {
  const tokenData = req.headers.authorization;
  res.json(decodeJwt(tokenData));
});

app.listen(port, () => {
  console.log("up at 3000");
});

module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
