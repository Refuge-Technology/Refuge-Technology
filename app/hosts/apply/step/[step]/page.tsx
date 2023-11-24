import React from "react";
import copy from "./copy.json";
import PersonalInfo from "./@personalInfo/page";
import HomeInfo from "./@homeInfo/page";
import ContactInfo from "./@contactInfo/page";
import Navigation from "./@navigation/page";
import FormButton from "./@formButton/page";

const Step = ({ params }: { params: { step: string } }) => {
	const step = Number(params.step);

	if (isNaN(step) || step < 0 || step > 2) {
		return <div>404</div>;
	}

	const componentMap: { [key: string]: React.ReactNode } = {
		PersonalInfo: <PersonalInfo />,
		HomeInfo: <HomeInfo />,
		ContactInfo: <ContactInfo />,
	};

	return (
		<>
			<Navigation step={step} />
			<div className="flex flex-col w-full grow gap-4 ">
				<div className="grid grid-cols-1 gap-x-8 gap-y-4 p-0 sm:px-10 md:grid-cols-3 ">
					<div className="px-4 sm:px-0 h-fit ">
						<h2 className="text-base font-semibold leading-7 text-secondary">
							{copy[step].title}
						</h2>
						<p className="mt-1 text-sm leading-6 text-links	">
							{copy[step].description}
						</p>
					</div>
					<div className="bg-white justify-self-center h-fit w-full max-w-3xl shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
						<div className="px-4 py-6 sm:p-8">
							{componentMap[copy[step].component]}
						</div>
					</div>
				</div>
				<FormButton step={step} formBasedOnSteps={copy[step].form_id} />
			</div>
		</>
	);
};

export default Step;
