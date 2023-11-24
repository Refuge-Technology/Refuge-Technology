import Title from "@/components/title";
import React from "react";
import Image from "next/image";
import QR from "/public/assets/bmc_qr.png";

// const Resources = () => {
// 	return <div className="pt-10 max-sm:py-5 space-y-10 md:divide-y divide-links sm:p-8 w-full flex flex-col justify-center items-center grow">
// 		<Title className="px-2 py-1.5 text-4xl flex sm:text-6xl">
// 			Support Shelter
// 		</Title>
// 		<p className="mt-6 max-sm:mt-2 text-md leading-8 text-justify max-w-prose text-secondary border-none max-sm:justify-center max-sm:px-5 max-sm:py-5">
// 					Shelter is an application managed by <a className="text-links underline" href="https://refugetechnology.org" target="_blank"> Refuge Technology </a> - a non-profit collective of
// 					engineers, developers, and volunteers. To run Shelter, we need to pay costs in the form of hosting, data storage, and verification requests.
// 					<br /> <br />If you are interested in supporting Shelter directly, any donations of any amount would greatly help in keeping the application running. All donations
// 					are strictly used for the application and its operation.
// 		</p>
// 		<p className="mt-6 max-sm:mt-2 text-md leading-8 text-justify max-w-prose text-secondary border-none max-sm:justify-center max-sm:px-5 max-sm:py-5">
// 					Please consider donating by &quot;buying us a coffee&quot; <a className="text-links underline" href="https://www.buymeacoffee.com/refugetechnology" target="_blank"> here </a> <br></br>
// 					Or by scanning the QR Code below:
// 		</p>
// 		<Image alt="qr code" src={QR} height={200}/>
// 	</div>;
// };

// export default Resources;


export default function Example() {
	return (
		<>
		<div className="pt-10 max-sm:py-5 space-y-10 md:divide-y divide-links sm:p-8 w-full flex flex-col justify-center items-center grow">
		<Title className="px-2 py-1.5 text-4xl flex sm:text-6xl">
			Support Shelter
		</Title>
		<p className="mt-6 max-sm:mt-2 text-md leading-8 text-justify max-w-prose text-secondary border-none max-sm:justify-center max-sm:px-5 max-sm:py-5">
					Shelter is an application managed by <a className="text-links underline" href="https://refugetechnology.org" target="_blank"> Refuge Technology </a> - a non-profit collective of
					engineers, developers, and volunteers. To run Shelter, we need to pay costs in the form of hosting, data storage, and verification requests.
					<br /> <br />If you are interested in supporting Shelter directly, any donations of any amount would greatly help in keeping the application running. All donations
					are strictly used for the application and its operation.
		</p>
		
	</div>

		<div className="relative isolate overflow-hidden  py-16 sm:py-24 lg:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
					<div className="max-w-xl lg:max-w-lg">
						<h2 className="text-3xl font-bold tracking-tight text-background-500 sm:text-4xl">
							Subscribe to our newsletter.
						</h2>
						<p className="mt-4 text-lg leading-8 text-links-500">
							Nostrud amet eu ullamco nisi aute in ad minim
							nostrud adipisicing velit quis. Duis tempor
							incididunt dolore.
						</p>
						<div className="mt-6 flex max-w-md gap-x-4">
							<label htmlFor="email-address" className="sr-only">
								Email address
							</label>
							<input
								id="email-address"
								name="email"
								type="email"
								autoComplete="email"
								required
								className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-background-600 sm:text-sm sm:leading-6"
								
								placeholder="Enter your email"
								/>
							<button
								type="submit"
								className="flex-none rounded-md bg-background-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-background-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background-500"
								>
								Subscribe
							</button>
						</div>
					</div>
						<div className="flex flex-col items-center gap-4">
							<h2 className="text-3xl font-bold tracking-tight text-background-500 sm:text-4xl">
								Consider Donating.
							</h2>
							<div className="text-lg flex flex-col items-end">
								<p className="leading-8 text-justify max-w-prose text-secondary border-none max-sm:justify-center max-sm:px-5 max-sm:py-5">
									Please consider donating by &quot;buying us a coffee&quot; <a className="text-links-500 underline" href="https://www.buymeacoffee.com/refugetechnology" target="_blank">here</a> Or by scanning the QR Code : 
								</p>
								<Image alt="qr code" src={QR} height={160} className="rounded shadow "/>
							</div>
						</div>
				</div>
			</div>
			<div
				className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
				aria-hidden="true"
				>
				<div
					className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
					style={{
						clipPath:
						"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
					}}
					/>
			</div>
		</div>
					</>
	);
}
