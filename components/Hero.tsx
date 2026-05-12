"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-amber-400/10 blur-3xl" />

      <div className="relative mx-auto grid min-h-screen max-w-6xl items-center gap-16 px-6 py-24 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-6 inline-flex items-center rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-300">
            ✦ Desenvolvedor Full Stack em evolução
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight sm:text-6xl md:text-7xl">
            Construindo
            <span className="bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
              {" "}
              experiências digitais
            </span>{" "}
            modernas.
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            Sou Rafael Andrade, estudante de ADS e desenvolvedor focado em
            React, Next.js, Node.js e aplicações modernas com interfaces
            responsivas e experiência premium.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="absolute -left-10 top-10 h-32 w-32 rounded-full bg-amber-400/20 blur-3xl" />

          <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            <div className="mt-8 space-y-4 font-mono text-sm">
              <p>
                <span className="text-amber-400">const</span> developer = {"{"}
              </p>

              <p className="pl-4">
                name:
                <span className="text-green-300">
                  {" "}
                  \"Rafael Andrade\",
                </span>
              </p>

              <p className="pl-4">
                stack:
                <span className="text-green-300">
                  {" "}
                  [\"React\", \"Next.js\", \"Node.js\"],
                </span>
              </p>

              <p className="pl-4">
                focus:
                <span className="text-green-300">
                  {" "}
                  \"Frontend & Backend\",
                </span>
              </p>

              <p className="pl-4">
                status:
                <span className="text-green-300">
                  {" "}
                  \"Building projects\"
                </span>
              </p>

              <p>{"};"}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}