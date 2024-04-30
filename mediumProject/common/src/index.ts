import { z } from "zod";

export const userSignupSchema = z.object({
  email: z.string().min(3),
  name: z.string().min(3),
  password: z.string().min(3)
})

export type userSignupType = z.infer<typeof userSignupSchema>

export const userSigninSchema = z.object({
  email: z.string().min(3),
  password: z.string().min(3)
})

export type userSigninType = z.infer<typeof userSigninSchema>

export const blogPostSchema = z.object({
  title: z.string().min(2),
  content: z.string().min(5),
  published: z.boolean().default(false).optional()
})

export type blogPostType = z.infer<typeof blogPostSchema>

export const blogEditSchema = z.object({
  title: z.string().optional(),
  content: z.string().optional(),
  published: z.boolean().optional()
})

export type blogEditType = z.infer<typeof blogEditSchema>
export type blogEditTypeOptional = Partial<blogEditType>

