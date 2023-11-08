import React from "react";

const ContactInfo = () => {
	return (
		<fieldset className=" col-span-full">
			<legend className="text-sm font-semibold leading-6 text-gray-900">
				Preferred Method of Contact
			</legend>
			<div className="mt-6 space-y-6">
				<div className="relative flex gap-x-3">
					<div className="flex h-6 items-center">
						<input
							id="email"
							name="email"
							type="checkbox"
							className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-600"
						/>
					</div>
					<div className="text-sm leading-6">
						<label
							htmlFor="phone"
							className="font-medium text-gray-900"
						>
							Email
						</label>
						<p className="text-gray-500">
							Be contacted by the Shelter team and keep
							communication over Email.
						</p>
					</div>
				</div>
				<div className="relative flex gap-x-3">
					<div className="flex h-6 items-center">
						<input
							id="phone"
							name="phone"
							type="checkbox"
							className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-600"
						/>
					</div>
					<div className="text-sm leading-6">
						<label
							htmlFor="phone"
							className="font-medium text-gray-900"
						>
							Phone Call
						</label>
						<p className="text-gray-500">
							Be contacted by the Shelter team and communicate
							over phone calls. Note: Phone contact may be limited
							by telecomm service in affected regions.
						</p>
					</div>
				</div>
				<div className="relative flex gap-x-3">
					<div className="flex h-6 items-center">
						<input
							id="whatsapp"
							name="whatsapp"
							type="checkbox"
							className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-indigo-600"
						/>
					</div>
					<div className="text-sm leading-6">
						<label
							htmlFor="whatsapp"
							className="font-medium text-gray-900"
						>
							WhatsApp
						</label>
						<p className="text-gray-500">
							Be contacted by the Shelter team and communicate
							over WhatsApp.
						</p>
					</div>
				</div>
			</div>
		</fieldset>
	);
};

export default ContactInfo;
