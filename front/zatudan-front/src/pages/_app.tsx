import { AppProps } from 'next/app'
import '@/globals.css'
import { Inter } from 'next/font/google'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <GoogleAnalytics />
            <div className={`${inter.className} container mx-auto py-8`}>
                <Component {...pageProps} />
            </div>
        </>
    )
}