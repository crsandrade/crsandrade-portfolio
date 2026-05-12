const skills = [
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "C#", "APIs REST", "Autenticação", "Lógica de programação"],
  },
  {
    title: "Banco de Dados",
    items: ["SQL", "PostgreSQL", "Supabase", "Modelagem básica"],
  },
  {
    title: "Ferramentas",
    items: ["Git", "GitHub", "VS Code", "WSL", "Vercel", "Thunder Client"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
        Skills
      </p>

      <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
        Tecnologias e ferramentas
      </h2>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill) => (
          <article
            key={skill.title}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
          >
            <h3 className="text-xl font-bold text-white">{skill.title}</h3>

            <ul className="mt-5 space-y-3 text-zinc-400">
              {skill.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}