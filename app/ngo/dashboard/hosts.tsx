"use client";
import React, { useState } from "react";
import HostList from "./host-list";
import HostProfile from "./host-profile";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

type TProps = {
	hosts: any[];
};

const HostsClientComponent = ({ hosts }: TProps) => {
	const searchParams = useSearchParams();
	const hostid = searchParams.get("host");

	return (
		<>
			<HostList hosts={hosts} />
			<HostProfile hosts={hosts} hostid={hostid} />
		</>
	);
};

export { HostsClientComponent };
