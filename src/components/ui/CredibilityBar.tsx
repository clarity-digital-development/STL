import Link from 'next/link'
import { BUSINESS } from '@/lib/constants'

export function CredibilityBar() {
  return (
    <div className="bg-navy-dark border-y border-white/5">
      <div className="container-content px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/10">

          {/* Synchrony Financing */}
          <Link href="/financing" className="lg:px-8 flex items-center gap-4 group">
            <div className="w-10 h-10 rounded bg-wood/20 flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c4935a" strokeWidth="1.5" aria-hidden="true">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                <line x1="1" y1="10" x2="23" y2="10"/>
              </svg>
            </div>
            <div>
              <p className="text-white font-body font-semibold text-sm group-hover:text-wood transition-colors">Financing Available</p>
              <p className="text-white/50 text-xs">Synchrony HOME · Learn more</p>
            </div>
          </Link>

          {/* Years Experience */}
          <div className="lg:px-8 flex items-center gap-4">
            <div className="w-10 h-10 rounded bg-wood/20 flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c4935a" strokeWidth="1.5" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <div>
              <p className="text-white font-body font-semibold text-sm">{BUSINESS.yearsExperience}+ Years in Business</p>
              <p className="text-white/50 text-xs">Premium craftsmanship since day one</p>
            </div>
          </div>

          {/* Service Area */}
          <div className="lg:px-8 flex items-center gap-4">
            <div className="w-10 h-10 rounded bg-wood/20 flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c4935a" strokeWidth="1.5" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div>
              <p className="text-white font-body font-semibold text-sm">Nashville & Clarksville</p>
              <p className="text-white/50 text-xs">Brentwood · Franklin · Belle Meade</p>
            </div>
          </div>

          {/* Licensed & Insured */}
          <div className="lg:px-8 flex items-center gap-4">
            <div className="w-10 h-10 rounded bg-wood/20 flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c4935a" strokeWidth="1.5" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <div>
              <p className="text-white font-body font-semibold text-sm">Licensed & Insured</p>
              <p className="text-white/50 text-xs">Tennessee contractor · Fully covered</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
