import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon/favicon.ico" />
        <meta name="google-adsense-account" content="ca-pub-5709217848867200"></meta>
      </Head>
      <body className="bg-gray-100">
        <header className="bg-gray-800 text-white text-center py-4">
          <h1 className="text-3xl font-bold">雑談のためのニュース</h1>
        </header>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
