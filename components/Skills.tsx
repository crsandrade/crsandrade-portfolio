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
    <section id="skills" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(6,182,212,0.14),transparent_35%)]" />

      <div className="absolute left-1/2 top-40 hidden h-[75%] w-px -translate-x-1/2 bg-cyan-400/30 shadow-[0_0_25px_rgba(34,211,238,0.8)] lg:block" />

      <div className="relative mx-auto max-w-6xl px-6">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Skills
        </p>

        <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
          Tecnologias e ferramentas
        </h2>

        <div className="mt-16 space-y-10">
          {skills.map(({ icon: Icon, title, items }, index) => {
            const isLeft = index % 2 === 0;

            return (
              <article
                key={title}
                className={`relative flex items-center ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
              >
                <div className="absolute left-1/2 top-1/2 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-cyan-950 bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,1)] lg:block" />

                <div
                  className={`absolute top-1/2 hidden h-px w-24 -translate-y-1/2 bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,1)] lg:block ${
                    isLeft
                      ? "left-[calc(50%-6rem)]"
                      : "right-[calc(50%-6rem)]"
                  }`}
                />

                <div
                  className={`relative w-full rounded-3xl border border-cyan-400/40 bg-cyan-400/[0.08] p-6 shadow-[0_0_40px_rgba(34,211,238,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/70 hover:bg-cyan-400/[0.12] hover:shadow-[0_0_45px_rgba(34,211,238,0.18)] sm:max-w-xl lg:w-[48%] ${
                    !isLeft ? "lg:ml-auto" : ""
                  }`}
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400 text-black shadow-[0_0_20px_rgba(34,211,238,0.55)]">
                    <Icon size={26} />
                  </div>

                  <h3 className="text-xl font-bold text-white">{title}</h3>

                  <div className="mt-5 flex flex-wrap gap-3">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-cyan-400/20 bg-black/30 px-3 py-1 text-sm text-zinc-300 transition hover:border-cyan-300/60 hover:text-cyan-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}