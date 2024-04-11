import { z } from "zod";
export declare const userSchema: z.ZodObject<{
    name: z.ZodString;
    age: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    name: string;
    age: number;
}, {
    name: string;
    age: number;
}>;
export type UserData = z.infer<typeof userSchema>;
