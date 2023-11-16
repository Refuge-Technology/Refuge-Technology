"use client";
import { useFormStore } from "@/store";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { personalInfoSchema, TPersonalInfoSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";

const FormButton = ({ params }: { params: { step: string } }) => {
	const router = useRouter();
	const step = Number(params.step);
	const form = useFormStore((state: any) => state.form);
	const updateForm = useFormStore((state: any) => state.updateForm);
	
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		setError,
		clearErrors,
	} = useForm<TPersonalInfoSchema>({
		resolver: zodResolver(personalInfoSchema),
	});

	return (
	
		<div className="w-2/3 flex justify-end gap-2">
			{step > 0 && (
				<button
					className="rounded-md bg-background-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-background-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background-500 capitalize"
					onClick={() => router.push(`/hosts/apply/step/${step - 1}`)}
				>
					back
				</button>
			)}
			<button
				className="rounded-md bg-background-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-background-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background-500 capitalize"
				// onClick={() => router.push(`/hosts/apply/step/${step + 1}`)}
				// onClick={() => updateForm({ name: "hi" })}
				form="personalInfo"
				disabled={isSubmitting}
				// onClick={() => console.log(form)}
			>
				{/* {step === 2 ? "submit" : "next"} */}
				{ isSubmitting ? JSON.stringify(form) : "next"}
			</button>
		</div>
	);
};

export default FormButton;
