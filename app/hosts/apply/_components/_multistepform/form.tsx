import React from "react";
import Step from "./_steps/step-layout";
import PersonalInfo from "./_steps/personal-info";
import HomeInfo from "./_steps/home-info";
import ContactInfo from "./_steps/Contact-info";

const Form = ({step}: {step : number}) => {
	type StepProps = {
		title: string;
		description: string;
	};

	const propsBasedOnStep = (step: number): StepProps => {
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
					title: "Personal Information",
					description:
						"Please provide your personal information as it is displayed on your government issued identification. This data will be securely used for vetting by the Shelter team and displayed to humanitarian workers. Shelter will never share or sell your data with third parties.",
				};
		}
	};

	const childrenBasedOnStep = (step: number) => {
		switch (step) {
			case 0:
				return <PersonalInfo />;
			case 1:
				return <HomeInfo />;
			case 2:
				return <ContactInfo />;
			default:
				return <PersonalInfo />;
		}
	};
	return <Step {...propsBasedOnStep(step)} >{childrenBasedOnStep(step)}</Step>;
};

export default Form;
