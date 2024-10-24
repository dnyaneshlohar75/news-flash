"use client";

import { useState } from "react";
import {
  Button,
  Input,
  Card,
  CardHeader,
  CardBody,
} from "@nextui-org/react";
import { MdEmail, MdLock, MdArrowForward  } from "react-icons/md";
import { FaUserLarge } from "react-icons/fa6";

import Link from "next/link";
import { createUser } from "../actions/user-auth";
import { redirect } from "next/navigation";
import { useNotifications } from "@/providers/NotificationsState";

export default function SignupForm() {

  const { appendNotifications } = useNotifications();

  const [loading, setLoading] = useState(false);

  const handleSignup = async (formData: FormData) => {
    setLoading(true);

    if(!formData?.get('name') || !formData?.get('email') || !formData?.get('password')) {
        alert("All fields are required");
    }

    const resp = await createUser({
        name: formData?.get('name')?.valueOf() as string,
        email: formData?.get('email')?.valueOf() as string,
        password: formData?.get('password')?.valueOf() as string,
    });

    if(resp) {
        alert(resp?.message)
        appendNotifications([{
          notificationId: "1",
          title: "Welcome to news flash",
          time: new Date(Date.now()).toISOString(),
          userId: resp.userId
        }]);

        redirect("/user/login")
    }
    setLoading(false);
  }

  return (
    <Card radius="sm" className="w-96 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <CardHeader className="flex flex-col gap-1">
        <h1 className="font-semibold text-lg">Let's create an account!</h1>
      </CardHeader>
      <CardBody className="p-8">
        <form action={handleSignup}>
          <div className="flex flex-col gap-5">
            <Input
              autoFocus
              placeholder="Full Name"
              variant="underlined"
              name="name"
              color="primary"
              startContent={<FaUserLarge size="18" color="gray" />}
              required
            />
            <Input
              placeholder="Email id"
              variant="underlined"
              name="email"
              color="primary"
              startContent={<MdEmail size="22" color="gray" />}
              required
            />
            <Input
              placeholder="Password"
              variant="underlined"
              name="password"
              color="primary"
              type="password"
              startContent={<MdLock size="22" color="gray" />}
              required
            />

            <Button
              isLoading={loading}
              className="w-full"
              type="submit"
              color="primary"
              radius="sm"
            >
              Create an account
            </Button>
            <div className="flex items-center justify-end">
              <Link href = "/user/login" className = "flex items-center gap-3 text-sm"><span>Back to login</span> <MdArrowForward /></Link>
            </div>
          </div>
        </form>
      </CardBody>
    </Card>
  )
}
