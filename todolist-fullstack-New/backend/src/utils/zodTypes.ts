import { z } from "zod";

const signUpTypes = z.object({
  username: z.string().min(4).max(20),
  password: z.string().min(3).max(20),
  firstName: z.string().min(3).max(20),
  lastName: z.string().min(3).max(20),
});

const signInTypes = z.object({
  username: z.string().min(4).max(20),
  password: z.string().min(3).max(20),
});

const addTodoTypes = z.object({
  title: z.string().min(3),
  description: z.string().min(3),
});

export default { signUpTypes, signInTypes, addTodoTypes };
