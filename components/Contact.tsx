export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="rounded-3xl bg-cyan-400 p-8 text-black md:p-12">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-black/60">
          Contato
        </p>

        <h2 className="max-w-3xl text-3xl font-black tracking-tight sm:text-4xl">
          Estou aberto a oportunidades e projetos na área de tecnologia.
        </h2>

        <p className="mt-5 max-w-2xl leading-8 text-black/70">
          Caso queira conversar sobre uma vaga, projeto ou oportunidade,
          entre em contato comigo.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="mailto:rafaeldev.andrade@gmail.com"
            className="rounded-xl bg-black px-6 py-3 text-center font-bold text-white transition hover:bg-zinc-800"
          >
            Enviar email
          </a>

          <a
            href="https://www.linkedin.com/in/rafael-de-andrade-sousa-da-cruz/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-black/20 px-6 py-3 text-center font-bold text-black transition hover:bg-black/10"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/crsandrade/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-black/20 px-6 py-3 text-center font-bold text-black transition hover:bg-black/10"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}