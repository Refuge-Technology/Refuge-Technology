export default function Info() {
	return (
		<div className="bg-white py-24 sm:py-32">
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
								<img
									src="https://www.svgrepo.com/show/529027/home-1.svg"
									alt=""
									className="h-20 w-auto text-white"
								/>
								<blockquote className="mt-6 text-xl font-semibold leading-8 text-white">
									<p>Humanity first</p>
								</blockquote>
							</figure>
						</div>
					</div>
					<div>
						<div className="text-base leading-7 text-gray-700 lg:max-w-lg">
							<h1 className="mt-2 text-3xl font-bold tracking-tight text-background-600 sm:text-4xl">
								What is Shelter?
							</h1>
							<div className="max-w-xl">
								<p className=" text-justify mt-6">
									Shelter is an application that allows
									individuals to host refugees and displaced
									people in their homes. Hosts can apply and
									go through a vetting process to ensure
									safety standards are met.
								</p>
								<p className="  text-justify mt-8">
									Once vetted, hosts can choose to host
									refugees and displaced people in their
									homes. Hosts can choose to host for a period
									of time, or indefinitely. The host will then
									be matched to displaced persons by reputable
									aid organizations such as the UNHCR, the
									IRC, and the Red Cross.
								</p>
								<p className="  text-justify mt-8">
									Et vitae blandit facilisi magna lacus
									commodo. Vitae sapien duis odio id et. Id
									blandit molestie auctor fermentum dignissim.
									Lacus diam tincidunt ac cursus in vel.
									Mauris varius vulputate et ultrices hac
									adipiscing egestas. Iaculis convallis ac
									tempor et ut. Ac lorem vel integer orci.
								</p>
							</div>
						</div>
						<div className="mt-10 flex">
							<a
								href="#"
								className="text-base font-semibold leading-7 text-indigo-600"
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
