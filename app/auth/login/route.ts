import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import type { Database } from "@/lib/database.types";

export async function POST(request: Request) {
	const requestUrl = new URL(request.url);
	const formData = await request.formData();
	const email = String(formData.get("email"));
	const password = String(formData.get("password"));
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
			return NextResponse.redirect(
				`${requestUrl.origin}/login?error=${error.message}`,
				{
					status: 301,
				}
			);
		}
		return NextResponse.redirect(`${requestUrl.origin}/ngo/dashboard`, {
			status: 301,
		});
	} catch (error) {
		return NextResponse.json(
			{ message: "An unexpected error occurred" },
			{ status: 500 }
		);
	}
}
