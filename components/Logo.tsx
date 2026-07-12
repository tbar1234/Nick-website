import { site } from "@/lib/data";

export default function Logo({
  variant = "dark",
  shadow = false,
  className = "",
}: {
  variant?: "dark" | "light";
  /** Adds a soft drop-shadow so the mark stays visible over photography
   * (used while the header is still transparent, over the hero image). */
  shadow?: boolean;
  className?: string;
}) {
  const textColor = variant === "dark" ? "#171D19" : "#FFFFFF";
  const subColor = variant === "dark" ? "#A2582F" : "#D89A6E";
  const stepColor = variant === "dark" ? "#24402E" : "#FFFFFF";

  return (
    <span
      className={`inline-flex items-center gap-3 ${
        shadow ? "drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]" : ""
      } ${className}`}
    >
      <svg
        width="38"
        height="38"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Abstract stacked-stone steps mark */}
        <rect x="2" y="24" width="30" height="6" rx="1.5" fill={stepColor} />
        <rect x="7" y="16" width="20" height="6" rx="1.5" fill={stepColor} opacity="0.82" />
        <rect x="12" y="8" width="10" height="6" rx="1.5" fill={stepColor} opacity="0.64" />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className="font-display text-[1.25rem] tracking-tight"
          style={{ color: textColor }}
        >
          {site.shortName}
        </span>
        <span
          className="font-mono text-[0.55rem] tracking-[0.28em] uppercase mt-1"
          style={{ color: subColor }}
        >
          Services
        </span>
      </span>
    </span>
  );
}
