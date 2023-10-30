'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { IProduct } from '@/consts'

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
          <div className="grid sm:grid-cols-3 gap-10 max-w-[400px] sm:max-w-full mx-auto">
            {products.map((product, index) => (
              <div key={index}>
                <div
                  className={`overflow-hidden relative aspect-square after:absolute after:w-full after:top-0 after:left-0 after:bg-black after:opacity-30 ${
                    darkVersion ? 'border-[6px] border-yellow-800' : ''
                  }`}
                >
                  <Image
                    src={product.src}
                    width={500}
                    height={500}
                    alt={product.alt}
                    priority
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="text-center py-3">
                  <h3 className="text-2xl mb-2">{product.title}</h3>
                  <p className="tracking-[1px] uppercase">
                    <span
                      className={`rounded-md inline-block px-2 py-1 text-xs text-white ${
                        darkVersion ? 'bg-yellow-800' : 'bg-yellow-500'
                      }`}
                    >
                      {product.category}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
          {showButton && (
            <div className="flex justify-center mt-14">
              <button
                className="border border-yellow-800 py-4 px-8 uppercase tracking-[2px] text-sm hover:bg-yellow-800 hover:text-white transition-colors self-center"
                onClick={() => router.push('/products', { scroll: false })}
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
