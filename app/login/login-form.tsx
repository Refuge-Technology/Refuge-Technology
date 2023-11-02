"use client";

import { ErrorToast } from "@/components/error-toast";
import { useForm } from "react-hook-form";
import { signInSchema, TSignInSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

const LoginForm = () => {
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		setError,
		clearErrors,
	} = useForm<TSignInSchema>({ resolver: zodResolver(signInSchema) });

	const onSubmit = async (data: TSignInSchema) => {
		const response = await fetch("/auth/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		const responseData = await response.json();
		if (responseData.status == 200) {
			router.refresh();
		}

		if (!response.ok) {
			alert("Login Failed");
			return;
		}
		if (responseData.errors) {
			const errors = responseData.errors;
			setError("root.serverError", {
				type: "server",
				message: errors,
			});
		}
	};

	return (
		<div className="flex flex-col gap-2">
			{errors?.root?.serverError?.type === "server" && (
				<ErrorToast
					error={errors.root.serverError.message}
					onClick={() => clearErrors()}
				/>
			)}

			<div className="bg-white px-6 py-12 shadow-md ring-1 ring-gray-900/5 sm:rounded-lg sm:px-12">
				<form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
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
								href="mailto:refuge_technology@proton.me?subject=Forgot Password"
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
							{isSubmitting ? "Signing In" : "Sign In"}
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
