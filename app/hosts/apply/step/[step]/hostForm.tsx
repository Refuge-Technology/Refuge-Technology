
import React from "react";
import PersonalInfo from "./@personalInfo/page";
import HomeInfo  from "./@homeInfo/page";

type TProps = {
	params: { step: string };
	personalInfo: React.ReactNode;
	homeInfo: React.ReactNode;
	contactInfo: React.ReactNode;
};

const HostForm = ({ personalInfo, homeInfo, contactInfo, params }: TProps) => {

	const renderPageBasedOnStep = (step: number): React.ReactNode => {
		switch (step) {
			case 0:
				return <PersonalInfo />;
			case 1:
				return <HomeInfo />;
			case 2:
				return contactInfo;
			default:
				return <div className=" col-span-2">404 page not found</div>;
		}
	};


	return (
		<div
			className="bg-white justify-self-center h-fit w-full max-w-3xl shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2"
		>
			<div className="px-4 py-6 sm:p-8">
				{/* <div className="grid  max-w-3xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"> */}
					{renderPageBasedOnStep(Number(params.step))}
				{/* </div> */}
			</div>
		</div>
	);
};

export { HostForm };
