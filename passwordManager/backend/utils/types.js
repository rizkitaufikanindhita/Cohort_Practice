const { z } = require("zod");

const loginSchema = z.object({
  username: z.string().min(2),
  password: z.string().min(5),
});

const accountSchema = z.object({
  site: z.string(),
  account: z.string(),
  passwordAccount: z.string(),
});

module.exports = { loginSchema, accountSchema };
