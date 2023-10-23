import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import HeaderServer from "@/components/header/header-server";
import { cn } from "@/utils/cn";

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
		<html lang="en" className="h-full bg-background-600">
			<body className={cn("flex flex-col min-h-full", inter.className)}>
				<HeaderServer />
				{children}
			</body>
		</html>
	);
}
