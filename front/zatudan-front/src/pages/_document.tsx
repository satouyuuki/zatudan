import { GA_MEASUREMENT_ID } from '@/lib/gtag'
import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
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
