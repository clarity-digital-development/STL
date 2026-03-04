import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {SERVICES.map((service, index) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`group relative block rounded-card overflow-hidden shadow-card reveal ${
                  index > 0 ? `reveal-delay-${Math.min(index, 5)}` : ''
                }`}
              >
                {/* Image fills entire card */}
                {service.image ? (
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    quality={85}
                  />
                ) : (
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, ${service.gradientFrom} 0%, ${service.gradientTo} 100%)`,
                    }}
                  />
                )}

                {/* Dark overlay — covers entire card */}
                <div className="absolute inset-0 bg-navy/50 group-hover:bg-navy/65 transition-colors duration-300 z-10" />

                {/* Content layer */}
                <div className="relative z-20 flex flex-col aspect-[3/4]">
                  {/* Title centered */}
                  <div className="flex-1 flex items-center justify-center px-6">
                    <h2 className="text-white font-display text-xl md:text-2xl text-center drop-shadow-lg">
                      {service.title}
                    </h2>
                  </div>

                  {/* Description — expands on hover */}
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-in-out">
                    <div className="overflow-hidden">
                      <div className="px-5 py-4">
                        <p className="text-white/80 font-body text-sm leading-relaxed">
                          {service.shortDescription}
                        </p>
                        <span className="mt-2 text-wood text-sm font-body font-medium inline-flex items-center gap-1.5">
                          Learn more
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                          </svg>
                        </span>
                      </div>
                    </div>
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
