import { Footer } from "@/components/footer";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="grow flex flex-col justify-between">
			{children}
			<Footer />
		</div>
	);
}
