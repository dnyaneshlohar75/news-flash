"use client";

import { useSession } from "next-auth/react";
import Notification from "./Notification";
import UserProfile from "./UserProfile";
import Link from "next/link";
import AddPost from "./AddPost";

export default function Header() {
  const { data, status } = useSession();

  return (
    <header className="z-50 flex items-center justify-between bg-white px-8 py-4 mb-3 sticky top-0">
      <h1>Header</h1>

      <div className="flex items-center space-x-4">
        <AddPost />
        <Notification />
        {status === 'authenticated' ? <UserProfile /> : <Link href = "/user/login">You are not log in</Link>}
        
      </div>
    </header>
  );
}
