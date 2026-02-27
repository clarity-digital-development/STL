import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { Button } from '@/components/ui/Button'
import { SERVICES } from '@/lib/data/services'

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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayServices.map((service, index) => (
          <ServiceCard key={service.slug} service={service} index={index} />
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
