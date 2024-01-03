import { GA_MEASUREMENT_ID } from '@/lib/gtag'
import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>雑談ニュース | 新鮮な話題を毎日更新！</title>
        <meta name="description" content="雑談のネタになるニュースを定期的にお届け。ビジネス、スポーツ、テクノロジー、トレンドなど幅広い話題をカバーします。"></meta>
        <meta name="author" content="yukisato"></meta>
        <link rel="icon" href="/favicon/favicon.ico" />
        <meta property="og:title" content="雑談ニュース | 新鮮な話題を毎日更新！" />
        <meta property="og:description" content="雑談のネタになるニュースを定期的にお届け。ビジネス、スポーツ、テクノロジー、トレンドなど幅広い話題をカバーします。" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zatudan.click" />
        <meta property="og:image" content="/images/zatudanapp.png" />
        <meta property="og:site_name" content="雑談ニュース" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="雑談ニュース | 新鮮な話題を毎日更新！" />
        <meta name="twitter:description" content="雑談のネタになるニュースを定期的にお届け。ビジネス、スポーツ、テクノロジー、トレンドなど幅広い話題をカバーします。" />
        <meta name="twitter:image" content="/images/zatudanapp.png"></meta>
        <meta name="google-adsense-account" content="ca-pub-5709217848867200"></meta>
      </Head>
      <body className="bg-gray-100">
        <header className="bg-gray-800 text-white text-center py-4">
          <h1 className="text-3xl font-bold">雑談ニュース</h1>
        </header>
        <Main />
        <footer className="bg-gray-800 text-gray-300 py-4">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 雑談ニュース. All Rights Reserved.</p>
          </div>
        </footer>
        <NextScript />
        {process.env.NODE_ENV === "production" && (
          <>
            <Script
              async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5709217848867200"
              crossOrigin="anonymous" />
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
        )}
      </body>
    </Html>
  )
}
