import type { Testimonial } from '@/types'
import { cn } from '@/lib/utils'

interface TestimonialCardProps {
  testimonial: Testimonial
  className?: string
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <div className={cn('bg-navy-light/30 border border-white/10 rounded-card p-8', className)}>
      {/* Stars */}
      <div className="flex gap-1 mb-5" aria-label={`${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#c4935a" aria-hidden="true">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-white/85 font-body leading-relaxed mb-6 text-[0.95rem]">
        &ldquo;{testimonial.text}&rdquo;
      </blockquote>

      {/* Attribution */}
      <footer className="flex items-center justify-between">
        <div>
          <cite className="text-white font-body font-semibold not-italic text-sm">
            {testimonial.author}
          </cite>
          <p className="text-white/50 text-xs mt-0.5">{testimonial.location}</p>
        </div>
        <span className="text-wood/70 text-xs font-body uppercase tracking-wider">
          {testimonial.serviceCategory}
        </span>
      </footer>
    </div>
  )
}
