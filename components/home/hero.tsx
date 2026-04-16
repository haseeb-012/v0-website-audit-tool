"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowRight, Check } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * Hero split — marketing copy + URL capture on the left, an animated
 * "live audit" dashboard mock on the right. The dashboard bars and issue
 * cards animate in sequence on mount to demo what the product produces.
 */
export function Hero() {
  const router = useRouter()
  const [url, setUrl] = useState("")

  const submit = () => {
    const value = url.trim()
    const target = `/audit${value ? `?url=${encodeURIComponent(value)}` : ""}`
    router.push(target)
  }

  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden bg-slate-deep px-5 py-16 sm:px-8 md:px-12 md:py-20 lg:py-24">
      {/* Decorative dot grid + glowing orbs */}
      <div className="qa-hero-grid pointer-events-none absolute inset-0" />
      <div className="qa-orb-float pointer-events-none absolute -left-32 -top-32 size-[600px] rounded-full bg-[radial-gradient(circle,rgba(24,71,168,0.5)_0%,transparent_65%)]" />
      <div className="qa-orb-float-alt pointer-events-none absolute -bottom-40 -right-28 size-[500px] rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.2)_0%,transparent_60%)]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16 xl:gap-20">
        <div className="flex flex-col">
          <div className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-accent-bright/25 bg-accent-bright/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[1.2px] text-[#4ade80] sm:text-[12px]">
            <span className="qa-blink size-[7px] rounded-full bg-[#4ade80]" />
            9 Years of QA Expertise — Now Automated
          </div>

          <h1 className="font-heading text-[clamp(2.25rem,5.2vw,4rem)] font-black leading-[1.05] tracking-[-0.02em] text-balance text-white">
            Is your website{" "}
            <span className="text-accent-bright">actually working</span> for
            your customers?
          </h1>

          <p className="mt-6 max-w-xl text-[16px] leading-[1.7] text-white/65 sm:text-[17px] sm:leading-[1.75]">
            Get a free expert website audit in 60 seconds. We test usability,
            broken functionality, UI bugs, mobile responsiveness, and SEO —
            then give you a clear, actionable report your developer can fix
            today.
          </p>

          {/* URL capture */}
          <div className="mt-10 rounded-2xl border border-white/15 bg-white/[0.06] p-3 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] sm:p-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
              <div className="relative flex-1">
                <span className="pointer-events-none absolute left-4 top-1/2 hidden -translate-y-1/2 font-mono text-xs text-white/30 sm:block">
                  https://
                </span>
                <input
                  id="audit-input"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") submit()
                  }}
                  type="url"
                  placeholder="yourwebsite.com"
                  className={cn(
                    "h-14 w-full rounded-xl border border-white/15 bg-white/10 px-5 sm:pl-[84px]",
                    "font-mono text-[15px] text-white outline-none transition-all placeholder:text-white/35",
                    "focus:border-accent-bright focus:bg-accent-bright/10 focus:ring-4 focus:ring-accent-bright/15",
                  )}
                />
              </div>
              <button
                type="button"
                onClick={submit}
                className={cn(
                  "group inline-flex h-14 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-accent-bright px-7 sm:px-8",
                  "text-[15px] font-extrabold tracking-wide text-white transition-all",
                  "shadow-[0_10px_30px_-8px_rgba(22,163,74,0.55)]",
                  "hover:-translate-y-0.5 hover:bg-accent-emerald hover:shadow-[0_16px_40px_-8px_rgba(22,163,74,0.75)]",
                  "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent-bright/35",
                )}
              >
                Audit My Website Free
                <ArrowRight className="size-[18px] transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 px-1">
              <TrustItem label="No signup required" />
              <TrustItem label="Free preview in 60s" />
              <TrustItem label="Full report from $9" />
            </div>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-2 gap-6 sm:flex sm:flex-wrap sm:gap-8">
            <StatItem value="1,000+" label="Websites Audited" />
            <StatItem value="35+" label="Quality Checks" />
            <StatItem value="60s" label="Free Audit Time" />
            <StatItem value="9yr" label="QA Expertise" />
          </div>
        </div>

        {/* Animated dashboard mock */}
        <div className="relative hidden lg:block">
          <DashboardMock />
        </div>
      </div>
    </section>
  )
}

function TrustItem({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-1.5 text-xs font-medium text-white/50">
      <span className="inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-accent-bright/20 text-[#4ade80]">
        <Check className="size-2.5" strokeWidth={3} />
      </span>
      {label}
    </div>
  )
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-l-2 border-white/10 pl-4">
      <span className="block font-heading text-[24px] font-black leading-none text-white sm:text-[26px]">
        {value}
      </span>
      <span className="mt-1.5 block text-[11px] uppercase tracking-wider text-white/45">
        {label}
      </span>
    </div>
  )
}

const bars = [
  { label: "Usability", value: 45, color: "#ef4444" },
  { label: "UI / UX", value: 62, color: "#f97316" },
  { label: "Functionality", value: 51, color: "#ef4444" },
  { label: "Mobile", value: 70, color: "#f59e0b" },
  { label: "Performance", value: 82, color: "#22c55e" },
]

const issues = [
  {
    severity: "CRITICAL",
    cat: "Functionality",
    title: "Contact form submits with no confirmation",
    tone: { border: "border-l-danger", badge: "bg-danger/20 text-[#fca5a5]" },
  },
  {
    severity: "HIGH",
    cat: "Usability",
    title: "Navigation disappears on scroll",
    tone: { border: "border-l-warn", badge: "bg-warn/20 text-[#fcd34d]" },
  },
  {
    severity: "CRITICAL",
    cat: "Mobile",
    title: "CTA button invisible on iPhone SE",
    tone: { border: "border-l-danger", badge: "bg-danger/20 text-[#fca5a5]" },
  },
  {
    severity: "MEDIUM",
    cat: "UI / UX",
    title: "Low contrast text in hero section",
    tone: {
      border: "border-l-[#60a5fa]",
      badge: "bg-brand/20 text-[#93c5fd]",
    },
  },
]

function DashboardMock() {
  const [barWidths, setBarWidths] = useState<number[]>(bars.map(() => 0))
  const [visibleIssues, setVisibleIssues] = useState(0)

  useEffect(() => {
    const barTimers = bars.map((b, i) =>
      setTimeout(() => {
        setBarWidths((prev) => {
          const next = [...prev]
          next[i] = b.value
          return next
        })
      }, 400 + i * 200),
    )
    const issueTimers = issues.map((_, i) =>
      setTimeout(() => setVisibleIssues(i + 1), 1600 + i * 600),
    )
    return () => {
      barTimers.forEach(clearTimeout)
      issueTimers.forEach(clearTimeout)
    }
  }, [])

  return (
    <div className="overflow-hidden rounded-[20px] border border-white/10 bg-white/5 shadow-2xl shadow-black/50">
      {/* Browser chrome */}
      <div className="flex items-center gap-2.5 border-b border-white/10 bg-white/5 px-4 py-3">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-[#FF5F57]" />
          <span className="size-2.5 rounded-full bg-[#FFBD2E]" />
          <span className="size-2.5 rounded-full bg-[#28CA41]" />
        </div>
        <div className="flex-1 rounded-md bg-white/10 px-3 py-1 text-[12px] font-mono text-white/40">
          yourwebsite.com — Live Audit
        </div>
      </div>

      <div className="p-5">
        {/* Score row */}
        <div className="mb-4 flex items-center gap-3.5 border-b border-white/10 pb-4">
          <div className="flex size-14 flex-col items-center justify-center rounded-full border-[3px] border-warn">
            <span className="font-heading text-xl font-black leading-none text-white">
              58
            </span>
            <span className="text-[9px] font-bold text-warn">C+</span>
          </div>
          <div>
            <div className="text-[13px] font-bold text-white">
              Health Score: Needs Attention
            </div>
            <div className="mt-0.5 text-[11px] text-white/40">
              12 issues found across 6 categories
            </div>
          </div>
        </div>

        {/* Progress bars */}
        <div className="mb-4 flex flex-col gap-2">
          {bars.map((b, i) => (
            <div key={b.label} className="flex items-center gap-2.5">
              <span className="w-[84px] shrink-0 text-[11px] text-white/50">
                {b.label}
              </span>
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full transition-[width] duration-[1200ms] ease-out"
                  style={{
                    width: `${barWidths[i]}%`,
                    backgroundColor: b.color,
                  }}
                />
              </div>
              <span className="w-7 text-right font-mono text-[11px] text-white/50">
                {b.value}
              </span>
            </div>
          ))}
        </div>

        {/* Issue cards */}
        <div className="flex flex-col gap-2">
          {issues.map((iss, i) => (
            <div
              key={iss.title}
              className={cn(
                "rounded-xl border-l-[3px] bg-white/5 p-3 transition-all duration-500",
                iss.tone.border,
                i < visibleIssues
                  ? "translate-y-0 opacity-100"
                  : "translate-y-2 opacity-0",
              )}
            >
              <div className="mb-1 flex items-center gap-1.5">
                <span
                  className={cn(
                    "rounded-full px-2 py-0.5 text-[9.5px] font-extrabold tracking-wider",
                    iss.tone.badge,
                  )}
                >
                  {iss.severity}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-white/40">
                  {iss.cat}
                </span>
              </div>
              <div className="text-[12px] font-bold leading-snug text-white">
                {iss.title}
              </div>
            </div>
          ))}
        </div>

        {/* Platform chips */}
        <div className="mt-5 flex flex-wrap items-center gap-2.5 border-t border-white/10 pt-4">
          <span className="whitespace-nowrap text-[10px] uppercase tracking-widest text-white/30">
            Tested on:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {["Lovable", "Bolt.new", "Replit", "Shopify", "Any website"].map(
              (p) => (
                <span
                  key={p}
                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-white/50"
                >
                  {p}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
