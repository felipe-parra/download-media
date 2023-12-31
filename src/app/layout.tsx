import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Drawer from '@/components/drawer'

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
    <html lang="en" data-theme="dim" className='w-full h-screen'>
      <body className={inter.className}>
        <Drawer />
        {children}
      </body>
    </html>
  )
}
