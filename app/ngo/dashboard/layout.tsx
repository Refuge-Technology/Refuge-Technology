import Sidebar from "@/components/sidebar";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { HostsClientComponent } from "./hosts";
export default async function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const supabase = createServerComponentClient({ cookies });
	const {
		data: { session },
	} = await supabase.auth.getSession();

	if (!session) {
		redirect("/login");
	}

	// const supabase = createServerComponentClient({ cookies });
	let { data: hosts, error } = await supabase.from("hosts").select("*");
	if (error) console.log("error", error);

	return (
		<div className="flex bg-slate-100 grow">
			<div className="flex w-72 flex-col">
				<Sidebar />
			</div>
			<div className="grow">
				<h2 className="pt-10 text-center px-2 text-3xl text-secondary sm:text-3xl">
					New Hosts
				</h2>
				{children}
			</div>
		</div>
	);
}
