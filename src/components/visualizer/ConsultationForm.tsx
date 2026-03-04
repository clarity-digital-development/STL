'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { BUSINESS } from '@/lib/constants'

interface ConsultationFormProps {
  projectType: string
  material: string
  style: string
  description: string
  generatedImage: string | null
}

interface FormData {
  name: string
  phone: string
  email: string
  city: string
  notes: string
}

const INPUT_CLASS =
  'w-full border border-stone-200 rounded bg-white px-4 py-3 font-body text-stone-900 text-sm ' +
  'placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-wood/50 focus:border-wood ' +
  'transition-colors duration-200'

const CITIES = [
  'Nashville',
  'Brentwood',
  'Franklin',
  'Belle Meade',
  'Green Hills',
  'Clarksville',
  'Hendersonville',
  'Spring Hill',
  'Nolensville',
  'Mt. Juliet',
  'Other',
]

export function ConsultationForm({
  projectType,
  material,
  style,
  description,
  generatedImage,
}: ConsultationFormProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setStatus('submitting')
    setErrorMessage('')

    try {
      const res = await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          projectType,
          material,
          style,
          description,
          generatedImage,
        }),
      })

      if (!res.ok) {
        const body = await res.json()
        throw new Error(body.error || 'Failed to send')
      }

      setStatus('success')
    } catch (err) {
      setStatus('error')
      setErrorMessage(
        err instanceof Error ? err.message : 'Failed to send. Please call us directly.'
      )
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-cream rounded-lg p-8 text-center">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="font-display text-xl text-navy mb-2">Request Sent!</h3>
        <p className="font-body text-stone-500 text-sm mb-4">
          We&apos;ll review your visualization and reach out within one business day.
        </p>
        <p className="font-body text-sm text-stone-400">
          For urgent inquiries: <a href={BUSINESS.phoneHref} className="text-wood font-medium">{BUSINESS.phone}</a>
        </p>
      </div>
    )
  }

  return (
    <div className="bg-cream rounded-lg p-6 md:p-8">
      <h3 className="font-display text-xl md:text-2xl text-navy mb-2">
        Love what you see? Let&apos;s make it real.
      </h3>
      <p className="font-body text-sm text-stone-500 mb-6">
        Share this visualization with our team and we&apos;ll schedule a consultation to discuss your project.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <input
              {...register('name', { required: 'Name is required' })}
              placeholder="Your name"
              className={INPUT_CLASS}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-600 font-body">{errors.name.message}</p>
            )}
          </div>
          <div>
            <input
              {...register('phone', {
                required: 'Phone is required',
                pattern: {
                  value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4}$/,
                  message: 'Enter a valid phone number',
                },
              })}
              placeholder="Phone number"
              type="tel"
              className={INPUT_CLASS}
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-red-600 font-body">{errors.phone.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Enter a valid email',
                },
              })}
              placeholder="Email address"
              type="email"
              className={INPUT_CLASS}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-600 font-body">{errors.email.message}</p>
            )}
          </div>
          <div>
            <select
              {...register('city')}
              className={INPUT_CLASS}
              defaultValue=""
            >
              <option value="" disabled>City / Area</option>
              {CITIES.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>
        </div>

        <textarea
          {...register('notes')}
          placeholder="Anything else we should know? (optional)"
          rows={3}
          className={INPUT_CLASS}
        />

        {status === 'error' && (
          <div className="p-3 bg-red-50 border border-red-200 rounded text-sm text-red-700 font-body">
            {errorMessage}
          </div>
        )}

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full sm:w-auto px-8 py-3 bg-wood text-white font-body font-medium rounded-sm hover:bg-wood-dark shadow-wood transition-all duration-200 min-h-[44px] disabled:opacity-60"
        >
          {status === 'submitting' ? 'Sending...' : 'Request Consultation'}
        </button>
      </form>
    </div>
  )
}
