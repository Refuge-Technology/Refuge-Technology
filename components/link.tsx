import React from "react";

import { cn } from "@/utils/cn";
import Link, { LinkProps } from "next/link";

type TProps = LinkProps & {
	className?: string;
	children: string;
	href: string;
};

const CustomLink = ({ className, children, href, ...props }: TProps) => {
	return (
		<Link
			{...props}
			href={href}
			className={cn(
				"text-center px-1.5 py-[1px] text-2xl tracking-tight text-white bg-tertiary-500 rounded-sm shadow italic",
				className
			)}
		>
			{children}
		</Link>
	);
};

export {CustomLink};
