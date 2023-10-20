import React from "react";

const Formcard = ({ children }: React.PropsWithChildren) => {
	return (
		<form className="bg-white justify-self-center w-full max-w-3xl shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
			<div className="px-4 py-6 sm:p-8">
				<div className="grid  max-w-3xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
					{children}
				</div>
			</div>
		</form>
	);
};

export default Formcard;
