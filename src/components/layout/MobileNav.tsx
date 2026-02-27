'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { NAV_ITEMS, BUSINESS } from '@/lib/constants'
import { Button } from '@/components/ui/Button'

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  // Lock body scroll when nav is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-navy-dark/60 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-in panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-80 max-w-full bg-navy z-50 flex flex-col transition-transform duration-300 ease-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Panel header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <span className="font-display text-white font-bold">Sky&apos;s the Limit</span>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white p-1 transition-colors"
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 px-6 py-8 space-y-1" aria-label="Mobile navigation">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="block text-white/80 hover:text-wood font-body font-medium text-lg py-3 border-b border-white/5 hover:border-wood/20 transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Panel footer */}
        <div className="px-6 pb-8 space-y-4">
          <a
            href={BUSINESS.phoneHref}
            className="flex items-center gap-3 text-wood font-display font-semibold text-lg"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            {BUSINESS.phone}
          </a>
          <Button href="/contact" variant="wood" size="md" className="w-full" onClick={onClose}>
            Get a Free Estimate
          </Button>
        </div>
      </div>
    </>
  )
}
