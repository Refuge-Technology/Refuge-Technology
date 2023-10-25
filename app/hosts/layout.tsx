import { Footer } from "@/components/footer";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="">
			{children}
			<Footer />
		</div>
	);
}
