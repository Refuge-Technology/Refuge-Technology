import React from "react";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { HostsClientComponent } from "./hosts";
import HostProfile from "./host-profile";

const Dashboard = async () => {
	const supabase = createServerComponentClient({ cookies });
	let { data: hosts, error } = await supabase.from("hosts").select("*");
	if (error) console.log("error", error);
	return (
		<div className="flex flex-col gap-8 sm:p-2 ">
			{/* <h1 className="text-2xl px-2 text-primary">Hosts</h1>
			<span className="w-full border-b border-link" /> */}
			{/* <pre>{JSON.stringify(hosts, null, 2)}</pre> */}
			{hosts ? (
				<HostsClientComponent hosts={hosts} />
			) : (
				<p>{error?.message}</p>
			)}
		</div>
	);
};

export default Dashboard;
