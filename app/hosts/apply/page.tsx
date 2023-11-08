"use client";
import React, { useState } from "react";
// import Form from "./_components/_multistepform/form";
// import Navigation from "./_components/navigation";
// import Introduction from "./_components/introduction";
import Title from "@/components/title";
import Link from "next/link";

const HostApplicationForm = () => {
	// const [intro, setIntro] = useState(true);
	// const [step, setStep] = useState(0);

	// const incrementStep = () => {
	// 	if (step < 2) {
	// 		setStep(step + 1);
	// 	}
	// };
	// const decrementStep = () => {
	// 	if (step > 0) {
	// 		setStep(step - 1);
	// 	}
	// };

	// if (intro) {
	// 	return <Introduction setIntro={setIntro}/>;
	// } else {
	// 	return (

	// 		<div className="flex flex-col items-center gap-4  justify-between w-full grow py-6 lg:py-4 ">
	// 			<Navigation step={step} />
	// 			<Form step={step} />
	// 			<div className="w-2/3 flex justify-end gap-2">
	// 				{step > 0 && (
	// 					<button
	// 					className="rounded-md bg-background-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-background-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background-500 capitalize"
	// 					onClick={() => decrementStep()}
	// 					>
	// 						back
	// 					</button>
	// 				)}
	// 				<button
	// 					className="rounded-md bg-background-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-background-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background-500 capitalize"
	// 					onClick={() => incrementStep()}
	// 					>
	// 					{step === 2 ? "submit" : "next"}
	// 				</button>
	// 			</div>
	// 		</div>
	// 	)
	// }

	return (
		<div className="pt-10 max-sm:py-5 space-y-10 md:divide-y divide-links sm:p-8 w-full flex flex-col justify-center items-center grow">
			<div className="mx-auto grid max-w-2xl grid-cols-1 gap-12 lg:mx-0 lg:max-w-none lg:flex-none lg:gap-y-8 max-sm:pt-5">
				<Title className="text-4xl sm:text-6xl bg-red-700 italic max-sm:justify-center">
					Apply to Host
				</Title>
				<p className="mt-6 max-sm:mt-2 text-md leading-8 text-justify max-w-prose text-secondary border-none max-sm:justify-center max-sm:px-5 max-sm:py-5">
					Apply and register interest to be one of the first hosts on
					the Shelter platform. By applying you are expressing your
					interest to host displaced people in your home. Your
					application will be reviewed and you will be contacted by
					the
					<em> Shelter </em> team to proceed to the next steps with
					guidance from humanitarian NGOs (Non Government
					Organizations) and aid groups. The application reviewal
					process typically takes 1-2 days depending on the volume of
					applications and demand for shelter.
				</p>
			</div>
			<Link
				className="rounded-md bg-background-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-background-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background-500 capitalize "
				href="/hosts/apply/step/0"
			>
				{"Let's save lives"}
			</Link>
		</div>
	);
};

export default HostApplicationForm;
