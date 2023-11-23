"use client";
import { Fragment, useState, useEffect } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";

import { useSearchParams } from "next/navigation";

import { useRouter } from "next/navigation";
import { cn } from "@/utils/cn";

type TProps = {
	hosts: any[];
};

type Host = {
	full_name: string;
	country_of_residence: string;
	id: string;
	biography: string;
	email: string;
	phone_number: string;
	profile_picture: string;
};

export default function HostProfile({ hosts }: TProps) {
	const router = useRouter();

	const searchParams = useSearchParams();
	const hostid = searchParams.get("host");
	const [highlightedHost, setHighlightedHost] = useState<Host>({} as Host);

	useEffect(() => {
		setHighlightedHost(hosts.find((host) => host.id == hostid));
	}, []);

	return (
		<Transition.Root show={hostid ? true : false} appear as={Fragment}>
			<Dialog
				as="div"
				className="relative z-10"
				onClose={() => router.push("/ngo/dashboard")}
			>
				<div className="fixed inset-0" />
				<div className="fixed inset-0 overflow-hidden">
					<div className="absolute inset-0 overflow-hidden">
						<div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
							<Transition.Child
								as={Fragment}
								enter="transform transition ease-in-out duration-500 sm:duration-700"
								enterFrom="translate-x-full"
								enterTo="translate-x-0"
								leave="transform transition ease-in-out duration-500 sm:duration-700"
								leaveFrom="translate-x-0"
								leaveTo="translate-x-full"
							>
								<Dialog.Panel className="pointer-events-auto w-screen max-w-md">
									<div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
										<div className="px-4 py-6 sm:px-6">
											<div className="flex items-start justify-between">
												<h2
													id="slide-over-heading"
													className="text-base font-semibold leading-6 text-gray-900"
												>
													Host Profile
												</h2>
												<div className="ml-3 flex h-7 items-center">
													<button
														type="button"
														className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500"
														onClick={() =>
															router.push(
																"/ngo/dashboard"
															)
														}
													>
														<span className="absolute -inset-2.5" />
														<span className="sr-only">
															Close panel
														</span>
														<XMarkIcon
															className="h-6 w-6"
															aria-hidden="true"
														/>
													</button>
												</div>
											</div>
										</div>
										{/* Main */}
										<div>
											<div className="pb-1 sm:pb-6">
												<div>
													<div className="relative h-40 sm:h-56">
														<img
															className="absolute h-full w-full object-cover"
															src={
																highlightedHost?.profile_picture
															}
															alt=""
														/>
													</div>
													<div className="mt-6 px-4 sm:mt-8 sm:flex sm:items-end sm:px-6">
														<div className="sm:flex-1">
															<div>
																<div className="flex items-center">
																	<h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
																		{
																			highlightedHost?.full_name
																		}
																	</h3>
																	<span className="ml-2.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-green-400">
																		<span className="sr-only">
																			Online
																		</span>
																	</span>
																</div>
																<p className="text-sm text-gray-500">
																	{
																		highlightedHost?.country_of_residence
																	}
																</p>
															</div>
															<div className="mt-5 flex flex-wrap space-y-3 sm:space-x-3 sm:space-y-0">
																<button
																	type="button"
																	className="inline-flex w-full flex-shrink-0 items-center justify-center rounded-md bg-background-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:flex-1"
																>
																	Email
																</button>
																<button
																	type="button"
																	className="inline-flex w-full flex-1 items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
																>
																	Call
																</button>
																<div className="ml-3 inline-flex sm:ml-0">
																	<Menu
																		as="div"
																		className="relative inline-block text-left"
																	>
																		<Menu.Button className="relative inline-flex items-center rounded-md bg-white p-2 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
																			<span className="absolute -inset-1" />
																			<span className="sr-only">
																				Open
																				options
																				menu
																			</span>
																			<EllipsisVerticalIcon
																				className="h-5 w-5"
																				aria-hidden="true"
																			/>
																		</Menu.Button>
																		<Transition
																			as={
																				Fragment
																			}
																			enter="transition ease-out duration-100"
																			enterFrom="transform opacity-0 scale-95"
																			enterTo="transform opacity-100 scale-100"
																			leave="transition ease-in duration-75"
																			leaveFrom="transform opacity-100 scale-100"
																			leaveTo="transform opacity-0 scale-95"
																		>
																			<Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
																				<div className="py-1">
																					<Menu.Item>
																						{({
																							active,
																						}) => (
																							<a
																								href="#"
																								className={cn(
																									active
																										? "bg-gray-100 text-gray-900"
																										: "text-gray-700",
																									"block px-4 py-2 text-sm"
																								)}
																							>
																								Copy
																								profile
																								link
																							</a>
																						)}
																					</Menu.Item>
																				</div>
																			</Menu.Items>
																		</Transition>
																	</Menu>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="px-4 pb-5 pt-5 sm:px-0 sm:pt-0">
												<dl className="space-y-8 px-4 sm:space-y-6 sm:px-6">
													<div>
														<dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
															Bio
														</dt>
														<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
															<p>
																{
																	highlightedHost?.biography
																}
															</p>
														</dd>
													</div>
													<div>
														<dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
															Location
														</dt>
														<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
															{
																highlightedHost?.country_of_residence
															}
														</dd>
													</div>
													<div>
														<dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
															Email
														</dt>
														<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
															{
																highlightedHost?.email
															}
														</dd>
													</div>
													<div>
														<dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
															Phone
														</dt>
														<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
															{
																highlightedHost?.phone_number
															}
														</dd>
													</div>
												</dl>
											</div>
										</div>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
}
