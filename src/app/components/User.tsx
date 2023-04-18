import { cookies, headers } from "next/dist/client/components/headers";
import { Repo } from "./Repo";

export async function User() {
	const userCookies = cookies();
	const userHeaders = headers();

	return (
		<div>
			<h1>User</h1>
			{JSON.stringify(userCookies.getAll(), null, 2)}
			{JSON.stringify(userHeaders.entries, null, 2)}
		</div>
	);
}
