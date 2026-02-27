import Link from 'next/link'
import { ImagePlaceholder } from './ImagePlaceholder'
import { cn, staggerClass } from '@/lib/utils'
import type { Service } from '@/types'

interface ServiceCardProps {
  service: Service
  index: number
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn(
        'group block bg-white rounded-card shadow-card card-lift reveal',
        staggerClass(index)
      )}
    >
      <ImagePlaceholder
        src={service.image}
        gradientFrom={service.gradientFrom}
        gradientTo={service.gradientTo}
        aspectRatio="16/9"
        label={`${service.title} project photo`}
        rounded={false}
        className="rounded-t-card"
      />
      <div className="p-6">
        <h3 className="text-navy text-xl font-display mb-2 group-hover:text-wood transition-colors duration-200">
          {service.title}
        </h3>
        <p className="text-stone-600 text-sm leading-relaxed mb-4">
          {service.shortDescription}
        </p>
        <span className="text-wood text-sm font-body font-medium inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-200">
          Learn more
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </span>
      </div>
    </Link>
  )
}
