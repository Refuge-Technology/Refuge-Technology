import React from 'react'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';

const Dashboard = async () => {
	const supabase = createServerComponentClient({ cookies });
	const { data: {session} } = await supabase.auth.getSession();

	if (!session) {
		redirect('/login');
	}

  return (
	<div>Dashboard</div>
  )
}

export default Dashboard