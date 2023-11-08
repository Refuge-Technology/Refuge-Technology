"use client";
import { useRouter } from "next/navigation";
import React from "react";

const FormButton = ({ params }: { params: { step: string } }) => {
	const router = useRouter();
	const step = Number(params.step);

	return (
		<div className="w-2/3 flex justify-end gap-2">
			{step > 0 && (
				<button
					className="rounded-md bg-background-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-background-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background-500 capitalize"
					onClick={() => router.push(`/hosts/apply/step/${step - 1}`)}
				>
					back
				</button>
			)}
			<button
				className="rounded-md bg-background-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-background-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background-500 capitalize"
				onClick={() => router.push(`/hosts/apply/step/${step + 1}`)}
			>
				{step === 2 ? "submit" : "next"}
			</button>
		</div>
	);
};

export default FormButton;
