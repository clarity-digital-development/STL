'use client'

import { cn } from '@/lib/utils'
import type { VisualizerMode } from '@/types'

interface ModeSelectorProps {
  selected: VisualizerMode | null
  onSelect: (mode: VisualizerMode) => void
}

const modes = [
  {
    id: 'image' as const,
    title: 'Start From Your Space',
    description: 'Upload a photo of your yard, porch, or room and we\'ll show you the transformation.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
      </svg>
    ),
  },
  {
    id: 'text' as const,
    title: 'Start From an Idea',
    description: 'Describe what you\'re envisioning and we\'ll generate a concept.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
]

export function ModeSelector({ selected, onSelect }: ModeSelectorProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
      {modes.map((mode) => (
        <button
          key={mode.id}
          onClick={() => onSelect(mode.id)}
          className={cn(
            'text-left p-6 md:p-8 rounded-lg border-2 transition-all duration-200',
            'hover:shadow-card-hover hover:-translate-y-0.5',
            'min-h-[44px]',
            selected === mode.id
              ? 'border-wood bg-wood/5 shadow-card'
              : 'border-stone-200 bg-white hover:border-wood/40'
          )}
        >
          <div className={cn(
            'inline-flex items-center justify-center w-14 h-14 rounded-full mb-4',
            selected === mode.id ? 'bg-wood/10 text-wood' : 'bg-stone-100 text-navy'
          )}>
            {mode.icon}
          </div>
          <h3 className="font-display text-lg md:text-xl text-navy mb-2">{mode.title}</h3>
          <p className="font-body text-sm text-stone-500 leading-relaxed">{mode.description}</p>
        </button>
      ))}
    </div>
  )
}
