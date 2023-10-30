import { Hero, OurProducts } from '@/components'
import { allProducts } from '@/consts'
import { MainLayout } from '@/layouts'

export default function Products() {
  return (
    <MainLayout>
      <Hero title="Products" shrink />
      <OurProducts title="Check our products" products={allProducts} />
    </MainLayout>
  )
}
