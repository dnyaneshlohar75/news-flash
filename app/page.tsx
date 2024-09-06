import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import Headlines from "./_components/Headlines";
import Sports from "./_components/Sports";
import Politics from "./_components/Politics";
import ChooseCategories from "./_components/ChooseCategories";
import LogoutButton from "./_components/LogoutButton";
import CategoryTabs from "./_components/CategoryTabs";
import { fetchFeeds } from "./actions/functions";

export default async function Home() {
  const { isAuthenticated, getUser } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    return redirect(`/api/auth/login?post_login_redirect_url=/`);
  }

  const user = await getUser();

  if (!user) {
    return redirect(`/api/auth/login?post_login_redirect_url=/`);
  }

  let initialFeeds = (await fetchFeeds({})).articles;

  return (
    <main className="max-w-5xl mx-auto">
      <section className="flex gap-8 w-full">
      <div className="flex-1">
        <CategoryTabs />
        <Headlines initialFeeds = {initialFeeds} />
      </div>
      <div className="md:block w-2xl">
        <Sports />
        <Politics />
      </div>
      </section>
    </main>
  );
}