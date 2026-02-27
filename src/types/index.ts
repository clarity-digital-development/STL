export interface Service {
  slug: string
  title: string
  shortDescription: string
  longDescription: string
  features: string[]
  gradientFrom: string
  gradientTo: string
  serviceType: string
  areaServed: string[]
  seoTitle: string
  seoDescription: string
  image?: string
  images?: string[]
}

export interface PortfolioProject {
  id: string
  title: string
  category: PortfolioCategory
  description: string
  gradientFrom: string
  gradientTo: string
  aspectRatio: '16/9' | '4/3' | '1/1' | '3/4'
  featured: boolean
  image?: string
}

export type PortfolioCategory =
  | 'fences-gates'
  | 'screened-enclosures'
  | 'decks'
  | 'pergolas'
  | 'staining'
  | 'concrete'
  | 'interior'
  | 'custom-woodwork'

export interface Testimonial {
  id: string
  author: string
  location: string
  rating: number
  text: string
  serviceCategory: string
  date: string
}

export interface NavItem {
  label: string
  href: string
}
