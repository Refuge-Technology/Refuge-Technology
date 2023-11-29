"use client";
import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { mailingListSchema, TMailingListSchema } from "@/lib/types";
import toast, { Toaster } from "react-hot-toast";

const MailingList = () => {
	const [subscribed, setSubscribed] = useState(false)
	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<TMailingListSchema>({
		resolver: zodResolver(mailingListSchema),
	});


	const onSubmit = async (data: TMailingListSchema) => {
		
		const response = await fetch("/routes/email-signup", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(data),
				});
				const responseData = await response.json();
				if (responseData.status == 200) {
					toast.success("Subscribed!");
					setSubscribed(true)
				}
				if (responseData.status == 23505) {
					toast.error("Email already subscribed");
				}
				else if (!response.ok) {
					toast.error("Something went wrong");
				}

	}

	return (
		<form
			className="mt-6 flex max-w-md gap-x-4"
			onSubmit={handleSubmit(onSubmit)}
		>
			<Toaster position="bottom-right"/>
			<label htmlFor="email" className="sr-only">
				Email address
			</label>
			<input
				{...register("email")}
				id="email"
				name="email"
				type="email"
				autoComplete="email"
				className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-background-600 sm:text-sm sm:leading-6"
				placeholder="Enter your email"
			/>
			<button
				disabled={isSubmitting || subscribed}
				type="submit"
				className="flex-none rounded-md bg-background-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-background-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background-500 disabled:bg-background-300"
			>
				{isSubmitting ? "Subscribing" : "Subscribe"}
			</button>
		</form>
	);
};

export default MailingList;
