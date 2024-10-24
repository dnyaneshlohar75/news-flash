"use client";

import { useCallback, useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import { useInView } from "react-intersection-observer";
import Loading from "./Loading";
import { article, NewsProps } from "@/types/types";
import { fetchFeeds } from "../actions/functions";

export default function Headlines({
  initialFeeds,
}: {
  initialFeeds: article[];
}) {
  const [ref, inView] = useInView();

  const [feeds, setFeeds] = useState(initialFeeds);
  const [page, setPage] = useState(1);

  const loadMoreFeeds = useCallback(async () => {
    let next = page + 1;
    let resp = await fetchFeeds({ page: next });
    setPage(next);

    setFeeds((prev: article[] | undefined) => [
      ...(prev?.length ? prev : []),
      ...resp.articles,
    ]);
  }, [page, setPage, setFeeds]);

  useEffect(() => {
    if (inView) {
      loadMoreFeeds();
    }
  }, [inView, loadMoreFeeds]);

  return (
    <section className="p-5">
      <header className="mb-5">
        <h1 className="font-bold sm:text-md md:text-xl">
          Top <span className="font-medium">Headlines</span>
        </h1>
      </header>

      <main className="space-y-4">
        {feeds &&
          feeds?.map((feed) => (
            <NewsCard
              key={feed.title}
              title={feed.title}
              urlToImage={feed.urlToImage}
              content={feed.content}
              publishedAt={feed.publishedAt}
              url={feed.url}
              author={feed.author}
              description={feed.description}
              source={feed.source}
            />
          ))}
      </main>
      <div ref={ref}>
        <Loading />
      </div>
    </section>
  );
}
