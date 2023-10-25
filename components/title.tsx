import React from "react";
import { cn } from "@/utils/cn";

type TProps = React.HTMLAttributes<HTMLHeadingElement> & {
	className?: string;
	children: string;
};

const Title = ({ className, children, ...props }: TProps) => {
	return (
		<h1
			{...props}
			className={cn(
				"w-fit text-center px-1.5 py-[1px] text-2xl tracking-tight text-white bg-tertiary-500 rounded-sm shadow italic",
				className
			)}
		>
			{children}
		</h1>
	);
};

export default Title;
