import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { signInSchema, TSignInSchema } from "@/lib/types";

import type { Database } from "@/lib/database.types";

export async function POST(request: Request) {
	const requestUrl = new URL(request.url);
	const formData: unknown = await request.json();
	const result = signInSchema.safeParse(formData);
	let zodErrors = {};
	if (!result.success) {
		result.error.issues.forEach((issue) => {
			zodErrors = { ...zodErrors, [issue.path[0]]: issue.message };
		});
		return NextResponse.json({ errors: zodErrors }, { status: 400 });
	}
	const email = result.data.email;
	const password = result.data.password;

	const cookieStore = cookies();
	const supabase = createRouteHandlerClient<Database>({
		cookies: () => cookieStore,
	});

	try {
		const { error } = await supabase.auth.signInWithPassword({
			email,
			password,
		});

		if (error) {
			return NextResponse.json({
				errors: error.message,
				status: error.status,
			});
		}
		return NextResponse.json({
			message: "Login successful",
			status: 200,
			redirect: requestUrl.origin,
		});
	} catch (errors) {
		return NextResponse.json({
			errors: "An unexpected error occurred",
			status: 500,
		});
	}
}
