import type { Metadata } from 'next'
import { SERVICES } from '@/lib/data/services'
import { ServicePageTemplate } from '@/components/sections/ServicePageTemplate'

const SLUG = 'custom-woodwork'

export function generateMetadata(): Metadata {
  const service = SERVICES.find((s) => s.slug === SLUG)!
  return {
    title: service.seoTitle,
    description: service.seoDescription,
    alternates: { canonical: `/services/${SLUG}` },
  }
}

export default function CustomWoodworkPage() {
  return (
    <ServicePageTemplate
      slug={SLUG}
      relatedSlugs={['interior', 'pergolas-covered-structures', 'fences-gates']}
    />
  )
}
