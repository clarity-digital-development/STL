'use client'

import type { VisualizerMode } from '@/types'

interface PromptInputProps {
  value: string
  onChange: (value: string) => void
  mode: VisualizerMode
}

const INPUT_CLASS =
  'w-full border border-stone-200 rounded bg-white px-4 py-3 font-body text-stone-900 ' +
  'placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-wood/50 focus:border-wood ' +
  'transition-colors duration-200 text-sm'

const placeholders: Record<VisualizerMode, string> = {
  image:
    'Describe what you want built in this space. Example: "A wraparound deck with built-in bench seating, cable railings, and steps down to the yard."',
  text:
    'Describe what you\'re dreaming of. Include details like size, features, and setting. Example: "A large screened-in porch with a ceiling fan, stained cedar framing, and enough room for a dining table and outdoor couch."',
}

export function PromptInput({ value, onChange, mode }: PromptInputProps) {
  return (
    <div>
      <label className="block font-display text-navy text-lg mb-3">
        Describe your vision
      </label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholders[mode]}
        rows={4}
        className={INPUT_CLASS}
      />
    </div>
  )
}
