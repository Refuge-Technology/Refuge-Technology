import { z } from "zod";

export const signInSchema = z.object({
	email: z.string().email(),
	password: z.string().min(3, "Password must be at least 3 characters long"),
});

export const personalInfoSchema = z.object({
	first_name: z
		.string()
		.min(3, "First name must be at least 3 characters long"),
	last_name: z
		.string()
		.min(3, "Last name must be at least 3 characters long"),
	email: z.string().email(),
	country: z.string(),
	phone: z.string().min(3, "Phone must be at least 3 characters long"),
	street_address: z
		.string()
		.min(3, "Street address must be at least 3 characters long"),
	city: z.string().min(3, "City must be at least 3 characters long"),
	state: z.string().min(3, "State must be at least 3 characters long"),
	zip: z.string().min(3, "Zip must be at least 3 characters long"),
});

export type TSignInSchema = z.infer<typeof signInSchema>;

export type TPersonalInfoSchema = z.infer<typeof personalInfoSchema>;
