'use client'

import { cn, getCategoryLabel } from '@/lib/utils'
import type { PortfolioCategory } from '@/types'

type FilterValue = PortfolioCategory | 'all'

interface FilterBarProps {
  categories: PortfolioCategory[]
  activeFilter: FilterValue
  onFilterChange: (filter: FilterValue) => void
}

export function FilterBar({ categories, activeFilter, onFilterChange }: FilterBarProps) {
  const allFilters: FilterValue[] = ['all', ...categories]

  return (
    <div className="flex flex-wrap gap-2 md:gap-2" role="group" aria-label="Filter projects by category">
      {allFilters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          aria-pressed={activeFilter === filter}
          className={cn(
            'px-4 py-2.5 rounded-full text-sm font-body font-medium transition-all duration-200 min-h-[44px]',
            'focus:outline-none focus:ring-2 focus:ring-wood focus:ring-offset-2',
            activeFilter === filter
              ? 'bg-navy text-white shadow-sm'
              : 'bg-white border border-stone-200 text-stone-600 hover:border-wood hover:text-wood'
          )}
        >
          {getCategoryLabel(filter)}
        </button>
      ))}
    </div>
  )
}
