import React from "react";
import Sector1 from "./sector1";
import Formcard from "./formcard";
import { UserCircleIcon } from "@heroicons/react/20/solid";

const HostApplicationForm = () => {
	return (
		<div className="flex justify-center w-full ">
			<div className="pt-10 space-y-10 md:divide-y divide-links sm:p-8 sm:w-4/5">
				<h2 className="text-4xl text-white sm:text-6xl bg-background-600">
								Apply to Host
				</h2>
				<p className="mt-6 text-lg leading-8 text-primary border-none w-50">
								Apply and register interest to host displaced people in your home. Your application will be reviewed and you will be contacted by the
								<em> Shelter </em> team to proceed to the next steps with guidance from humanitarian NGOs (Non Government Organizations) and aid groups. The application 
								reviewal process typically takes 1-2 days depending on the volume of applications and demand for shelter.
				</p>
				<div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
					<div className="px-4 sm:px-0">
						<h2 className="text-base font-semibold leading-7 text-primary">
							Personal Information
						</h2>
						<p className="mt-1 text-sm leading-6 text-links">
							Use a permanent address where you can receive mail.
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
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
								>
									<option>United States</option>
									<option>Canada</option>
									<option>Mexico</option>
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
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
						<button
							type="button"
							className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
						>
							Change
						</button>
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
						<h2 className="text-base font-semibold leading-7 text-primary">
							Notifications
						</h2>
						<p className="mt-1 text-sm leading-6 text-links">
							{
								"We'll always let you know about important changes, but you pick what else you want to hear about."
							}
						</p>
					</div>

					{/* <form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
						<div className="px-4 py-6 sm:p-8">
							<div className="max-w-2xl space-y-10"> */}
					<Formcard>
						<fieldset className=" col-span-full">
							<legend className="text-sm font-semibold leading-6 text-gray-900">
								By Email
							</legend>
							<div className="mt-6 space-y-6">
								<div className="relative flex gap-x-3">
									<div className="flex h-6 items-center">
										<input
											id="comments"
											name="comments"
											type="checkbox"
											className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
										/>
									</div>
									<div className="text-sm leading-6">
										<label
											htmlFor="comments"
											className="font-medium text-gray-900"
										>
											Comments
										</label>
										<p className="text-gray-500">
											Get notified when someones posts a
											comment on a posting.
										</p>
									</div>
								</div>
								<div className="relative flex gap-x-3">
									<div className="flex h-6 items-center">
										<input
											id="candidates"
											name="candidates"
											type="checkbox"
											className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
										/>
									</div>
									<div className="text-sm leading-6">
										<label
											htmlFor="candidates"
											className="font-medium text-gray-900"
										>
											Candidates
										</label>
										<p className="text-gray-500">
											Get notified when a candidate
											applies for a job.
										</p>
									</div>
								</div>
								<div className="relative flex gap-x-3">
									<div className="flex h-6 items-center">
										<input
											id="offers"
											name="offers"
											type="checkbox"
											className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
										/>
									</div>
									<div className="text-sm leading-6">
										<label
											htmlFor="offers"
											className="font-medium text-gray-900"
										>
											Offers
										</label>
										<p className="text-gray-500">
											Get notified when a candidate
											accepts or rejects an offer.
										</p>
									</div>
								</div>
							</div>
						</fieldset>
						<fieldset className=" col-span-full">
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
						</fieldset>
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
