export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
	introduction: React.ReactNode;
}) {
	return <div className="flex flex-col grow items-center">{children}</div>;
}
