import type { Metadata } from 'next'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About — Craftsmanship, Story & Philosophy',
  description:
    "Learn about Sky's the Limit — Nashville and Clarksville's premium craftsman contractor. Our story, philosophy, and commitment to precision work.",
  alternates: { canonical: '/about' },
}

const PHILOSOPHY_PILLARS = [
  {
    title: 'Built Right the First Time',
    description:
      "We don't rush. Every joint, every finish, every detail is done once and done right. Rework isn't in our process — because we don't cut corners that need correcting.",
  },
  {
    title: 'Materials Matter',
    description:
      'The quality of your fence, deck, or pergola starts with the materials. We select lumber the way a furniture maker would — by hand, for the project at hand.',
  },
  {
    title: 'Transparent Process',
    description:
      "You'll know what we're doing, why we're doing it, and what it will look like when it's done. No surprises, no scope creep without a conversation.",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy section-pad-lg pt-28 md:pt-36">
        <div className="container-content px-4 md:px-8">
          <p className="text-wood text-xs font-body font-semibold uppercase tracking-widest mb-4 reveal">
            Our Story
          </p>
          <h1 className="text-white max-w-2xl reveal reveal-delay-1">
            Built on Craftsmanship,<br />Not Volume
          </h1>
          <p className="text-white/70 text-xl mt-5 max-w-prose font-body font-light reveal reveal-delay-2">
            We take fewer projects than most contractors so we can do each one better.
            That&apos;s the whole model.
          </p>
        </div>
      </section>

      {/* Owner story */}
      <SectionWrapper className="bg-cream">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="heading-rule mb-6">The Sky&apos;s the Limit Story</h2>
            <div className="space-y-5 text-stone-600 leading-relaxed">
              <p>
                Marcus Carlson started Sky&apos;s the Limit with a straightforward belief:
                too many contractors prioritize volume over quality. They rush through
                jobs, use whatever lumber is cheapest that week, and move on. The result
                is work that looks fine at first and falls apart in three years.
              </p>
              <p>
                He named the company after his daughter, Sky — a reminder that the
                work isn&apos;t just about building structures. It&apos;s about building
                something worth handing down. Every project gets the time it takes to
                do it right. Every material decision gets thought through. And every
                client gets the honest answer — even when the honest answer
                is &ldquo;that&apos;s going to cost more.&rdquo;
              </p>
              <p>
                Based in Clarksville and now serving Nashville and surrounding communities,
                Marcus and his crew have spent {BUSINESS.yearsExperience}+ years building a
                reputation in Middle Tennessee for work that outlasts the competition — and
                for clients who are glad they chose them.
              </p>
            </div>
            <div className="mt-8">
              <Button href="/contact" variant="primary" size="md">
                Start a Conversation
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/3] rounded-card overflow-hidden">
              <Image
                src="/images/about/craftsman-sunset.jpg"
                alt="Sky's the Limit craftsman working at sunset — silhouette against a fiery Tennessee sky"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                quality={90}
              />
            </div>
            <p className="text-stone-400 text-xs font-body mt-3 text-center">
              On the job site — work doesn&apos;t stop until it&apos;s right.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Philosophy */}
      <SectionWrapper className="bg-cream-dark">
        <div className="text-center mb-14">
          <p className="text-wood text-xs font-body font-semibold uppercase tracking-widest mb-3 reveal">
            How We Work
          </p>
          <h2 className="heading-rule heading-rule-center reveal reveal-delay-1">
            Our Philosophy
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PHILOSOPHY_PILLARS.map((pillar, index) => (
            <div
              key={pillar.title}
              className={`bg-white rounded-card p-8 shadow-card reveal ${index > 0 ? `reveal-delay-${index}` : ''}`}
            >
              <div className="w-10 h-1 bg-wood mb-6" aria-hidden="true" />
              <h3 className="text-navy font-display text-xl mb-3">{pillar.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Service area + credentials */}
      <SectionWrapper className="bg-cream">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="heading-rule mb-6">Where We Work</h2>
            <p className="text-stone-600 leading-relaxed mb-6">
              We&apos;re based in Clarksville, TN and actively expanding into
              Nashville and the surrounding communities. If you&apos;re in
              Middle Tennessee, there&apos;s a good chance we can help.
            </p>
            <div className="grid grid-cols-2 gap-2">
              {BUSINESS.serviceAreas.map((area) => (
                <span key={area} className="text-stone-700 text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-wood flex-shrink-0" aria-hidden="true" />
                  {area}, TN
                </span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="heading-rule mb-6">Credentials</h2>
            <div className="space-y-4 text-stone-600">
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-wood mt-2 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-body font-medium text-stone-800">Licensed Contractor</p>
                  <p className="text-sm">Tennessee contractor license in good standing</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-wood mt-2 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-body font-medium text-stone-800">Fully Insured</p>
                  <p className="text-sm">General liability and workers&apos; compensation coverage</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-wood mt-2 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-body font-medium text-stone-800">Synchrony Financing Partner</p>
                  <p className="text-sm">Authorized to offer Synchrony HOME financing to qualified clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section
        className="section-pad relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a2744 0%, #8b6340 100%)' }}
      >
        <div className="container-content px-4 md:px-8 text-center relative z-10">
          <h2 className="text-white mb-4">Ready to Work Together?</h2>
          <p className="text-white/60 max-w-lg mx-auto mb-8 font-body">
            Reach out and tell us about your project. We&apos;ll give you a straight answer
            and a fair estimate.
          </p>
          <Button href="/contact" variant="wood" size="lg">
            Get a Free Estimate
          </Button>
        </div>
      </section>
    </>
  )
}
