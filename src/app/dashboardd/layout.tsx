import { ReactNode } from "react";

interface DashboardLayout {
	children: ReactNode;
}

export const metadata = {
	title: {
		default: "Aplicaçao",
		template: "%s | Aplicaçãoo",
	},
};

export default function DashboardLayout({ children }: DashboardLayout) {
	return (
		<div>
			<h1>App</h1>
			{children}
		</div>
	);
}
