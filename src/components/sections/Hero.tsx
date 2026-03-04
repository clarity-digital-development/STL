import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { BUSINESS } from '@/lib/constants'

export function Hero() {
  return (
    <>
      <section className="relative hero-height flex items-end bg-navy overflow-hidden" aria-label="Hero">

        {/* Full-bleed hero photo — let the work sell itself */}
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="/images/hero/hero-main.png"
            alt=""
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover object-[center_40%]"
          />
          {/* Navy-tinted gradient overlay — bottom-heavy for text legibility */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(
                  to top,
                  rgba(12,20,34,0.95) 0%,
                  rgba(12,20,34,0.85) 20%,
                  rgba(12,20,34,0.55) 45%,
                  rgba(12,20,34,0.2) 70%,
                  rgba(12,20,34,0.08) 100%
                )
              `,
            }}
          />
        </div>

        {/* Content pinned to bottom */}
        <div className="container-content relative z-10 px-4 md:px-8 pb-20 md:pb-20 pt-32 md:pt-48">
          <div className="max-w-2xl">

            <h1 className="text-white text-2xl sm:text-3xl md:text-5xl mb-5 reveal" style={{ textShadow: '0 2px 12px rgba(12,20,34,0.5)' }}>
              Precision Craftsmanship for
              <br />
              Tennessee&apos;s Finest Homes
            </h1>

            <p className="text-white/90 text-base md:text-xl max-w-xl mb-8 font-body font-normal leading-relaxed reveal reveal-delay-1" style={{ textShadow: '0 1px 8px rgba(12,20,34,0.6)' }}>
              Custom fences, decks, screened enclosures, and finish carpentry
              across Middle Tennessee.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 reveal reveal-delay-2">
              <Button href="/portfolio" variant="wood" size="lg" className="w-full sm:w-auto">
                View Our Work
              </Button>
              <Button href="/contact" variant="ghost" size="lg" className="w-full sm:w-auto">
                Request a Consultation
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* Credibility strip — solid navy, separated from hero */}
      <div className="bg-navy border-t border-white/10">
        <div className="container-content px-4 md:px-8 py-3 md:py-4 flex flex-wrap justify-center gap-x-6 md:gap-x-10 gap-y-2">
          {[
            `${BUSINESS.yearsExperience}+ Years in Business`,
            'Nashville & Clarksville',
            'Synchrony Financing Available',
          ].map((item) => (
            <span key={item} className="text-white/40 text-sm font-body flex items-center gap-2.5 tracking-wide">
              <span className="w-1 h-1 rounded-full bg-white/25 flex-shrink-0" aria-hidden="true" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </>
  )
}
