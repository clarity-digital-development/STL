import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { FeaturedProjects } from '@/components/sections/FeaturedProjects'
import { CredibilityBar } from '@/components/ui/CredibilityBar'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { HomeCTA } from '@/components/sections/HomeCTA'

export const metadata: Metadata = {
  title: "Sky's the Limit | Nashville's Premium Craftsman Contractor",
  description:
    "Nashville's premier contractor for custom decks, fences, pergolas, screened enclosures, and finish work. Serving Brentwood, Franklin, Belle Meade, and all of greater Nashville. Synchrony financing available.",
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <FeaturedProjects />
      <CredibilityBar />
      <TestimonialsSection />
      <HomeCTA />
    </>
  )
}
