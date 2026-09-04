import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectVisual from "@/components/ProjectVisual";
import { projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen site-grid px-6 py-6 md:px-10 md:py-8">
      <header className="flex items-center justify-between border-b border-[var(--line)] pb-5">
        <Link href="/" className="text-[11px] tracking-[.18em]">BARNABAS ADEJO</Link>
        <Link href="/work" className="mono text-[11px] tracking-[.16em]">ALL WORK ↗</Link>
      </header>

      <section className="grid min-h-[72vh] items-center gap-12 py-20 md:grid-cols-[1.05fr_.95fr] md:py-28">
        <div>
          <p className="mono text-[10px] tracking-[.18em] text-[var(--blue)]">{project.number} / {project.category}</p>
          <h1 className="mt-7 text-[15vw] font-semibold leading-[.84] tracking-[-.07em] md:text-[8vw]">{project.title}</h1>
          <p className="mt-8 max-w-xl text-base leading-8 text-[var(--muted)]">{project.description}</p>
          {project.status && <p className="mono mt-5 text-[9px] tracking-[.16em] text-[var(--purple)]">{project.status}</p>}
          <div className="mt-9 flex flex-wrap gap-2">
            {project.stack.map((item) => <span key={item} className="mono border border-[var(--line)] px-3 py-2 text-[9px] tracking-[.08em] text-[var(--muted)]">{item}</span>)}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={project.href} target="_blank" rel="noreferrer" className="inline-flex border border-[var(--text)] px-5 py-3 text-[10px] tracking-[.14em] transition-all duration-300 hover:bg-[var(--text)] hover:text-[var(--bg)]">OPEN PROJECT ↗</a>
            <Link href="/contact" className="inline-flex border border-[var(--line)] px-5 py-3 text-[10px] tracking-[.14em] text-[var(--muted)] hover:text-[var(--text)]">CONTACT</Link>
          </div>
        </div>
        <div className="project-hero-visual">
          <ProjectVisual type={project.slug} />
        </div>
      </section>
    </main>
  );
}
