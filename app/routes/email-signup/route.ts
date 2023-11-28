import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { mailingListSchema} from "@/lib/types";


import type { Database } from "@/lib/database.types";

export async function POST(request: Request) {
	const requestUrl = new URL(request.url);
	const email: unknown = await request.json();
	const result = mailingListSchema.safeParse(email);
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
			.from("email list")
			.insert(result.data)
			.select();

		if (error) {
			return NextResponse.json({
				error: error.message,
				status: error.code,
			});
		}

		if (data?.length === 0) {
			return NextResponse.json({
				error: "Form Incomplete or Invalid",
				status: 400,
			});
		}

		return NextResponse.json({
			message: "Form submission succesful",
			status: 200,
		});

	} catch (errors) {
		return NextResponse.json({
			error: "An unexpected error occurred",
			status: 500,
		});
	}
}
