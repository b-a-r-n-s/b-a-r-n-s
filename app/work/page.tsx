import Link from "next/link";
import ProjectVisual from "@/components/ProjectVisual";
import { projects } from "@/lib/projects";

export default function WorkPage() {
  return (
    <main className="min-h-screen px-6 py-6 md:px-10 md:py-8 site-grid glow">
      <header className="flex items-center justify-between border-b border-[var(--line)] pb-5">
        <Link href="/" className="text-[11px] tracking-[.18em]">BARNABAS ADEJO</Link>
        <Link href="/" className="mono text-[11px] tracking-[.16em]">HOME ↗</Link>
      </header>

      <section className="pb-20 pt-24 md:pb-28 md:pt-36"><div className="mb-8 mono text-[9px] tracking-[.16em] text-[var(--muted)]">SELECTED PROJECTS / 2026</div>
        <p className="mono text-[10px] tracking-[.18em] text-[var(--blue)]">02 / WORK</p>
        <h1 className="mt-7 max-w-5xl text-[15vw] font-medium leading-[.82] tracking-[-.07em] md:text-[9vw]">
          SELECTED<br />WORK.
        </h1><p className="mt-8 max-w-md text-sm leading-7 text-[var(--muted)]">A small record of things I have built, studied and am still figuring out.</p>
      </section>

      <section>
        {projects.map((project) => (
          <Link key={project.slug} href={`/work/${project.slug}`} className="project-row group block border-t border-[var(--line)] py-10 transition-colors duration-500 hover:bg-white/[.015] md:py-16">
            <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:items-end">
              <div>
                <div className="mono flex gap-4 text-[10px] tracking-[.14em] text-[var(--muted)]">
                  <span>{project.number}</span><span>{project.category}</span>
                </div>
                <h2 className="mt-5 text-[10vw] font-medium leading-[.86] tracking-[-.06em] md:text-[5.5vw]">{project.title}</h2>
              </div>
              <ProjectVisual type={project.slug} />
            </div>
            <div className="mt-6 flex justify-between gap-8 text-sm text-[var(--muted)]">
              <p className="max-w-xl">{project.description}</p>
              <span className="mono shrink-0 text-[10px] tracking-[.12em] text-[var(--text)]">VIEW PROJECT ↗</span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
