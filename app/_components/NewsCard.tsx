"use client";

import React from "react";
import { Button, Card, CardFooter, Chip, Image } from "@nextui-org/react";
import { LuEye, LuMessageSquare, LuShare2, LuPocket } from "react-icons/lu";
import { article } from "@/types/types";

export default function NewsCard({ title, urlToImage }: article) {
  return (
    <Card shadow="none" className="border">
      <Image
        src={urlToImage || 'https://www.its.ac.id/tmesin/wp-content/uploads/sites/22/2022/07/no-image.png' as string}
        title={title}
      />
      <CardFooter className="flex flex-col items-start">
        <div className="w-full my-3 flex items-center justify-between">
          <Chip
            color="danger"
            radius="md"
            variant="flat"
            className="uppercase text-xs md:text-sm font-semibold"
            size="sm"
          ></Chip>
          <div className="">
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 font-semibold text-sm">
                <LuEye className="text-gray-600" size={18} /> 1.5m
              </p>
              <p className="flex items-center gap-2 font-semibold text-sm">
                <LuMessageSquare className="text-gray-600" size={18} /> 35k
              </p>
              <p className="flex items-center gap-2 font-semibold text-sm">
                <LuShare2 className="text-gray-600" size={18} /> 29k
              </p>
            </div>
          </div>
        </div>
        <div className="my-2 grid grid-cols-12 gap-4">
          <h1
            className="col-span-9 line-clamp-2 font-semibold text-sm md:text-base"
            title={title}
          >
            {title}
          </h1>
          <Button
            size="sm"
            className="col-span-3 border-1 text-white"
            color="success"
            radius="full"
            spinner="start"
          >
            <LuPocket />
            <span className="hidden md:inline">Save to pocket</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
