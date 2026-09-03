import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectVisual from "@/components/ProjectVisual";
import { projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ project: project.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ project: string }> }) {
  const { project: slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen px-6 py-6 md:px-10 md:py-8">
      <header className="flex items-center justify-between border-b border-[var(--line)] pb-5">
        <Link href="/" className="text-[11px] tracking-[.18em]">BARNABAS ADEJO</Link>
        <Link href="/work" className="mono text-[11px] tracking-[.16em]">ALL WORK ↗</Link>
      </header>

      <section className="pb-16 pt-24 md:pb-24 md:pt-36">
        <div className="mono flex gap-5 text-[10px] tracking-[.16em] text-[var(--rose)]">
          <span>{project.number} / 05</span><span>{project.category}</span>
          {project.status && <span>{project.status}</span>}
        </div>
        <h1 className="mt-8 max-w-6xl text-[14vw] font-medium leading-[.82] tracking-[-.07em] md:text-[9vw]">{project.title}</h1>
      </section>

      <ProjectVisual type={project.slug} />

      <section className="grid gap-12 border-t border-[var(--line)] py-16 md:grid-cols-[1fr_2fr] md:py-24">
        <p className="mono text-[10px] tracking-[.16em] text-[var(--muted)]">OVERVIEW</p>
        <div>
          <p className="max-w-3xl text-xl leading-relaxed md:text-3xl">{project.description}</p>
          <div className="mt-12 flex flex-wrap gap-3">
            {project.stack.map((item) => <span key={item} className="border border-[var(--line)] px-3 py-2 text-xs text-[var(--muted)]">{item}</span>)}
          </div>
          <a href={project.href} target="_blank" rel="noreferrer" className="mono mt-12 inline-block border-b border-[var(--rose)] pb-2 text-[10px] tracking-[.16em]">OPEN PROJECT ↗</a>
        </div>
      </section>

      <footer className="border-t border-[var(--line)] py-8">
        <Link href="/work" className="mono text-[10px] tracking-[.16em] text-[var(--muted)]">← BACK TO WORK</Link>
      </footer>
    </main>
  );
}
