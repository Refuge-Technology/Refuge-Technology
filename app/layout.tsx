import { Header } from "@/components/header";
import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import Info from "@/components/info";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Shelter - Host Refugees",
	description: "Host refugees and displaced people.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="h-full bg-background">
			<body className={inter.className}>
				<Header />
				{children}
				{/* <Info /> */}
			</body>
		</html>
	);
}
