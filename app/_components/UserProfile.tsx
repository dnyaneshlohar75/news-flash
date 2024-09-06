"use client";

import { useKindeAuth } from '@kinde-oss/kinde-auth-nextjs';
import { User } from '@nextui-org/react';

export default function UserProfile() {
    const { user } = useKindeAuth();

  return (
    <User
        name = {user?.given_name}
        description = {user?.email}
        avatarProps = {{
            src: user?.picture as string || "",
            size: "sm"
        }}
    />
  )
}