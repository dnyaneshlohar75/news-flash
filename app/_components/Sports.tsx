import Link from "next/link";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
} from "@nextui-org/react";

export default function Sports() {
  return (
    <section className="hidden md:block p-5">
      <header className="flex items-center justify-between mb-5">
        <h1 className="font-bold sm:text-base md:text-xl">
          Sports <span className="font-medium">News</span>
        </h1>
        <Link href="" className="text-xs">
          See all
        </Link>
      </header>
      <main>
        <Card className="w-full" shadow="none">
          <CardHeader className="flex gap-3">
            <Image
              alt="nextui logo"
              height={40}
              radius="sm"
              src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-md">NextUI</p>
              <p className="text-small text-default-500">nextui.org</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>Make beautiful websites regardless of your design experience.</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link
              href="https://github.com/nextui-org/nextui"
            >
              Visit source code on GitHub.
            </Link>
          </CardFooter>
        </Card>
      </main>
    </section>
  );
}
