"use client";
import React, { useEffect } from "react";
import { FieldErrors, useForm } from "react-hook-form";
import { contactInfoSchema, TContactInfoSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormLoadingStore, useFormStore } from "@/store";
import { useRouter } from "next/navigation";

const listOfLanguages = ["English", "French", "Spanish", "Arabic"];

type customErrors = FieldErrors<TContactInfoSchema> & {
	contact_method?: {
		message: string;
	};
};

const ContactInfo = () => {
	const router = useRouter();
	const form = useFormStore((state: any) => state.form);
	const setFormLoading = useFormLoadingStore(
		(state: any) => state.setFormLoading
	);
	const resetForm = useFormStore((state: any) => state.resetForm);

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<TContactInfoSchema>({
		resolver: zodResolver(contactInfoSchema),
	});

	useEffect(() => {
		setFormLoading(isSubmitting);
	}, [setFormLoading, isSubmitting]);

	useEffect(() => {
		if (!form.first_name) {
			router.push("/hosts/apply/step/0");
		} else if (!form.home_description) {
			router.push("/hosts/apply/step/1");
		}
	}, []);

	const onSubmit = async (data: TContactInfoSchema) => {
		const fullForm = { ...form, ...data };
		const response = await fetch("/routes/form-submission", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(fullForm),
		});
		const responseData = await response.json();
		resetForm();

		if (!response.ok) {
			alert("Something went wrong");
			return;
		}
		if (responseData.status != 200) {
			alert(`Server Error :  ${responseData.error}`);
		}
		router.push(responseData.redirect);
	};

	return (
		<form
			className=" col-span-full"
			id="contactInfo"
			onSubmit={handleSubmit(onSubmit)}
		>
			<div className="sm:col-span-3">
				<label
					htmlFor="number_of_occupants"
					className="block text-sm font-semibold leading-6 text-gray-900"
				>
					Preferred Language
				</label>
				<div className="mt-2">
					<select
						{...register("preferred_language")}
						id="preferred_language"
						name="preferred_language"
						className="block w-1/5 px-4 rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-background-500 max-sm:border-2 max-sm:border-gray sm:max-w-xs sm:text-sm sm:leading-6"
					>
						{listOfLanguages.map((language, index) => (
							<option key={index} value={language}>
								{language}
							</option>
						))}
					</select>
				</div>
			</div>
			<legend className="text-sm mt-4 font-semibold leading-6 text-gray-900">
				Preferred Method of Contact
			</legend>
			{errors && (
				<h2 className="text-red-600">
					{(errors as customErrors)?.contact_method?.message}
				</h2>
			)}
			<div className="mt-6 space-y-6">
				<div className="relative flex gap-x-3">
					<div className="flex h-6 items-center">
						<input
							{...register("contact_by_email")}
							id="contact_by_email"
							name="contact_by_email"
							type="checkbox"
							className="h-4 w-4 rounded border-gray-300 accent-background-800"
						/>
					</div>
					<div className="text-sm leading-6">
						<label
							htmlFor="contact_by_email"
							className="font-medium text-gray-900"
						>
							Email
						</label>
						<p className="text-gray-500">
							Be contacted by the Shelter team and keep
							communication over Email.
						</p>
					</div>
				</div>
				<div className="relative flex gap-x-3">
					<div className="flex h-6 items-center">
						<input
							{...register("contact_by_phone")}
							id="contact_by_phone"
							name="contact_by_phone"
							type="checkbox"
							className="h-4 w-4 rounded accent-background-800 border-2 border-red-300"
						/>
					</div>
					<div className="text-sm leading-6">
						<label
							htmlFor="contact_by_phone"
							className="font-medium text-gray-900"
						>
							Phone Call
						</label>
						<p className="text-gray-500">
							Be contacted by the Shelter team and communicate
							over phone calls. Note: Phone contact may be limited
							by telecomm service in affected regions.
						</p>
					</div>
				</div>
				<div className="relative flex gap-x-3">
					<div className="flex h-6 items-center">
						<input
							{...register("contact_by_whatsApp")}
							id="contact_by_whatsApp"
							name="contact_by_whatsApp"
							type="checkbox"
							className="h-4 w-4 rounded border-gray-300  accent-background-800"
						/>
					</div>
					<div className="text-sm leading-6">
						<label
							htmlFor="contact_by_whatsApp"
							className="font-medium text-gray-900"
						>
							WhatsApp
						</label>
						<p className="text-gray-500">
							Be contacted by the Shelter team and communicate
							over WhatsApp.
						</p>
					</div>
				</div>
			</div>
		</form>
	);
};

export default ContactInfo;
