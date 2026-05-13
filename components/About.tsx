'use client';

import { motion } from "framer-motion";

export function About() {
    return (
        <section id="about" className="relative overflow-hidden px-6 py-24">
            <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-400/10 blur-3xl" />

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7 }}
                className="relative mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl md:p-12"
            >
                <div className="mb-8 flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400" />
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
                    <div>
  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
    Sobre mim
  </p>

  <h2 className="max-w-md text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">
    Desenvolvedor em formação, com foco em criar soluções úteis e bem
    estruturadas.
  </h2>

  <p className="mt-6 max-w-md leading-8 text-zinc-400">
    Minha jornada na tecnologia une estudo constante, prática em projetos reais
    e experiência prévia resolvendo problemas em ambientes operacionais.
  </p>

  <div className="mt-8 flex flex-wrap gap-3">
    <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-300">
      React
    </span>

    <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-300">
      Next.js
    </span>

    <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-300">
      Node.js
    </span>

    <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-300">
      Full Stack
    </span>
  </div>
</div>

                    <div className="space-y-6 text-zinc-400">
                        <p className="leading-8">
                            Sou estudante de Análise e Desenvolvimento de Sistemas e venho
                            construindo projetos próprios para desenvolver minhas habilidades
                            em frontend, backend e banco de dados.
                        </p>

                        <p className="leading-8">
                            Atualmente trabalho principalmente com React, Next.js, Node.js e
                            Tailwind CSS, criando aplicações responsivas, modernas e com foco
                            em experiência do usuário.
                        </p>

                        <p className="leading-8">
                            Também trago experiência anterior com suporte técnico, resolução
                            de problemas e melhoria de processos, o que contribui diretamente
                            para minha visão prática no desenvolvimento de software.
                        </p>

                        <p className="leading-8">
                            Meu objetivo é evoluir continuamente como desenvolvedor full stack
                            e participar da construção de produtos reais e bem estruturados.
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}