import { AppProps } from 'next/app'
import '@/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className={`${inter.className} container mx-auto py-8`}>
            <Component {...pageProps} />
        </div>
    )
}