"use client";

import React from "react";
import Link from "next/link";
import { Image, Listbox, ListboxItem } from "@nextui-org/react";

export default function Politics() {
  return (
    <section className="hidden md:block p-5">
      <header className="flex items-center justify-between mb-5">
        <h1 className="font-bold sm:text-base md:text-xl">
          Political <span className="font-medium">News</span>
        </h1>
        <Link href="" className="text-xs">
          See all
        </Link>
      </header>

      <main>
        <Listbox
          aria-label="Actions"
          variant="light"
          className="bg-white rounded-2xl px-0 shadow-sm"
          onAction={(key) => alert(key)}
        >
          <ListboxItem className="py-3 px-2" showDivider={true} key="new" textValue="">
            <div className="flex gap-3">
              <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                width={40}
                title = {"img"}
              />
              <div className="flex flex-col">
                <p className="text-md">NextUI</p>
                <p className="text-small text-default-500">nextui.org</p>
              </div>
            </div>
          </ListboxItem>
          <ListboxItem className="py-3 px-2" showDivider={true} key="copy" textValue="">
          <div className="flex gap-3">
              <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                width={40}
                title = {"img"}
              />
              <div className="flex flex-col">
                <p className="text-md">NextUI</p>
                <p className="text-small text-default-500">nextui.org</p>
              </div>
            </div>
          </ListboxItem>
          <ListboxItem className="py-3 px-2" key="edit" textValue="">
          <div className="flex gap-3">
              <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                width={40}
                title = {"img"}
              />
              <div className="flex flex-col">
                <p className="text-md">NextUI</p>
                <p className="text-small text-default-500">nextui.org</p>
              </div>
            </div>
          </ListboxItem>
        </Listbox>
      </main>
    </section>
  );
}
