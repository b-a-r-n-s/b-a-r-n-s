type Props = { type: string };

export default function ProjectVisual({ type }: Props) {
  if (type === "ig-easy-auto") {
    return (
      <div className="relative aspect-[16/9] overflow-hidden bg-black">
        <img
          src="/projects/ig-easy-auto-cover.webp"
          alt="IG Easy Auto Limited website"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[rgba(139,92,246,.10)] via-transparent to-[rgba(56,189,248,.08)]" />
      </div>
    );
  }

  return (
    <div className={`project-visual project-visual-${type}`} aria-hidden="true">
      <div className="visual-grid" />
      <div className="visual-orbit" />
      <div className="visual-line visual-line-a" />
      <div className="visual-line visual-line-b" />
      <div className="visual-node visual-node-a" />
      <div className="visual-node visual-node-b" />
      <span className="visual-label">{type.replaceAll("-", " / ")}</span>
    </div>
  );
}
