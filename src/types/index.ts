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

// ── Visualizer ──────────────────────────────────────────
export type VisualizerMode = 'image' | 'text'

export interface ProjectTypeOption {
  slug: string
  label: string
  icon: string // SVG path data
}

export interface MaterialOption {
  slug: string
  label: string
  color: string // Tailwind-compatible hex for swatch
  description: string // rich description for prompt
}

export interface StyleOption {
  slug: string
  label: string
  description: string // rich description for prompt
}

export interface VisualizationResult {
  image: string // base64
  mimeType: string
  prompt: string
}

export interface ConsultationPayload {
  name: string
  phone: string
  email: string
  city: string
  notes: string
  projectType: string
  material: string
  style: string
  description: string
  generatedImage?: string // base64
  originalImage?: string // base64
}
