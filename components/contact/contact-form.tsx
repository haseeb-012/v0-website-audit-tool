"use client"

import { ArrowRight, CheckCircle2 } from "lucide-react"
import { useState } from "react"

import { cn } from "@/lib/utils"

/**
 * Contact form — client component that simulates a submit. All fields
 * are local state so we can show a success state without a backend.
 * Replace the `handleSubmit` body with a real server action when wiring
 * up a backend.
 */
export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle")

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("submitting")
    // Simulated network delay — swap for a real server action.
    await new Promise((r) => setTimeout(r, 900))
    setStatus("sent")
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center rounded-3xl border border-border-soft bg-white p-10 text-center shadow-sm">
        <div className="mb-4 flex size-14 items-center justify-center rounded-full bg-accent-pale text-accent-emerald">
          <CheckCircle2 className="size-7" />
        </div>
        <h3 className="font-heading text-xl font-black text-ink">
          Message sent!
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-body">
          Thanks for reaching out. We&apos;ll get back to you with a tailored
          quote or answer within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-bold text-brand hover:underline"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-border-soft bg-white p-8 shadow-sm md:p-10"
    >
      <h3 className="mb-6 font-heading text-2xl font-black tracking-tight text-ink">
        Send us a message
      </h3>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="First Name" required>
          <input type="text" placeholder="John" className={inputClass} />
        </Field>
        <Field label="Last Name" required>
          <input type="text" placeholder="Smith" className={inputClass} />
        </Field>
      </div>

      <Field label="Email Address" required className="mt-4">
        <input
          type="email"
          placeholder="john@company.com"
          className={inputClass}
        />
      </Field>

      <Field label="Website URL" className="mt-4">
        <input
          type="url"
          placeholder="https://yourwebsite.com"
          className={inputClass}
        />
      </Field>

      <Field label="Number of pages" className="mt-4">
        <select className={inputClass} defaultValue="">
          <option value="" disabled>
            Select page count
          </option>
          <option>1 page — Basic ($9)</option>
          <option>2–5 pages — Standard ($24)</option>
          <option>6–10 pages — Premium ($59)</option>
          <option>11–25 pages (Custom)</option>
          <option>26–50 pages (Custom)</option>
          <option>50+ pages (Enterprise)</option>
        </select>
      </Field>

      <Field label="Website type" className="mt-4">
        <select className={inputClass} defaultValue="">
          <option value="" disabled>
            Select type
          </option>
          <option>AI-built site (Lovable, Bolt, Replit, v0)</option>
          <option>eCommerce / Shopify store</option>
          <option>SaaS web application</option>
          <option>Landing page / Marketing site</option>
          <option>Portfolio / Agency site</option>
          <option>Blog / Content site</option>
          <option>Other</option>
        </select>
      </Field>

      <Field label="Tell us about your project" className="mt-4">
        <textarea
          rows={5}
          placeholder="Describe your website, any specific concerns, or what you'd like us to focus on…"
          className={cn(inputClass, "min-h-28 resize-y")}
        />
      </Field>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="qa-press group mt-6 inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-brand px-5 text-sm font-extrabold text-white shadow-glow-brand hover:-translate-y-0.5 hover:bg-brand-mid focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/30 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
        {status !== "submitting" && (
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        )}
      </button>
    </form>
  )
}

const inputClass =
  "w-full rounded-xl border border-border-soft bg-surface-soft px-4 py-3 font-sans text-sm text-ink outline-none transition-all placeholder:text-muted-ink focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/10"

function Field({
  label,
  required,
  children,
  className,
}: {
  label: string
  required?: boolean
  children: React.ReactNode
  className?: string
}) {
  return (
    <label className={cn("block", className)}>
      <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted-ink">
        {label} {required && <span className="text-danger">*</span>}
      </span>
      {children}
    </label>
  )
}
