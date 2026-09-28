"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  ["01", "WORK", "/#work"],
  ["02", "ABOUT", "/about"],
  ["03", "EXPERIENCE", "/experience"],
  ["04", "CONTACT", "/contact"],
];

export default function Menu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="mono relative z-[60] flex items-center gap-3 text-[11px] tracking-[.18em]"
      >
        MENU <span className="text-[var(--purple)]">+</span>
      </button>

      {open && (
        <div
          className="menu-overlay fixed inset-0 z-[100] flex min-h-dvh flex-col bg-[var(--bg)] px-6 py-6 md:px-10 md:py-7"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <div className="menu-header flex shrink-0 items-center justify-between border-b border-[var(--line)] pb-5">
            <Link href="/" onClick={() => setOpen(false)} className="text-[11px] tracking-[.18em]">
              BARNABAS ADEJO
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="mono text-[11px] tracking-[.18em]"
            >
              CLOSE <span className="text-[var(--purple)]">×</span>
            </button>
          </div>

          <nav className="menu-nav flex min-h-0 flex-1 flex-col justify-center" aria-label="Main navigation">
            {links.map(([number, label, href], index) => (
              <Link
                key={number}
                href={href}
                onClick={() => setOpen(false)}
                className="menu-link group flex min-h-0 flex-1 items-center gap-4 border-b border-[var(--line)] py-3 md:gap-5 md:py-4"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <span className="mono shrink-0 text-[10px] text-[var(--blue)] md:text-[11px]">{number}</span>
                <span className="menu-label text-[clamp(2.35rem,8vw,7rem)] font-semibold leading-[.86] tracking-[-.065em] transition-transform duration-500 group-hover:translate-x-3 group-hover:text-[var(--purple)]">
                  {label}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
