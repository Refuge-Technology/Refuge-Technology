import React from 'react'
import Title
 from '@/components/title'
import Link from 'next/link'

export default function Submitted() {
	return (
	  <>
		<main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
		  <div className=" flex flex-col items-center text-center">
			<Title className=" px-2 py-1.5 mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
				Submitted
			</Title>
			<p className="mt-6 text-base leading-7 text-gray-500">Thank you for applying to host. <br/> The Take Refuge team will contact you using your preferred contact method within <br /> 1-3 days.</p>
			<div className="mt-10 flex items-center justify-center gap-x-6">
			  <Link
				href="/"
				className="rounded-md bg-background-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-background-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background-500"
			  >
				Go back home
			  </Link>
			</div>
		  </div>
		</main>
	  </>
	)
  }
  