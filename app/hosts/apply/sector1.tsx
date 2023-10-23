import React from "react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Formcard from "./formcard";

const Sector1 = () => {
	return (
		<div className="grid w-full display-flex justify-center pt-8 grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
			<div className="pt-4 sm:pt-0 px-4 sm:px-0">
				<h2 className="text-base font-semibold leading-7 text-primary">
					Room/Home Information
				</h2>
				<p className="mt-5 text-sm leading-6 text-white">
					Please describe the shelter you are offering in as much detail as possible with supporting photos and media.
					This information will be used by and displayed to NGOs and their workers to match your host listing with displaced people. 
				</p>
			</div>
			{/* 
			<form className="bg-white justify-self-center w-full max-w-2xl shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
				<div className="px-4 py-6 sm:p-8">
					<div className="grid  max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"> */}
			<Formcard>
				<div className="col-span-full">
					<label
						htmlFor="about"
						className="block text-sm font-medium leading-6 text-gray-900"
					>
						About
					</label>
					<div className="mt-2">
						<textarea
							id="about"
							name="about"
							rows={3}
							className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							defaultValue={""}
						/>
					</div>
					<p className="mt-3 text-sm leading-6 text-gray-600">
						Please describe the home/shelter/room in detail for aid worker review.
					</p>
				</div>

				<div className="col-span-full">
					<label
						htmlFor="cover-photo"
						className="block text-sm font-medium leading-6 text-gray-900"
					>
						Photos
					</label>
					<div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
						<div className="text-center">
							<PhotoIcon
								className="mx-auto h-12 w-12 text-gray-300"
								aria-hidden="true"
							/>
							<div className="mt-4 flex text-sm leading-6 text-gray-600">
								<label
									htmlFor="file-upload"
									className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
								>
									<span>Upload a file</span>
									<input
										id="file-upload"
										name="file-upload"
										type="file"
										className="sr-only"
									/>
								</label>
								<p className="pl-1">or drag and drop</p>
							</div>
							<p className="text-xs leading-5 text-gray-600">
								PNG, JPG, GIF up to 10MB
							</p>
						</div>
					</div>
					<p className="mt-3 text-sm leading-6 text-gray-600">
						Please provide at least two photos of the room/home/shelter that you are offering.
					</p>
				</div>
			</Formcard>
			{/* </div> */}
			{/* // </div> */}
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
			{/* // </form> */}
		</div>
	);
};

export default Sector1;
