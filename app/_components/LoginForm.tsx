"use client";

import { useState } from "react";
import {
  Button,
  Input,
  Card,
  CardHeader,
  CardBody,
} from "@nextui-org/react";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { MdEmail, MdLock } from "react-icons/md";
import { redirect } from "next/navigation";
import Link from "next/link";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);

  const handleLogin = (data: FormData) => {
    setLoading(true);

    let email = data?.get("email");
    let password = data?.get("password");

    signIn("credentials", {
      email,
      password,
    }).then((result) => {
      setLoading(false);
      return redirect("/user/dashboard")
    });
  };

  return (
    <Card radius="sm" className="w-96 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <CardHeader className="flex flex-col gap-1">
        <h1 className="font-semibold text-lg">Welcome back!</h1>
        <p>Login with credentials</p>
      </CardHeader>
      <CardBody className="p-8">
        <form action={handleLogin}>
          <div className="flex flex-col gap-5">
            <Input
              autoFocus
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
            <div className="flex items-center justify-between mt-5">
              <p className="text-sm">Forgot password?</p>
              <Link href = "/user/signup" className = "text-sm">Create an account</Link>
            </div>

            <Button
              isLoading={loading}
              className="w-full"
              type="submit"
              color="primary"
              radius="sm"
            >
              Log in with email
            </Button>
          <Button
            onClick={() => signIn("google")}
            radius="sm"
            variant="light"
            className="mb-3 border"
          >
            <FcGoogle /> Login with google
          </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
};

export default LoginForm;
