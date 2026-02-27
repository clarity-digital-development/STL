import Link from 'next/link'
import { BUSINESS } from '@/lib/constants'

const SERVICE_LINKS = [
  { label: 'Fences & Gates', href: '/services/fences-gates' },
  { label: 'Screened Enclosures', href: '/services/screened-enclosures' },
  { label: 'Decks', href: '/services/decks' },
  { label: 'Pergolas & Covered Structures', href: '/services/pergolas-covered-structures' },
  { label: 'Staining & Restoration', href: '/services/staining-restoration' },
  { label: 'Concrete Work', href: '/services/concrete' },
  { label: 'Interior Work', href: '/services/interior' },
  { label: 'Custom Woodwork', href: '/services/custom-woodwork' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()
  const foundedYear = currentYear - BUSINESS.yearsExperience

  return (
    <footer className="bg-navy-dark text-white/70">

      {/* Main footer grid */}
      <div className="container-content section-pad px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <p className="font-display text-white text-2xl font-bold mb-1">
              Sky&apos;s the Limit
            </p>
            <p className="text-wood text-xs font-body uppercase tracking-widest mb-5">
              Premium Contractor — Nashville &amp; Clarksville, TN
            </p>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-6">
              Serving Nashville&apos;s finest neighborhoods with precision craftsmanship
              in outdoor living, fencing, and custom woodwork since {foundedYear}.
              No shortcuts. No stock finishes. Just work that lasts.
            </p>

            {/* Click-to-call */}
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-2 text-wood font-display text-xl font-semibold hover:text-wood-light transition-colors mb-4"
              aria-label={`Call Sky's the Limit at ${BUSINESS.phone}`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              {BUSINESS.phone}
            </a>

            {/* Synchrony */}
            <p className="text-white/40 text-xs">
              Financing available through{' '}
              <a
                href={BUSINESS.synchronyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-wood/70 hover:text-wood underline transition-colors"
              >
                Synchrony HOME
              </a>
              {' '}— subject to credit approval.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-xs font-body font-semibold uppercase tracking-widest mb-5">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              {SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-wood transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas + Links */}
          <div>
            <h3 className="text-white text-xs font-body font-semibold uppercase tracking-widest mb-5">
              Service Areas
            </h3>
            <ul className="space-y-1.5 text-sm mb-8">
              {BUSINESS.serviceAreas.map((area) => (
                <li key={area} className="text-white/50">{area}, TN</li>
              ))}
            </ul>

            {/* Facebook */}
            <a
              href={BUSINESS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-wood/70 hover:text-wood text-sm transition-colors"
              aria-label="Follow Sky's the Limit on Facebook"
            >
              <span className="w-7 h-7 bg-wood/15 rounded flex items-center justify-center font-bold text-wood text-xs">f</span>
              Facebook
            </a>
          </div>

        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/5">
        <div className="container-content px-4 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <p>© {currentYear} Sky&apos;s the Limit. All rights reserved.</p>
          <p>Clarksville &amp; Nashville, Tennessee</p>
        </div>
      </div>

    </footer>
  )
}
