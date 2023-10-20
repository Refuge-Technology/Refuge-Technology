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
import { useState } from "react";

const LoginForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<>
			<div className="flex h-full flex-1 flex-col justify-center align-center px-6 py-12 lg:px-8 ">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<h2 className="text-primary max-w-sm text-center font-semibold text-2xl">
						{"<🤍/>"}
					</h2>
					<h2 className="mt-10 text-center text-2xl leading-9 tracking-tight text-primary">
						NGO Login
					</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
						<form
							className="space-y-6"
							action="/auth/login"
							method="POST"
						>
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
										value={email}
										onChange={(e) =>
											setEmail(e.target.value)
										}
										className="block w-full rounded-sm border-1.5 border-background-600 bg-white/5 py-1.5 text-background-600 shadow-sm ring-1 ring-inset ring-background-600/10 focus:ring-2 focus:ring-inset focus:ring-background-600-700 sm:text-sm sm:leading-6"
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
										value={password}
										onChange={(e) =>
											setPassword(e.target.value)
										}
										required
										className="block w-full rounded-sm border-1.5 border-background-600 bg-white/5 py-1.5 text-background-600 shadow-sm ring-1 ring-inset ring-background-600/10 focus:ring-2 focus:ring-inset focus:ring-background-600-700 sm:text-sm sm:leading-6"
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
			</div>
		</>
	);
};

export { LoginForm };
