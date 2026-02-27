'use client'

import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { BUSINESS } from '@/lib/constants'

interface FormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
  _website: string // Honeypot field
}

const SERVICE_OPTIONS = [
  'Fences & Gates',
  'Screened Enclosures',
  'Decks',
  'Pergolas & Covered Structures',
  'Staining & Restoration',
  'Concrete Work',
  'Interior Work',
  'Custom Woodwork',
  'Multiple Services',
  'Not Sure Yet',
]

const INPUT_CLASS =
  'w-full border border-stone-200 rounded bg-white px-4 py-3 font-body text-stone-900 text-sm ' +
  'placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-wood/50 focus:border-wood ' +
  'transition-colors duration-200'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    // Honeypot: if _website has any value, it's a bot — silently fake success
    if (data._website) {
      setSubmitted(true)
      return
    }

    setSubmitting(true)
    setErrorMsg('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error || 'Something went wrong')
      }

      setSubmitted(true)
      reset()
    } catch (err) {
      setErrorMsg(
        err instanceof Error
          ? err.message
          : 'Failed to send. Please call us directly.'
      )
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-16 px-8">
        <div className="w-16 h-16 bg-wood/10 rounded-full flex items-center justify-center mx-auto mb-5">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c4935a" strokeWidth="2" aria-hidden="true">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <h3 className="text-navy text-2xl font-display mb-3">Message Received</h3>
        <p className="text-stone-600 max-w-sm mx-auto">
          We respond within one business day. For urgent requests, call us directly at{' '}
          <a href={BUSINESS.phoneHref} className="text-wood font-medium hover:text-wood-dark transition-colors">
            {BUSINESS.phone}
          </a>
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">

      {/* Honeypot — visually hidden from real users */}
      <div
        style={{ position: 'absolute', opacity: 0, pointerEvents: 'none', left: '-9999px' }}
        aria-hidden="true"
        tabIndex={-1}
      >
        <label htmlFor="_website">Website (leave blank)</label>
        <input
          id="_website"
          type="text"
          autoComplete="off"
          tabIndex={-1}
          {...register('_website')}
        />
      </div>

      {/* Name + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-name" className="block text-stone-700 font-body font-medium text-sm mb-1.5">
            Full Name <span className="text-wood" aria-label="required">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            className={INPUT_CLASS}
            placeholder="John Smith"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1.5" role="alert">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="contact-phone" className="block text-stone-700 font-body font-medium text-sm mb-1.5">
            Phone <span className="text-wood" aria-label="required">*</span>
          </label>
          <input
            id="contact-phone"
            type="tel"
            autoComplete="tel"
            className={INPUT_CLASS}
            placeholder="(615) 555-0100"
            {...register('phone', {
              required: 'Phone number is required',
              pattern: {
                value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4}$/,
                message: 'Please enter a valid phone number',
              },
            })}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1.5" role="alert">{errors.phone.message}</p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="contact-email" className="block text-stone-700 font-body font-medium text-sm mb-1.5">
          Email Address <span className="text-wood" aria-label="required">*</span>
        </label>
        <input
          id="contact-email"
          type="email"
          autoComplete="email"
          className={INPUT_CLASS}
          placeholder="john@example.com"
          {...register('email', {
            required: 'Email address is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Please enter a valid email address',
            },
          })}
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1.5" role="alert">{errors.email.message}</p>
        )}
      </div>

      {/* Service */}
      <div>
        <label htmlFor="contact-service" className="block text-stone-700 font-body font-medium text-sm mb-1.5">
          Service Interested In
        </label>
        <select
          id="contact-service"
          className={`${INPUT_CLASS} bg-white appearance-none cursor-pointer`}
          {...register('service')}
        >
          <option value="">Select a service...</option>
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className="block text-stone-700 font-body font-medium text-sm mb-1.5">
          Tell Us About Your Project <span className="text-wood" aria-label="required">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={5}
          className={INPUT_CLASS}
          placeholder="Project size, location, timeline, any specific requirements..."
          {...register('message', { required: 'Please describe your project' })}
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1.5" role="alert">{errors.message.message}</p>
        )}
      </div>

      {/* Financing note */}
      <p className="text-stone-400 text-xs font-body">
        Ask about our{' '}
        <a href="/financing" className="text-wood hover:text-wood-dark transition-colors underline">
          Synchrony HOME financing
        </a>{' '}
        options — invest in your home on your terms.
      </p>

      {errorMsg && (
        <div className="bg-red-50 border border-red-200 rounded px-4 py-3 text-red-700 text-sm" role="alert">
          {errorMsg}
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={submitting}
        className="w-full sm:w-auto"
      >
        {submitting ? 'Sending...' : 'Send My Request'}
      </Button>

    </form>
  )
}
