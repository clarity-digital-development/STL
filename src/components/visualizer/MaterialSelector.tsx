'use client'

import { cn } from '@/lib/utils'
import type { MaterialOption } from '@/types'

interface MaterialSelectorProps {
  materials: MaterialOption[]
  selected: string | null
  onSelect: (slug: string) => void
}

export function MaterialSelector({ materials, selected, onSelect }: MaterialSelectorProps) {
  return (
    <div>
      <label className="block font-display text-navy text-lg mb-3">Material preference</label>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-3">
        {materials.map((material) => (
          <button
            key={material.slug}
            onClick={() => onSelect(material.slug)}
            className={cn(
              'flex flex-col items-center gap-2 p-3 rounded-lg border-2 transition-all duration-200',
              'min-h-[44px] hover:-translate-y-0.5',
              selected === material.slug
                ? 'border-wood shadow-card'
                : 'border-stone-200 hover:border-wood/40'
            )}
          >
            <div
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-stone-200 flex-shrink-0"
              style={{ backgroundColor: material.color }}
            />
            <span className="font-body text-[11px] sm:text-xs text-center leading-tight text-navy">
              {material.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
