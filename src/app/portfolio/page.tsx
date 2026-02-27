import type { Metadata } from 'next'
import { PortfolioGrid } from '@/components/portfolio/PortfolioGrid'
import { PORTFOLIO_PROJECTS } from '@/lib/data/portfolio'

export const metadata: Metadata = {
  title: 'Portfolio — Our Work in Nashville & Clarksville',
  description:
    "Browse Sky's the Limit project portfolio. Custom fences, decks, pergolas, screened enclosures, concrete, interior work, and custom woodwork — serving Nashville, Brentwood, Franklin, and Clarksville TN.",
  alternates: { canonical: '/portfolio' },
}

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy section-pad-lg pt-28 md:pt-36">
        <div className="container-content px-4 md:px-8">
          <p className="text-wood text-xs font-body font-semibold uppercase tracking-widest mb-4 reveal">
            Our Work
          </p>
          <h1 className="text-white reveal reveal-delay-1">Portfolio</h1>
          <p className="text-white/70 text-xl mt-5 max-w-prose font-body font-light reveal reveal-delay-2">
            Every project here represents a real client, a real space, and a real commitment
            to doing it right. Filter by service type or browse everything below.
          </p>
        </div>
      </section>

      {/* Filterable grid — client component */}
      <section className="section-pad bg-cream">
        <div className="container-content px-4 md:px-8">
          <PortfolioGrid projects={PORTFOLIO_PROJECTS} />
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-navy-dark">
        <div className="container-content px-4 md:px-8 text-center">
          <h2 className="text-white mb-4">Have a Project in Mind?</h2>
          <p className="text-white/60 max-w-lg mx-auto mb-8 font-body">
            Every project in this portfolio started with a conversation. Let&apos;s talk about yours.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center bg-wood text-white font-body font-medium px-8 py-4 text-lg rounded-sm hover:bg-wood-dark transition-colors duration-200"
          >
            Get a Free Estimate
          </a>
        </div>
      </section>
    </>
  )
}
