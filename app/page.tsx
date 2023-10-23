import Link from "next/link";

import Info from "@/components/info";

const links = [
	{ name: "Why Host?", href: "/hosts" },
	{ name: "Refugee Resources", href: "/resources" },
	{ name: "Donate to Aid Orgs", href: "/donate" },
	{ name: "Host Now", href: "/hosts/apply" },
];

export default function Home() {
	return (
		<>
			<div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
				<img
					src="https://images.unsplash.com/photo-1660479643704-2acf8f98d8c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
					alt=""
					className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center filter opacity-20"
				/>
				<div
					className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl opacity-10"
					aria-hidden="true"
				></div>
				<div
					className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
					aria-hidden="true"
				></div>
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="flex flex-col mx-auto lg:mx-0">
						<h2 className=" w-fit  text-center px-2 text-4xl font-bold text-white sm:text-6xl bg-background-600 italic">
							Refugees Need Your Help
						</h2>
						<p className="mt-6 text-lg leading-8 text-primary">
							In 2022, the number of new refugees reached an all-time high. Every day, hundreds, if not thousands, of ordinary, well-meaning individuals are displaced from their homes due to terrorism, war, and disease.
							They desperately need our help.
						</p>
						<p className="mt-6 text-lg leading-8 text-primary">
							Shelter is an online application designed to connect hosts who have spare capacity in their homes with refugees who need a temporary place to stay. It has been directly inspired by TakeShelter, which was created and maintained by InternetActivism and designed primarily for Sudanese Refugees.
							Shelter is maintained by RefugeTechnology, a decentralized group of developers making open-source humanatarian software. We are currently focusing on refugees and hosts in Israel, Palestine, Syria, and Afganistan. 
							If you currently reside in these countries, please consider offering your home by signing up as a host.
						</p>
						<h3 className = " w-fit  text-center px-2 text-4xl font-bold text-white sm:text-6xl bg-background-600 italic">
							Why the above regions?
							</h3>
						<p className="mt-6 text-lg leading-8 text-primary">
							In the aftermath of the terrorist attacks perputated by the Hamas group, an all out conflict has broken out in the already tense region comprising of Palestine and Israel. Thousands of innocent civllians, many of them children, have lost their homes and way of life as a result.
							This conflict has also detracted from other humanatarian crises, such as the earthquakes striking Afganistan and Syria.
						</p>
					</div>
					<div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
						<div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-16 pt-20">
							{/* <button
							className="bg-white text-black p-2"
							onClick={() => handleSignUp()}
							>
							test
						</button> */}
							{links.map((link) => (
								<Link
									key={link.name}
									href={link.href}
									className=" flex gap-2 group hover:scale-105 transition-transform duration-300 ease-in-out"
								>
									{link.name}
									<span
										className=" group-hover:translate-x-1/2 transition-transform duration-300 ease-in-out"
										aria-hidden="true"
									>
										&rarr;
									</span>
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
			<Info />
		</>
	);
}
