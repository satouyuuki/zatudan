import type {
    InferGetStaticPropsType,
    GetStaticProps,
    GetStaticPaths,
} from 'next'
import { CATEGORIES } from '@/lib/constants';
import Article from '@/components/Article';
import { getContentFromGpt, getNewsExtractCategory } from '@/lib/api';
import Tabs, { Tab } from '@/components/Tabs';
import { splitSentenceByColon } from '@/utils/textUtils';

export default function Category({
    articles,
    content
}: InferGetStaticPropsType<typeof getStaticProps>) {
    const array = content?.split(/\n\n|\n/).map(a => splitSentenceByColon(a));
    return (
        <Tabs>
            <Tab tabType="conversations" key="conversations">
                <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
                    <div className="space-y-4">
                        {array?.map((a, i) => (
                            <div key={i} className="flex items-start">
                                <div className={`${i % 2 !== 0 ? 'first' : 'last'}-icon rounded-full h-8 w-8 flex items-center justify-center bg-${i % 2 !== 0 ? 'blue' : 'green'}-500 text-white mx-3`}>
                                    {a?.speaker}
                                </div>
                                <p className="bg-gray-200 rounded-lg p-3 text-sm max-w-xs text-black">
                                    {a?.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </Tab>
            <Tab tabType="articles" key="articles">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {articles?.map((article) => (
                        <Article key={article.article_id} article={article} />
                    ))}
                </div>
            </Tab>
        </Tabs>
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
    let content: string | null = null;
    if (articles && articles[0]) {
        content = await getContentFromGpt({ content: articles[0].title });
    }
    return {
        props: {
            articles,
            content
        }
    };
}) satisfies GetStaticProps