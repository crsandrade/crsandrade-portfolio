"use client";


import { Code2, Database, Server, Wrench } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    icon: Server,
    title: "Backend",
    items: ["Node.js", "C#", "APIs REST", "Autenticação", "Lógica de programação"],
  },
  {
    icon: Database,
    title: "Banco de Dados",
    items: ["SQL", "PostgreSQL", "Supabase", "Modelagem"],
  },
  {
    icon: Wrench,
    title: "Ferramentas",
    items: ["Git", "VS Code", "WSL", "Vercel", "Postman"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
        Skills
      </p>

      <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
        Tecnologias e ferramentas
      </h2>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map(({ icon: Icon, title, items }) => (
          <article
            key={title}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-amber-400/30 hover:bg-white/[0.06]"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-400">
              <Icon size={26} />
            </div>

            <h3 className="text-xl font-bold text-white">{title}</h3>

            <ul className="mt-5 space-y-3 text-zinc-400">
              {items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}