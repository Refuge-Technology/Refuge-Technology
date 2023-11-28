"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { homeInfoSchema, THomeInfoSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormStore } from "@/store";
import { useRouter } from "next/navigation";
import { cn } from "@/utils/cn";
import FormInput from "../formInput";

const HomeInfo = () => {
	const numberOfRooms = [
		{ value: 1, label: "1" },
		{ value: 2, label: "2" },
		{ value: 3, label: "3" },
		{ value: 4, label: "4" },
		{ value: 5, label: "5" },
		{ value: 6, label: "6" },
		{ value: 7, label: "7" },
		{ value: 8, label: "8+" },
	];
	const router = useRouter();
	const form = useFormStore((state: any) => state.form);
	const updateForm = useFormStore((state: any) => state.updateForm);
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		watch,
	} = useForm<THomeInfoSchema>({
		resolver: zodResolver(homeInfoSchema),
	});

	useEffect(() => {
		if (!form.first_name) {
			router.push("/hosts/apply/step/0");
		}
	}, [form.first_name, router]);

	const onSubmit = (data: THomeInfoSchema) => {
		if (data.property_address_same_as_address) {
			updateForm({ ...data, property_address: form.street_address });
		} else {
			updateForm(data);
		}
		router.push("/hosts/apply/step/2");
	};

	return (
		<form
			className="grid  max-w-3xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
			id="homeInfo"
			onSubmit={handleSubmit(onSubmit)}
		>
			<div className="sm:col-span-2">
				<label
					htmlFor="number_of_rooms"
					className="block text-sm font-medium leading-6 text-gray-900"
				>
					Number of rooms/beds available
				</label>
				<div className="mt-2">
					<select
						{...register("number_of_rooms")}
						id="number_of_rooms"
						name="number_of_rooms"
						className="block w-1/3 px-4 rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-background-500 max-sm:border-2 max-sm:border-gray sm:max-w-xs sm:text-sm sm:leading-6"
					>
						{numberOfRooms.map((number, index) => (
							<option key={index} value={number.value}>
								{number.label}
							</option>
						))}
					</select>
				</div>
			</div>
			<div className="sm:col-span-3">
				<label
					htmlFor="number_of_occupants"
					className="block text-sm font-medium leading-6 text-gray-900"
				>
					Number of occupants you would be willing to host
				</label>
				<div className="mt-2">
					<select
						{...register("number_of_occupants")}
						id="number_of_occupants"
						name="number_of_occupants"
						className="block w-1/4 px-4 rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-background-500 max-sm:border-2 max-sm:border-gray sm:max-w-xs sm:text-sm sm:leading-6"
					>
						{numberOfRooms.map((number, index) => (
							<option key={index} value={number.value}>
								{number.label}
							</option>
						))}
					</select>
				</div>
			</div>
			<div className="sm:col-span-full">
				<label
					htmlFor="property_address"
					className={cn(
						"block text-sm font-medium leading-6",
						watch("property_address_same_as_address", false)
							? "text-gray-400 line-through"
							: "text-gray-900"
					)}
				>
					Property address
				</label>
				<div className="mt-2">
					<FormInput
						register={{ ...register("property_address") }}
						errors={errors}
						type="text"
						name="property_address"
						id="property_address"
						className=" disabled:line-through disabled:text-gray-400 disabled:bg-gray-100"
						disabled={watch(
							"property_address_same_as_address",
							false
						)}
					/>
					<div className="flex items-center gap-2 mt-2">
						<label
							htmlFor="property_address_same_as_address"
							className=" text-xs text-gray-500"
						>
							Property address same as home address
						</label>
						<input
							{...register("property_address_same_as_address")}
							id="property_address_same_as_address"
							name="property_address_same_as_address"
							type="checkbox"
							className="h-4 w-4 rounded border-gray-300 accent-background-800"
						/>
					</div>
				</div>
			</div>
			<div className="col-span-full">
				<label
					htmlFor="home_description"
					className="block text-sm font-medium leading-6 text-gray-900"
				>
					General description of property
				</label>
				<div className="sm: mt-2">
					{/* <FormInput
						register={{ ...register("about") }}
						errors={errors}
						type="text"
						name="about"
						id="about"
						autoComplete="about"
					/> */}
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
