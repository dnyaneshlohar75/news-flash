"use client";

import React, { useEffect, useState } from 'react'

interface article {
    source: {
        id?: string,
        name: string
    },
    author: string;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string
}

interface ResultProps {
    status: string;
    totalResults: number;
    articles: article[]

}

export default function Results() {

    const [results, setResults] = useState<ResultProps>();

    useEffect(() => {

        const endpoint = "https://newsapi.org/v2/everything?domains=techcrunch.com&apiKey=3add8857e8194e2f9055098c7e56648b";
        
        async function getNews() {
            try {
                const response = await fetch(endpoint);
                const data = await response.json();
                console.log(data);
                setResults(data);
            } catch(er : any) {
                console.log(er.message)
            }
        }

        getNews();
    }, []);
  return (
    <div className='p-12'>
        <h1 className='font-semibold text-xl'>Results</h1>
        <ul>
            {results?.articles.map((article) => (
                <li>{article.title}</li>
            ))}
        </ul>
    </div>
  )
}