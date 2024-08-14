"use server";

import { article, NewsProps } from "@/types/types";

export const setUserNewsCategories = async (formEntries: FormData) => {
    const keys = formEntries.keys();
    console.log(keys);
    return;
}

const endpoint = new URL("https://newsapi.org/v2/top-headlines");
endpoint.searchParams.set("country", "in");
endpoint.searchParams.set("apiKey", "3add8857e8194e2f9055098c7e56648b");

export async function fetchFeeds({ page = 1, search }: { page?: number, search?: string | undefined }) {
    endpoint.searchParams.set("pageSize", "10");
    endpoint.searchParams.set("page", `${page}`);

    const response = await fetch(endpoint);
    let articles = await response.json();

    if (articles) {
        return articles as NewsProps;
    }
    
    return {} as NewsProps;
}