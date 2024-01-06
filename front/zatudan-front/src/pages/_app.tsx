import { AppProps } from 'next/app'
import '@/globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
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
            <Header />
            <div className={`${inter.className} container mx-auto py-8`}>
                <Component {...pageProps} />
            </div>
            <Footer />
        </>
    )
}