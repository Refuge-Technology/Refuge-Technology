import Sidebar from "@/components/sidebar";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex grow">
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
