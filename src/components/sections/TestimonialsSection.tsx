import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { TestimonialCard } from '@/components/ui/TestimonialCard'
import { TESTIMONIALS } from '@/lib/data/testimonials'

export function TestimonialsSection() {
  return (
    <section className="section-pad bg-navy">
      <div className="container-content">
        <div className="text-center mb-14">
          <p className="text-wood text-xs font-body font-semibold uppercase tracking-widest mb-3 reveal">
            Client Stories
          </p>
          <h2 className="text-white heading-rule heading-rule-center reveal reveal-delay-1">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`reveal ${index === 0 ? '' : index === 1 ? 'reveal-delay-1' : 'reveal-delay-2'}`}
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

        <p className="text-center text-white/30 text-sm font-body mt-10 reveal">
          Real reviews from our clients on{' '}
          <a href="https://www.facebook.com/profile.php?id=100057458708679" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-wood transition-colors underline underline-offset-2">
            Facebook
          </a>
        </p>
      </div>
    </section>
  )
}
