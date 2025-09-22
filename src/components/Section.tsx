// src/components/Section.tsx
import * as React from "react";

export function Section({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-16 px-6 md:px-10 max-w-6xl mx-auto">
      {children}
    </section>
  );
}

export function SectionTitle({
  children,
  kicker
}: {
  children: React.ReactNode;
  kicker?: string;
}) {
  return (
    <div className="text-center mb-12">
      {kicker && (
        <p className="text-sm tracking-widest uppercase mb-2"
           style={{ color: "var(--text-secondary)" }}>
          {kicker}
        </p>
      )}
      <h3 className="text-4xl font-extrabold"
          style={{ color: "var(--text-primary)" }}>
        {children}
      </h3>
    </div>
  );
}

export function TechBadge({ label }: { label: string }) {
  return (
    <span
      className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm"
      style={{
        background: "var(--chip-bg, transparent)",
        color: "var(--chip-text, var(--text-primary))",
        border: "1px solid var(--chip-border, var(--border-color))"
      }}
    >
      {label}
    </span>
  );
}
