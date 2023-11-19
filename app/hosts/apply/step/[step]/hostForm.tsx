import React from "react";

type TProps = {
	renderComponentBasedOnStep: React.ReactNode;
};

const HostForm = ({ renderComponentBasedOnStep }: TProps) => {
	return (
		<div className="bg-white justify-self-center h-fit w-full max-w-3xl shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
			<div className="px-4 py-6 sm:p-8">{renderComponentBasedOnStep}</div>
		</div>
	);
};

export { HostForm };
