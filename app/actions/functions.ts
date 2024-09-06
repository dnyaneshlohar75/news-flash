"use server";

import { NewsProps, source } from "@/types/types";

//init
const endpoint = new URL("https://newsapi.org/v2/top-headlines");
endpoint.searchParams.set("apiKey", process.env.NEWS_API as string);

const getSources = async () => {
    try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines/sources?country=in&apiKey=${process.env.NEWS_API as string}`);
        let source = await response.json() as source;
        return source;
    } catch (error) {
        console.log((error as Error).message);
    }

}

export const setUserNewsCategories = async (formEntries: FormData) => {
    const keys = formEntries.getAll("category")
    console.log(keys)
    return;
}


export const fetchFeeds = async ({ page = 1, search }: { page?: number, search?: string | undefined }) => {
    console.log("Fn called for page no:", page);

    endpoint.searchParams.set("country", "in");
    endpoint.searchParams.set("pageSize", "10");
    endpoint.searchParams.set("page", `${page}`);

    try {
        const response = await fetch(endpoint);
        let articles = await response.json() as NewsProps;

        if (articles) {
            return articles;
        }

    } catch (error) {
        console.log((error as Error).message);
    }

    return {} as NewsProps;
}

