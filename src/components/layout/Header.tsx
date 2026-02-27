'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { NAV_ITEMS, BUSINESS } from '@/lib/constants'
import { Button } from '@/components/ui/Button'
import { MobileNav } from './MobileNav'
import { cn } from '@/lib/utils'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handler, { passive: true })
    handler() // Check initial scroll position
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          scrolled
            ? 'bg-navy/95 backdrop-blur-sm shadow-lg py-2 md:py-3'
            : 'bg-navy/75 backdrop-blur-sm py-3 md:py-5'
        )}
        style={{ paddingTop: `calc(env(safe-area-inset-top, 0px) + ${scrolled ? '0.5rem' : '0.75rem'})` }}
      >
        <div className="container-content px-4 md:px-8 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <Image
              src="/images/logo.svg"
              alt=""
              width={48}
              height={42}
              className="flex-shrink-0"
              aria-hidden="true"
            />
            <div className="flex flex-col">
              <span className="font-display text-white font-bold text-xl md:text-2xl leading-none group-hover:text-white/90 transition-colors">
                Sky&apos;s the Limit
              </span>
              <span className="text-wood text-[10px] font-body font-medium tracking-[0.15em] uppercase mt-0.5">
                Customs & Contracting
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/75 hover:text-wood font-body text-sm font-medium tracking-wide transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-wood transition-all duration-200 group-hover:w-full" aria-hidden="true" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href={BUSINESS.phoneHref}
              className="text-white/70 hover:text-wood font-body text-sm font-medium transition-colors"
              aria-label={`Call us at ${BUSINESS.phone}`}
            >
              {BUSINESS.phone}
            </a>
            <Button href="/contact" variant="wood" size="sm">
              Free Estimate
            </Button>
          </div>

          {/* Mobile hamburger — 44px minimum touch target */}
          <button
            className="md:hidden text-white min-w-[44px] min-h-[44px] flex items-center justify-center -mr-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            <div className="w-6 flex flex-col gap-1.5" aria-hidden="true">
              <span className="block h-0.5 bg-current transition-transform duration-200" />
              <span className="block h-0.5 bg-current transition-opacity duration-200" />
              <span className="block h-0.5 bg-current w-4 transition-transform duration-200" />
            </div>
          </button>

        </div>
      </header>

      {/* MobileNav must be outside <header> — backdrop-blur creates a containing block that breaks fixed positioning */}
      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
