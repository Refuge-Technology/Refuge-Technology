
import Title from "@/components/title";
import React from "react";
import Image from "next/image";
import QR from "/public/assets/bmc_qr.png";
import MailingList from "./email-signup";

import toast from "react-hot-toast";

export default function Example() {
	return (
		<>
			<div className="pt-10 max-sm:py-5 space-y-10 md:divide-y divide-links sm:p-8 w-full flex flex-col justify-center items-center grow">
				<Title className="px-2 py-1.5 text-4xl flex sm:text-6xl">
					Support Take Refuge
				</Title>
				<p className="mt-6 max-sm:mt-2 text-md leading-8 text-justify max-w-prose text-secondary border-none max-sm:justify-center max-sm:px-5 max-sm:py-5">
					Take Refuge is an application managed by{" "}
					<a
						className="text-links underline"
						href="https://refugetechnology.org"
						target="_blank"
					>
						{" "}
						Refuge Technology{" "}
					</a>{" "}
					- a non-profit collective of engineers, developers, and
					volunteers. To run Take Refuge, we need to pay costs in the form
					of hosting, data storage, and verification requests.
					<br />
					If you are interested in supporting Take Refuge directly, any
					donations of any amount would greatly help in keeping the
					application running. All donations are strictly used for the
					application and its operation.
				</p>
			</div>
			<div className="relative isolate overflow-hidden py-5 sm:py-5 lg:py-15">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
						<div className="max-w-xl lg:max-w-lg">
							<h2 className="text-3xl font-bold tracking-tight text-background-500 sm:text-4xl">
								Subscribe to our newsletter.
							</h2>
							<p className="mt-4 text-lg leading-8 text-links-500">
								Subscribe to the Refuge Technology newsletter to
								stay up to date on our humanitarian initiatives,
								applications, and response to disaster &
								conflict.
							</p>
							<MailingList />
						</div>
						<div className="flex flex-col items-center gap-4">
							<h2 className="text-3xl font-bold tracking-tight text-background-500 sm:text-4xl">
								Consider Donating.
							</h2>
							<div className="text-lg flex flex-col items-end">
								<p className="leading-8 text-justify max-w-prose text-secondary border-none max-sm:justify-center max-sm:px-5 max-sm:py-5">
									Please consider donating by &quot;buying us
									a coffee&quot;{" "}
									<a
										className="text-links-500 underline"
										href="https://www.buymeacoffee.com/refugetechnology"
										target="_blank"
									>
										here
									</a>{" "}
									<br />
									Or by scanning the QR Code :
								</p>
								<Image
									alt="qr code"
									src={QR}
									height={160}
									className="rounded shadow "
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
