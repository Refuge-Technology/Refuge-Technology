"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { contactInfoSchema, TContactInfoSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormStore } from "@/store";
import { useRouter } from "next/navigation";
import FormInput from "../formInput";
import { cn } from "@/utils/cn";

const ContactInfo = () => {
	const router = useRouter();
	const updateForm = useFormStore((state: any) => state.updateForm);
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		setError,
		clearErrors,
	} = useForm<TContactInfoSchema>({
		resolver: zodResolver(contactInfoSchema),
	});

	const onSubmit = (data: TContactInfoSchema) => {
		console.log(data);
		// updateForm(data);
		router.push("/hosts/apply/step/submitted");
	};

	return (
		<form
			className=" col-span-full"
			id="contactInfo"
			onSubmit={handleSubmit(onSubmit)}
		>
			<legend className="text-sm font-semibold leading-6 text-gray-900">
				Preferred Method of Contact
			</legend>
			<div className="mt-6 space-y-6">
				<div className="relative flex gap-x-3">
					<div className="flex h-6 items-center">
						<input
							{...register("contact_by_email")}
							id="contact_by_email"
							name="contact_by_email"
							type="checkbox"
							className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-600"
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
							className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-600"
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
							className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-indigo-600"
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
