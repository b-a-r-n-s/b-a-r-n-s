import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen px-6 py-6 md:px-10 md:py-7">
      <header className="flex items-center justify-between border-b border-[var(--line)] pb-5 text-[11px] tracking-[.18em]"><Link href="/">BARNABAS ADEJO</Link><Link href="/">HOME ↗</Link></header>
      <section className="mx-auto max-w-[1400px] py-28 md:py-44">
        <p className="mono mb-10 text-[10px] tracking-[.2em] text-[var(--rose)]">01 / ABOUT</p>
        <h1 className="max-w-6xl text-[13vw] font-medium leading-[.84] tracking-[-.07em] md:text-[8vw]">Engineering first. <span className="serif italic">Then beyond it.</span></h1>
        <div className="mt-24 grid gap-16 md:grid-cols-[1fr_1.2fr] md:gap-24">
          <p className="mono text-[10px] tracking-[.16em] text-[var(--rose)]">HOW I THINK</p>
          <div className="space-y-8 text-base leading-8 text-[var(--muted)] md:text-lg"><p>I&apos;ve always been more interested in how things work than what they do.</p><p>Electrical and electronics engineering gave me a systems mindset. Software gave me a faster way to turn ideas into working things. Machine learning is where those interests are beginning to converge.</p><p>This portfolio documents that progression through things I have actually built, studied and tested.</p></div>
        </div>
      </section>
      <section className="border-y border-[var(--line)] py-20"><div className="mx-auto grid max-w-[1400px] gap-8 md:grid-cols-5">{["ENGINEERING","SOFTWARE","DATA","MACHINE LEARNING","INTELLIGENT SYSTEMS"].map((item, i) => <div key={item} className="border-t border-[var(--line)] pt-4"><span className="mono text-[9px] text-[var(--rose)]">0{i + 1}</span><p className="mt-8 text-xl tracking-[-.03em]">{item}</p></div>)}</div></section>
    </main>
  );
}
