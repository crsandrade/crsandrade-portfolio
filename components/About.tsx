export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-24"
    >
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-400/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-10 rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl md:grid-cols-[0.8fr_1.2fr] md:p-12">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
            Sobre mim
          </p>

          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            Desenvolvedor em constante evolução.
          </h2>
        </div>

        <div className="space-y-6 text-zinc-400">
          <p className="leading-8">
            Minha trajetória mistura tecnologia, suporte, resolução de problemas
            e construção de soluções digitais. Atualmente estou focado em
            desenvolver aplicações modernas e fortalecer minhas habilidades
            como desenvolvedor full stack.
          </p>

          <p className="leading-8">
            Tenho experiência com atendimento técnico, análise de processos,
            melhoria operacional e criação de projetos próprios utilizando
            React, Next.js, Node.js e banco de dados.
          </p>

          <p className="leading-8">
            Meu objetivo é transformar conhecimento em produtos reais,
            funcionais e bem construídos.
          </p>
        </div>
      </div>
    </section>
  );
}