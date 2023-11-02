import React from "react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";

const HomeInfo = () => {
	return (
		<>
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
						className="block w-full rounded-md border-0 py-1.5 px-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 max-sm:border-2 max-sm:border-gray"
						defaultValue={""}
						maxLength={2000}
						required={true}
					/>
				</div>
				<p className="mt-3 text-sm leading-6 text-gray-600">
					Please describe the home/shelter/room in detail for aid
					worker review.
				</p>
				<p className="mt-3 text-sm leading-6 text-gray-600">
					Max length: 2000 characters.
				</p>
			</div>

			{/* // </Formcard> */}
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
			{/* // </div> */}
		</>
	);
};

export default HomeInfo;
