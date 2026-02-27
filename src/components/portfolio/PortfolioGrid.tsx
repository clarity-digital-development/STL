'use client'

import { useState } from 'react'
import type { PortfolioProject, PortfolioCategory } from '@/types'
import { FilterBar } from './FilterBar'
import { PortfolioCard } from './PortfolioCard'

type FilterValue = PortfolioCategory | 'all'

interface PortfolioGridProps {
  projects: PortfolioProject[]
}

export function PortfolioGrid({ projects }: PortfolioGridProps) {
  const [activeFilter, setActiveFilter] = useState<FilterValue>('all')

  // Derive unique categories from project data
  const categories = Array.from(
    new Set(projects.map((p) => p.category))
  )

  const filtered =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <div>
      <FilterBar
        categories={categories}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      {filtered.length > 0 ? (
        <div
          className="mt-8 columns-1 sm:columns-2 lg:columns-3 gap-6"
          style={{ columnFill: 'balance' }}
        >
          {filtered.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-stone-400 font-body text-lg">No projects in this category yet.</p>
          <p className="text-stone-300 font-body text-sm mt-2">Check back soon — we&apos;re always working.</p>
        </div>
      )}
    </div>
  )
}
