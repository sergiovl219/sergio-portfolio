import * as React from "react";

export function Card({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`rounded-2xl border p-4 shadow-sm ${className}`}
      style={{
        background: "var(--card-bg, var(--background))",
        color: "var(--card-text, var(--text-primary))",
        borderColor: "var(--card-border, var(--border-color))"
      }}
      {...props}
    />
  );
}

export function CardContent({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`p-6 ${className}`} {...props} />;
}
