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
		<div className="flex flex-col gap-8 sm:p-2 ">
			<h1 className="text-2xl px-2 text-primary">Hosts</h1>
			<span className="w-full border-b border-link" />
			<HostList />
		</div>
	);
};

export default Dashboard;
