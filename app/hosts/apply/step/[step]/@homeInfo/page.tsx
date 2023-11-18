"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { homeInfoSchema, THomeInfoSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormStore } from "@/store";
import { useRouter } from "next/navigation";
import FormInput from "../formInput";
import { cn } from "@/utils/cn";

const HomeInfo = () => {
	const router = useRouter();
	const updateForm = useFormStore((state: any) => state.updateForm);
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		setError,
		clearErrors,
	} = useForm<THomeInfoSchema>({
		resolver: zodResolver(homeInfoSchema),
	});

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
							"block w-full rounded-md border-0 py-1.5 px-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 max-sm:border-2 max-sm:border-gray",
							errors?.home_description?.message
								? "ring-red-400 focus:ring-red-400 bg-red-100"
								: ""
						)}
						defaultValue={""}
						maxLength={2000}
						required
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

			{/* // </Formcard> */}
			{/* </div> */}
			{/* // </div> */}
			{/* <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
			<button
			type="button"
			className="text-sm font-semibold leading-6 text-gray-900"
			>
			Cancel
			</button>
			<button
			type="submit"
			className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
			>
			Save
			</button>
		</div> */}
			{/* // </form> */}
			{/* // </div> */}
		</form>
	);
};

export default HomeInfo;
