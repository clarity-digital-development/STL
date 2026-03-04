'use client'

import { useState, useCallback, useMemo } from 'react'
import type { VisualizerMode } from '@/types'
import { getMaterialsForProject, MATERIALS_BY_PROJECT } from '@/lib/data/visualizer'
import { ModeSelector } from './ModeSelector'
import { ProjectTypeGrid } from './ProjectTypeGrid'
import { MaterialSelector } from './MaterialSelector'
import { StyleSelector } from './StyleSelector'
import { PhotoUploader } from './PhotoUploader'
import { PromptInput } from './PromptInput'
import { GenerateButton } from './GenerateButton'
import { ResultDisplay } from './ResultDisplay'
import { ConsultationForm } from './ConsultationForm'

const MAX_GENERATIONS = 3
const SESSION_KEY = 'stl-viz-count'

function getSessionCount(): number {
  if (typeof window === 'undefined') return 0
  return parseInt(localStorage.getItem(SESSION_KEY) || '0', 10)
}

function incrementSessionCount(): number {
  const count = getSessionCount() + 1
  localStorage.setItem(SESSION_KEY, String(count))
  return count
}

export function VisualizerContainer() {
  // ── State ──────────────────────────────────────────────
  const [mode, setMode] = useState<VisualizerMode | null>(null)
  const [projectType, setProjectType] = useState<string | null>(null)
  const [material, setMaterial] = useState<string | null>(null)
  const [style, setStyle] = useState<string | null>(null)
  const [description, setDescription] = useState('')
  const [photoFile, setPhotoFile] = useState<File | null>(null)
  const [photoPreview, setPhotoPreview] = useState<string | null>(null)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [generatedImage, setGeneratedImage] = useState<string | null>(null)
  const [mimeType, setMimeType] = useState('image/png')
  const [generationCount, setGenerationCount] = useState(0)

  // ── Derived state ───────────────────────────────────────
  const filteredMaterials = useMemo(
    () => getMaterialsForProject(projectType),
    [projectType]
  )

  // ── Handlers ───────────────────────────────────────────
  const handleProjectTypeChange = useCallback((slug: string) => {
    setProjectType(slug)
    // Reset material if it's not valid for the new project type
    if (material) {
      const validSlugs = MATERIALS_BY_PROJECT[slug]
      if (validSlugs && !validSlugs.includes(material)) {
        setMaterial(null)
      }
    }
  }, [material])

  const handlePhotoChange = useCallback((file: File | null, preview: string | null) => {
    setPhotoFile(file)
    setPhotoPreview(preview)
  }, [])

  const canGenerate =
    mode !== null &&
    projectType !== null &&
    description.trim().length > 0 &&
    getSessionCount() < 5

  const handleGenerate = useCallback(async () => {
    if (!projectType || !description.trim()) return

    setLoading(true)
    setError(null)

    try {
      const formData = new FormData()
      formData.append('projectType', projectType)
      formData.append('material', material || '')
      formData.append('style', style || '')
      formData.append('description', description)

      if (photoFile) {
        formData.append('image', photoFile)
      }

      const res = await fetch('/api/visualize', {
        method: 'POST',
        body: formData,
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Generation failed')
      }

      setGeneratedImage(data.image)
      setMimeType(data.mimeType || 'image/png')
      setGenerationCount((c) => c + 1)
      incrementSessionCount()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }, [projectType, material, style, description, photoFile])

  const handleRegenerate = useCallback(() => {
    if (generationCount < MAX_GENERATIONS) {
      handleGenerate()
    }
  }, [generationCount, handleGenerate])

  const handleStartOver = useCallback(() => {
    setGeneratedImage(null)
    setGenerationCount(0)
    setError(null)
  }, [])

  // ── Render ─────────────────────────────────────────────
  return (
    <div className="space-y-10 md:space-y-14">

      {/* Step 1: Choose mode */}
      <section className="reveal">
        <h2 className="font-display text-2xl md:text-3xl text-navy mb-2">How would you like to start?</h2>
        <p className="font-body text-stone-500 text-sm mb-6">Choose how you want to bring your vision to life.</p>
        <ModeSelector selected={mode} onSelect={setMode} />
      </section>

      {/* Step 2: Configure project (shown after mode selected) */}
      {mode && (
        <section className="space-y-8 reveal">
          {/* Photo uploader (image mode only) */}
          {mode === 'image' && (
            <PhotoUploader
              file={photoFile}
              preview={photoPreview}
              onFileChange={handlePhotoChange}
            />
          )}

          <ProjectTypeGrid selected={projectType} onSelect={handleProjectTypeChange} />

          {projectType && (
            <MaterialSelector materials={filteredMaterials} selected={material} onSelect={setMaterial} />
          )}

          <StyleSelector selected={style} onSelect={setStyle} />

          <PromptInput value={description} onChange={setDescription} mode={mode} />

          {/* Rate limit warning */}
          {getSessionCount() >= 5 && (
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="font-body text-sm text-amber-800">
                You&apos;ve reached the session limit for visualizations. Request a consultation below and our team can generate more for you!
              </p>
            </div>
          )}

          {/* Generate button */}
          <GenerateButton
            loading={loading}
            disabled={!canGenerate}
            hasImage={!!photoFile}
            onClick={handleGenerate}
          />

          {/* Error message */}
          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="font-body text-sm text-red-700">{error}</p>
            </div>
          )}
        </section>
      )}

      {/* Step 3: Results */}
      {generatedImage && (
        <section className="reveal">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-2xl md:text-3xl text-navy">Your Visualization</h2>
            <button
              onClick={handleStartOver}
              className="font-body text-sm text-wood hover:text-wood-dark transition-colors"
            >
              Start fresh
            </button>
          </div>
          <ResultDisplay
            generatedImage={generatedImage}
            mimeType={mimeType}
            originalPreview={mode === 'image' ? photoPreview : null}
            generationCount={generationCount}
            maxGenerations={MAX_GENERATIONS}
            onRegenerate={handleRegenerate}
            loading={loading}
          />
        </section>
      )}

      {/* Step 4: Consultation CTA (shown after generation) */}
      {generatedImage && (
        <section className="reveal">
          <ConsultationForm
            projectType={projectType || ''}
            material={material || ''}
            style={style || ''}
            description={description}
            generatedImage={generatedImage}
          />
        </section>
      )}
    </div>
  )
}
