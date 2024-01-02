import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Button from '@/components/Btn'
import Article from '@/components/Article';
import { CATEGORIES } from '@/lib/constants';
import { getNewsExtractCategory } from '@/lib/api';

export default function Index({
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

export const getStaticProps = (async () => {
    const articles = await getNewsExtractCategory();
    return {
        props: {
            articles
        }
    };
}) satisfies GetStaticProps