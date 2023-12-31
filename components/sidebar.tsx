import {
	CalendarIcon,
	ChartPieIcon,
	DocumentDuplicateIcon,
	FolderIcon,
	HomeIcon,
	UsersIcon,
	AdjustmentsHorizontalIcon
} from "@heroicons/react/24/outline";
import { cn } from "@/utils/cn";

const navigation = [
	{ name: "Home", href: "#", icon: HomeIcon, count: "5", current: true },
	{ name: "Filter", href: "#", icon: AdjustmentsHorizontalIcon, current: false },
];
const teams = [
	{ id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
	{ id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
	{ id: 3, name: "Workcation", href: "#", initial: "W", current: false },
];

export default function Sidebar() {
	return (
		<div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pt-10">
			<nav className="flex flex-1 flex-col">
				<ul role="list" className="flex flex-1 flex-col gap-y-7">
					<li>
						<ul role="list" className="-mx-2 space-y-1">
							{navigation.map((item) => (
								<li key={item.name}>
									<a
										href={item.href}
										className={cn(
											item.current
												? "bg-background-800 text-white"
												: "text-gray-400 hover:text-white hover:bg-background-800",
											"group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
										)}
									>
										<item.icon
											className="h-6 w-6 shrink-0"
											aria-hidden="true"
										/>
										{item.name}
										{item.count ? (
											<span
												className="ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-links px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-white ring-1 ring-inset ring-background-800"
												aria-hidden="true"
											>
												{item.count}
											</span>
										) : null}
									</a>
								</li>
							))}
						</ul>
					</li>
					<li className="-mx-6 mt-auto">
						<a
							href="#"
							className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-background-800"
						>
							<img
								className="h-8 w-8 rounded-full bg-gray-800"
								src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
								alt=""
							/>
							<span className="sr-only">Settings</span>
							<span aria-hidden="true">Settings</span>
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}
