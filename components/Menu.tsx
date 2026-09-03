"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const links = [
  ["01", "WORK", "/#work"],
  ["02", "ABOUT", "/about"],
  ["03", "EXPERIENCE", "/experience"],
  ["04", "CONTACT", "/contact"],
];

export default function Menu() {
  const [open, setOpen] = useState(false);
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!panel.current) return;
    gsap.to(panel.current, {
      yPercent: open ? 0 : -100,
      duration: open ? 0.9 : 0.7,
      ease: open ? "power4.out" : "power4.inOut",
      pointerEvents: open ? "auto" : "none",
    });
    if (open) {
      gsap.fromTo(".menu-link", { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.08, delay: 0.25, ease: "power4.out" });
    }
  }, [open]);

  return (
    <>
      <button onClick={() => setOpen(true)} className="mono flex items-center gap-3 text-[11px] tracking-[.18em]" aria-label="Open menu">
        MENU <span className="text-[var(--rose)]">+</span>
      </button>

      <div ref={panel} className="fixed inset-0 z-50 -translate-y-full bg-[var(--bg)] px-6 py-6 md:px-10 md:py-7" aria-hidden={!open}>
        <div className="flex items-center justify-between border-b border-[var(--line)] pb-5">
          <span className="text-[11px] tracking-[.18em]">BARNABAS ADEJO</span>
          <button onClick={() => setOpen(false)} className="mono text-[11px] tracking-[.18em]" aria-label="Close menu">CLOSE <span className="text-[var(--rose)]">×</span></button>
        </div>

        <nav className="flex min-h-[calc(100vh-100px)] flex-col justify-center">
          {links.map(([num, label, href]) => (
            <a key={num} href={href} onClick={() => setOpen(false)} className="menu-link group flex items-baseline gap-5 border-b border-[var(--line)] py-5 opacity-0 md:py-7">
              <span className="mono text-[10px] text-[var(--rose)]">{num}</span>
              <span className="text-[13vw] font-medium leading-[.85] tracking-[-.065em] transition-transform duration-500 group-hover:translate-x-3 md:text-[8vw]">{label}</span>
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
