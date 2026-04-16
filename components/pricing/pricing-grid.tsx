import Link from "next/link"
import { Check, Zap, ClipboardList, Star } from "lucide-react"

import { cn } from "@/lib/utils"
import { plans, type Plan } from "./pricing-plans"

type PricingGridProps = {
  className?: string
}

/**
 * 4-column pricing grid with the "Standard" tier featured. Uses the
 * centralised `plans` array so the home preview and pricing page stay
 * in sync.
 */
export function PricingGrid({ className }: PricingGridProps) {
  return (
    <div
      className={cn(
        "grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
        className,
      )}
    >
      {plans.map((plan) => (
        <PlanCard key={plan.tier} plan={plan} />
      ))}
    </div>
  )
}

function PlanCard({ plan }: { plan: Plan }) {
  const DeliveryIcon = plan.delivery.icon === "bolt" ? Zap : ClipboardList

  return (
    <article
      className={cn(
        "relative flex flex-col rounded-3xl border bg-white p-8 transition-all duration-300",
        "hover:-translate-y-1.5 hover:shadow-card-hover",
        plan.popular
          ? "border-2 border-brand bg-gradient-to-b from-brand-pale to-white shadow-glow-brand"
          : "border-border-soft",
      )}
    >
      {plan.popular && (
        <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 whitespace-nowrap rounded-full bg-gradient-to-r from-brand to-brand-mid px-4 py-1 text-[10.5px] font-extrabold tracking-wide text-white shadow-glow-brand">
          <Star className="size-3" fill="currentColor" strokeWidth={0} />
          Most Popular
        </span>
      )}

      <div className="mb-3 text-xs font-bold uppercase tracking-widest text-muted-ink">
        {plan.tier}
      </div>

      <div className="flex items-end gap-1">
        {plan.priceSymbol && (
          <span className="font-heading text-2xl font-bold text-muted-ink">
            {plan.priceSymbol}
          </span>
        )}
        <span
          className={cn(
            "font-heading font-black leading-none text-ink",
            plan.price === "Custom" ? "text-4xl" : "text-5xl",
          )}
        >
          {plan.price}
        </span>
      </div>

      <div className="mt-1.5 text-sm text-body">{plan.pages}</div>

      <div
        className={cn(
          "mt-3 inline-flex w-fit items-center gap-1 rounded-full px-3 py-1 text-xs font-bold",
          plan.delivery.icon === "bolt"
            ? "bg-accent-pale text-accent-emerald"
            : "bg-[#E0E7FF] text-[#3730A3]",
        )}
      >
        <DeliveryIcon className="size-3" />
        {plan.delivery.label}
      </div>

      <div className="my-5 h-px bg-border-soft" />

      <ul className="mb-6 flex flex-1 flex-col divide-y divide-border-soft">
        {plan.features.map((f) => (
          <li
            key={f}
            className="flex items-start gap-2 py-2 text-sm leading-snug text-ink"
          >
            <Check
              className="mt-0.5 size-3.5 shrink-0 text-accent-bright"
              strokeWidth={3}
            />
            {f}
          </li>
        ))}
      </ul>

      <CTAButton plan={plan} />
    </article>
  )
}

function CTAButton({ plan }: { plan: Plan }) {
  const baseClasses =
    "qa-press inline-flex h-12 w-full items-center justify-center rounded-xl px-4 font-extrabold text-sm focus-visible:outline-none focus-visible:ring-4"
  const variantClasses = {
    primary:
      "bg-brand text-white shadow-glow-brand hover:-translate-y-0.5 hover:bg-brand-mid focus-visible:ring-brand/35",
    soft: "bg-brand-pale text-brand hover:bg-[#DCE9FF] focus-visible:ring-brand/25",
    outline:
      "border border-border-soft bg-white text-ink hover:border-brand hover:text-brand focus-visible:ring-brand/20",
    dark: "bg-slate-deep text-white hover:bg-ink focus-visible:ring-slate-deep/40",
  }[plan.cta.variant]

  return (
    <Link href={plan.cta.href} className={cn(baseClasses, variantClasses)}>
      {plan.cta.label}
    </Link>
  )
}
