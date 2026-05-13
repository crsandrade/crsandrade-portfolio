import Image from "next/image";

const projects = [
    {
        title: "New Genesis Website | MMORPG",
        description:
            "Site responsivo para servidor MMORPG, com páginas institucionais, autenticação e estrutura preparada para integrações futuras.",
        stack: ["Next.js", "React", "Tailwind", "Supabase"],
        status: "Em desenvolvimento",
        github: "https://github.com/crsandrade/newgenesis-webproject",
        demo: "https://newgenesis-webproject.vercel.app/",
        image: "/new_genesis.png"
    },
    {
        title: "Sucesso planejado | Controle Financeiro",
        description:
            "SaaS estruturado para controle financeiro de casais, organização, planejamento e acompanhamento financeiro compartilhado.",
        stack: ["Next.js", "React", "Tailwind", "Supabase"],
        status: "Projeto Finalizado",
        github: "https://github.com/crsandrade/marriage-finances",
        demo: "https://www.sucessoplanejado.com.br/",
        image: "/sucesso_planejado.png"
    },
    {
        title: "Valmiro Filho | Conversão de Leads",
        description:
            "Landing page com foco em conversão de leads para o psicólogo Valmiro Filho. Site refatorado feito primáriamente em Javascript com PHP.",
        stack: ["Typescript", "Javascript", "Tailwind"],
        status: "Projeto Finalizado",
        github: "https://github.com/crsandrade/sentydos-website",
        demo: "https://www.psicologovalmirofilho.com.br/",
        image: "/valmiro_filho.png"
    },
];

export function Projects() {
    return (
        <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
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
                        className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.06]"
                    >
                        <div className="relative overflow-hidden border-b border-white/10">
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={800}
                                height={500}
                                className="h-[220px] w-full object-cover transition duration-500 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                            <div className="absolute left-4 top-4">
                                <div className="w-fit rounded-full border border-cyan-400/20 bg-black/40 px-3 py-1 text-xs font-semibold text-cyan-300 backdrop-blur-xl">
                                    {project.status}
                                </div>
                            </div>
                        </div>

                        <div className="flex min-h-[260px] flex-col p-6">
                            <h3 className="text-2xl font-black text-white">
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

                            <div className="mt-8 flex gap-3">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-xl border border-white/10 px-4 py-2 text-sm font-bold text-zinc-200 transition hover:bg-white/10"
                                >
                                    Código
                                </a>

                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-xl bg-cyan-400 px-4 py-2 text-sm font-bold text-black transition hover:bg-cyan-300"
                                >
                                    Demo
                                </a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}