/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
"use client";

import { ErrorToast } from "@/components/error-toast";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import {useForm, type FieldValues} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

const signInSchema = z.object({
	email: z.string().email(),
	password: z.string().min(3, "Password must be at least 3 characters long"),
});

type TSignInSchema = z.infer<typeof signInSchema>;

const LoginForm = () => {
	const searchParams = useSearchParams();
	const [errorMessage, setErrorMessage] = useState("");
	const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm<FieldValues>({resolver: zodResolver(signInSchema)});

	useEffect(() => {
		const error = searchParams.get("error") || "";
		setErrorMessage(error);
	}, []);

	const onSubmit = async (data : TSignInSchema) => {
		await fetch("/auth/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});
			console.log(data)
		// console.log("hi");
	}

	return (
		<div className="flex flex-col gap-2">
			{errorMessage && (
				<ErrorToast
					error={errorMessage}
					onClick={() => setErrorMessage("")}
				/>
			)}
			<div className="bg-white px-6 py-12 shadow-md ring-1 ring-gray-900/5 sm:rounded-lg sm:px-12">
				<form className="space-y-6"  onSubmit={handleSubmit(onSubmit)}>
					<div>
						<label
							htmlFor="email"
							className="block text-sm font-medium leading-6 text-background-700"
						>
							Email Address
						</label>
						<div className="mt-2">
							<input
								{...register("email")}
								id="email"
								name="email"
								type="email"
								autoComplete="email"
								required
								className="block w-full rounded-sm border-1.5 border-background-500 bg-white/5 px-1 py-1.5 text-background-700 shadow-sm ring-1 ring-inset ring-background-500/10 focus:ring-2 focus:ring-inset focus:ring-background-500 sm:text-sm sm:leading-6 max-sm:border-2 max-sm:border-gray"
							/>
						</div>
					</div>

					<div>
						<div className="flex items-center justify-between">
							<label
								htmlFor="password"
								className="block text-sm font-medium leading-6 text-background-700"
							>
								Password
							</label>
						</div>
						<div className="mt-2">
							<input
								{...register("password")}
								id="password"
								name="password"
								type="password"
								autoComplete="current-password"
								required
								className="block w-full rounded-sm border-1.5 border-background-500 bg-white/5 px-1 py-1.5 text-background-700 shadow-sm ring-1 ring-inset ring-background-500/10 focus:ring-2 focus:ring-inset focus:ring-background-500-700 sm:text-sm sm:leading-6 max-sm:border-2 max-sm:border-gray"
							/>
						</div>
						<div className="text-sm">
							<a
								href="#"
								className="text-background-700 float-right hover:text-background-800"
							>
								Forgot password?
							</a>
						</div>
					</div>

					<div className="pt-3">
						<button
							disabled={isSubmitting}
							type="submit"
							className="flex w-full justify-center rounded-sm bg-background-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow hover:bg-background-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-600"
						>
							{isSubmitting? "Signing In" : "Sign In"}
						</button>
					</div>
				</form>
			</div>
			<p className="flex justify-center items-center mt-4 text-center text-sm gap-2 text-background-700">
				No NGO Account Yet?
				<a
					href="mailto:refuge_technology@proton.me"
					className="leading-6 hover:text-black underline underline-offset-2"
				>
					Contact Us
				</a>
			</p>
		</div>
	);
};

export { LoginForm };
