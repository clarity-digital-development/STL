import Link from 'next/link'
import { ImagePlaceholder } from './ImagePlaceholder'
import { cn, getCategoryLabel } from '@/lib/utils'
import type { PortfolioProject } from '@/types'

interface ProjectCardProps {
  project: PortfolioProject
  className?: string
  showLink?: boolean
}

export function ProjectCard({ project, className, showLink = true }: ProjectCardProps) {
  const content = (
    <>
      <ImagePlaceholder
        src={project.image}
        gradientFrom={project.gradientFrom}
        gradientTo={project.gradientTo}
        aspectRatio={project.aspectRatio}
        label={project.title}
        rounded={false}
        className="rounded-t-card"
      />
      <div className="p-5">
        <span className="inline-block bg-wood/10 text-wood text-xs font-body font-semibold uppercase tracking-wider px-2.5 py-1 rounded mb-3">
          {getCategoryLabel(project.category)}
        </span>
        <h3 className="text-navy font-display text-lg leading-snug mb-2">
          {project.title}
        </h3>
        <p className="text-stone-600 text-sm leading-relaxed">
          {project.description}
        </p>
      </div>
    </>
  )

  if (showLink) {
    return (
      <div className={cn('group bg-white rounded-card shadow-card card-lift overflow-hidden', className)}>
        {content}
      </div>
    )
  }

  return (
    <div className={cn('bg-white rounded-card shadow-card overflow-hidden', className)}>
      {content}
    </div>
  )
}
