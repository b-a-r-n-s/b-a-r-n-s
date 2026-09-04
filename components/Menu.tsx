"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";

const links = [["01","WORK","/#work"],["02","ABOUT","/about"],["03","EXPERIENCE","/experience"],["04","CONTACT","/contact"]];

export default function Menu() {
  const [open,setOpen]=useState(false);
  const panel=useRef<HTMLDivElement>(null);

  useEffect(()=>{
    if(!panel.current)return;
    gsap.set(panel.current,{yPercent:-100});
    gsap.to(panel.current,{yPercent:open?0:-100,duration:open?.7:.5,ease:"power4.inOut",overwrite:true});
    document.body.style.overflow=open?"hidden":"";
    return()=>{document.body.style.overflow=""};
  },[open]);

  return <>
    <button type="button" aria-label="Open menu" aria-expanded={open} onClick={()=>setOpen(true)} className="mono relative z-[60] flex items-center gap-3 text-[11px] tracking-[.18em]">
      MENU <span className="text-[var(--purple)]">+</span>
    </button>
    <div ref={panel} aria-hidden={!open} className="fixed inset-0 z-[100] bg-[var(--bg)] px-6 py-6 md:px-10 md:py-7">
      <div className="flex items-center justify-between border-b border-[var(--line)] pb-5">
        <Link href="/" onClick={()=>setOpen(false)} className="text-[11px] tracking-[.18em]">BARNABAS ADEJO</Link>
        <button type="button" aria-label="Close menu" onClick={()=>setOpen(false)} className="mono text-[11px] tracking-[.18em]">
          CLOSE <span className="text-[var(--purple)]">×</span>
        </button>
      </div>
      <nav className="flex min-h-[calc(100vh-100px)] flex-col justify-center">
        {links.map(([n,l,h])=><Link key={n} href={h} onClick={()=>setOpen(false)} className="group flex items-baseline gap-5 border-b border-[var(--line)] py-5 md:py-7">
          <span className="mono text-[10px] text-[var(--blue)]">{n}</span>
          <span className="text-[12vw] font-semibold leading-[.86] tracking-[-.065em] transition-all duration-500 group-hover:translate-x-3 group-hover:text-[var(--purple)] md:text-[7vw]">{l}</span>
        </Link>)}
      </nav>
    </div>
  </>;
}