"use client";
import React, { useState } from "react";
import Form from "./_components/_multistepform/form";
import Navigation from "./_components/navigation";

const HostApplicationForm = () => {
	const [step, setStep] = useState(0);

	const incrementStep = () => {
		if (step < 2) {
			setStep(step + 1);
		}
	};
	const decrementStep = () => {
		if (step > 0) {
			setStep(step - 1);
		}
	};
	return (
		<div className="flex flex-col items-center gap-4  justify-between w-full grow py-6 lg:py-4 ">
			<Navigation step={step}/>
			<Form step={step} />
			<div className="w-2/3 flex justify-end gap-2">
				{step > 0 && (
					<button
						className="rounded-md bg-background-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-background-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background-500 capitalize"
						onClick={() => decrementStep()}
					>
						back
					</button>
				)}
				<button
					className="rounded-md bg-background-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-background-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background-500 capitalize"
					onClick={() => incrementStep()}
				>
					{step === 2 ? "submit" : "next"}
				</button>
			</div>
		</div>
	);
};

export default HostApplicationForm;
