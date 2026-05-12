export function Hero() {
  return (
    <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-20">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
        Desenvolvedor Frontend
      </p>

      <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">
        Construindo aplicações modernas com React, Next.js e Node.js.
      </h1>

      <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
        Sou Rafael Andrade, estudante de ADS e desenvolvedor em evolução,
        criando projetos reais para aprimorar minhas habilidades em frontend,
        backend e banco de dados.
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <a
          href="#projects"
          className="rounded-xl bg-amber-400 px-6 py-3 text-center font-bold text-black transition hover:bg-amber-300"
        >
          Ver projetos
        </a>

        <a
          href="#contact"
          className="rounded-xl border border-zinc-700 px-6 py-3 text-center font-bold text-zinc-100 transition hover:bg-zinc-900"
        >
          Contato
        </a>
      </div>
    </section>
  );
}