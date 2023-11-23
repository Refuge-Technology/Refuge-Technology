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
	// phone: z.string().min(3, "Phone must be at least 3 characters long"),
	street_address: z
		.string()
		.min(3, "Street address must be at least 3 characters long"),
	city: z.string().min(3, "City must be at least 3 characters long"),
	state: z.string().min(3, "State must be at least 3 characters long"),
	zip: z.string().min(3, "Zip must be at least 3 characters long"),
});

export const homeInfoSchema = z.object({
	home_description: z
		.string()
		.min(
			50,
			"The description of your property must be atleast 50 characters long"
		),
});

export const contactInfoSchema = z
	.object({
		contact_by_email: z.boolean(),
		contact_by_phone: z.boolean(),
		contact_by_whatsApp: z.boolean(),
	})
	.refine(
		({ contact_by_email, contact_by_phone, contact_by_whatsApp }) =>
			contact_by_email || contact_by_phone || contact_by_whatsApp,
		{
			message: "you must tick atleast 1 method of contact.",
			path: ["contact_method"],
		}
	);

export const fullFormSchema = z.object({
	first_name: z
		.string()
		.min(3, "First name must be at least 3 characters long"),
	last_name: z
		.string()
		.min(3, "Last name must be at least 3 characters long"),
	email: z.string().email(),
	country: z.string(),
	// phone: z.string().min(3, "Phone must be at least 3 characters long"),
	street_address: z
		.string()
		.min(3, "Street address must be at least 3 characters long"),
	city: z.string().min(3, "City must be at least 3 characters long"),
	state: z.string().min(3, "State must be at least 3 characters long"),
	zip: z.string().min(3, "Zip must be at least 3 characters long"),
	home_description: z
		.string()
		.min(
			50,
			"The description of your property must be atleast 50 characters long"
		),
	contact_by_email: z.boolean(),
	contact_by_phone: z.boolean(),
	contact_by_whatsApp: z.boolean(),
}).refine(
	({ contact_by_email, contact_by_phone, contact_by_whatsApp }) =>
		contact_by_email || contact_by_phone || contact_by_whatsApp,
	{
		message: "you must tick atleast 1 method of contact.",
		path: ["contact_method"],
	}
);;

export type TSignInSchema = z.infer<typeof signInSchema>;

export type TPersonalInfoSchema = z.infer<typeof personalInfoSchema>;

export type THomeInfoSchema = z.infer<typeof homeInfoSchema>;

export type TContactInfoSchema = z.infer<typeof contactInfoSchema>;

export type TFullFormSchema = z.infer<typeof fullFormSchema>
