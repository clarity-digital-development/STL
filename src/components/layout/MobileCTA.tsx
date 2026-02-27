import { BUSINESS } from '@/lib/constants'

export function MobileCTA() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-30 md:hidden bg-navy/95 backdrop-blur-sm border-t border-white/10"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <div className="flex gap-3 px-4 py-3">
        <a
          href={BUSINESS.phoneHref}
          className="flex-1 flex items-center justify-center gap-2 bg-transparent border-2 border-white/30 text-white font-body font-medium min-h-[44px] rounded-sm text-sm transition-colors hover:border-white"
          aria-label={`Call ${BUSINESS.phone}`}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
          </svg>
          Call Now
        </a>
        <a
          href="/contact"
          className="flex-1 flex items-center justify-center bg-wood text-white font-body font-medium min-h-[44px] rounded-sm text-sm transition-colors hover:bg-wood-dark shadow-wood"
        >
          Free Estimate
        </a>
      </div>
    </div>
  )
}
