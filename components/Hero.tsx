"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
                            um mundo melhor
                        </span>{" "}
                        através de aplicações.
                    </h1>

                    <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
                        Sou Rafael Andrade, estudante de ADS e desenvolvedor focado em
                        React, Next.js, Node.js e aplicações modernas que entregam
                        resultado.
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
                    className="relative hidden justify-center md:flex"
                >
                    <div className="absolute bottom-0 h-72 w-72 rounded-full bg-amber-400/20 blur-3xl" />

                    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-3 backdrop-blur-xl">
                        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                        <Image
                            src="/profile.png"
                            alt="Rafael Andrade"
                            width={420}
                            height={520}
                            className="h-[520px] w-[420px] rounded-[1.5rem] object-cover"
                            priority
                        />

                        <div className="absolute bottom-6 left-6 right-6 z-20 rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-xl">
                            <p className="text-sm text-amber-300">Rafael Andrade</p>

                            <p className="mt-1 text-lg font-bold text-white">
                                Full Stack Developer
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}