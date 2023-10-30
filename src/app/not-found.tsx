import Link from 'next/link'

import { Hero } from '@/components'
import { MainLayout } from '@/layouts'

export default function NotFound() {
  return (
    <MainLayout>
      <Hero title="Page not found" shrink />
      <div className="container mx-auto px-4 py-16 sm:py-28 max-w-[800px]">
        <div className="flex flex-col gap-4 font-light text-center">
          <p>Could not find requested resource</p>
          <Link href="/" className="text-yellow-500 underline">
            Home Page
          </Link>
        </div>
      </div>
    </MainLayout>
  )
}
