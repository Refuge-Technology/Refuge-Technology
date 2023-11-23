import {
	CheckCircleIcon,
	InformationCircleIcon,
} from "@heroicons/react/20/solid";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

const HostInfo = () => {
	return (
		<div className="px-6 py-20 lg:px-8">
			<div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
				<h1 className="mt-2 text-3xl tracking-tight text-secondary sm:text-4xl">
					Getting Started:
				</h1>
				<p className="mt-6 text-xl leading-8 max-w-prose">
					To sign up as a host family, simply fill out the application
					linked on this page below. Make sure to have a
					government-verified ID with you, and be prepared to go through an interview process involving a live or video interview
					so we know you are a real person. You will then be
					matched with refuge-seekers through one of our humanitarian
					partners.
				</p>
				<div className="mt-5 max-w-2xl">
					<p>
						Note: Your data always belongs to you. We will never sell,
						share, or otherwise manipulate your data in any way
						without your explicit consent.
					</p>
					<h1 className="mt-10 text-3xl tracking-tight text-secondary sm:text-3xl">
					The Host Interview Process:
					</h1>
					<ul
						role="list"
						className="mt-8 max-w-xl space-y-8 text-gray-600"
					>
						<li className="flex gap-x-3">
							<PlusCircleIcon
								className="mt-1 h-5 w-5 flex-none text-red-600"
								aria-hidden="true"
							/>
							<span>
								<strong className="font-semibold text-gray-900 max-w-prose">
									Initial Email or Phone Call:
								</strong>{" "}
								After filling out your application, you will recieve an email or phone call from
								the shelter team to your indicated preferred method of communication confirming that we have reviewed your application
								and providing details for next steps.
							</span>
						</li>
						<li className="flex gap-x-3">
							<PlusCircleIcon
								className="mt-1 h-5 w-5 flex-none text-red-600"
								aria-hidden="true"
							/>
							<span>
								<strong className="font-semibold text-gray-900 max-w-prose">
									Secondary Live or Video Interview:
								</strong>{" "}
								The next step of the interview process typically involves a Live or Video call interview with the Shelter team to deter any form of human trafficking, fraud,
								or malicious intent. This interview will typically involve being asked questions about your identity, background, and getting a general understanding of why you would like to be a host.
							</span>
						</li>
						<li className="flex gap-x-3">
							<PlusCircleIcon
								className="mt-1 h-5 w-5 flex-none text-red-600"
								aria-hidden="true"
							/>
							<span>
								<strong className="font-semibold text-gray-900 max-w-prose">
									Reviewal and Acceptance into the Host Database:
								</strong>{" "}
								After extensive reviewal by the Shelter team and rigorous security verification, you will either receive a confirmation of rejection or acceptance. If accepted, your host and
								contact information will be available in a secure database accessible only by NGOs and humanitarian workers.
							</span>
						</li>
					</ul>
					<p className="mt-8">
						After the entire interview process is completed and your host information is displayed to humanitarian organizations - you may be contacted directly by humanitarian representatives
						as they match displaced people in your respective region to hosts they deem are a good fit.
					</p>
				</div>
			</div>
		</div>
	);
};

export { HostInfo };
