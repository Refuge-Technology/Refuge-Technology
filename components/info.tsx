import { HomeIcon } from "@heroicons/react/24/outline";

export default function Info() {
	return (
		<div className=" py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
					<div className="lg:pr-4">
						<div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
							<img
								className="absolute inset-0 h-full w-full object-cover saturate-0 opacity-20"
								src="https://images.unsplash.com/photo-1643275590906-e44bbef1a543?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
								alt=""
							/>
							<figure className="relative isolate text-white">
								<HomeIcon className="h-20"/>
								<blockquote className="mt-6 text-xl leading-8 text-white">
									<p>Offer refuge. Offer humanity.</p>
								</blockquote>
							</figure>
						</div>
					</div>
					<div>
						<div className="text-base leading-7 text-gray-700 lg:max-w-lg">
							<h1 className="mt-2 text-3xl tracking-tigh sm:text-4xl">
								What is Take Refuge?
							</h1>
							<div className="max-w-xl">
								<p className="text-justify text-lg hyphens-auto mt-6 max-w-prose">
								Take Refuge is an online application designed to connect hosts who have spare capacity in their homes with refugees who need a temporary place to stay. It has been directly inspired by TakeShelter, which was created 
								and maintained by InternetActivism.
								</p>
								<p className= "text-lg text-justify hyphens-auto mt-6 max-wprose">
								This application is maintained by <a href="https://refugetechnology.org"> Refuge Technology</a>, a group of developers making open-source humanitarian software.
								</p>
								<p className="text-lg text-justify mt-8 max-w-prose">
									Once vetted, hosts can choose to host
									refugees and displaced people in their
									homes. Hosts can choose to host for a period
									of time, or indefinitely. The host will then
									be matched to displaced persons by reputable
									aid organizations such as the UN, the
									IRC, and the Red Cross.
								</p>
							</div>
						</div>
						<div className="mt-10 flex">
							<a
								href="/hosts"
								className="text-base font-semibold leading-7 text-red-600"
							>
								Host Now <span aria-hidden="true">&rarr;</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
