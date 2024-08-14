export interface categoryListProps {
    id: string;
    image: string;
    name: string;
    isChecked?: boolean;
}

type article = {
    source?: {
        id: string | null,
        name?: string
    },
    author?: string,
    title: string,
    description?: string | null,
    url: string,
    urlToImage?: string | undefined,
    publishedAt: string,
    content: string | null

}

export interface NewsProps {
    status: string,
    totalResults: number,
    articles: article[],
}