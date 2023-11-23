import { Footer } from "@/components/footer";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <div className="flex flex-col grow">
		<div className="grow ">
		{children}
		</div>
	<Footer />
	</div>;
}
