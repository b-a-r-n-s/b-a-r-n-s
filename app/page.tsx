"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Menu from "@/components/Menu";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  ["01", "IG Easy Auto", "Production web platform for a real automotive client.", "https://www.igeasyauto.com"],
  ["02", "AI Engineer Roadmap", "A learning roadmap and progress tracker built around my AI engineering path.", "https://airoadmaplearn.vercel.app/"],
  ["03", "AI/ML Learning", "Python and scikit-learn work documenting the progression from fundamentals into machine learning.", "https://github.com/b-a-r-n-s/ai-ml-learning"],
  ["04", "Arduino Smart Home", "ESP32 automation combining sensors, relays, MQTT and voice control.", "https://github.com/b-a-r-n-s/arduino-smart-home"],
  ["05", "Autonomous Ground Vehicle", "State-space modelling and feedback-control work in active development.", "https://github.com/b-a-r-n-s/autonomous-ground-vehicle"],
];

export default function Home() {
  const page = useRef<main>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: "power4.out" } });
      intro.from(".nav", { y: -24, opacity: 0, duration: 0.8 })
        .from(".eyebrow", { y: 30, opacity: 0, duration: 0.7 }, "-=0.4")
        .from(".hero-line", { yPercent: 110, duration: 1.1, stagger: 0.1 }, "-=0.35")
        .from(".hero-copy", { y: 24, opacity: 0, duration: 0.8 }, "-=0.65")
        .from(".portrait", { clipPath: "inset(100% 0 0 0)", scale: 1.08, duration: 1.4 }, "-=1")
        .from(".hero-meta", { opacity: 0, duration: 0.7 }, "-=0.5");

      gsap.to(".hero-image-wrap", { yPercent: -12, scale: 1.05, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
      gsap.to(".hero-title", { xPercent: -8, opacity: 0.35, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
      gsap.from(".about-reveal", { y: 100, opacity: 0, duration: 1.2, ease: "power4.out", scrollTrigger: { trigger: ".about", start: "top 75%" } });
      gsap.utils.toArray<HTMLElement>(".project-row").forEach((row) => {
        gsap.from(row, { y: 55, opacity: 0, duration: 0.9, ease: "power4.out", scrollTrigger: { trigger: row, start: "top 88%" } });
      });
    }, page);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={page}>
      <section className="hero site-grid relative min-h-screen overflow-hidden px-6 py-6 md:px-10 md:py-7">
        <nav className="nav relative z-20 flex items-center justify-between border-b border-[var(--line)] pb-5 text-[11px] tracking-[.18em]">
          <span>BARNABAS ADEJO</span><Menu />
        </nav>
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[.04]"><span className="text-[28vw] font-bold tracking-[-.08em]">BA</span></div>
        <div className="relative z-10 flex min-h-[calc(100vh-90px)] flex-col justify-center py-16 md:grid md:grid-cols-[1.15fr_.85fr] md:items-center md:gap-8 md:py-0">
          <div className="hero-title">
            <p className="eyebrow mono mb-8 text-[10px] tracking-[.2em] text-[var(--rose)]">ENGINEER / BUILDER</p>
            <h1 className="max-w-5xl text-[17vw] font-semibold leading-[.8] tracking-[-.075em] md:text-[9.7vw]">
              <span className="reveal-line block"><span className="hero-line">I BUILD</span></span>
              <span className="reveal-line block"><span className="hero-line serif font-normal italic">INTELLIGENT</span></span>
              <span className="reveal-line block"><span className="hero-line">SYSTEMS.</span></span>
            </h1>
            <p className="hero-copy mt-8 max-w-lg text-sm leading-6 text-[var(--muted)] md:text-base">Electrical &amp; Electronics Engineering<br />Software · Machine Learning · Intelligent Systems</p>
          </div>
          <div className="hero-image-wrap relative mt-10 flex justify-end md:mt-0">
            <div className="portrait relative h-[52vh] w-[78vw] overflow-hidden md:h-[70vh] md:w-[31vw]">
              <img src="https://avatars.githubusercontent.com/u/239993191?v=4" alt="Barnabas Adejo" className="h-full w-full object-cover grayscale-[.15]" />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_45%,rgba(100,28,43,.35))] mix-blend-screen" />
              <div className="absolute bottom-5 left-5 mono text-[9px] tracking-[.18em] text-white/60">PORTRAIT / 001</div>
            </div>
          </div>
        </div>
        <div className="hero-meta absolute bottom-7 left-6 right-6 flex items-end justify-between md:left-10 md:right-10"><span className="mono text-[9px] tracking-[.18em] text-[var(--muted)]">SCROLL TO EXPLORE</span><span className="mono text-[9px] tracking-[.18em] text-[var(--muted)]">01 / 05</span></div>
      </section>

      <section className="about border-y border-[var(--line)] px-6 py-28 md:px-10 md:py-44">
        <div className="about-reveal mx-auto max-w-[1400px]">
          <p className="mono mb-12 text-[10px] tracking-[.2em] text-[var(--rose)]">01 / ABOUT</p>
          <h2 className="max-w-6xl text-[12vw] font-medium leading-[.88] tracking-[-.065em] md:text-[7vw]">I&apos;ve always been more interested in <span className="serif italic">how things work</span> than what they do.</h2>
          <div className="mt-16 flex justify-end"><p className="max-w-xl text-sm leading-7 text-[var(--muted)] md:text-base">I approach engineering through systems, software and experimentation — building things to understand them, then improving them until they work better.</p></div>
        </div>
      </section>

      <section id="work" className="px-6 py-28 md:px-10 md:py-40">
        <div className="mb-20 flex items-end justify-between border-b border-[var(--line)] pb-5"><p className="mono text-[10px] tracking-[.2em] text-[var(--rose)]">02 / WORK</p><span className="mono text-[9px] text-[var(--muted)]">SELECTED BUILDS</span></div>
        <div className="mx-auto max-w-[1500px]">{projects.map(([num, title, description, href]) => (
          <a key={num} href={href} target="_blank" rel="noreferrer" className="project-row group block border-b border-[var(--line)] py-10 md:py-16">
            <div className="grid items-start gap-5 md:grid-cols-[80px_1fr_1fr_100px]"><span className="mono text-[10px] text-[var(--muted)]">{num}</span><h3 className="text-4xl font-medium tracking-[-.04em] transition-transform duration-500 group-hover:translate-x-2 md:text-6xl">{title}</h3><p className="max-w-md text-sm leading-6 text-[var(--muted)] md:pt-2">{description}</p><span className="mono text-right text-xs text-[var(--rose)] transition-transform duration-500 group-hover:translate-x-1">↗</span></div>
          </a>
        ))}</div>
      </section>

      <footer className="border-t border-[var(--line)] px-6 py-20 md:px-10 md:py-28"><div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between"><div><p className="mono mb-5 text-[10px] tracking-[.2em] text-[var(--rose)]">03 / CONTACT</p><a href="mailto:barnabas.ayodele@gmail.com" className="text-[9vw] font-medium tracking-[-.06em] md:text-[6vw]">LET&apos;S BUILD.</a></div><p className="mono text-[9px] tracking-[.15em] text-[var(--muted)]">BARNABAS ADEJO / NIGERIA</p></div></footer>
    </main>
  );
}
