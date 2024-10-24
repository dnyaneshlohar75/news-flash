import { User } from '@nextui-org/react';
import { useSession } from 'next-auth/react';

export default function UserProfile() {
    const { data } = useSession();

  return (
    <User
        name = {data?.user?.name}
        description = {data?.user?.email}
        avatarProps = {{
            src: data?.user?.image as string || "",
            size: "sm"
        }}
    />
  )
}