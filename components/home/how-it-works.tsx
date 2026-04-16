const steps = [
  {
    n: 1,
    title: "Enter Your Website URL",
    description:
      'Paste your URL above and click "Audit My Website Free". No account. No credit card. No setup. Just your URL and one click.',
  },
  {
    n: 2,
    title: "Get Your Free Preview",
    description:
      "In 60 seconds, we surface your 3 most critical usability, UI, and functionality issues completely free — with severity, impact, and what's at stake.",
  },
  {
    n: 3,
    title: "Unlock Your Full Report",
    description:
      "Choose a plan based on how many pages to audit. Get a full PDF report with 35+ checks, screenshot evidence, and step-by-step developer fix instructions. From just $9.",
  },
]

/**
 * Dark "3-step" section. A faint gradient line connects step numbers on
 * desktop; on mobile the steps stack vertically with no connector.
 */
export function HowItWorks() {
  return (
    <section className="bg-slate-deep px-5 py-20 md:px-12 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-14 text-center font-heading text-[clamp(1.75rem,3.6vw,2.5rem)] font-black leading-[1.1] tracking-[-0.02em] text-white text-balance">
          From URL to expert audit report in 3 steps
        </h2>

        <div className="relative grid gap-12 md:grid-cols-3 md:gap-0">
          {/* Connector line on md+ */}
          <div className="pointer-events-none absolute left-[16.7%] right-[16.7%] top-[33px] hidden h-px bg-gradient-to-r from-accent-bright/50 via-accent-bright/30 to-brand-mid/50 md:block" />

          {steps.map((step) => (
            <div key={step.n} className="relative px-4 text-center">
              <div className="relative z-10 mx-auto mb-5 flex size-16 items-center justify-center rounded-full border-[2.5px] border-accent-bright/45 bg-gradient-to-br from-brand to-brand-mid font-heading text-[22px] font-black text-white">
                {step.n}
              </div>
              <h3 className="mb-2 font-heading text-[17px] font-extrabold text-white">
                {step.title}
              </h3>
              <p className="mx-auto max-w-xs text-[14px] leading-[1.65] text-white/55">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
