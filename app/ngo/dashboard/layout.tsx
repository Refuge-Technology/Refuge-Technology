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
			{children}
			</div>
		</div>
	);
}
