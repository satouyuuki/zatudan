import { ArticleProps } from "@/types";
import { UTCtoJST } from "@/utils/dateUtils";

const Article = ({ article }: { article: ArticleProps }) => {
    const jstPubDate = UTCtoJST(article.pubDate);
    return <div className="border border-gray-300 rounded-md shadow-md p-4">
        <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
        <p className="text-gray-600 mb-4">{article.description}</p>
        <p className="text-sm text-blue-500 hover:underline"><a href={article.link} target='_blank'>もっと見る</a></p>
        <p className="text-gray-400 text-xs">公開日: {jstPubDate}</p>
    </div>
}

export default Article;