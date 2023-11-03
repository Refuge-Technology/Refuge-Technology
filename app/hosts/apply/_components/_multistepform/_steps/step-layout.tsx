import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { personalInfoSchema, TPersonalInfoSchema } from "@/lib/types";

type TProps = {
	title: string;
	description: string;
	children: React.ReactNode;
};

const Step = ({ title, description, children }: TProps) => {
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
		<div className="grid grid-cols-1 gap-x-8 gap-y-8 p-0 sm:px-10 md:grid-cols-3 grow lg:pt-8">
			<div className="px-4 sm:px-0 h-fit ">
				<h2 className="text-base font-semibold leading-7 text-secondary">
					{title}
				</h2>
				<p className="mt-1 text-sm leading-6 text-links	">
					{description}
				</p>
			</div>
			<form className="bg-white justify-self-center h-fit w-full max-w-3xl shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
				<div className="px-4 py-6 sm:p-8">
					<div className="grid  max-w-3xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
						{children}
					</div>
				</div>
			</form>
		</div>
	);
};

export default Step;
