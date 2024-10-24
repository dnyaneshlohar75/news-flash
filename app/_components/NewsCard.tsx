"use client";

import React from "react";
import { Button, Card, CardFooter, Chip, Image } from "@nextui-org/react";
import { LuEye, LuMessageSquare, LuShare2, LuPocket, LuHeart } from "react-icons/lu";
import { article } from "@/types/types";
import Link from "next/link";
import { useSocket } from "@/providers/SocketProvider";
import { useSession } from "next-auth/react";

export default function NewsCard({ title, urlToImage, url, source }: article) {
  const { data } = useSession();

  const { likedPost } = useSocket();
  return (
    <Card shadow="none" className="border">
      <Image
        src={
          urlToImage ||
          ("https://www.its.ac.id/tmesin/wp-content/uploads/sites/22/2022/07/no-image.png" as string)
        }
        title={title}
        alt={title}
      />

      <CardFooter className="flex flex-col items-start">
        <div className="w-full my-3 flex items-center justify-between">
          <Chip
            color="danger"
            radius="md"
            variant="flat"
            className="uppercase text-xs md:text-sm font-semibold"
            size="sm"
          >
            {source?.name}
          </Chip>
          <div className="">
            <div className="flex items-center gap-4">
              <button onClick={() => likedPost(data?.user?.id as string, "sdt45-gs4e13-dsg")} className="flex items-center gap-2 font-semibold text-sm">
                <LuHeart className="text-gray-600" size={18} /> 1.5m
              </button>
              <p className="flex items-center gap-2 font-semibold text-sm">
                <LuMessageSquare className="text-gray-600" size={18} /> 35k
              </p>
              <p className="flex items-center gap-2 font-semibold text-sm">
                <LuShare2 className="text-gray-600" size={18} /> 29k
              </p>
            </div>
          </div>
        </div>
        <div className="my-2 w-full flex items-start justify-between gap-2">
          <Link
            href={url}
            className="w-full line-clamp-2 font-semibold text-sm md:text-base"
            title={title}
            target="_blank"
          >
            {title}
          </Link>
          <Button
            size="sm"
            className="flex items-center gap-2 border-1 text-white"
            color="success"
            radius="full"
            spinner="start"
            startContent = {<LuPocket />}
          >
            
            Save to pocket
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
