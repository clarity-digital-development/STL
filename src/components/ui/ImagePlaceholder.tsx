import Image from 'next/image'
import { cn } from '@/lib/utils'

interface ImagePlaceholderProps {
  gradientFrom?: string
  gradientTo?: string
  aspectRatio?: '16/9' | '4/3' | '1/1' | '3/4' | '21/9'
  className?: string
  label?: string
  rounded?: boolean
  src?: string
}

export function ImagePlaceholder({
  gradientFrom = '#1a2744',
  gradientTo = '#c4935a',
  aspectRatio = '16/9',
  className,
  label,
  rounded = true,
  src,
}: ImagePlaceholderProps) {
  const cssRatio = aspectRatio.replace('/', ' / ')

  // Real image mode
  if (src) {
    return (
      <div
        className={cn(
          'w-full overflow-hidden relative',
          rounded && 'rounded-card',
          className
        )}
        style={{ aspectRatio: cssRatio }}
      >
        <Image
          src={src}
          alt={label ?? 'Project photo'}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
          quality={85}
        />
      </div>
    )
  }

  // Gradient placeholder mode
  return (
    <div
      className={cn(
        'w-full overflow-hidden relative',
        rounded && 'rounded-card',
        className
      )}
      style={{
        aspectRatio: cssRatio,
        background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
      }}
      role="img"
      aria-label={label ?? 'Project photo coming soon'}
    >
      {/* Subtle crosshatch texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />
      {/* Center icon — small camera outline */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20" aria-hidden="true">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
          <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/>
          <circle cx="12" cy="13" r="4"/>
        </svg>
      </div>
    </div>
  )
}
