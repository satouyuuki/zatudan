import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { pageview, GA_MEASUREMENT_ID } from '@/lib/gtag';
import Script from 'next/script';

const GoogleAnalytics = () => {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url: string) => {
            // Google Analyticsのgtag関数を呼び出してページトラッキングを送信
            pageview(url);
        };

        // ページ遷移時にイベントを送信
        router.events.on('routeChangeComplete', handleRouteChange);

        // cleanup function
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);

    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            <Script
                id="gtag-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', '${GA_MEASUREMENT_ID}');
`,
                }}
            />
        </>
    )
};

export default GoogleAnalytics;