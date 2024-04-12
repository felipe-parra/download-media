import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Drawer from '@/components/drawer'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DLApp',
  description: 'Scrapping media',
  openGraph: {
    images: '/og-image.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="dim">
      <body className={`${inter.className} w-full min-h-screen text-primary`}>
        <Drawer />
        {children}
        <Footer />
      </body>
    </html>
  )
}
