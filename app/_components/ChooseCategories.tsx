"use client";

import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";

import { Button, Divider } from "@nextui-org/react";

import Category from "./Category";
import { categoryListProps } from "@/types/types";
import { setUserNewsCategories } from "../actions/functions";

export default function ChooseCategories() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const categoryList: categoryListProps[] = [
    {
      id: "1",
      image: "https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg",
      name: "Sports",
      isChecked: true,
    },
    {
      id: "2",
      image:
        "https://i.pinimg.com/474x/49/03/8a/49038aff6e08935bad2bcffe30da78ff.jpg",
      name: "Politics",
    },
    {
      id: "3",
      image:
        "https://wallpapers.com/images/hd/business-background-l3j8pv97uundywgw.jpg",
      name: "General",
    },
    {
        id: "4",
        image: "https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg",
        name: "Entertentment",
        isChecked: true,
      },
      {
        id: "5",
        image:
          "https://i.pinimg.com/474x/49/03/8a/49038aff6e08935bad2bcffe30da78ff.jpg",
        name: "Technology",
      },
      {
        id: "6",
        image:
          "https://wallpapers.com/images/hd/business-background-l3j8pv97uundywgw.jpg",
        name: "Science",
      },
      {
        id: "7",
        image:
          "https://wallpapers.com/images/hd/business-background-l3j8pv97uundywgw.jpg",
        name: "Business",
      },
  ];

  return (
    <section>
      <Button onPress={onOpen} onClick={onOpen}>Open categories</Button>

      <Modal
        isOpen={isOpen}
        backdrop="blur"
        onOpenChange={onOpenChange}
        closeButton = {<h1></h1>}
        size="sm"
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            <h1 className="sm:text-sm md:text-xl font-semibold">
              Choose your favorite news categories
            </h1>
          </ModalHeader>
          <Divider />
          <ModalBody className="mt-3">
            <form action={setUserNewsCategories} className="gap-x-2 gap-y-5 grid grid-cols-3">
              {categoryList.map((category) => (
                <Category
                  key={category.id}
                  id={category.id}
                  image={category.image}
                  name={category.name}
                />
              ))}
            </form>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </section>
  );
}
