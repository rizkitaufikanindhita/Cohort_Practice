const { z } = require("zod");

const signUpFormat = z.object({
  username: z.string().min(4).max(20),
  password: z.string().min(4).max(10),
  firstName: z.string().min(4).max(20),
  lastName: z.string().min(4).max(20),
});

const signInFormat = z.object({
  username: z.string().min(4).max(20),
  password: z.string().min(4).max(10),
});

module.exports = {
  signUpFormat,
  signInFormat,
};
