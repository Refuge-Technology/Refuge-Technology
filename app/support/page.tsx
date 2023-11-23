import Title from "@/components/title";
import React from "react";
import Image from "next/image";
import QR from "/public/assets/bmc_qr.png";

const Resources = () => {
	return <div className="pt-10 max-sm:py-5 space-y-10 md:divide-y divide-links sm:p-8 w-full flex flex-col justify-center items-center grow">
		<Title className="px-2 py-1.5 text-4xl flex sm:text-6xl">
			Support Shelter
		</Title>
		<p className="mt-6 max-sm:mt-2 text-md leading-8 text-justify max-w-prose text-secondary border-none max-sm:justify-center max-sm:px-5 max-sm:py-5">
					Shelter is an application managed by <a className="text-links underline" href="https://refugetechnology.org" target="_blank"> Refuge Technology </a> - a non-profit collective of 
					engineers, developers, and volunteers. To run Shelter, we need to pay costs in the form of hosting, data-related costs, and verification costs 
					as well. If you are interested in supporting Shelter directly, any donations would greatly help in keeping the application running. All donations 
					are strictly used for the application and its operation. 
		</p>
		<p className="mt-6 max-sm:mt-2 text-md leading-8 text-justify max-w-prose text-secondary border-none max-sm:justify-center max-sm:px-5 max-sm:py-5">
					Please consider donating by buying us a coffee <a className="text-links underline" href="https://www.buymeacoffee.com/refugetechnology" target="_blank"> here </a> <br></br>
					Or by scanning the QR Code below:
		</p>
		<Image alt="qr code" src={QR} height={200}/>
	</div>;
};

export default Resources;
