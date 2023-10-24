import Title from "@/components/title";

export default function LoginLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex grow flex-col px-6 py-12 lg:px-8 bg-un-image bg-no-repeat bg-30% bg-center sm:bg-left-top bg-contain">
			<div className="flex flex-col items-center sm:mx-auto sm:w-full sm:max-w-sm">
				<Title className=" mt-10">NGO & Humanitarian Login</Title>
				<p className="mt-6 text text-center leading-5 text-background-700">
					This login is reserved for NGO and humanitarian workers.
					Host login is coming soon.
				</p>
			</div>
			<div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
				{children}
			</div>
		</div>
	);
}
