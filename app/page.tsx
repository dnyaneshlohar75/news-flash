import { redirect } from "next/navigation";
import Headlines from "./_components/Headlines";
import Sports from "./_components/Sports";
import Politics from "./_components/Politics";
import LogoutButton from "./_components/LogoutButton";
import CategoryTabs from "./_components/CategoryTabs";
import { fetchFeeds } from "./actions/functions";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();

  if(!session) {
    return redirect("/user/login?error=unauthorized_access");
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