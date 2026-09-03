import Link from "next/link";

export default function Contact() {
  return (
    <main className="min-h-screen px-6 py-6 md:px-10 md:py-7"><header className="flex items-center justify-between border-b border-[var(--line)] pb-5 text-[11px] tracking-[.18em]"><Link href="/">BARNABAS ADEJO</Link><Link href="/">HOME ↗</Link></header><section className="flex min-h-[calc(100vh-80px)] flex-col justify-center py-20"><p className="mono mb-10 text-[10px] tracking-[.2em] text-[var(--rose)]">04 / CONTACT</p><h1 className="text-[16vw] font-medium leading-[.8] tracking-[-.075em] md:text-[11vw]">LET&apos;S<br /><span className="serif italic">BUILD.</span></h1><div className="mt-20 flex flex-col gap-5 border-t border-[var(--line)] pt-7 text-sm md:flex-row md:items-center md:justify-between"><a href="mailto:barnabas.ayodele@gmail.com" className="text-lg underline decoration-[var(--line)] underline-offset-8">barnabas.ayodele@gmail.com</a><div className="mono flex gap-6 text-[10px] tracking-[.15em] text-[var(--muted)]"><a href="https://github.com/b-a-r-n-s" target="_blank" rel="noreferrer">GITHUB ↗</a><a href="https://ng.linkedin.com/in/adejo-barnzzz" target="_blank" rel="noreferrer">LINKEDIN ↗</a></div></div></section></main>
  );
}
