import { GetStaticProps, InferGetStaticPropsType } from 'next'
import path from 'path';
import fs from 'fs/promises';

export default function Index({
    articles,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
                <div key={article.article_id} className="border border-gray-300 rounded-md shadow-md p-4">
                    <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
                    <p className="text-gray-600 mb-4">{article.description}</p>
                    <p className="text-sm text-blue-500 hover:underline"><a href={article.link} target='_blank'>もっと見る</a></p>
                    <p className="text-gray-400 text-xs">公開日: {article.pubDate}</p>
                </div>
            ))}
        </div>
    )
}
type Article = {
    article_id: string
    title: string
    link: string
    description: string
    pubDate: string
}

type Res = {
    status: string
    totalResults: number
    results: Article[]
    nextPage: string
}

export const getStaticProps = async () => {
    console.log("NODE_ENV: ", process.env.NODE_ENV);
    let apiUrl: Partial<string> = "";
    let data: Partial<Res> = {};

    if (process.env.NODE_ENV === 'production') {
        const url = new URL(process.env.NEWS_API_URL!);
        url.searchParams.append('apikey', process.env.NEWS_API_KEY!);
        url.searchParams.append('country', 'jp');
        url.searchParams.append('language', 'jp');
        url.searchParams.append('prioritydomain', 'top');
        apiUrl = url.toString();

    } else {
        apiUrl = path.join(process.cwd(), process.env.NEWS_API_URL!);
    }

    if (!apiUrl) return { props: { articles: [] } };

    try {
        if (apiUrl.endsWith('.json')) {
            const jsonData = await fs.readFile(apiUrl, 'utf-8');
            data = JSON.parse(jsonData);
        } else {
            const response = await fetch(apiUrl);
            data = await response.json();
        }

    } catch (error) {
        console.error('Error fetching data:', error);
    }

    return { props: { articles: data.results as Article[] } };
}