"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
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
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
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

      {open && typeof document !== "undefined" && createPortal(
        <div className="menu-overlay" role="dialog" aria-modal="true" aria-label="Site navigation">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="menu-backdrop"
          />

          <aside className="menu-panel">
            <div className="menu-panel-header">
              <span className="mono text-[10px] tracking-[.18em] text-[var(--muted)]">NAVIGATION</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="mono text-[11px] tracking-[.16em] transition-colors hover:text-[var(--purple)]"
              >
                CLOSE <span className="text-[var(--purple)]">×</span>
              </button>
            </div>

            <nav className="menu-panel-nav" aria-label="Main navigation">
              {links.map(([number, label, href]) => (
                <Link
                  key={number}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="menu-panel-link group"
                >
                  <span className="mono w-7 shrink-0 text-[10px] text-[var(--blue)]">{number}</span>
                  <span className="menu-panel-label transition-transform duration-300 group-hover:translate-x-2 group-hover:text-[var(--purple)]">{label}</span>
                  <span className="ml-auto text-sm text-[var(--muted)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">↗</span>
                </Link>
              ))}
            </nav>

            <div className="menu-panel-footer">
              <Link href="/" onClick={() => setOpen(false)} className="mono text-[9px] tracking-[.16em] text-[var(--muted)]">
                BARNABAS ADEJO / NIGERIA
              </Link>
            </div>
          </aside>
        </div>,
        document.body
      )}
    </>
  );
}
