import { cn } from '@/lib/utils'

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  as?: 'section' | 'div' | 'article'
  id?: string
}

export function SectionWrapper({
  children,
  className,
  as: Tag = 'section',
  id,
}: SectionWrapperProps) {
  return (
    <Tag id={id} className={cn('section-pad', className)}>
      <div className="container-content">
        {children}
      </div>
    </Tag>
  )
}
