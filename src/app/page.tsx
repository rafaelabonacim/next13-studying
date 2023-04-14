import Link from 'next/link'

export default function Home() {
	return (
		<div>
			<h1>Hello word</h1>
			<Link href="/dashboardd">Dashboard</Link>
		</div>
	);
}