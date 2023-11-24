import React from 'react'
import Title
 from '@/components/title'
const Submitted = () => {
  return (
	<div className="pt-5 max-sm:py-5 space-y-10 md:divide-y divide-links sm:py-32 w-full flex flex-col items-center grow">
    <Title className="px-2 py-1.5 text-4xl flex sm:text-6xl">
			Submitted
		</Title>
    <p className="mt-2 max-sm:mt-2 text-md text-center leading-8 max-w-prose text-secondary border-none max-sm:justify-center max-sm:px-5 max-sm:py-5">
				Thank you for applying to host. <br/> The Shelter team will contact you using your preferred contact method within <br /> 1-3 days.
		</p>
  </div>
  )
}

export default Submitted