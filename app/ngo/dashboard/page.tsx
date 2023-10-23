import React from "react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import HostList from "@/components/host-list";

const Dashboard = async () => {
	const supabase = createServerComponentClient({ cookies });
	const {
		data: { session },
	} = await supabase.auth.getSession();

	if (!session) {
		redirect("/login");
	}

	return (
		<div className="flex flex-col gap-8 pt-4 sm:p-8 ">
			<h1 className="text-xl px-2 text-slate-200 font-semibold tracking-wide">Hosts</h1>
			<span className="w-full border-b border-background-400" />
			<HostList />
		</div>
	);
};

export default Dashboard;
