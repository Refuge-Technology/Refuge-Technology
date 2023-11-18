import { cn } from "@/utils/cn";
import React, { InputHTMLAttributes } from "react";
// import { FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form";

//	TODO : FIX TYPING

// type TProps = {
// 	register: any;
// 	className?: string;
// 	props: InputHTMLAttributes<HTMLInputElement>;
// };

const FormInput = ({ register, className, errors, id, ...props }: any) => {
	return (
		<input
			{...register}
			{...props}
			id={id}
			className={cn(
				"block w-full rounded-md border-0 p-5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-background-600 outline-none max-sm:border-2 max-sm:border-gray sm:text-sm sm:leading-6",
				errors?.[id]?.message ? "ring-red-400 focus:ring-red-400 bg-red-100" : "",
				className
			)}
		/>
	);
};

export default FormInput;
