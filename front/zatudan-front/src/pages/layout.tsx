import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 font-sans`}>
        <div className="container mx-auto py-8">
          {children}
        </div>
      </body>
    </html>
  )
}
