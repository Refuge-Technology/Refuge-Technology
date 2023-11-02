import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid'
import Title from './title';
import { PlusCircleIcon } from '@heroicons/react/24/outline';

const OurResponse = () => {
  return (
    <div id="response" className="bg-background px-6 pb-20 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700 pb-5">
        <Title className="text-3xl tracking-tight text-white sm:text-4xl"> Our Response to Critical Mass Displacement Events </Title>
		<h1 className="mt-2 text-3xl tracking-tight text-secondary sm:text-4xl pt-5">
			Israel & Palestine
		</h1>
			<p className="mt-6 text-lg leading-8 max-w-prose">
			In the aftermath of the October 7th attacks perpetuated by the Hamas group, an all out conflict has broken out in the already tense region comprising of Palestine and Israel.
			Innocent civilians in both Israel & the Gaza Strip, many of them children, have lost their homes and way of life as a result.
			</p>
        <div className="mt-6 text-lg leading-8 max-w-prose">
          <p>
			The Shelter & Refuge Technology team is actively attempting to work with aid organizations on the ground in this region to provide much needed relief
		  	and support in the form of shelter hosting and software solutions.
          </p>
		  <p className="mt-6">
			To provide much needed help in this region, please consider:
          </p>
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <PlusCircleIcon className="mt-1 h-5 w-5 flex-none text-red-600" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-gray-900">Hosting Displaced People:</strong> Consider hosting displaced people 
				if you are able to and reside in Israel, Egypt, the Gaza Strip, the West Bank, or in the general MENA (Middle East North Africa) area.
              </span>
            </li>
            <li className="flex gap-x-3">
              <PlusCircleIcon className="mt-1 h-5 w-5 flex-none text-red-600" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-gray-900">Donating to Aid Orgs:</strong> Consider donating to aid organizations such as 
				<a href="https://www.israaid.org/" className='text-links'> IsraAid </a> to support Israeli relief efforts and the <a href="https://www.unrwa.org/" className='text-links'> UNRWA </a>
				for relief in the Gaza Strip and the Occupied West Bank. 
              </span>
            </li>
          </ul>
        </div>
      </div>
	  <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700 border-t-2 border-black">
		<h1 className="mt-2 text-3xl tracking-tight text-secondary sm:text-4xl pt-5">
			Sudan
		</h1>
			<p className="mt-6 text-lg leading-8 max-w-prose">
			After nearly six months of fighting between the Sudanese Armed Forces and Rapid Support Forces, an estimated 5.6 million people
			 have been displaced within and outside Sudan.
			</p>
        <div className="mt-6 text-lg leading-8 max-w-prose">
          <p>
			The Shelter & Refuge Technology team is actively attempting to work with aid organizations on the ground in Sudan to provide much needed relief
		  	and support in the form of shelter hosting and software solutions.
          </p>
		  <p className="mt-6">
			To provide much needed help in this region, please consider:
          </p>
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <PlusCircleIcon className="mt-1 h-5 w-5 flex-none text-red-600" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-gray-900">Hosting Displaced People:</strong> Consider hosting displaced Sudanese refugees 
				if you are able to and reside in Sudan, neighboring African countries, the Middle East, or in Western countries where Sudanese asylum seekers may relocate to.
              </span>
            </li>
            <li className="flex gap-x-3">
              <PlusCircleIcon className="mt-1 h-5 w-5 flex-none text-red-600" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-gray-900">Donating to Aid Orgs:</strong> Consider donating to aid organizations such as the
				<a href="https://sdnrlf.com/" className='text-links'> Sudan Relief Fund </a> to support efforts to bring shelter, food, clean water, and other essentials to Sudanese people.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export { OurResponse };