import type { Metadata } from 'next'
import { SERVICES } from '@/lib/data/services'
import { ServicePageTemplate } from '@/components/sections/ServicePageTemplate'

const SLUG = 'concrete'

export function generateMetadata(): Metadata {
  const service = SERVICES.find((s) => s.slug === SLUG)!
  return {
    title: service.seoTitle,
    description: service.seoDescription,
    alternates: { canonical: `/services/${SLUG}` },
  }
}

export default function ConcretePage() {
  return (
    <ServicePageTemplate
      slug={SLUG}
      relatedSlugs={['fences-gates', 'decks', 'staining-restoration']}
    />
  )
}
