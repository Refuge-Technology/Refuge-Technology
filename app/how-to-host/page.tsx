import HostNow from "./hostnow";

export default function HowToHost() {
	return (
	  <div className="overflow-hidden bg-white py-32">
		<div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
		  <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
			<div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
			  <h2 className="text-3xl italic tracking-tight text-primary bg-background-600 sm:text-4xl"> How to Host Displaced People</h2>
			  <p className="mt-6 text-xl leading-8 text-gray-600">
				Hosting displaced people and refugees during a disaster or conflict is an enormous service for humanitarian relief.
			  </p>
			  <p className="mt-6 text-base leading-7 text-gray-600">
				The following page explains how to host displaced people using the Shelter platform.
			  </p>
			</div>
			<div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
			  <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
				<img
				  src="https://images.unsplash.com/photo-1547496613-4e19af6736dc?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				  alt="smiling-children"
				  className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-20 object-cover brightness-50 opacity-90"
				/>
			  </div>
			  <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
				<div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
				  <img
					src="https://images.unsplash.com/photo-1613399421095-41f5c68e9f8c?auto=format&fit=crop&q=80&w=2069&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt=""
					className="aspect-[4/3] w-[24rem] brightness-50 max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
				  />
				</div>
				<div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
				  <img
					src="https://images.unsplash.com/photo-1646943698784-5aca9736a7c4?auto=format&fit=crop&q=80&w=1976&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt=""
					className="aspect-[7/5] w-[37rem] max-w-none brightness-50 flex-none rounded-2xl bg-gray-50 object-cover"
				  />
				</div>
				<div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
				  <img
					src="https://images.unsplash.com/photo-1645038590504-ae11d7a6f6ab?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt=""
					className="aspect-[4/3] w-[24rem] brightness-80 opacity-90 max-w-none rounded-2xl bg-gray-50 object-cover"
				  />
				</div>
			  </div>
			</div>
		  </div>
		</div>
		<HostNow />
	  </div>
	)
  }