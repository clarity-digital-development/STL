'use client'

import { useState, useRef, useCallback } from 'react'
import { cn } from '@/lib/utils'

interface PhotoUploaderProps {
  file: File | null
  preview: string | null
  onFileChange: (file: File | null, preview: string | null) => void
}

const MAX_SIZE = 10 * 1024 * 1024 // 10MB
const ACCEPTED = ['image/jpeg', 'image/png', 'image/webp']

export function PhotoUploader({ file, preview, onFileChange }: PhotoUploaderProps) {
  const [dragOver, setDragOver] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFile = useCallback((f: File) => {
    setError(null)

    if (!ACCEPTED.includes(f.type)) {
      setError('Please upload a JPEG, PNG, or WebP image.')
      return
    }
    if (f.size > MAX_SIZE) {
      setError('Image must be under 10MB.')
      return
    }

    const reader = new FileReader()
    reader.onload = (e) => {
      onFileChange(f, e.target?.result as string)
    }
    reader.readAsDataURL(f)
  }, [onFileChange])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(false)
    const f = e.dataTransfer.files[0]
    if (f) handleFile(f)
  }, [handleFile])

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0]
    if (f) handleFile(f)
  }, [handleFile])

  const remove = useCallback(() => {
    onFileChange(null, null)
    setError(null)
    if (inputRef.current) inputRef.current.value = ''
  }, [onFileChange])

  if (preview) {
    return (
      <div className="relative">
        <label className="block font-display text-navy text-lg mb-3">Your space</label>
        <div className="relative rounded-lg overflow-hidden border border-stone-200">
          <img
            src={preview}
            alt="Uploaded space"
            className="w-full h-auto"
          />
          <button
            onClick={remove}
            className="absolute top-3 right-3 w-8 h-8 bg-navy/80 hover:bg-navy text-white rounded-full flex items-center justify-center transition-colors"
            aria-label="Remove photo"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <p className="mt-2 font-body text-xs text-stone-400">{file?.name}</p>
      </div>
    )
  }

  return (
    <div>
      <label className="block font-display text-navy text-lg mb-3">Upload a photo of your space</label>
      <div
        onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
        className={cn(
          'border-2 border-dashed rounded-lg p-8 md:p-12 text-center cursor-pointer transition-all duration-200',
          dragOver
            ? 'border-wood bg-wood/5'
            : 'border-stone-300 bg-cream hover:border-wood/50 hover:bg-wood/5'
        )}
      >
        <svg className="w-12 h-12 mx-auto mb-4 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
        </svg>
        <p className="font-body text-navy font-medium mb-1">
          Take a photo, drag &amp; drop, or <span className="text-wood">browse</span>
        </p>
        <p className="font-body text-xs text-stone-400">
          JPEG, PNG, or WebP — Max 10MB
        </p>
        <p className="font-body text-xs text-stone-400 mt-1">
          Best results: take the photo during the day with a level shot
        </p>
        <input
          ref={inputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp"
          onChange={handleInputChange}
          className="hidden"
        />
      </div>
      {error && (
        <p className="mt-2 font-body text-sm text-red-600">{error}</p>
      )}
    </div>
  )
}
