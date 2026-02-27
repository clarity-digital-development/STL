import type { Metadata } from 'next'
import { SERVICES } from '@/lib/data/services'
import { ServicePageTemplate } from '@/components/sections/ServicePageTemplate'
import { SectionWrapper } from '@/components/ui/SectionWrapper'

const SLUG = 'staining-restoration'

export function generateMetadata(): Metadata {
  const service = SERVICES.find((s) => s.slug === SLUG)!
  return {
    title: service.seoTitle,
    description: service.seoDescription,
    alternates: { canonical: `/services/${SLUG}` },
  }
}

export default function StainingRestorationPage() {
  return (
    <ServicePageTemplate
      slug={SLUG}
      relatedSlugs={['fences-gates', 'decks', 'concrete']}
    >
      {/* Materials Matter — Sherwin Williams PRO+ */}
      <SectionWrapper className="bg-white">
        <h2 className="heading-rule mb-8 reveal">Materials Matter</h2>
        <div className="flex flex-col sm:flex-row items-start gap-6 reveal reveal-delay-1">
          <div className="flex-shrink-0 bg-navy/5 border border-navy/10 rounded-lg px-5 py-4 flex items-center justify-center">
            <div className="text-center">
              <p className="font-display text-navy text-lg font-bold leading-tight">Sherwin Williams</p>
              <p className="text-wood text-xs font-body font-semibold tracking-widest uppercase mt-0.5">PRO+</p>
            </div>
          </div>
          <div>
            <p className="text-stone-600 leading-relaxed">
              We use exclusively <strong className="text-navy">Sherwin Williams PRO+ products</strong> — professional-grade
              stains and finishes that outlast consumer alternatives. As a PRO+ contractor, we have access to premium product
              lines formulated for commercial durability on residential projects. The difference shows in year three, when
              the finish still looks like it did on day one.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </ServicePageTemplate>
  )
}
