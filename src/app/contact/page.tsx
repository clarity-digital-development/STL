import type { Metadata } from 'next'
import { ContactForm } from '@/components/contact/ContactForm'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact — Get a Free Estimate',
  description:
    "Contact Sky's the Limit for a free estimate. Custom fences, decks, pergolas, screened enclosures, and more. Serving Nashville, Brentwood, Franklin, and Clarksville TN.",
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy section-pad pt-28 md:pt-36">
        <div className="container-content px-4 md:px-8">
          <p className="text-wood text-xs font-body font-semibold uppercase tracking-widest mb-4 reveal">
            Get in Touch
          </p>
          <h1 className="text-white max-w-xl reveal reveal-delay-1">
            Let&apos;s Talk About Your Project
          </h1>
          <p className="text-white/70 text-lg mt-5 max-w-prose font-body font-light reveal reveal-delay-2">
            We respond to all inquiries within one business day.
            For urgent requests, call us directly.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-pad bg-cream">
        <div className="container-content px-4 md:px-8">
          <div className="grid lg:grid-cols-3 gap-14">

            {/* Form — 2 cols */}
            <div className="lg:col-span-2">
              <h2 className="heading-rule mb-8">Request a Free Estimate</h2>
              <ContactForm />
            </div>

            {/* Info sidebar */}
            <aside className="space-y-10">

              {/* Phone */}
              <div>
                <h3 className="text-navy font-display text-lg mb-4">Call or Text</h3>
                <a
                  href={BUSINESS.phoneHref}
                  className="text-wood font-display text-2xl font-semibold hover:text-wood-dark transition-colors block"
                  aria-label={`Call Sky's the Limit at ${BUSINESS.phone}`}
                >
                  {BUSINESS.phone}
                </a>
                <p className="text-stone-500 text-sm mt-2">Mon–Fri 8am–5pm · Sat 9am–1pm</p>
              </div>

              {/* Email */}
              <div>
                <h3 className="text-navy font-display text-lg mb-3">Email</h3>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="text-wood hover:text-wood-dark transition-colors text-sm font-body"
                >
                  {BUSINESS.email}
                </a>
              </div>

              {/* Service area */}
              <div>
                <h3 className="text-navy font-display text-lg mb-4">Service Areas</h3>
                <div className="space-y-2">
                  {BUSINESS.serviceAreas.map((area) => (
                    <div key={area} className="flex items-center gap-2 text-stone-600 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-wood flex-shrink-0" aria-hidden="true" />
                      {area}, TN
                    </div>
                  ))}
                </div>
              </div>

              {/* Service area map placeholder */}
              <div>
                <h3 className="text-navy font-display text-lg mb-4">Middle Tennessee</h3>
                <div
                  className="w-full h-48 rounded-card overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #e8e4dc 0%, #d4cfc7 100%)',
                  }}
                  role="img"
                  aria-label="Service area map — Nashville and Clarksville, TN"
                >
                  {/* Google Maps embed goes here in Phase 2 */}
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#a67a45" strokeWidth="1.5" className="mx-auto mb-2" aria-hidden="true">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                      <p className="text-stone-500 text-xs font-body">Nashville & Clarksville, TN</p>
                      <p className="text-stone-400 text-xs font-body">Map coming soon</p>
                    </div>
                  </div>
                </div>
              </div>

            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
