"use client";
import React from "react";
import { useFormLoadingStore, useFormStore } from "@/store";
import { useRouter } from "next/navigation";
import { checkStepBasedOnForm } from "@/utils/formStepChecker";

type TProps = {
	step: number;
	formBasedOnSteps: string;
};

const FormButton = ({ step, formBasedOnSteps }: TProps) => {
	const router = useRouter();
	const form = useFormStore((state: any) => state.form);
	const formLoading = useFormLoadingStore((state: any) => state.formLoading);

	const buttonTextBasedOnStep = () => {
		if (step === 2) {
			if (formLoading) {
				return "Submitting...";
			}
			return "Submit";
		}
		if (checkStepBasedOnForm(form) > step) {
			return "update";
		}
		return "next";
	};

	return (
		<div className="flex justify-center items-end pb-2 grow gap-4 ">
			{step > 0 && (
				<button
					className="rounded-md bg-background-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-background-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background-500 capitalize"
					onClick={() => router.push(`/hosts/apply/step/${step - 1}`)}
				>
					back
				</button>
			)}
			<button
				className="rounded-md bg-background-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-background-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background-500 capitalize disabled:bg-gray-600"
				form={formBasedOnSteps}
				disabled={formLoading}
			>
				{buttonTextBasedOnStep()}
			</button>
		</div>
	);
};

export default FormButton;
