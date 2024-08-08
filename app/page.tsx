import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import Headlines from "./_components/Headlines";
import Sports from "./_components/Sports";
import Politics from "./_components/Politics";
import ChooseCategories from "./_components/ChooseCategories";

export default async function Home() {
  const { isAuthenticated, getUser } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    return redirect(`/api/auth/login?post_login_redirect_url=/`);
  }

  const user = await getUser();

  if (!user) {
    return redirect(`/api/auth/login?post_login_redirect_url=/`);
  }

  return (
    <main className="grid grid-cols-12 gap-8">
      <div className="col-span-12 md:col-span-2">
        <h1 className="text-2xl font-bold">User details</h1>
        <ChooseCategories />
      </div>
      <div className="col-span-12 md:col-span-6">
        <Headlines />
      </div>
      <div className="col-span-12 md:col-span-4">
        <Sports />
        <Politics />
      </div>
    </main>
  );
}
