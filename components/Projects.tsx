const projects = [
  {
    title: "Site MMORPG",
    description:
      "Projeto de site responsivo para um servidor MMORPG, com páginas institucionais, autenticação e estrutura para futuras integrações.",
    stack: ["Next.js", "React", "Tailwind", "Supabase"],
  },
  {
    title: "Portfólio Pessoal",
    description:
      "Site pessoal criado para apresentar projetos, habilidades, trajetória e formas de contato profissional.",
    stack: ["Next.js", "React", "Tailwind"],
  },
  {
    title: "Calculadora de Comissão",
    description:
      "Aplicação web baseada em um sistema originalmente feito em C, adaptada para uma interface mais simples e acessível.",
    stack: ["JavaScript", "HTML", "CSS", "C"],
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-6 py-20"
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
        Projetos
      </p>

      <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
        Alguns projetos que estou construindo
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:bg-white/[0.06]"
          >
            <h3 className="text-xl font-bold text-white">
              {project.title}
            </h3>

            <p className="mt-4 leading-7 text-zinc-400">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}