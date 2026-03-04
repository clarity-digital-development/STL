import Link from 'next/link'
import Image from 'next/image'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { Button } from '@/components/ui/Button'
import { SERVICES } from '@/lib/data/services'
import { staggerClass } from '@/lib/utils'

export function ServicesGrid() {
  // Show first 6 services on homepage grid
  const displayServices = SERVICES.slice(0, 6)

  return (
    <SectionWrapper className="bg-cream-dark">
      <div className="text-center mb-14">
        <p className="text-wood text-xs font-body font-semibold uppercase tracking-widest mb-3 reveal">
          What We Build
        </p>
        <h2 className="heading-rule heading-rule-center reveal reveal-delay-1">
          Our Services
        </h2>
        <p className="text-stone-600 mt-5 max-w-2xl mx-auto reveal reveal-delay-2">
          From privacy fences to pergolas, interior accent walls to stamped concrete —
          we bring the same standard of craftsmanship to every project, every time.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {displayServices.map((service, index) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className={`group relative block rounded-card overflow-hidden shadow-card reveal ${staggerClass(index)}`}
          >
            {/* Image fills entire card */}
            {service.image ? (
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
            <div className="relative z-20 flex flex-col aspect-[4/3]">
              {/* Title centered */}
              <div className="flex-1 flex items-center justify-center px-6">
                <h3 className="text-white font-display text-xl md:text-2xl text-center drop-shadow-lg">
                  {service.title}
                </h3>
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

      <div className="text-center mt-12 reveal">
        <Button href="/services" variant="secondary" size="md">
          See All Services
        </Button>
      </div>
    </SectionWrapper>
  )
}
