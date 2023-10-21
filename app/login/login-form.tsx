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

const LoginForm = () => {
	const searchParams = useSearchParams();
	const [errorMessage, setErrorMessage] = useState("");

	return (
		<>
			<div className="flex bg-un-image bg-no-repeat bg-30 bg-left-bottom h-full flex-1 flex-col justify-center align-center px-6 py-12 lg:px-8 ">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<h2 className="text-background-500 max-w-sm text-center font-semibold text-2xl italic">
						{"Shelter"}
					</h2>
					<h2 className="mt-5 text-center text-2xl leading-9 tracking-tight text-secondary">
						NGO & Humanitarian Worker Login
					</h2>
					<p className="text-sm text-background-600 text-center mt-5">
						This login is reserved for NGO & Humanitarian workers. Host login is coming soon.
					</p>
				</div>
        
	useEffect(() => {
		const error = searchParams.get("error") || "";
		setErrorMessage(error);
	}, []);
        
	return (
		<div className="flex flex-col gap-2">
			{errorMessage && (
				<ErrorToast
					error={errorMessage}
					onClick={() => setErrorMessage("")}
				/>
			)}
			<div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
				<form className="space-y-6" action="/auth/login" method="POST">
					<div>
						<label
							htmlFor="email"
							className="block text-sm font-medium leading-6 text-background-600"
						>
							Email Address
						</label>
						<div className="mt-2">
							<input
								id="email"
								name="email"
								type="email"
								autoComplete="email"
								required
								className="block w-full rounded-sm border-1.5 border-background-600 bg-white/5 px-1 py-1.5 text-background-600 shadow-sm ring-1 ring-inset ring-background-600/10 focus:ring-2 focus:ring-inset focus:ring-background-600-700 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>

					<div>
						<div className="flex items-center justify-between">
							<label
								htmlFor="password"
								className="block text-sm font-medium leading-6 text-background-600"
							>
								Password
							</label>
						</div>
						<div className="mt-2">
							<input
								id="password"
								name="password"
								type="password"
								autoComplete="current-password"
								required
								className="block w-full rounded-sm border-1.5 border-background-600 bg-white/5 px-1 py-1.5 text-background-600 shadow-sm ring-1 ring-inset ring-background-600/10 focus:ring-2 focus:ring-inset focus:ring-background-600-700 sm:text-sm sm:leading-6"
							/>
						</div>
						<div className="text-sm">
							<a
								href="#"
								className="text-background-600 float-right hover:text-black-500"
							>
								Forgot password?
							</a>
						</div>
					</div>
					<p className="flex justify-center items-center mt-10 text-center text-sm gap-2 text-gray-600">
						No NGO Account Yet?
						<a
							href="mailto:refuge_technology@proton.me"
							className="leading-6 text-links hover:text-links"
					<div className="pt-3">
						<button
							type="submit"
							className="flex w-full justify-center rounded-sm bg-background-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-600"
						>
							Sign in
						</button>
					</div>
				</form>
			</div>
			<p className="flex justify-center items-center mt-10 text-center text-sm gap-2 text-gray-400">
				No NGO Account Yet?
				<a
					href="mailto:refuge_technology@proton.me"
					className="leading-6 text-primary hover:text-links"
				>
					Contact Us
				</a>
			</p>
		</div>
	);
};

export { LoginForm };
