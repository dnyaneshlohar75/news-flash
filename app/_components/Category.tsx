import React, { useState } from "react";
import { Card } from "@nextui-org/card";
import { categoryListProps } from "@/types/types";

export default function Category(category: categoryListProps) {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <input
        id={category.id}
        type="checkbox"
        key={category.id}
        name="category"
        value={category.name}
        className="hidden"
        onChange={(e) =>
          e.target.value == category.name ? setChecked(!checked) : null
        }
      />
      <label htmlFor={category.id}>
        <Card
          shadow="sm"
          key={category.id}
          className={`relative w-20 h-20 cursor-pointer ${
            checked ? "outline outline-2 outline-offset-2" : "outline-none"
          }`}
        >
          <div
            className="absolute w-full h-full bg-black opacity-50"
            title={category.name}
          />
          <img
            src={category.image}
            className="w-full object-cover h-full"
            alt={category.name}
          />
          <div className="z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-white text-wrap text-sm" title={category.name}>
              {category.name}
            </h1>
          </div>
        </Card>
      </label>
    </>
  );
}
