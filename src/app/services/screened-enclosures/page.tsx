import type { Metadata } from 'next'
import { SERVICES } from '@/lib/data/services'
import { ServicePageTemplate } from '@/components/sections/ServicePageTemplate'
import { SectionWrapper } from '@/components/ui/SectionWrapper'

const SLUG = 'screened-enclosures'

export function generateMetadata(): Metadata {
  const service = SERVICES.find((s) => s.slug === SLUG)!
  return {
    title: service.seoTitle,
    description: service.seoDescription,
    alternates: { canonical: `/services/${SLUG}` },
  }
}

export default function ScreenedEnclosuresPage() {
  return (
    <ServicePageTemplate
      slug={SLUG}
      relatedSlugs={['decks', 'pergolas-covered-structures', 'fences-gates']}
    >
      {/* Materials Matter — Screeneze + Super Screen */}
      <SectionWrapper className="bg-white">
        <h2 className="heading-rule mb-8 reveal">Materials Matter</h2>
        <div className="grid md:grid-cols-2 gap-8">

          {/* Screeneze */}
          <div className="flex items-start gap-5 reveal reveal-delay-1">
            <div className="flex-shrink-0 bg-navy/5 border border-navy/10 rounded-lg px-4 py-4 flex items-center justify-center">
              <div className="text-center">
                <p className="font-display text-navy text-base font-bold leading-tight">Screeneze</p>
                <p className="text-wood text-[10px] font-body font-semibold tracking-widest uppercase mt-0.5">Legacy System</p>
              </div>
            </div>
            <div>
              <p className="text-stone-600 leading-relaxed text-[0.95rem]">
                Our enclosures are built with the <strong className="text-navy">Screeneze Legacy System</strong> — a
                professional screening method rated for 20+ years of durability. No sagging, no blowouts,
                no re-screening every few years.
              </p>
            </div>
          </div>

          {/* Super Screen */}
          <div className="flex items-start gap-5 reveal reveal-delay-2">
            <div className="flex-shrink-0 bg-navy/5 border border-navy/10 rounded-lg px-4 py-4 flex items-center justify-center">
              <div className="text-center">
                <p className="font-display text-navy text-base font-bold leading-tight">Super Screen</p>
                <p className="text-wood text-[10px] font-body font-semibold tracking-widest uppercase mt-0.5">Premium Mesh</p>
              </div>
            </div>
            <div>
              <p className="text-stone-600 leading-relaxed text-[0.95rem]">
                We pair the Screeneze system with <strong className="text-navy">Super Screen mesh</strong> — a heavy-duty
                screen material that resists tears, pet damage, and UV degradation. The screen that lasts.
              </p>
            </div>
          </div>

        </div>
      </SectionWrapper>
    </ServicePageTemplate>
  )
}
