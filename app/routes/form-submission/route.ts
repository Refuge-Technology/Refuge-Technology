import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { fullFormSchema } from "@/lib/types";

import type { Database } from "@/lib/database.types";
export async function POST(request: Request) {
	const requestUrl = new URL(request.url);
	const formData: unknown = await request.json();
	const result = fullFormSchema.safeParse(formData);
	let zodErrors = {};
	if (!result.success) {
		result.error.issues.forEach((issue) => {
			zodErrors = { ...zodErrors, [issue.path[0]]: issue.message };
		});
		return NextResponse.json({ errors: zodErrors }, { status: 400 });
	}

	const cookieStore = cookies();
	const supabase = createRouteHandlerClient<Database>({
		cookies: () => cookieStore,
	});

	try {
		const { data, error } = await supabase
			.from("form entries")
			.insert(result.data)
			.select();

		if (error) {
			return NextResponse.json({
				error: error.message,
				status: error.code,
				redirect: `${requestUrl.origin}/hosts/apply/step/0`,
			});
		}

		if (data?.length === 0) {
			return NextResponse.json({
				error: "Form Incomplete or Invalid",
				status: 400,
				redirect: `${requestUrl.origin}/hosts/apply/step/0`,
			});
		}

		return NextResponse.json({
			message: "Form submission succesful",
			status: 200,
			redirect: `${requestUrl.origin}/hosts/apply/step/submitted`
		});

	} catch (errors) {
		return NextResponse.json({
			error: "An unexpected error occurred",
			status: 500,
			redirect: `${requestUrl.origin}/hosts/apply/step/0`,
		});
	}
}
