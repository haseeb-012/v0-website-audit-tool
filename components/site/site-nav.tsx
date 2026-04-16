"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useState } from "react"

import { Logo } from "./logo"
import { cn } from "@/lib/utils"

/**
 * Fixed top navigation with a dark, glassy treatment that matches the hero.
 * Active link state is derived from the pathname and the CTA always routes
 * back to the home hero where the audit input lives.
 */
export function SiteNav() {
  const pathname = usePathname()
  const router = useRouter()
  const [open, setOpen] = useState(false)

  const links = [
    { href: "/", label: "Home" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ]

  const handleAuditClick = () => {
    setOpen(false)
    if (pathname === "/") {
      // Already on home — just scroll the input into view and focus it.
      const input = document.getElementById("audit-input")
      input?.scrollIntoView({ behavior: "smooth", block: "center" })
      setTimeout(() => (input as HTMLInputElement | null)?.focus(), 500)
    } else {
      router.push("/#audit-input")
    }
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-16 border-b border-white/10",
        "bg-slate-deep/90 backdrop-blur-xl",
      )}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 md:px-12">
        <Link href="/" className="flex items-center" aria-label="QAlaunch home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const active = pathname === l.href
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                  active
                    ? "bg-white/10 text-white"
                    : "text-white/60 hover:bg-white/10 hover:text-white",
                )}
              >
                {l.label}
              </Link>
            )
          })}
          <button
            type="button"
            onClick={handleAuditClick}
            className={cn(
              "ml-2 rounded-xl bg-accent-bright px-5 py-2.5 text-sm font-bold text-white",
              "transition-all hover:-translate-y-0.5 hover:bg-accent-emerald hover:shadow-lg hover:shadow-accent-bright/30",
            )}
          >
            Audit My Website Free →
          </button>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-white/80 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="absolute inset-x-0 top-16 border-b border-white/10 bg-slate-deep/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1 px-5 py-4">
            {links.map((l) => {
              const active = pathname === l.href
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-lg px-3 py-2.5 text-sm font-medium",
                    active
                      ? "bg-white/10 text-white"
                      : "text-white/70 hover:bg-white/10",
                  )}
                >
                  {l.label}
                </Link>
              )
            })}
            <button
              type="button"
              onClick={handleAuditClick}
              className="mt-2 rounded-xl bg-accent-bright px-5 py-3 text-center text-sm font-bold text-white"
            >
              Audit My Website Free →
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
