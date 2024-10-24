import Posts from "@/app/_components/Posts";
import { Avatar, Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function page() {
  const session = await getServerSession();

  if (session?.user?.role !== "user")
    return redirect("/user/login?error=unauthorized_access");

  return (
    <div>
      <div className="max-w-5xl mx-auto p-8 flex items-start gap-x-12">
        <div className="w-52 border">page</div>
        <Card className="flex-1" shadow="sm" radius="sm">
          <CardHeader className="p-4 items-start gap-x-8">
            <Avatar
              src={session?.user?.image as string}
              className="w-28 h-28"
            />
            <div>
              <h1 className="text-xl font-semibold">{session?.user?.name}</h1>
              <p>{session?.user?.email}</p>

              <p>{session?.user?.description}</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <Posts userId={session?.user?.id} />
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
