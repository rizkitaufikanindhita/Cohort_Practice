import {z} from "zod"

export const userSchema = z.object({
  username: z.string(),
  password: z.string()
})

export const url = "https://api.google.com"
