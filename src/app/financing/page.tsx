import type { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Financing — Synchrony HOME for Your Project',
  description:
    "Invest in your home without waiting. Sky's the Limit offers Synchrony HOME financing for custom fences, decks, pergolas, and more. Subject to credit approval.",
  alternates: { canonical: '/financing' },
}

const FAQ_ITEMS = [
  {
    question: 'What types of projects qualify for financing?',
    answer:
      "Any of our services — fences, decks, pergolas, screened enclosures, concrete, interior work, and custom woodwork — can be financed through Synchrony HOME, subject to credit approval and minimum project thresholds.",
  },
  {
    question: 'What credit score do I need to qualify?',
    answer:
      "Synchrony reviews each application individually. There is no published minimum score. Many homeowners with good-to-excellent credit qualify for promotional rates. You can check your eligibility without impacting your credit score.",
  },
  {
    question: 'How do I apply?',
    answer:
      "Click the \"Apply for Financing\" button on this page or ask us to submit the application during your estimate. Approval decisions are typically delivered in minutes.",
  },
  {
    question: 'Are there promotional interest rates?',
    answer:
      "Synchrony HOME often offers promotional financing periods (deferred interest or reduced rates) for qualifying purchases. Specific promotions depend on what Synchrony is running at the time of your project.",
  },
  {
    question: 'Is there a minimum project size for financing?',
    answer:
      "Synchrony HOME generally has a minimum purchase amount. We'll confirm the current minimums during your estimate consultation.",
  },
  {
    question: 'What are the monthly payment options?',
    answer:
      "Monthly payments depend on your approved credit limit, interest rate, and financing term. Synchrony's account management tools let you set up autopay and view statements online.",
  },
]

export default function FinancingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy section-pad-lg pt-28 md:pt-36">
        <div className="container-content px-4 md:px-8">
          <p className="text-wood text-xs font-body font-semibold uppercase tracking-widest mb-4 reveal">
            Financing Options
          </p>
          <h1 className="text-white max-w-2xl reveal reveal-delay-1">
            Invest in Your Home,<br />On Your Terms
          </h1>
          <p className="text-white/70 text-xl mt-5 max-w-prose font-body font-light reveal reveal-delay-2">
            Premium work shouldn&apos;t be out of reach. Through Synchrony HOME financing,
            qualified homeowners can start their project now and pay over time.
          </p>
        </div>
      </section>

      {/* How it works */}
      <SectionWrapper className="bg-cream">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="heading-rule mb-6">How Synchrony HOME Works</h2>
            <div className="space-y-6 text-stone-600">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-navy text-white font-display font-bold flex items-center justify-center flex-shrink-0 text-sm">
                  1
                </div>
                <div>
                  <p className="font-body font-semibold text-stone-800 mb-1">Apply Online or With Us</p>
                  <p className="text-sm leading-relaxed">
                    Apply through Synchrony&apos;s secure portal or ask us to initiate the
                    application during your estimate. Decisions are typically instant.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-navy text-white font-display font-bold flex items-center justify-center flex-shrink-0 text-sm">
                  2
                </div>
                <div>
                  <p className="font-body font-semibold text-stone-800 mb-1">Get Approved</p>
                  <p className="text-sm leading-relaxed">
                    If approved, you&apos;ll receive a credit limit you can use toward your project.
                    Subject to credit approval — minimum monthly payments required.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-navy text-white font-display font-bold flex items-center justify-center flex-shrink-0 text-sm">
                  3
                </div>
                <div>
                  <p className="font-body font-semibold text-stone-800 mb-1">We Build. You Pay Over Time.</p>
                  <p className="text-sm leading-relaxed">
                    We complete your project on our usual timeline. You manage your
                    Synchrony account and pay at a pace that works for your budget.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <Button
                href={BUSINESS.synchronyUrl}
                variant="wood"
                size="lg"
                external
              >
                Apply for Financing
              </Button>
              <p className="text-stone-400 text-xs font-body mt-3">
                Subject to credit approval. Minimum monthly payments required.
                See Synchrony for full terms.
              </p>
            </div>
          </div>

          {/* Benefits card */}
          <div className="bg-navy rounded-card p-10">
            <h3 className="text-white font-display text-2xl mb-6">Why Finance?</h3>
            <div className="space-y-5">
              {[
                { title: 'Start Sooner', body: "Don't wait years to save up. Start your project now while project costs and interest rates allow." },
                { title: 'Preserve Cash', body: 'Keep your liquidity. A home improvement loan or credit line lets your savings stay invested.' },
                { title: 'Increase Home Value', body: 'A well-built deck, fence, or outdoor living space typically returns 60–80% of project cost in home value.' },
                { title: 'Manage Budget', body: 'Predictable monthly payments make it easier to plan and budget for other household priorities.' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-wood mt-2.5 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-white font-body font-medium text-sm">{item.title}</p>
                    <p className="text-white/50 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper className="bg-cream-dark">
        <div className="max-w-3xl mx-auto">
          <h2 className="heading-rule heading-rule-center text-center mb-12">
            Financing FAQ
          </h2>

          <div className="space-y-3">
            {FAQ_ITEMS.map((item, index) => (
              <details
                key={index}
                className="group bg-white rounded-card border border-stone-200 overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-stone-50 transition-colors">
                  <span className="text-navy font-body font-semibold text-[0.95rem] pr-8">
                    {item.question}
                  </span>
                  <span className="text-wood flex-shrink-0 transition-transform duration-200 group-open:rotate-45" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="12" y1="5" x2="12" y2="19"/>
                      <line x1="5" y1="12" x2="19" y2="12"/>
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-stone-600 text-sm leading-relaxed">{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Bottom CTA */}
      <section className="section-pad bg-navy">
        <div className="container-content px-4 md:px-8 text-center">
          <h2 className="text-white mb-4">Ready to Get Started?</h2>
          <p className="text-white/60 max-w-lg mx-auto mb-8 font-body">
            Get your free project estimate first — then we&apos;ll walk you through the
            financing application together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="wood" size="lg" className="w-full sm:w-auto">
              Get a Free Estimate
            </Button>
            <Button href={BUSINESS.synchronyUrl} variant="ghost" size="lg" className="w-full sm:w-auto" external>
              Apply for Financing
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
