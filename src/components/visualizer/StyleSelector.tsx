'use client'

import { cn } from '@/lib/utils'
import { STYLES } from '@/lib/data/visualizer'

interface StyleSelectorProps {
  selected: string | null
  onSelect: (slug: string) => void
}

export function StyleSelector({ selected, onSelect }: StyleSelectorProps) {
  return (
    <div>
      <label className="block font-display text-navy text-lg mb-3">Design style</label>
      <div className="flex flex-wrap gap-2">
        {STYLES.map((style) => (
          <button
            key={style.slug}
            onClick={() => onSelect(style.slug)}
            className={cn(
              'px-4 py-2.5 rounded-full border-2 font-body text-sm transition-all duration-200',
              'min-h-[44px]',
              selected === style.slug
                ? 'border-wood bg-navy text-white'
                : 'border-stone-200 bg-white text-navy hover:border-wood/40'
            )}
          >
            {style.label}
          </button>
        ))}
      </div>
    </div>
  )
}
