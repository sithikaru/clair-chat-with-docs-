import { cn } from '@/libs/utils'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Clair',
  description: 'Created By Zijja',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='light'>
      <body className={cn(
        "min-h-screen font-sans antialiased grainy",
        inter.className,
      )}>{children}</body>
    </html>
  )
}
