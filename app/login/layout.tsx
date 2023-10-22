export default function LoginLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex h-full flex-1 flex-col justify-center align-center px-6 py-12 lg:px-8 ">
			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
				<h2 className="text-primary  text-center font-semibold text-2xl">
					{"<🤍/>"}
				</h2>
				<h2 className="mt-2 text-center text-2xl leading-9 tracking-tight text-primary">
					NGO Login
				</h2>
			</div>

			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				{children}
			</div>
		</div>
	);
}
