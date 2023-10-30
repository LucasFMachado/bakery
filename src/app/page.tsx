import { About, Hero, OurProducts } from '@/components'
import { products } from '@/consts'
import { MainLayout } from '@/layouts'

export default function Home() {
  return (
    <MainLayout>
      <Hero
        title="Bakery"
        subtitle="Fresh bread daily"
        showLink
        linkText="Contact us"
        linkTo="/contact"
      />
      <About short />
      <OurProducts
        title="Check our products"
        products={products}
        showButton
        darkVersion
      />
    </MainLayout>
  )
}
