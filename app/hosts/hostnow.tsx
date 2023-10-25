const HostNow = () => {
	return (
	  <div className="">
		<div className="mx-auto -mt-10 max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
		  <div className="relative isolate overflow-hidden bg-background-600 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
			<h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
			</h2>
			<p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
			 Ready to Apply? Host Now
			</p>
			<div className="mt-10 flex items-center justify-center gap-x-6">
			  <a
				href="/hosts/apply"
				className="rounded-md bg-white px-3.5 py-2.5 text-lg font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
			  >
				Host Now
			  </a>
			</div>
		  </div>
		</div>
	  </div>
	)
  };

  export default HostNow;