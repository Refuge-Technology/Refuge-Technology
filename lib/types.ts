import { z } from "zod";

export const signInSchema = z.object({
	email: z.string().email(),
	password: z.string().min(3, "Password must be at least 3 characters long"),
});

export type TSignInSchema = z.infer<typeof signInSchema>;
