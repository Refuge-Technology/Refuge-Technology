"use client"
import React, {useState} from "react";
import HostList from "./host-list";""
import HostProfile from "./host-profile"


const Dashboard = () => {
	const [open, setOpen] = useState(false);
	
	return (
		<div className="flex flex-col gap-8 sm:p-2 ">
			<h1 className="text-2xl px-2 text-primary">Hosts</h1>
			<span className="w-full border-b border-link" />
			<HostList onClick={() => setOpen(!open)}/>
			<HostProfile open={open} setOpen={setOpen} />
		</div>
	);
};

export default Dashboard;
