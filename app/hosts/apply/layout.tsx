export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex flex-col grow py-4 lg:py-0 items-center gap-2 lg:gap-2">
			{children}
		</div>
	);
}
