import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { Button } from '@/components/ui/Button'
import { PORTFOLIO_PROJECTS } from '@/lib/data/portfolio'

export function FeaturedProjects() {
  const featured = PORTFOLIO_PROJECTS.filter((p) => p.featured).slice(0, 3)

  return (
    <SectionWrapper className="bg-cream">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <p className="text-wood text-xs font-body font-semibold uppercase tracking-widest mb-3 reveal">
            Recent Work
          </p>
          <h2 className="heading-rule reveal reveal-delay-1">
            Featured Projects
          </h2>
        </div>
        <div className="reveal reveal-delay-2">
          <Button href="/portfolio" variant="secondary" size="md">
            View Full Portfolio
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featured.map((project, index) => (
          <div
            key={project.id}
            className={`reveal ${index === 0 ? '' : index === 1 ? 'reveal-delay-1' : 'reveal-delay-2'}`}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
