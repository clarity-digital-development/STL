import type { Metadata } from 'next'
import Link from 'next/link'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'
import { Button } from '@/components/ui/Button'
import { SERVICES } from '@/lib/data/services'

export const metadata: Metadata = {
  title: 'Our Services — Custom Outdoor Living & Carpentry',
  description:
    "Full-service craftsman contractor in Nashville and Clarksville TN. Custom fences, decks, pergolas, screened enclosures, staining, concrete, interior work, and custom woodwork.",
  alternates: {
    canonical: '/services',
  },
}

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-navy section-pad-lg pt-28 md:pt-36">
        <div className="container-content px-4 md:px-8">
          <p className="text-wood text-xs font-body font-semibold uppercase tracking-widest mb-4 reveal">
            What We Build
          </p>
          <h1 className="text-white max-w-2xl reveal reveal-delay-1">
            Every Service, Same Standard
          </h1>
          <p className="text-white/70 text-xl mt-5 max-w-prose font-body font-light reveal reveal-delay-2">
            Whether you need a cedar privacy fence or a custom built-in bookshelf,
            we bring the same attention to detail to every project we take on.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-pad bg-cream">
        <div className="container-content px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {SERVICES.map((service, index) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`group bg-white rounded-card shadow-card card-lift overflow-hidden reveal ${
                  index > 0 ? `reveal-delay-${Math.min(index, 5)}` : ''
                }`}
              >
                {/* Mobile: full-width image on top. Desktop: hidden (uses inline thumbnail instead) */}
                <div className="md:hidden">
                  <ImagePlaceholder
                    src={service.image}
                    gradientFrom={service.gradientFrom}
                    gradientTo={service.gradientTo}
                    aspectRatio="16/9"
                    label={service.title}
                    rounded={false}
                  />
                </div>

                <div className="flex items-start gap-6 p-5 md:p-6">
                  {/* Desktop: compact square thumbnail */}
                  <div className="hidden md:block flex-shrink-0">
                    <ImagePlaceholder
                      src={service.image}
                      gradientFrom={service.gradientFrom}
                      gradientTo={service.gradientTo}
                      aspectRatio="1/1"
                      label={service.title}
                      className="w-24 h-24"
                      rounded
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-navy text-xl font-display mb-2 group-hover:text-wood transition-colors duration-200">
                      {service.title}
                    </h2>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      {service.shortDescription}
                    </p>
                    <span className="mt-3 text-wood text-sm font-body font-medium inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-200">
                      Learn more
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 bg-navy rounded-card p-10 text-center">
            <h2 className="text-white text-3xl font-display mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-white/60 max-w-lg mx-auto mb-8 font-body">
              We&apos;ll walk through your project in a free consultation and give you
              honest recommendations — no upselling, no pressure.
            </p>
            <Button href="/contact" variant="wood" size="lg">
              Schedule a Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
