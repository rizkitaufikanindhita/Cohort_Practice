const { z } = require("zod");

const UserSigninZod = z.object({
  username: z.string(),
});

const CardZod = z.object({
  name: z.string(),
  skill: z.string(),
  portofolio: z.string(),
});

module.exports = {
  UserSigninZod,
  CardZod,
};
