const Footer = () => {
	return (
		<footer className="bg-background-600">
			<div className="max-w-full px-6 py-8 mx-auto md:flex md:items-center text-xs md:justify-between text-white lg:px-8">
				<div className="flex justify-center space-x-6 md:order-2">
					<p> Shelter - a {"<🤍/>"}<a href="https://refugetechnology.org" className="hover-links underline">Refuge Technology</a> initiative.</p>
				</div>
				<div className="mt-8 md:order-1 md:mt-0">
					<p className="text-xs leading-5 text-center text-white">
						&copy; 2023 Refuge Technology. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export { Footer };