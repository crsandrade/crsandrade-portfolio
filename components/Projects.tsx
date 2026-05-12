const projects = [
  {
    title: "Site MMORPG",
    description:
      "Site responsivo para servidor MMORPG, com páginas institucionais, autenticação e estrutura preparada para integrações futuras.",
    stack: ["Next.js", "React", "Tailwind", "Supabase"],
    status: "Em desenvolvimento",
    github: "#",
    demo: "#",
  },
  {
    title: "Portfólio Pessoal",
    description:
      "Site pessoal criado para apresentar projetos, habilidades, trajetória e formas de contato profissional.",
    stack: ["Next.js", "React", "Tailwind"],
    status: "Em construção",
    github: "#",
    demo: "#",
  },
  {
    title: "Calculadora de Comissão",
    description:
      "Aplicação web baseada em um sistema originalmente feito em C, adaptada para uma interface simples e acessível.",
    stack: ["JavaScript", "HTML", "CSS", "C"],
    status: "Projeto prático",
    github: "#",
    demo: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
        Projetos
      </p>

      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            Projetos em destaque
          </h2>

          <p className="mt-4 max-w-2xl leading-8 text-zinc-400">
            Uma seleção dos projetos que demonstram minha evolução prática como
            desenvolvedor.
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group flex min-h-[360px] flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-amber-400/30 hover:bg-white/[0.06]"
          >
            <div className="mb-5 w-fit rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-300">
              {project.status}
            </div>

            <h3 className="text-xl font-bold text-white">
              {project.title}
            </h3>

            <p className="mt-4 flex-1 leading-7 text-zinc-400">
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

            <div className="mt-6 flex gap-3">
              <a
                href={project.github}
                className="rounded-xl border border-white/10 px-4 py-2 text-sm font-bold text-zinc-200 transition hover:bg-white/10"
              >
                Código
              </a>

              <a
                href={project.demo}
                className="rounded-xl bg-amber-400 px-4 py-2 text-sm font-bold text-black transition hover:bg-amber-300"
              >
                Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}