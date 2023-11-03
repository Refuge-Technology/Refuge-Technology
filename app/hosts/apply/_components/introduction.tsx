import React from "react";
import Title from "@/components/title";

const Introduction = ({
	setIntro,
}: {
	setIntro: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	return (
		<div className="pt-10 space-y-10 md:divide-y divide-links sm:p-8 w-full flex flex-col justify-center items-center grow">
			<div className="mx-auto grid max-w-2xl grid-cols-1 gap-12 lg:mx-0 lg:max-w-none lg:flex-none lg:gap-y-8">
				<Title className="text-4xl sm:text-6xl bg-red-700 italic max-sm:text-center max-sm:py-1 pr-4 py-2">
					Apply to Host
				</Title>
				<p className="mt-6 text-md leading-8 text-justify max-w-prose text-secondary border-none max-sm:justify-center max-sm:px-5 max-sm:py-5">
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
			<button
				className="rounded-md bg-background-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-background-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background-500 capitalize"
				onClick={() => setIntro(false)}
			>
				{"Let's save lives"}
			</button>
		</div>
	);
};

export default Introduction;
