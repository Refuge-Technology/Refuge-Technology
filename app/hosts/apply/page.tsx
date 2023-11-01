"use client";
import React, { useState } from "react";
import Form from "./_components/_multistepform/form";

const HostApplicationForm = () => {
	const [step, setStep] = useState(0);
	return (
		<div className="flex flex-col justify-center w-full grow">
			<Form step={step} />
			<button onClick={() => setStep(step + 1)}>push me</button>
		</div>
	);
};

export default HostApplicationForm;
