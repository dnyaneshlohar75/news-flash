import React from "react";
import NewsCard from "./NewsCard";

export default function Headlines() {
  return (
    <section className="p-5">
      <header className="mb-5">
        <h1 className="font-bold sm:text-base md:text-xl">
          Top <span className="font-medium">Headlines</span>
        </h1>
      </header>
      
      <main>
        <NewsCard
          category="Sports"
          image="https://static.toiimg.com/thumb/imgsize-79280,msid-112212049,width-400,resizemode-4/112212049.jpg"
          heading="Paris Olympics 2024 Day 7 Live Updates: India men's hockey team registers first win over Australia in 52 years at Olympics; Indian archers lose in Mixed Team bronze medal match; Manu Bhaker qualifies for Women's 25m Pistol final."
        />
      </main>
    </section>
  );
}
