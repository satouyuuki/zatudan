import { useState, ReactNode } from 'react';

type TabProps = {
    children: ReactNode;
    tabType: 'conversations' | 'articles';
};

type TabsProps = {
    children: React.ReactElement<TabProps, string | React.JSXElementConstructor<any>>[];
};

export const Tab: React.FC<TabProps> = ({ children }) => {
    return <div>{children}</div>;
};

const Tabs: React.FC<TabsProps> = ({ children }: { children: React.ReactElement<TabProps>[] }) => {
    const [activeTab, setActiveTab] = useState<'conversations' | 'articles'>('conversations');

    const conversationChild = children.find(child => child.props.tabType === 'conversations');
    const articleChild = children.find(child => child.props.tabType === 'articles');

    const conversations = conversationChild ? conversationChild.props.children : null;
    const articles = articleChild ? articleChild.props.children : null;

    return (
        <>
            <div className="flex justify-center">
                <button className={`px-4 py-2 mr-4 ${activeTab === 'conversations' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`} onClick={() => setActiveTab('conversations')}>雑談風</button>
                <button className={`px-4 py-2 ${activeTab === 'articles' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`} onClick={() => setActiveTab('articles')}>記事一覧</button>
            </div>
            <div className={`${activeTab === 'conversations' ? 'block' : 'hidden'}`}>
                {conversations}
            </div>
            <div className={`${activeTab === 'articles' ? 'block' : 'hidden'}`}>
                {articles}
            </div>
        </>
    );
};

export default Tabs;
