type Props = { type: string };

export default function ProjectVisual({ type }: Props) {
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
