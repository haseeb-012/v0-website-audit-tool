"use client"

import { ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"

/**
 * Full-width conversion CTA band. Dark brand gradient with a subtle
 * dot-grid overlay. Button returns the user to the hero audit input.
 */
export function CtaBand() {
  const router = useRouter()

  const focusAudit = () => {
    router.push("/#audit-input")
    requestAnimationFrame(() => {
      const input = document.getElementById("audit-input")
      input?.scrollIntoView({ behavior: "smooth", block: "center" })
      setTimeout(() => (input as HTMLInputElement | null)?.focus(), 500)
    })
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark to-brand px-5 py-20 text-center md:px-12 md:py-24">
      <div className="qa-cta-grid pointer-events-none absolute inset-0" />
      <div className="relative z-10 mx-auto max-w-3xl">
        <h2 className="font-heading text-[clamp(1.875rem,4vw,2.875rem)] font-black leading-tight tracking-tight text-balance text-white">
          Stop guessing what&apos;s wrong
          <br className="hidden md:block" /> with your website.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
          Free audit in 60 seconds. No signup needed. Full expert report from
          just $9.
        </p>
        <button
          type="button"
          onClick={focusAudit}
          className="qa-press group mt-10 inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-accent-bright px-10 text-sm font-extrabold tracking-wide text-white shadow-glow-accent hover:-translate-y-0.5 hover:bg-accent-emerald hover:shadow-glow-accent-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent-bright/35 sm:h-[60px] sm:px-12 sm:text-base"
        >
          Audit My Website Free
          <ArrowRight className="size-[18px] transition-transform group-hover:translate-x-0.5" />
        </button>
        <p className="mt-4 text-xs text-white/45 sm:text-sm">
          Trusted by founders building with Lovable, Bolt, Replit, and Shopify
        </p>
      </div>
    </section>
  )
}
