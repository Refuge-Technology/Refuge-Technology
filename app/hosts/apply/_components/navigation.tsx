import { cn } from "@/utils/cn";
import { CheckIcon } from "@heroicons/react/24/solid";

const steps = [
	{
		id: "01",
		name: "Personal Information",
		description: "Used for verification and displayed to humanitarian orgs.",
		href: "#",
	},
	{
		id: "02",
		name: "Room/Home Information",
		description: "Provide a description of the shelter you are offering.",
		href: "#",
	},
	{
		id: "03",
		name: "Contact & Submit",
		description: "Indicate your method of contact and submit your application for review.",
		href: "#",
	}
];

const Navigation = ({ step }: { step: number }) => {
	return (
		<>
			<div className="hidden lg:block lg:border-b lg:border-t lg:border-gray-200">
				<nav
					className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
					aria-label="Progress"
				>
					<ol
						role="list"
						className="overflow-hidden rounded-md lg:flex lg:rounded-none lg:border-l lg:border-r lg:border-gray-200"
					>
						{steps.map((stepIndicator, stepIdx) => (
							<li
								key={stepIndicator.id}
								className="relative overflow-hidden lg:flex-1"
							>
								<div
									className={cn(
										stepIdx === step
											? "rounded-t-md border-b-0"
											: "",
										stepIdx === steps.length - 1
											? "rounded-b-md border-t-0"
											: "",
										"overflow-hidden border border-gray-200 lg:border-0"
									)}
								>
									{stepIdx < step ? (
										<a
											href={stepIndicator.href}
											className="group"
										>
											<span
												className="absolute left-0 top-0 h-full w-1 bg-transparent group-hover:bg-gray-200 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
												aria-hidden="true"
											/>
											<span
												className={cn(
													stepIdx !== 0
														? "lg:pl-9"
														: "",
													"flex items-start px-6 py-5 text-sm font-medium"
												)}
											>
												<span className="flex-shrink-0">
													<span className="flex h-10 w-10 items-center justify-center rounded-full bg-background-500">
														<CheckIcon
															className="h-6 w-6 text-white"
															aria-hidden="true"
														/>
													</span>
												</span>
												<span className="ml-4 mt-0.5 flex min-w-0 flex-col">
													<span className="text-sm font-medium">
														{stepIndicator.name}
													</span>
													<span className="text-sm font-medium text-gray-500">
														{
															stepIndicator.description
														}
													</span>
												</span>
											</span>
										</a>
									) : stepIdx == step ? (
										<a
											href={stepIndicator.href}
											aria-current="step"
										>
											<span
												className="absolute left-0 top-0 h-full w-1 bg-background-500 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
												aria-hidden="true"
											/>
											<span
												className={cn(
													stepIdx !== 0
														? "lg:pl-9"
														: "",
													"flex items-start px-6 py-5 text-sm font-medium"
												)}
											>
												<span className="flex-shrink-0">
													<span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-background-500">
														<span className="text-background-500">
															{stepIndicator.id}
														</span>
													</span>
												</span>
												<span className="ml-4 mt-0.5 flex min-w-0 flex-col">
													<span className="text-sm font-medium text-background-500">
														{stepIndicator.name}
													</span>
													<span className="text-sm font-medium text-gray-500">
														{
															stepIndicator.description
														}
													</span>
												</span>
											</span>
										</a>
									) : (
										<a
											href={stepIndicator.href}
											className="group"
										>
											<span
												className="absolute left-0 top-0 h-full w-1 bg-transparent group-hover:bg-gray-200 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
												aria-hidden="true"
											/>
											<span
												className={cn(
													stepIdx !== 0
														? "lg:pl-9"
														: "",
													"flex items-start px-6 py-5 text-sm font-medium"
												)}
											>
												<span className="flex-shrink-0">
													<span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-300">
														<span className="text-gray-500">
															{stepIndicator.id}
														</span>
													</span>
												</span>
												<span className="ml-4 mt-0.5 flex min-w-0 flex-col">
													<span className="text-sm font-medium text-gray-500">
														{stepIndicator.name}
													</span>
													<span className="text-sm font-medium text-gray-500">
														{
															stepIndicator.description
														}
													</span>
												</span>
											</span>
										</a>
									)}

									{stepIdx !== 0 ? (
										<>
											{/* Separator */}
											<div
												className="absolute inset-0 left-0 top-0 hidden w-3 lg:block"
												aria-hidden="true"
											>
												<svg
													className="h-full w-full text-gray-300"
													viewBox="0 0 12 82"
													fill="none"
													preserveAspectRatio="none"
												>
													<path
														d="M0.5 0V31L10.5 41L0.5 51V82"
														stroke="currentcolor"
														vectorEffect="non-scaling-stroke"
													/>
												</svg>
											</div>
										</>
									) : null}
								</div>
							</li>
						))}
					</ol>
				</nav>
			</div>

			{/*mobile version */}
			<nav
				className=" lg:hidden flex items-center justify-center"
				aria-label="Progress"
			>
				<p className="text-sm font-medium">
					Step {step + 1} of {steps.length}
				</p>
				<ol role="list" className="ml-8 flex items-center space-x-5">
					{steps.map((stepIndicator, stepIndex) => (
						<li key={stepIndicator.name}>
							{stepIndex < step ? (
								<a
									href={stepIndicator.href}
									className="block h-2.5 w-2.5 rounded-full bg-background-500 hover:bg-background-800"
								>
									<span className="sr-only">
										{stepIndicator.name}
									</span>
								</a>
							) : stepIndex == step ? (
								<a
									href={stepIndicator.href}
									className="relative flex items-center justify-center"
									aria-current="step"
								>
									<span
										className="absolute flex h-5 w-5 p-px"
										aria-hidden="true"
									>
										<span className="h-full w-full rounded-full bg-background-100" />
									</span>
									<span
										className="relative block h-2.5 w-2.5 rounded-full bg-background-500"
										aria-hidden="true"
									/>
									<span className="sr-only">
										{stepIndicator.name}
									</span>
								</a>
							) : (
								<a
									href={stepIndicator.href}
									className="block h-2.5 w-2.5 rounded-full bg-gray-200 hover:bg-gray-400"
								>
									<span className="sr-only">
										{stepIndicator.name}
									</span>
								</a>
							)}
						</li>
					))}
				</ol>
			</nav>
		</>
	);
};

export default Navigation;
