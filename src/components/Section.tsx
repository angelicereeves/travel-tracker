import type { ReactNode } from "react";

export default function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-[2rem] bg-white shadow-md p-7 space-y-3">
      <h2 className="text-xl font-bold text-sky-800">{title}</h2>
      <div className="text-slate-700">{children}</div>
    </section>
  );
}
