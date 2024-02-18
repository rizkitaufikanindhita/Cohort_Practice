const { z } = require("zod");

const UserSignupSchema = z.object({
  username: z.string().min(2),
  password: z.string().min(5),
});

const UserSigninSchema = z.object({
  username: z.string().min(2),
  password: z.string().min(5),
});

const TodoPostSchema = z.object({
  title: z.string(),
  description: z.string(),
});

const TodoPutSchema = z.object({
  id: z.string(),
});

module.exports = {
  UserSignupSchema,
  UserSigninSchema,
  TodoPostSchema,
};
