import Link from 'next/link'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'
import { Button } from '@/components/ui/Button'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { ServiceSchema } from '@/components/seo/ServiceSchema'
import { SERVICES } from '@/lib/data/services'
import type { Service } from '@/types'

interface ServicePageTemplateProps {
  slug: string
  relatedSlugs?: string[]
  children?: React.ReactNode
}

export function ServicePageTemplate({ slug, relatedSlugs, children }: ServicePageTemplateProps) {
  const service = SERVICES.find((s) => s.slug === slug)!
  const defaultRelated = SERVICES.filter(
    (s) => s.slug !== slug
  ).slice(0, 3)
  const relatedServices = relatedSlugs
    ? SERVICES.filter((s) => relatedSlugs.includes(s.slug))
    : defaultRelated

  return (
    <>
      <ServiceSchema service={service} />

      {/* Hero */}
      <section className="bg-navy section-pad-lg pt-36">
        <div className="container-content px-4 md:px-8">
          <nav className="mb-6 text-sm font-body" aria-label="Breadcrumb">
            <Link href="/services" className="text-white/40 hover:text-wood transition-colors">
              Services
            </Link>
            <span className="text-white/20 mx-2">/</span>
            <span className="text-wood">{service.title}</span>
          </nav>
          <p className="text-wood text-xs font-body font-semibold uppercase tracking-widest mb-4 reveal">
            Services
          </p>
          <h1 className="text-white max-w-2xl reveal reveal-delay-1">{service.title}</h1>
          <p className="text-white/70 text-xl mt-5 max-w-prose font-body font-light reveal reveal-delay-2">
            {service.shortDescription}
          </p>
        </div>
      </section>

      {/* Main content */}
      <SectionWrapper className="bg-cream">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="heading-rule mb-6">Built Without Shortcuts</h2>
            <p className="text-stone-600 leading-relaxed mb-8 text-[1.05rem]">
              {service.longDescription}
            </p>
            <ul className="space-y-3 mb-10">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-stone-700 text-sm">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-wood mt-2 flex-shrink-0"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Request a Free Estimate
              </Button>
              <Button href="/financing" variant="secondary" size="lg">
                Financing Available
              </Button>
            </div>
          </div>
          <ImagePlaceholder
            src={service.image}
            gradientFrom={service.gradientFrom}
            gradientTo={service.gradientTo}
            aspectRatio="4/3"
            label={`${service.title} — completed project`}
          />
        </div>
      </SectionWrapper>

      {/* Optional page-specific content (e.g. Materials Matter) */}
      {children}

      {/* Photo gallery */}
      <SectionWrapper className="bg-cream-dark">
        <h2 className="heading-rule mb-10">Recent {service.title} Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.images && service.images.length > 0
            ? service.images.map((img, n) => (
                <ImagePlaceholder
                  key={img}
                  src={img}
                  aspectRatio="4/3"
                  label={`${service.title} project photo ${n + 1}`}
                  className={`reveal ${n > 0 ? `reveal-delay-${Math.min(n, 5)}` : ''}`}
                />
              ))
            : [1, 2, 3, 4, 5, 6].map((n) => (
                <ImagePlaceholder
                  key={n}
                  gradientFrom={n % 2 === 0 ? service.gradientTo : service.gradientFrom}
                  gradientTo={n % 2 === 0 ? service.gradientFrom : service.gradientTo}
                  aspectRatio="4/3"
                  label={`${service.title} project photo ${n}`}
                  className={`reveal reveal-delay-${Math.min(n, 5)}`}
                />
              ))}
        </div>
        {!service.images?.length && (
          <p className="text-stone-400 text-sm font-body mt-6 text-center">
            Professional photography coming soon — real project photos will replace these placeholders.
          </p>
        )}
      </SectionWrapper>

      {/* Financing callout */}
      <section className="section-pad bg-navy">
        <div className="container-content px-4 md:px-8 text-center">
          <h2 className="text-white mb-4">Flexible Financing Available</h2>
          <p className="text-white/60 max-w-xl mx-auto mb-8 font-body">
            Through Synchrony HOME financing, you can invest in your property now
            and pay over time. Subject to credit approval.
          </p>
          <Button href="/financing" variant="wood" size="lg">
            Explore Financing Options
          </Button>
        </div>
      </section>

      {/* Related services */}
      <SectionWrapper className="bg-cream">
        <h2 className="heading-rule mb-10">Related Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {relatedServices.map((related) => (
            <Link
              key={related.slug}
              href={`/services/${related.slug}`}
              className="group bg-white rounded-card shadow-card p-6 card-lift"
            >
              <ImagePlaceholder
                src={related.image}
                gradientFrom={related.gradientFrom}
                gradientTo={related.gradientTo}
                aspectRatio="16/9"
                label={related.title}
                className="mb-4"
              />
              <h3 className="text-navy font-display text-lg group-hover:text-wood transition-colors">
                {related.title}
              </h3>
              <p className="text-stone-500 text-sm mt-2">{related.shortDescription}</p>
            </Link>
          ))}
        </div>
      </SectionWrapper>
    </>
  )
}
