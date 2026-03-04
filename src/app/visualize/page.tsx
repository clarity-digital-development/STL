import type { Metadata } from 'next'
import { VisualizerContainer } from '@/components/visualizer/VisualizerContainer'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'AI Project Visualizer — See It Before We Build It',
  description:
    'Upload a photo of your space or describe your vision, and our AI tool will generate a photorealistic visualization of your project. Custom decks, fences, screened enclosures, and more across Middle Tennessee.',
  openGraph: {
    title: `AI Project Visualizer | ${BUSINESS.name}`,
    description:
      'See what your outdoor project could look like before construction begins. Upload a photo and let our AI show you the possibilities.',
  },
}

export default function VisualizePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy section-pad pt-28 md:pt-36">
        <div className="container-content px-4 md:px-8">
          <nav className="mb-6 reveal" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 font-body text-sm text-white/40">
              <li><a href="/" className="hover:text-white/60 transition-colors">Home</a></li>
              <li aria-hidden="true">/</li>
              <li className="text-white/70">Visualize</li>
            </ol>
          </nav>

          <h1 className="text-white font-display text-3xl md:text-5xl mb-4 reveal">
            See It Before We Build It
          </h1>
          <p className="text-white/70 font-body text-base md:text-xl max-w-2xl leading-relaxed reveal reveal-delay-1">
            Upload a photo of your space and describe your vision. Our AI visualization tool will show you what your project could look like — then let&apos;s talk about making it real.
          </p>
        </div>
      </section>

      {/* Visualizer tool */}
      <section className="section-pad bg-white">
        <div className="container-content px-4 md:px-8">
          <VisualizerContainer />
        </div>
      </section>
    </>
  )
}
