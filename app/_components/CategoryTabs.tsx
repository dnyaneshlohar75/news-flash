"use client";

import React from 'react'
import {Tabs, Tab} from '@nextui-org/tabs'
import {ScrollShadow} from "@nextui-org/scroll-shadow";

import { PiTelevisionSimple, PiMegaphone, PiTrendUp } from "react-icons/pi";
import { GiCricketBat } from "react-icons/gi";
import { LiaUniversitySolid } from "react-icons/lia";
import { GiMaterialsScience } from "react-icons/gi";
import { GrTechnology } from "react-icons/gr";

export default function CategoryTabs() {
  return (
    <ScrollShadow orientation="horizontal" hideScrollBar = {true} offset={5} className='px-5'>
      <Tabs
        color="primary" 
        variant="underlined"
        classNames={{
          tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
          cursor: "w-full bg-[#22d3ee]",
          tab: "max-w-fit px-0 h-12",
          tabContent: "group-data-[selected=true]:text-[#06b6d4]"
        }}
      >
      <Tab
        key="top_headlines"
        title = {
          <div className='flex items-center gap-3'>
            <PiMegaphone size = {18} />
            <h1 className = "text-xs sm:text-sm md:text-md">Top Headlines</h1>
          </div>
        }
      />
      <Tab
        key="entertainment"
        title = {
          <div className='flex items-center gap-3'>
            <PiTelevisionSimple size = {18} />
            <h1 className = "text-xs sm:text-sm md:text-md">Entertainment</h1>
          </div>
        }
      />
      <Tab
        key="sports"
        title = {
          <div className='flex items-center space-x-2'>
            <GiCricketBat size = {16} />
            <h1 className = "text-xs sm:text-sm md:text-md">Sports</h1>
          </div>
        }
      />
      <Tab
        key="politics"
        title = {
          <div className='flex items-center space-x-2'>
            <LiaUniversitySolid size = {18} />
            <h1 className = "text-xs sm:text-sm md:text-md">Politics</h1>
          </div>
        }
      />
      <Tab
        key="business"
        title = {
          <div className='flex items-center space-x-2'>
            <PiTrendUp size = {18} />
            <h1 className = "text-xs sm:text-sm md:text-md">Business</h1>
          </div>
        }
      />
      <Tab
        key="science"
        title = {
          <div className='flex items-center space-x-2'>
            <GiMaterialsScience size = {18} />
            <h1 className = "text-xs sm:text-sm md:text-md">Science</h1>
          </div>
        }
      />
      <Tab
        key="technology"
        title = {
          <div className='flex items-center space-x-2'>
            <GrTechnology size = {18} />
            <h1 className = "text-xs sm:text-sm md:text-md">Technology</h1>
          </div>
        }
      />
    </Tabs>
    </ScrollShadow>
  )
}