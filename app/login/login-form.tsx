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

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Session } from "@supabase/auth-helpers-nextjs";

const LoginForm = ({ session }: { session: Session | null }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const router = useRouter();
	const supabase = createClientComponentClient();

	const handleSignIn = async () => {
		await supabase.auth.signInWithPassword({
			email,
			password,
		});
		router.refresh();
	};

	return (
		<>
			<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-background">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<h2 className="text-primary text-center font-semibold text-2xl">
						{"<🤍/>"}
					</h2>
					<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
						Sign in to your account
					</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<form
						className="space-y-6"
						action="/auth/login"
						method="POST"
					>
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium leading-6 text-white"
							>
								Email address
							</label>
							<div className="mt-2">
								<input
									id="email"
									name="email"
									type="email"
									autoComplete="email"
									required
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									className="block w-full rounded-sm border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-secondary-700 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div>
							<div className="flex items-center justify-between">
								<label
									htmlFor="password"
									className="block text-sm font-medium leading-6 text-white"
								>
									Password
								</label>
								<div className="text-sm">
									<a
										href="#"
										className="font-semibold text-secondary-600 hover:text-secondary-500"
									>
										Forgot password?
									</a>
								</div>
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
									className="block w-full rounded-sm border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-secondary-700 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div>
							<button
								type="submit"
								className="flex w-full justify-center rounded-sm bg-secondary-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-secondary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-600"
							>
								Sign in
							</button>
						</div>
					</form>

					<p className="flex justify-center mt-10 text-center text-sm gap-2 text-gray-400">
						Not a member?
						<a
							href="/hosts/apply"
							className="font-semibold leading-6 text-secondary-600 hover:text-secondary-500"
						>
							Apply to become a host
						</a>
					</p>
				</div>
			</div>
		</>
	);
};

export { LoginForm };
