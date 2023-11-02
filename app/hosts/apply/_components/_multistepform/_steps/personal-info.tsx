import React from "react";
import { UserCircleIcon } from "@heroicons/react/20/solid";
import countries from "@/assets/json-objects/countries.json";

const PersonalInfo = () => {
	return (
		<>
			<div className="sm:col-span-3">
				<label
					htmlFor="first-name"
					className="block text-sm font-medium leading-6 text-gray-900"
				>
					First name
				</label>
				<div className="mt-2">
					<input
						type="text"
						name="first-name"
						required={true}
						id="first-name"
						autoComplete="given-name"
						className="block w-full rounded-md border-0 p-5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 max-sm:border-2 max-sm:border-gray sm:text-sm sm:leading-6"
					/>
				</div>
			</div>

			<div className="sm:col-span-3">
				<label
					htmlFor="last-name"
					className="block text-sm font-medium leading-6 text-gray-900"
				>
					Last name
				</label>
				<div className="mt-2">
					<input
						type="text"
						name="last-name"
						id="last-name"
						autoComplete="family-name"
						className="block w-full p-5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 max-sm:border-2 max-sm:border-gray sm:text-sm sm:leading-6"
					/>
				</div>
			</div>

			<div className="sm:col-span-4">
				<label
					htmlFor="email"
					className="block text-sm font-medium leading-6 text-gray-900"
				>
					Email address
				</label>
				<div className="mt-2">
					<input
						id="email"
						name="email"
						type="email"
						autoComplete="email"
						className="block w-full p-5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 max-sm:border-2 max-sm:border-gray"
					/>
				</div>
			</div>

			<div className="sm:col-span-4">
				<label
					htmlFor="country"
					className="block text-sm font-medium leading-6 text-gray-900"
				>
					Country
				</label>
				<div className="mt-2">
					<select
						id="country"
						name="country"
						autoComplete="country-name"
						className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 max-sm:border-2 max-sm:border-gray sm:max-w-xs sm:text-sm sm:leading-6"
					>
						{countries.map((country, index) => (
							<option key={index} value={country.name}>
								{country.name}
							</option>
						))}
					</select>
				</div>
			</div>

			<div className="col-span-full">
				<label
					htmlFor="street-address"
					className="block text-sm font-medium leading-6 text-gray-900"
				>
					Street address
				</label>
				<div className="mt-2">
					<input
						type="text"
						name="street-address"
						id="street-address"
						autoComplete="street-address"
						className="block w-full p-5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 max-sm:border-2 max-sm:border-gray sm:text-sm sm:leading-6"
					/>
				</div>
			</div>

			<div className="sm:col-span-2 sm:col-start-1">
				<label
					htmlFor="city"
					className="block text-sm font-medium leading-6 text-gray-900"
				>
					City
				</label>
				<div className="mt-2">
					<input
						type="text"
						name="city"
						id="city"
						autoComplete="address-level2"
						className="block p-5 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 max-sm:border-2 max-sm:border-gray sm:text-sm sm:leading-6"
					/>
				</div>
			</div>

			<div className="sm:col-span-2">
				<label
					htmlFor="region"
					className="block text-sm font-medium leading-6 text-gray-900"
				>
					State / Province
				</label>
				<div className="mt-2">
					<input
						type="text"
						name="region"
						id="region"
						autoComplete="address-level1"
						className="block w-full p-5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 max-sm:border-2 max-sm:border-gray"
					/>
				</div>
			</div>

			<div className="sm:col-span-2">
				<label
					htmlFor="postal-code"
					className="block text-sm font-medium leading-6 text-gray-900"
				>
					ZIP / Postal code
				</label>
				<div className="mt-2">
					<input
						type="text"
						name="postal-code"
						id="postal-code"
						autoComplete="postal-code"
						className="block w-full p-5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 max-sm:border-2 max-sm:border-gray"
					/>
				</div>
			</div>
		</>
	);
};

export default PersonalInfo;
