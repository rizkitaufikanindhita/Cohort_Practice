import { z } from "zod";

export const userSchema = z.object({
  name: z.string(),
  age: z.number(),
});

export type UserData = z.infer<typeof userSchema>;
