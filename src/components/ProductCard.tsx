import Image from 'next/image'

import { IProduct } from '@/consts'

interface ProductCardProps {
  product: IProduct
  darkVersion?: boolean
}

export function ProductCard({ product, darkVersion }: ProductCardProps) {
  return (
    <div>
      <div
        className={`overflow-hidden relative aspect-square after:absolute after:w-full after:top-0 after:left-0 after:bg-black after:opacity-30 w-[250px] h-[250px] mx-auto md:w-fit md:h-fit ${
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
  )
}
