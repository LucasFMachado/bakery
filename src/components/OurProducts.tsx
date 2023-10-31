'use client'

import { useRouter } from 'next/navigation'

import { IProduct } from '@/consts'

import { ProductCard } from './ProductCard'

interface OurProductsProps {
  products: IProduct[]
  title?: string
  darkVersion?: boolean
  showButton?: boolean
}

export function OurProducts({
  products,
  title,
  darkVersion,
  showButton,
}: OurProductsProps) {
  const router = useRouter()

  return (
    <>
      <div
        className={`py-16 sm:py-28 ${
          darkVersion ? 'bg-[#222] text-white' : 'bg-white'
        }`}
      >
        <div className="container mx-auto px-4">
          {title && <h2 className="text-4xl text-center mb-10">{title}</h2>}
          <div className="grid sm:grid-cols-3 gap-5 md:gap-10 max-w-[400px] sm:max-w-full mx-auto">
            {products.map(product => (
              <ProductCard key={product.title} product={product} />
            ))}
          </div>
          {showButton && (
            <div className="flex justify-center mt-14">
              <button
                className="border border-yellow-800 py-4 px-8 uppercase tracking-[2px] text-sm hover:bg-yellow-800 hover:text-white transition-colors self-center"
                onClick={() => router.push('/products')}
              >
                All products
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
