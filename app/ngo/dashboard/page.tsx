import React from "react";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import HostList from "./host-list";
import HostProfile from "./host-profile";

const Dashboard = async () => {
	const supabase = createServerComponentClient({ cookies });
	let { data: hosts, error } = await supabase.from("hosts").select("*");
	if (error) console.log("error", error);
	return (
		<div className="flex flex-col gap-8 sm:p-2 ">
			{hosts ? (
			<>
				<HostList hosts={hosts} />
				<HostProfile hosts={hosts} />
			</>
			) : (
				<p>{error?.message}</p>
			)}
		</div>
	);
};

export default Dashboard;
