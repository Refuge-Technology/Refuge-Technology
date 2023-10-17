import Image from "next/image";
import Link from "next/link";

const links = [
	{ name: 'Why Host?', href: '#' },
	{ name: 'Refugee Resources', href: '#' },
	{ name: 'Donate to Aid Orgs', href: '#' },
	{ name: 'Host Now', href: '#' },
  ]
  
  export default function Home() {
	return (
	  <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
		<img
		  src="https://images.unsplash.com/photo-1660479643704-2acf8f98d8c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
		  alt=""
		  className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center filter opacity-5"
		/>
			<div
			className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl opacity-10"
			aria-hidden="true"
			>
			</div>
		<div
		  className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
		  aria-hidden="true"
		>
		  <div
			className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#fc4694] to-[#776fff] opacity-20"
			style={{
			  clipPath:
				'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
			}}
		  />
		</div>
		<div className="mx-auto max-w-7xl px-6 lg:px-8">
		  <div className="mx-auto lg:mx-0">
			<h2 className="text-4xl font-bold text-white sm:text-6xl bg-background italic"> Refugees Need Your Help </h2>
			<p className="mt-6 text-lg leading-8 text-primary">
			  Displaced people in Palestine, Israel, Morocco, Libya, and Afghanistan desperately need temporary housing. 
			</p>
			<p className="mt-6 text-lg leading-8 text-primary">
			If you reside within these countries, please consider hosting displaced people in your home.
			</p>
		  </div>
		  <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
			<div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10 pt-20">
			  {links.map((link) => (
				<a key={link.name} href={link.href}>
				  {link.name} <span aria-hidden="true">&rarr;</span>
				</a>
			  ))}
			</div>
		  </div>
		</div>
	  </div>
	)
  }