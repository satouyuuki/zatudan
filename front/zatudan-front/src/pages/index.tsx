import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Article from '@/components/Article';
import { getNewsExtractCategory, getContentFromGpt } from '@/lib/api';
import { splitSentenceByColon } from '@/utils/textUtils';
import Tabs, { Tab } from '@/components/Tabs';

export default function Index({
    articles,
    content
}: InferGetStaticPropsType<typeof getStaticProps>) {
    const array = content?.split("\n\n").map(a => splitSentenceByColon(a));
    return (
        <Tabs>
            <Tab tabType="conversations" key="conversations">
                <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
                    <div className="space-y-4">
                        {array?.map((a, i) => {
                            if (i % 2 !== 0) {
                                return <div key={i} className="flex items-start">
                                    <div className={`first-icon bg-blue-500 rounded-full h-8 w-8 flex items-center justify-center text-white mx-3`}>
                                        {a?.speaker}
                                    </div>
                                    <p className="bg-gray-200 rounded-lg p-3 text-sm max-w-xs text-black">
                                        {a?.content}
                                    </p>
                                </div>
                            }
                            return <div key={i} className="flex items-start">
                                <div className={`last-icon bg-green-500 rounded-full h-8 w-8 flex items-center justify-center text-white mx-3`}>
                                    {a?.speaker}
                                </div>
                                <p className="bg-gray-200 rounded-lg p-3 text-sm max-w-xs text-black">
                                    {a?.content}
                                </p>
                            </div>
                        })}
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

export const getStaticProps = (async () => {
    const articles = await getNewsExtractCategory();
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