import Link from "next/link";

export default function Experience() {
  return (
    <main className="min-h-screen px-6 py-6 md:px-10 md:py-7">
      <header className="flex items-center justify-between border-b border-[var(--line)] pb-5 text-[11px] tracking-[.18em]"><Link href="/">BARNABAS ADEJO</Link><Link href="/">HOME ↗</Link></header>
      <section className="mx-auto max-w-[1400px] py-28 md:py-44"><p className="mono mb-10 text-[10px] tracking-[.2em] text-[var(--rose)]">03 / EXPERIENCE</p><h1 className="max-w-6xl text-[13vw] font-medium leading-[.84] tracking-[-.07em] md:text-[8vw]">Work, <span className="serif italic">learning</span> and direction.</h1>
        <div className="mt-24 border-t border-[var(--line)]">
          <div className="grid gap-8 border-b border-[var(--line)] py-10 md:grid-cols-[180px_1fr_180px]"><span className="mono text-[10px] text-[var(--rose)]">CURRENT</span><div><h2 className="text-3xl tracking-[-.04em]">SIWES / Industry</h2><p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)]">Engineering experience in an industrial environment, bringing classroom systems thinking into practical work.</p></div><span className="mono text-[9px] text-[var(--muted)]">2026</span></div>
          <div className="grid gap-8 border-b border-[var(--line)] py-10 md:grid-cols-[180px_1fr_180px]"><span className="mono text-[10px] text-[var(--rose)]">DIRECTION</span><div><h2 className="text-3xl tracking-[-.04em]">AI Engineering</h2><p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)]">Building from electrical and electronics engineering through software, data and machine learning toward intelligent systems.</p></div><span className="mono text-[9px] text-[var(--muted)]">NEXT</span></div>
        </div>
      </section>
    </main>
  );
}
