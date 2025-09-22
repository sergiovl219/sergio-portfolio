import * as React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "solid" | "outline";
  href?: string;
};

const base =
  "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 ring-offset-2 ring-indigo-500 disabled:opacity-50";
const variants = {
  solid:
    "bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-violet-600 dark:hover:bg-violet-700",
  outline:
    "border border-slate-300 dark:border-slate-700 bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800"
};

export function Button({ asChild, variant = "solid", href, ...rest }: Props) {
  const className = `${base} ${variants[variant]}`;
  if (asChild && href) {
    return (
      <a href={href} className={className} {...(rest as any)}>
        {rest.children}
      </a>
    );
  }
  return <button className={className} {...rest} />;
}
