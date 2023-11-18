import React from "react";
import { HostForm } from "./hostForm";
import FormButton from "./@formButton/page";
import PersonalInfo from "./@personalInfo/page";
import HomeInfo from "./@homeInfo/page";
import ContactInfo from "./@contactInfo/page";

type TProps = {
	params: { step: string };
	navigation: React.ReactNode;
};

type StepProps = {
	title: string;
	form_id: string;
	description: string;
	component: React.ReactNode;
};

const Step = ({ params, navigation }: TProps) => {
	const step = Number(params.step);
	const renderPropsBasedOnStep = (step: number): StepProps => {
		switch (step) {
			case 0:
				return {
					title: "Personal Information",
					form_id: "personalInfo",
					description:
						"Please provide your personal information as it is displayed on your government issued identification. This data will be securely used for vetting by the Shelter team and displayed to humanitarian workers. Shelter will never share or sell your data with third parties.",
					component: <PersonalInfo />,
				};
			case 1:
				return {
					title: "Room/Home Information",
					form_id: "homeInfo",
					description:
						"Please describe the shelter you are offering in as much detail as possible with supporting photos and media. This information will be used by and displayed to NGOs and their workers to match your host listing with displaced people.",
					component: <HomeInfo />,
				};
			case 2:
				return {
					title: "Contact",
					form_id: "contactInfo",
					description:
						"Please let us know your preferred contact method. Upon submission, your application will be viewed and you will be contacted by the Shelter team within 1-2 days.",
					component: <ContactInfo />,
				};
			default:
				return {
					title: "Server Error",
					form_id: "serverError",
					description:
						"Could not find the page you were looking for.",
					component: <div>404 page not found</div>,
				};
		}
	};

	return (
		<>
			{navigation}
			<div className="flex flex-col w-full grow gap-4 ">
				<div className="grid grid-cols-1 gap-x-8 gap-y-4 p-0 sm:px-10 md:grid-cols-3 ">
					<div className="px-4 sm:px-0 h-fit ">
						<h2 className="text-base font-semibold leading-7 text-secondary">
							{renderPropsBasedOnStep(step).title}
						</h2>
						<p className="mt-1 text-sm leading-6 text-links	">
							{renderPropsBasedOnStep(step).description}
						</p>
					</div>
					<HostForm
						renderComponentBasedOnStep={
							renderPropsBasedOnStep(step).component
						}
						params={params}
					/>
				</div>
				<FormButton
					params={params}
					formBasedOnSteps={renderPropsBasedOnStep(step).form_id}
				/>
			</div>
		</>
	);
};

export default Step;
