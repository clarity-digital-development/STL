import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'
import { getCategoryLabel } from '@/lib/utils'
import type { PortfolioProject } from '@/types'

interface PortfolioCardProps {
  project: PortfolioProject
}

export function PortfolioCard({ project }: PortfolioCardProps) {
  return (
    <div className="break-inside-avoid mb-6 bg-white rounded-card shadow-card overflow-hidden card-lift">
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
        <p className="text-stone-500 text-sm leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  )
}
