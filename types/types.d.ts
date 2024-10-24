export interface categoryListProps {
    id: string;
    image: string;
    name: string;
    isChecked?: boolean;
}

type source = {
    status: string,
    sources: [{
        id: string,
        name: string,
        description: string,
        url: string,
        category: string,
        language: string,
        country: string
    }]
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

type Post = {
    postId: string,
    userId: string,
    title: string,
    description?: string,
    images: string[],
    like: string[],
    comments: string[],
    createdAt: Date
}

export interface NewsProps {
    status: string,
    totalResults: number,
    articles: article[],
}