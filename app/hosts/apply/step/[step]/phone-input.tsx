import countries from "@/assets/json-objects/countries.json";

export default function PhoneFormInput({
	register,
	className,
	id,
	children,
	...props
}: any) {
	return (
		<div>
			<div className="relative mt-2 rounded-md shadow-sm">
				<div className="flex w-full rounded-md border-0  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-background-500 sm:text-sm sm:leading-6">
					<div className=" inset-y-0 left-0 flex items-center">
						<label htmlFor="country" className="sr-only">
							Country
						</label>
						<select
							{...register}
							{...props}
							id="dial_code"
							name="dial_code"
							autoComplete="tel-country-code"
							className="h-full rounded-md rounded-r-none border-0 bg-transparent py-1.5 pl-1.5 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-background-500 sm:text-sm"
						>
							{countries
								.sort((a, b) => (a.code > b.code ? 1 : -1))
								.map((country, index) => (
									<option
										key={index}
										value={country.dial_code}
									>
										{country.code} ({country.dial_code})
									</option>
								))}
						</select>
					</div>
					{children}
				</div>
			</div>
		</div>
	);
}
