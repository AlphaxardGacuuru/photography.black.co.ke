"use client"

import Navigation from "@/app/Navigation"

const AppLayout = ({ children }) => {
	return (
		<div className="min-h-screen">
			<Navigation />

			<main>{children}</main>
		</div>
	)
}

export default AppLayout
