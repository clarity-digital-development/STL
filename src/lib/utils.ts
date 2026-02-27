import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import type { PortfolioCategory } from '@/types'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function staggerClass(index: number): string {
  const delays = [
    '',
    'reveal-delay-1',
    'reveal-delay-2',
    'reveal-delay-3',
    'reveal-delay-4',
    'reveal-delay-5',
  ]
  return delays[Math.min(index, 5)] ?? ''
}

export function getCategoryLabel(category: PortfolioCategory | 'all'): string {
  const labels: Record<PortfolioCategory | 'all', string> = {
    all: 'All Projects',
    'fences-gates': 'Fences & Gates',
    'screened-enclosures': 'Screened Enclosures',
    decks: 'Decks',
    pergolas: 'Pergolas',
    staining: 'Staining',
    concrete: 'Concrete',
    interior: 'Interior',
    'custom-woodwork': 'Custom Woodwork',
  }
  return labels[category]
}
