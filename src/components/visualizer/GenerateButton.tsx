'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface GenerateButtonProps {
  loading: boolean
  disabled: boolean
  hasImage: boolean
  onClick: () => void
}

const loadingMessages = [
  'Analyzing your vision...',
  'Selecting materials...',
  'Rendering your project...',
  'Adding finishing touches...',
]

const loadingMessagesWithImage = [
  'Analyzing your space...',
  'Planning the transformation...',
  'Rendering your project...',
  'Adding finishing touches...',
]

export function GenerateButton({ loading, disabled, hasImage, onClick }: GenerateButtonProps) {
  const [messageIndex, setMessageIndex] = useState(0)
  const messages = hasImage ? loadingMessagesWithImage : loadingMessages

  useEffect(() => {
    if (!loading) {
      setMessageIndex(0)
      return
    }

    const interval = setInterval(() => {
      setMessageIndex((i) => (i + 1) % messages.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [loading, messages.length])

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={cn(
        'w-full sm:w-auto px-8 py-4 rounded-sm font-body font-medium text-lg transition-all duration-200',
        'min-h-[48px] flex items-center justify-center gap-3',
        loading
          ? 'bg-navy text-white/80 cursor-wait'
          : disabled
            ? 'bg-stone-200 text-stone-400 cursor-not-allowed'
            : 'bg-wood text-white hover:bg-wood-dark shadow-wood hover:shadow-lg'
      )}
    >
      {loading ? (
        <>
          <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          <span className="transition-opacity duration-300">{messages[messageIndex]}</span>
        </>
      ) : (
        'Visualize My Project'
      )}
    </button>
  )
}
