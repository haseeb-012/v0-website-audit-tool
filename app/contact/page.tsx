import type { Metadata } from "next"
import { Mail, Clock, Globe2 } from "lucide-react"

import { SiteNav } from "@/components/site/site-nav"
import { SiteFooter } from "@/components/site/site-footer"
import { ContactForm } from "@/components/contact/contact-form"

export const metadata: Metadata = {
  title: "Contact — QAlaunch | Enterprise & Custom Website Audits",
  description:
    "Get in touch with QAlaunch for custom enterprise website audits, large multi-page projects, or questions about your report. We respond within 24 hours.",
}

const contactMethods = [
  { icon: Mail, label: "Email", value: "hello@getqalaunch.com" },
  { icon: Clock, label: "Response Time", value: "Within 24 hours" },
  {
    icon: Globe2,
    label: "Serving",
    value: "USA, UK, Canada, Australia, Europe & worldwide",
  },
]

export default function ContactPage() {
  return (
    <>
      <SiteNav />
      <main className="pt-16">
        {/* Page header */}
        <section className="relative overflow-hidden bg-slate-deep px-5 py-20 text-center sm:px-8 md:px-12 md:py-24 lg:py-28">
          {/* Decorative dot grid + glowing orbs (match home hero) */}
          <div className="qa-hero-grid pointer-events-none absolute inset-0" />
          <div className="qa-orb-float pointer-events-none absolute -left-40 -top-40 size-[520px] rounded-full bg-[radial-gradient(circle,rgba(24,71,168,0.45)_0%,transparent_65%)]" />
          <div className="qa-orb-float-alt pointer-events-none absolute -bottom-48 -right-32 size-[460px] rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.18)_0%,transparent_60%)]" />

          <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent-bright/25 bg-accent-bright/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[1.2px] text-[#4ade80] sm:text-[12px]">
              <span className="qa-blink size-[7px] rounded-full bg-[#4ade80]" />
              Replies within 24 hours
            </div>

            <h1 className="mt-7 font-heading text-[clamp(2.25rem,5.2vw,3.5rem)] font-black leading-[1.05] tracking-[-0.025em] text-balance text-white">
              Let&apos;s scope your{" "}
              <span className="text-accent-bright">custom audit</span>
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-white/65 sm:text-[17px]">
              Large website, enterprise engagement, or a question about your
              report? Tell us a bit about your project and we&apos;ll come back
              with a tailored scope and price.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[13px] text-white/55">
              <span className="inline-flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-accent-bright" />
                Custom enterprise pricing
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-accent-bright" />
                Dedicated QA engineer
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-accent-bright" />
                Video walkthrough
              </span>
            </div>
          </div>
        </section>

        {/* Contact body */}
        <section className="px-5 py-20 md:px-12 md:py-24">
          <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="mb-3 font-heading text-[26px] font-black tracking-tight text-ink">
                We respond within 24 hours
              </h2>
              <p className="mb-7 text-[15px] leading-relaxed text-body">
                Whether you need a custom enterprise audit, have a question
                about your report, or want to discuss your website&apos;s
                quality challenges — we are here to help.
              </p>

              <div className="flex flex-col gap-3.5">
                {contactMethods.map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="flex items-start gap-3.5 rounded-xl border border-border-soft bg-white p-4"
                  >
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-pale text-brand">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-widest text-muted-ink">
                        {label}
                      </div>
                      <div className="mt-0.5 text-[14.5px] font-bold text-ink">
                        {value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-2xl border border-border-soft bg-gradient-to-br from-brand-pale to-white p-7">
                <div className="font-heading text-[17px] font-extrabold text-ink">
                  11+ pages? We&apos;ll quote you.
                </div>
                <p className="mt-2 text-[14px] leading-relaxed text-body">
                  Fill in the form and we&apos;ll come back with a tailored
                  scope and price within 24 hours.
                </p>
                <div className="mt-3 text-[13px] font-bold text-brand">
                  ✓ Custom pricing &nbsp;·&nbsp; ✓ Dedicated QA engineer
                  &nbsp;·&nbsp; ✓ Video walkthrough
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
