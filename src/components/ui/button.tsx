import * as React from "react";

type Common = { variant?: "solid" | "outline" };
type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  Common & { href: string };
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & Common;

function classes(variant: "solid" | "outline" = "solid") {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 ring-offset-2 ring-indigo-500 disabled:opacity-50";
  const map = {
    solid:
      "bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-violet-600 dark:hover:bg-violet-700",
    outline:
      "border border-slate-300 dark:border-slate-700 bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800",
  } as const;
  return `${base} ${map[variant]}`;
}

export function Button(props: AnchorProps | ButtonProps) {
  if ("href" in props) {
    const { variant, href, ...rest } = props;
    return (
      <a href={href} className={classes(variant)} {...rest}>
        {rest.children}
      </a>
    );
  }
  const { variant, ...rest } = props;
  return <button className={classes(variant)} {...rest} />;
}
