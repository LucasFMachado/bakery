import { AboutUs, Hero } from '@/components'
import { MainLayout } from '@/layouts'

export default function About() {
  return (
    <MainLayout>
      <Hero title="About us" shrink />
      <AboutUs />
    </MainLayout>
  )
}
