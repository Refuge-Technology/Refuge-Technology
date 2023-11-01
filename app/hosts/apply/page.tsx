import React from "react";
import Sector1 from "./sector1";
import Formcard from "./formcard";
import { UserCircleIcon } from "@heroicons/react/20/solid";
import {getName, getNames} from 'country-list';


const getCountries = () => {
	const countries = getNames();
	const options = countries.map(country =>{
		return <option key={country} value={country}>{country}</option>
	});

	return options;
};

const HostApplicationForm = () => {
	return (
		<div className="flex justify-center w-full">
			<div className="pt-10 space-y-10 md:divide-y divide-links sm:p-8 sm:w-4/5">
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
					<h2 className="text-4xl text-white sm:text-6xl bg-red-700 italic max-sm:text-center max-sm:py-0">
						Apply to Host
					</h2>
					<p className="mt-6 text-md leading-8 text-justify max-w-prose text-secondary border-none w-50 max-sm:justify-center max-sm:px-5 max-sm:py-5">
						Apply and register interest to be one of the first hosts on the Shelter platform. 
						By applying you are expressing your interest to host displaced people in your
						home. Your application will be reviewed and you will be
						contacted by the
						<em> Shelter </em> team to proceed to the next steps with
						guidance from humanitarian NGOs (Non Government
						Organizations) and aid groups. The application reviewal
						process typically takes 1-2 days depending on the volume of
						applications and demand for shelter.
					</p>
				</div>
				<div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
					<div className="px-4 sm:px-0">
						<h2 className="text-base font-semibold leading-7 text-secondary">
							Personal Information
						</h2>
						<p className="mt-1 text-sm leading-6 text-links	">
							Please provide your personal information as it is displayed on your government issued identification. This data will be securely used for vetting by the
							Shelter team and displayed to humanitarian workers. Shelter will never share or sell your data with third parties. 

						</p>
					</div>

					{/* <form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
						<div className="px-4 py-6 sm:p-8">
							<div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"> */}
					<Formcard>
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
								{getCountries()}
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
						<div className="col-span-full">
							<label
								htmlFor="photo"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Photo
							</label>
							<div className="mt-2 flex">
								<UserCircleIcon
									className="h-12 w-12 text-gray-300"
									aria-hidden="true"
								/>
								<input
									type="file"
									className="rounded-md bg-white px-2.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 max-sm:border-2 max-sm:border-gray"
								/>
							</div>
						</div>
						{/* </div>
						</div> */}
						{/* <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
						<button
						type="button"
						className="text-sm font-semibold leading-6 text-gray-900"
						>
						Cancel
						</button>
						<button
						type="submit"
						className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Save
							</button>
					</div> */}
					</Formcard>
					{/* </form> */}
				</div>
				<Sector1 />

				<div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
					<div className="px-4 sm:px-0">
						<h2 className="text-base font-semibold leading-7 text-secondary">
							Contact
						</h2>
						<p className="mt-1 text-sm leading-6 text-links">
							{
								"Please let us know your preferred contact method. Upon submission, your application will be viewed and you will be contacted by the Shelter team within 1-2 days."
							}
						</p>
					</div>

					{/* <form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
						<div className="px-4 py-6 sm:p-8">
							<div className="max-w-2xl space-y-10"> */}
					<Formcard>
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
											Be contacted by the Shelter team and keep communication over Email.
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
											Be contacted by the Shelter team and communicate over phone calls. Note: Phone contact may be limited by telecomm service in affected regions.
										</p>
									</div>
								</div>
								<div className="relative flex gap-x-3">
									<div className="flex h-6 items-center">
										<input
											id="whatsapp"
											name="whatsapp"
											type="checkbox"
											className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
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
											Be contacted by the Shelter team and communicate over WhatsApp.
										</p>
									</div>
								</div>
							</div>
						</fieldset>
						{/* <fieldset className=" col-span-full">
							<legend className="text-sm font-semibold leading-6 text-gray-900">
								Push Notifications
							</legend>
							<p className="mt-1 text-sm leading-6 text-gray-600">
								These are delivered via SMS to your mobile
								phone.
							</p>
							<div className="mt-6 space-y-6">
								<div className="flex items-center gap-x-3">
									<input
										id="push-everything"
										name="push-notifications"
										type="radio"
										className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
									/>
									<label
										htmlFor="push-everything"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										Everything
									</label>
								</div>
								<div className="flex items-center gap-x-3">
									<input
										id="push-email"
										name="push-notifications"
										type="radio"
										className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
									/>
									<label
										htmlFor="push-email"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										Same as email
									</label>
								</div>
								<div className="flex items-center gap-x-3">
									<input
										id="push-nothing"
										name="push-notifications"
										type="radio"
										className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
									/>
									<label
										htmlFor="push-nothing"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										No push notifications
									</label>
								</div>
							</div>
						</fieldset> */}
						{/* </div> */}
						{/* </div> */}
						{/* <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
						<button
						type="button"
						className="text-sm font-semibold leading-6 text-gray-900"
						>
						Cancel
						</button>
						<button
							type="submit"
							className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
							Save
							</button>
						</div> */}
						{/* </form> */}
					</Formcard>
				</div>
			</div>
		</div>
	);
};

export default HostApplicationForm;
// console.log(getCountries())