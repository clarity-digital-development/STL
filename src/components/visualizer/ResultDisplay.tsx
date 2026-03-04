'use client'

import { useCallback } from 'react'
import { BeforeAfterSlider } from './BeforeAfterSlider'

interface ResultDisplayProps {
  generatedImage: string
  mimeType: string
  originalPreview: string | null
  generationCount: number
  maxGenerations: number
  onRegenerate: () => void
  loading: boolean
}

export function ResultDisplay({
  generatedImage,
  mimeType,
  originalPreview,
  generationCount,
  maxGenerations,
  onRegenerate,
  loading,
}: ResultDisplayProps) {
  const imageSrc = `data:${mimeType};base64,${generatedImage}`

  const handleDownload = useCallback(() => {
    const link = document.createElement('a')
    link.href = imageSrc
    link.download = `stl-visualization-${Date.now()}.png`
    link.click()
  }, [imageSrc])

  return (
    <div className="space-y-6">
      {/* Image display */}
      {originalPreview ? (
        <BeforeAfterSlider
          beforeSrc={originalPreview}
          afterSrc={imageSrc}
        />
      ) : (
        <div className="rounded-lg overflow-hidden border border-stone-200">
          <img
            src={imageSrc}
            alt="AI-generated project visualization"
            className="w-full h-auto"
          />
        </div>
      )}

      {/* Disclaimer */}
      <p className="font-body text-xs text-stone-400 text-center">
        These visualizations are for inspiration — final designs will be refined during your consultation.
      </p>

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={handleDownload}
          className="flex items-center justify-center gap-2 px-5 py-3 border-2 border-stone-200 rounded-sm font-body text-sm text-navy hover:border-wood/40 transition-colors min-h-[44px]"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          Save This Vision
        </button>

        {generationCount < maxGenerations && (
          <button
            onClick={onRegenerate}
            disabled={loading}
            className="flex items-center justify-center gap-2 px-5 py-3 border-2 border-stone-200 rounded-sm font-body text-sm text-navy hover:border-wood/40 transition-colors min-h-[44px] disabled:opacity-50"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
            </svg>
            Try Another Version ({maxGenerations - generationCount} left)
          </button>
        )}
      </div>
    </div>
  )
}
