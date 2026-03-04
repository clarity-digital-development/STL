'use client'

import { cn } from '@/lib/utils'
import { PROJECT_TYPES } from '@/lib/data/visualizer'

interface ProjectTypeGridProps {
  selected: string | null
  onSelect: (slug: string) => void
}

export function ProjectTypeGrid({ selected, onSelect }: ProjectTypeGridProps) {
  return (
    <div>
      <label className="block font-display text-navy text-lg mb-3">What are you building?</label>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {PROJECT_TYPES.map((type) => (
          <button
            key={type.slug}
            onClick={() => onSelect(type.slug)}
            className={cn(
              'flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-all duration-200',
              'min-h-[44px] hover:-translate-y-0.5',
              selected === type.slug
                ? 'border-wood bg-wood/5 shadow-card text-wood'
                : 'border-stone-200 bg-white hover:border-wood/40 text-navy'
            )}
          >
            <svg className="w-6 h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d={type.icon} />
            </svg>
            <span className="font-body text-xs sm:text-sm text-center leading-tight">{type.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
