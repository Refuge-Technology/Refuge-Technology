export default function LoginLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex h-full flex-col justify-center align-center px-6 py-12 lg:px-8 bg-un-image bg-no-repeat bg-30% bg-contain">
			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
				<h2 className="mt-10 text-center text-2xl leading-9 tracking-tight text-primary">
					NGO & Humanitarian Login
				</h2>
				<p className="mt-6 text-sm text-center leading-5 text-links">
					This login is reserved for NGO and humanitarian workers.
					Host login is coming soon.
				</p>
			</div>

			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				{children}
			</div>
		</div>
	);
}
