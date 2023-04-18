import { Suspense } from "react";
import { Repo } from "./components/Repo";
import { User } from "./components/User";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default async function Home() {
	// const router= useRouter()
	// router.refresh()

	return (
		<div>
			<h1>Home</h1>

			<Link href="/dashboardd">Dashboard</Link>

			<Suspense fallback={<p>Carregando repositórios...</p>}>
				{/* @ts-expect-error Async Server Component */}
				<Repo />
			</Suspense>
			<Suspense fallback={<p>Carregando usuários...</p>}>
				{/* @ts-expect-error Async Server Component */}
				<User />
			</Suspense>
		</div>
	);
}
