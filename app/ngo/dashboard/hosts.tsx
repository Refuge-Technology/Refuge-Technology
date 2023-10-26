"use client";
import React, { useState } from "react";
import HostList from "./host-list";
import HostProfile from "./host-profile";

const HostsClientComponent = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<HostList onClick={() => setOpen(!open)} />
			<HostProfile open={open} setOpen={setOpen} />
		</>
	);
};

export { HostsClientComponent };
