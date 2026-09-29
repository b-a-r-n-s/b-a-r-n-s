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
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <button type="button" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)} className="mono relative z-[60] flex items-center gap-3 text-[11px] tracking-[.18em]">
        MENU <span className="text-[var(--purple)]">+</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-[100]" role="dialog" aria-modal="true" aria-label="Site navigation">
          <button type="button" aria-label="Close menu" onClick={() => setOpen(false)} className="absolute inset-0 bg-black/45 backdrop-blur-[3px]" />

          <aside className="menu-panel absolute right-0 top-0 flex h-dvh w-[min(390px,88vw)] flex-col border-l border-[var(--line)] bg-[var(--surface)] px-6 py-6 shadow-[-24px_0_70px_rgba(0,0,0,.3)] md:px-8 md:py-7">
            <div className="flex items-center justify-between border-b border-[var(--line)] pb-5">
              <span className="mono text-[10px] tracking-[.18em] text-[var(--muted)]">NAVIGATION</span>
              <button type="button" onClick={() => setOpen(false)} className="mono text-[11px] tracking-[.16em] transition-colors hover:text-[var(--purple)]">CLOSE <span className="text-[var(--purple)]">×</span></button>
            </div>

            <nav className="flex flex-1 flex-col justify-center" aria-label="Main navigation">
              {links.map(([number, label, href]) => (
                <Link key={number} href={href} onClick={() => setOpen(false)} className="group flex items-center gap-4 border-b border-[var(--line)] py-5 md:py-6">
                  <span className="mono w-7 shrink-0 text-[10px] text-[var(--blue)]">{number}</span>
                  <span className="text-[clamp(1.45rem,4vw,2.25rem)] font-semibold leading-none tracking-[-.045em] transition-transform duration-300 group-hover:translate-x-2 group-hover:text-[var(--purple)]">{label}</span>
                  <span className="ml-auto text-sm text-[var(--muted)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">↗</span>
                </Link>
              ))}
            </nav>

            <div className="border-t border-[var(--line)] pt-5">
              <Link href="/" onClick={() => setOpen(false)} className="mono text-[9px] tracking-[.16em] text-[var(--muted)]">BARNABAS ADEJO / NIGERIA</Link>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
