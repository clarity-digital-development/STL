'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    // Observe all current .reveal elements
    const observeAll = () => {
      document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => {
        observer.observe(el)
      })
    }

    // Initial pass
    observeAll()

    // Watch for new .reveal elements added to the DOM (client-side navigation, async renders)
    const mutation = new MutationObserver((mutations) => {
      let hasNew = false
      for (const m of mutations) {
        for (const node of m.addedNodes) {
          if (node instanceof HTMLElement) {
            if (node.classList?.contains('reveal') && !node.classList.contains('is-visible')) {
              hasNew = true
            } else if (node.querySelectorAll) {
              const children = node.querySelectorAll('.reveal:not(.is-visible)')
              if (children.length > 0) hasNew = true
            }
          }
        }
      }
      if (hasNew) observeAll()
    })

    mutation.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutation.disconnect()
    }
  }, [pathname])

  return null
}
