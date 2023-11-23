"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { homeInfoSchema, THomeInfoSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormStore } from "@/store";
import { useRouter } from "next/navigation";
import { cn } from "@/utils/cn";

const HomeInfo = () => {
	const router = useRouter();
	const form = useFormStore((state: any) => state.form);
	const updateForm = useFormStore((state: any) => state.updateForm);
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<THomeInfoSchema>({
		resolver: zodResolver(homeInfoSchema),
	});

	useEffect(() => {
		if (!form.first_name) {
			router.push("/hosts/apply/step/0");
		}
	}, [form.first_name, router]);

	const onSubmit = (data: THomeInfoSchema) => {
		updateForm(data);
		router.push("/hosts/apply/step/2");
	};

	return (
		<form
			className="grid  max-w-3xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
			id="homeInfo"
			onSubmit={handleSubmit(onSubmit)}
		>
			<div className="col-span-full">
				<label
					htmlFor="about"
					className="block text-sm font-medium leading-6 text-gray-900"
				>
					About
				</label>
				<div className="sm: mt-2">
					<textarea
						{...register("home_description")}
						id="home_description"
						name="home_description"
						rows={8}
						className={cn(
							"block w-full rounded-md border-0 py-1.5 px-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-background-600 outline-none sm:text-sm sm:leading-6 max-sm:border-2 max-sm:border-gray",
							errors?.home_description?.message
								? "ring-red-400 focus:ring-red-400 bg-red-100"
								: ""
						)}
						defaultValue={""}
						maxLength={2000}
					/>
				</div>
				<p className="mt-3 text-sm leading-6 text-gray-600">
					Please describe the home/shelter/room in detail for aid
					worker review.
				</p>
				<p className="mt-3 text-sm leading-6 text-gray-600">
					Max length: 2000 characters.
				</p>
			</div>
		</form>
	);
};

export default HomeInfo;
