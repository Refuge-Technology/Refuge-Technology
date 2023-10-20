import React from "react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { HeaderClient } from "./header-client";

import type { Database } from "@/lib/database.types";

const HeaderServer = async () => {
	const supabase = createServerComponentClient<Database>({ cookies });

	const {
		data: { session },
	} = await supabase.auth.getSession();

	return <HeaderClient session={session} />;
};

export default HeaderServer;
