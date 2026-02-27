import { Button } from '@/components/ui/Button'
import { BUSINESS } from '@/lib/constants'

export function HomeCTA() {
  return (
    <section
      className="relative overflow-hidden section-pad"
      style={{
        background: `linear-gradient(135deg, #1a2744 0%, #243460 50%, #8b6340 100%)`,
      }}
      aria-label="Call to action"
    >
      {/* Decorative diagonal */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.05) 35px, rgba(255,255,255,0.05) 70px)',
        }}
        aria-hidden="true"
      />

      <div className="container-content relative z-10 text-center">
        <p className="text-wood text-xs font-body font-semibold uppercase tracking-widest mb-4 reveal">
          Ready to Begin?
        </p>
        <h2 className="text-white text-4xl md:text-5xl font-display mb-6 reveal reveal-delay-1">
          Build Something Extraordinary
        </h2>
        <p className="text-white/70 text-lg max-w-xl mx-auto mb-10 font-body font-light reveal reveal-delay-2">
          Every great project starts with a conversation. Tell us what you&apos;re
          envisioning — we&apos;ll tell you what&apos;s possible.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center reveal reveal-delay-3">
          <Button href="/contact" variant="wood" size="lg">
            Get a Free Estimate
          </Button>
          <Button href={BUSINESS.phoneHref} variant="ghost" size="lg" external>
            Call {BUSINESS.phone}
          </Button>
        </div>

        <p className="text-white/30 text-sm font-body mt-8 reveal reveal-delay-4">
          Synchrony financing available — invest in your home, on your terms.
        </p>
      </div>
    </section>
  )
}
