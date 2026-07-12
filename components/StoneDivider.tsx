export default function StoneDivider({ className = "" }: { className?: string }) {
  // Widths loosely mimic irregular stone coursing, reused as a recurring
  // signature motif between sections (echoes the retaining-wall photography).
  const widths = [64, 28, 96, 42, 120, 30, 72, 50, 88, 34, 100, 46, 60, 24, 92];
  return (
    <div className={`stone-course ${className}`} aria-hidden="true">
      {widths.map((w, i) => (
        <span key={i} style={{ width: `${w}px` }} />
      ))}
    </div>
  );
}
