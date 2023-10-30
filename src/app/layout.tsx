import type { Metadata } from 'next'
import { Roboto_Slab } from 'next/font/google'
import './globals.css'

const robotoSlab = Roboto_Slab({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bakery',
  description: 'Fresh bread daily',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={robotoSlab.className}>
          <main className='flex min-h-screen flex-col'>
          {children}
          </main>
      </body>
    </html>
  )
}
