import React from "react";
import { Input } from "@nextui-org/react";
import { LuSearch } from "react-icons/lu";

export default function SearchBar() {
  return (
    <Input
      startContent = {<LuSearch />}
      type="search"
      title="search"
      color="primary"
      className="px-5 mb-4"
      autoFocus = {true}
      placeholder="Search news"
    />
  );
}
