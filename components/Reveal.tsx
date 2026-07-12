"use client";

import { useReveal } from "@/lib/useReveal";
import { ReactNode } from "react";

export default function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}) {
  const { ref, visible } = useReveal();
  const Component = Tag as any;

  return (
    <Component
      ref={ref}
      data-reveal
      data-visible={visible}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={className}
    >
      {children}
    </Component>
  );
}
