import { AboutUs, Hero, OurProducts } from '@/components'
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
      <AboutUs short />
      <OurProducts
        title="Check our products"
        products={products}
        showButton
        darkVersion
      />
    </MainLayout>
  )
}
