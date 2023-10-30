import { About, Hero } from '@/components'
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
    </MainLayout>
  )
}
