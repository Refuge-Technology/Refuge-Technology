import React from "react";
import { HostForm } from "./hostForm";

type TProps = {
	children: React.ReactNode;
	params: { step: string };
	personalInfo: React.ReactNode;
	homeInfo: React.ReactNode;
	contactInfo: React.ReactNode;
	navigation: React.ReactNode;
	formButton: React.ReactNode;
};

type DescriptionProps = {
	title: string;
	description: string;
};

const Step = ({
	params,
	personalInfo,
	homeInfo,
	contactInfo,
	navigation,
	formButton,
}: TProps) => {
	const renderDescriptionBasedOnStep = (step: number): DescriptionProps => {
		switch (step) {
			case 0:
				return {
					title: "Personal Information",
					description:
						"Please provide your personal information as it is displayed on your government issued identification. This data will be securely used for vetting by the Shelter team and displayed to humanitarian workers. Shelter will never share or sell your data with third parties.",
				};
			case 1:
				return {
					title: "Room/Home Information",
					description:
						"Please describe the shelter you are offering in as much detail as possible with supporting photos and media. This information will be used by and displayed to NGOs and their workers to match your host listing with displaced people.",
				};
			case 2:
				return {
					title: "Contact",
					description:
						"Please let us know your preferred contact method. Upon submission, your application will be viewed and you will be contacted by the Shelter team within 1-2 days.",
				};
			default:
				return {
					title: "Server Error",
					description:
						"Could not find the page you were looking for.",
				};
		}
	};

	return (
		<>
			{navigation}
			<div className="grid grid-cols-1 gap-x-8 gap-y-8 p-0 sm:px-10 md:grid-cols-3 grow lg:pt-8">
				<div className="px-4 sm:px-0 h-fit ">
					<h2 className="text-base font-semibold leading-7 text-secondary">
						{
							renderDescriptionBasedOnStep(Number(params.step))
								.title
						}
					</h2>
					<p className="mt-1 text-sm leading-6 text-links	">
						{
							renderDescriptionBasedOnStep(Number(params.step))
								.description
						}
					</p>
				</div>
				{/* <form className="bg-white justify-self-center h-fit w-full max-w-3xl shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
					<div className="px-4 py-6 sm:p-8">
						<div className="grid  max-w-3xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
							{renderPageBasedOnStep(Number(params.step))}
						</div>
					</div>
				</form> */}
				<HostForm
					personalInfo={personalInfo}
					homeInfo={homeInfo}
					contactInfo={contactInfo}
					params={params}
				/>
			</div>
			{formButton}
		</>
	);
};

export default Step;
