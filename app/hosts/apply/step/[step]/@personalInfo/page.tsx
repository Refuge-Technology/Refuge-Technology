"use client";
import React from "react";
import countries from "@/assets/json-objects/countries.json";

import { useForm } from "react-hook-form";
import { personalInfoSchema, TPersonalInfoSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormStore } from "@/store";
import { useRouter } from "next/navigation";
import FormInput from "../formInput";
import PhoneFormInput from "../phone-input";

const PersonalInfo = () => {
	const router = useRouter();
	const updateForm = useFormStore((state: any) => state.updateForm);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<TPersonalInfoSchema>({
		resolver: zodResolver(personalInfoSchema),
	});

	const onSubmit = (data: TPersonalInfoSchema) => {
		updateForm(data);
		router.push("/hosts/apply/step/1");
	};

	return (
		<form
			className="grid  max-w-3xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
			id="personalInfo"
			onSubmit={handleSubmit(onSubmit)}
		>
			<div className="sm:col-span-3">
				<label
					htmlFor="first-name"
					className="block text-sm font-medium leading-6 text-gray-900"
				>
					First name
				</label>
				<div className="mt-2">
					<FormInput
						register={{ ...register("first_name") }}
						errors={errors}
						type="text"
						name="first_name"
						id="first_name"
						autoComplete="given-name"
					/>
				</div>
			</div>

			<div className="sm:col-span-3">
				<label
					htmlFor="last-name"
					className="block text-sm font-medium leading-6 text-gray-900"
				>
					Last name
				</label>
				<div className="mt-2">
					<FormInput
						register={{ ...register("last_name") }}
						errors={errors}
						type="text"
						name="last_name"
						id="last_name"
						autoComplete="family-name"
					/>
				</div>
			</div>

			<div className="sm:col-span-4">
				<label
					htmlFor="email"
					className="block text-sm font-medium leading-6 text-gray-900"
				>
					Email address
				</label>
				<div className="mt-2">
					<FormInput
						register={{ ...register("email") }}
						errors={errors}
						id="email"
						type="email"
						name="email"
						autoComplete="email"
					/>
				</div>
			</div>

			<div className="sm:col-span-3">
				<label
					htmlFor="phone-number"
					className="block text-sm font-medium leading-6 text-gray-900"
				>
					Phone Number
				</label>
				<div className="mt-2">
					<PhoneFormInput
						register={{ ...register("phone_code") }}
						id="phone_code"
						type="phone_code"
						name="phone_code"
					>
						<FormInput
							register={{ ...register("phone_number") }}
							errors={errors}
							type="number"
							name="phone_number"
							id="phone_number"
							autoComplete="tel-national"
							className="w-full pl-2 py-1.5 rounded-l-none"
							placeholder="(555) 987-6543"
						/>
					</PhoneFormInput>
				</div>
			</div>

			<div className="sm:col-span-2">
				<label
					htmlFor="country"
					className="block text-sm font-medium leading-6 text-gray-900"
				>
					Country
				</label>
				<div className="mt-2">
					<select
						{...register("country")}
						id="country"
						name="country"
						autoComplete="country-name"
						className="block w-full px-4 rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-background-500 max-sm:border-2 max-sm:border-gray sm:max-w-xs sm:text-sm sm:leading-6"
					>
						{countries
							.sort((a, b) => (a.name > b.name ? 1 : -1))
							.map((country, index) => (
								<option key={index} value={country.name}>
									{country.name}
								</option>
							))}
					</select>
				</div>
			</div>
			

			<div className="col-span-full">
				<label
					htmlFor="street-address"
					className="block text-sm font-medium leading-6 text-gray-900"
				>
					Street address
				</label>
				<div className="mt-2">
					<FormInput
						register={{ ...register("street_address") }}
						errors={errors}
						type="text"
						name="street_address"
						id="street_address"
						autoComplete="street-address"
					/>
				</div>
			</div>

			<div className="sm:col-span-2 sm:col-start-1">
				<label
					htmlFor="city"
					className="block text-sm font-medium leading-6 text-gray-900"
				>
					City
				</label>
				<div className="mt-2">
					<FormInput
						register={{ ...register("city") }}
						errors={errors}
						type="text"
						name="city"
						id="city"
						autoComplete="address-level2"
					/>
				</div>
			</div>

			<div className="sm:col-span-2">
				<label
					htmlFor="region"
					className="block text-sm font-medium leading-6 text-gray-900"
				>
					State / Province
				</label>
				<div className="mt-2">
					<FormInput
						register={{ ...register("state") }}
						errors={errors}
						type="text"
						name="state"
						id="state"
						autoComplete="address-level1"
					/>
				</div>
			</div>

			<div className="sm:col-span-2">
				<label
					htmlFor="postal-code"
					className="block text-sm font-medium leading-6 text-gray-900"
				>
					ZIP / Postal code
				</label>
				<div className="mt-2">
					<FormInput
						register={{ ...register("zip") }}
						errors={errors}
						type="text"
						name="zip"
						id="zip"
						autoComplete="postal-code"
					/>
				</div>
			</div>
		</form>
	);
};

export default PersonalInfo;
