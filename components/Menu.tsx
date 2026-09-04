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

      <div
        aria-hidden={!open}
        className={[
          "fixed inset-0 z-[100] bg-[var(--bg)] px-6 py-6 md:px-10 md:py-7",
          "transition-transform duration-700 ease-[cubic-bezier(.76,0,.24,1)]",
          open ? "translate-y-0" : "-translate-y-full pointer-events-none",
        ].join(" ")}
      >
        <div className="flex items-center justify-between border-b border-[var(--line)] pb-5">
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

        <nav className="flex min-h-[calc(100vh-100px)] flex-col justify-center">
          {links.map(([number, label, href]) => (
            <Link
              key={number}
              href={href}
              onClick={() => setOpen(false)}
              className="group flex items-baseline gap-5 border-b border-[var(--line)] py-5 md:py-7"
            >
              <span className="mono text-[10px] text-[var(--blue)]">{number}</span>
              <span className="text-[12vw] font-semibold leading-[.86] tracking-[-.065em] transition-transform duration-500 group-hover:translate-x-3 group-hover:text-[var(--purple)] md:text-[7vw]">
                {label}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
