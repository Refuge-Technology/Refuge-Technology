"use client";
import React from "react";
import Link from "next/link";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { PlusIcon } from "@heroicons/react/20/solid";

import type { Session } from "@supabase/auth-helpers-nextjs";
import type { Database } from "@/lib/database.types";

const AuthButton = ({ session }: { session: Session | null }) => {
	const router = useRouter();
	const supabase = createClientComponentClient<Database>();

	const handleSignOut = async () => {
		await supabase.auth.signOut();
		router.refresh();
	};

	return session ? (
		<button
			type="submit"
			onClick={() => handleSignOut()}
			className="relative inline-flex items-center gap-x-1.5 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-background-600 shadow- hover:bg-background-800 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
		>
			Logout
		</button>
	) : (
		<Link
			type="button"
			className="relative inline-flex items-center gap-x-1.5 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-background-600 shadow hover:bg-background-800 hover:shadow-inset hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background-500"
			href="/login"
		>
			<PlusIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
			Login
		</Link>
	);
};

export default AuthButton;
