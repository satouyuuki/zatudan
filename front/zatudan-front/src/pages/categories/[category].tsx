import type {
    InferGetStaticPropsType,
    GetStaticProps,
    GetStaticPaths,
} from 'next'
import { CATEGORIES } from '@/lib/constants';
import Button from '@/components/Btn';
import Article from '@/components/Article';
import { getNewsExtractCategory } from '@/lib/api';

export default function Category({
    articles,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <div className='flex justify-center'>
                {Object.entries(CATEGORIES).map(([key, val]) => (
                    <Button key={key} id={key} name={val} />
                ))}
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {articles?.map((article) => (
                    <Article key={article.article_id} article={article} />
                ))}
            </div>
        </>

    )
}

export const getStaticPaths = (async () => {
    const paths = Object.keys(CATEGORIES)
        .filter(category => category !== "top")
        .map(category => ({
            params: { category }
        }));
    return { paths, fallback: false }
}) satisfies GetStaticPaths

export const getStaticProps = (async ({ params }) => {
    const articles = await getNewsExtractCategory({
        category: params?.category as string,
        countly: params?.category === "world" ? undefined : "jp",
        language: params?.category === "world" ? "en" : "jp",
    });
    return {
        props: {
            articles
        }
    };
}) satisfies GetStaticProps