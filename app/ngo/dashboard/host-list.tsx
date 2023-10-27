import { ChevronRightIcon } from "@heroicons/react/20/solid";

const people = [
	{
		name: "John Doe",
		email: "johndoe@example.com",
		location: "Gaza City - Occupied Palestine",
		imageUrl:
			"https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		href: "#",
		lastSeen: "3h ago",
		lastSeenDateTime: "2023-01-23T13:23Z",
	},
	{
		name: "Michael Foster",
		email: "michael.foster@example.com",
		role: "Co-Founder / CTO",
		imageUrl:
			"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		href: "#",
		lastSeen: "3h ago",
		lastSeenDateTime: "2023-01-23T13:23Z",
	},
	{
		name: "Dries Vincent",
		email: "dries.vincent@example.com",
		role: "Business Relations",
		imageUrl:
			"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		href: "#",
		lastSeen: null,
	},
	{
		name: "Lindsay Walton",
		email: "lindsay.walton@example.com",
		role: "Front-end Developer",
		imageUrl:
			"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		href: "#",
		lastSeen: "3h ago",
		lastSeenDateTime: "2023-01-23T13:23Z",
	},
	{
		name: "Courtney Henry",
		email: "courtney.henry@example.com",
		role: "Designer",
		imageUrl:
			"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		href: "#",
		lastSeen: "3h ago",
		lastSeenDateTime: "2023-01-23T13:23Z",
	},
	{
		name: "Tom Cook",
		email: "tom.cook@example.com",
		role: "Director of Product",
		imageUrl:
			"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		href: "#",
		lastSeen: null,
	},
];

type TProps = {
	hosts: any[];
};

export default function HostList({ hosts }: TProps) {
	return (
		<ul
			role="list"
			className="divide-y divide-gray-100 overflow-hidden bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl"
		>
			{hosts.map((host, index) => (
				<li
					key={host.email}
					className="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6"
				>
					<div className="flex min-w-0 gap-x-4">
						<img
							className="h-12 w-12 flex-none rounded-full bg-gray-50"
							src={people[index].imageUrl}
							alt=""
						/>
						<div className="min-w-0 flex-auto">
							<p className="text-sm font-semibold leading-6 text-gray-900">
								<a href={`/ngo/dashboard/?host=${host.id}`}>
									<span className="absolute inset-x-0 -top-px bottom-0" />
									{host.full_name}
								</a>
							</p>
							<p className="relative truncate mt-1 flex text-xs leading-5 text-gray-500">
								{host.email}
							</p>
						</div>
					</div>
					<div className="flex shrink-0 items-center gap-x-4">
						<div className="hidden sm:flex sm:flex-col sm:items-end">
							<p className="text-sm leading-6 text-gray-900">
								{host.country_of_residence}
							</p>
							{/* {host.lastSeen ? (
								<p className="mt-1 text-xs leading-5 text-gray-500">
									Last seen{" "}
									<time dateTime={host.lastSeenDateTime}>
										{host.lastSeen}
									</time>
								</p>
							) : (
								<div className="mt-1 flex items-center gap-x-1.5">
									<div className="flex-none rounded-full bg-emerald-500/20 p-1">
										<div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
									</div>
									<p className="text-xs leading-5 text-gray-500">
										Online
									</p>
								</div>
							)} */}
						</div>
						<ChevronRightIcon
							className="h-5 w-5 flex-none text-gray-400"
							aria-hidden="true"
						/>
					</div>
				</li>
			))}
		</ul>
	);
}
