import { cn } from "@/lib/utils"

type SectionHeaderProps = {
  eyebrow: string
  title: React.ReactNode
  description?: string
  align?: "left" | "center"
  className?: string
  /** If true, render with light-on-dark colors (for dark sections). */
  tone?: "light" | "dark"
}

/**
 * Reusable section title block. Keeps vertical rhythm, eyebrow styling,
 * and optional description consistent across all marketing sections.
 */
export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  tone = "dark",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        align === "center" && "mx-auto text-center",
        align === "center" && "max-w-2xl",
        className,
      )}
    >
      <div
        className={cn(
          "mb-3 text-[11px] font-bold uppercase tracking-[2.5px]",
          tone === "dark" ? "text-brand" : "text-accent-bright",
        )}
      >
        {eyebrow}
      </div>
      <h2
        className={cn(
          "font-heading text-[clamp(1.75rem,3.6vw,2.75rem)] font-black leading-[1.1] tracking-[-0.02em] text-balance",
          tone === "dark" ? "text-ink" : "text-white",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-[17px] leading-[1.72] text-pretty",
            align === "center" ? "mx-auto" : "",
            "max-w-xl",
            tone === "dark" ? "text-body" : "text-white/60",
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
