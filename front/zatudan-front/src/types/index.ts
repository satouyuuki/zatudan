export type ArticleProps = {
    article_id: string
    title: string
    link: string
    description: string
    pubDate: string
}

export type ButtonProps = {
    id: string;
    name: string;
};

export type Res = {
    status: string
    totalResults: number
    results: ArticleProps[]
    nextPage: string
}

// type CategoryType = typeof OCategory[keyof typeof OCategory];