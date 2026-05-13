"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
    return (
        <section className="relative overflow-hidden">
            <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative mx-auto grid min-h-screen max-w-6xl items-center gap-16 px-6 py-24 md:grid-cols-2">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="mb-6 inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
                        ✦ Desenvolvedor Full Stack em evolução
                    </div>

                    <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight sm:text-6xl md:text-7xl">
                        Construindo
                        <span className="bg-gradient-to-r from-cyan-200 to-cyan-500 bg-clip-text text-transparent">
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
                            className="rounded-xl bg-cyan-400 px-6 py-3 text-center font-bold text-black transition hover:bg-cyan-300"
                        >
                            Explorar projetos
                        </a>

                        <a
                            href="#contact"
                            className="rounded-xl border border-zinc-700 px-6 py-3 text-center font-bold text-zinc-100 transition hover:bg-zinc-900"
                        >
                            Fale comigo
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="group relative hidden justify-center md:flex"
                    style={{ perspective: 1000 }}
                >
                    <div className="absolute bottom-0 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl transition duration-500 group-hover:bg-cyan-400/30" />

                    <motion.div
                        whileHover={{
                            rotateX: 6,
                            rotateY: -8,
                            scale: 1.03,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 180,
                            damping: 18,
                        }}
                        className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-3 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl transition group-hover:border-cyan-400/30 group-hover:shadow-cyan-500/20"
                    >
                        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                        <div className="pointer-events-none absolute -inset-20 z-20 opacity-0 transition duration-500 group-hover:opacity-100">
                            <div className="h-full w-full bg-[radial-gradient(circle_at_50%_30%,rgba(251,191,36,0.20),transparent_45%)]" />
                        </div>

                        <Image
                            src="/profile.png"
                            alt="Rafael Andrade"
                            width={420}
                            height={520}
                            className="h-[520px] w-[420px] rounded-[1.5rem] object-cover transition duration-500 group-hover:scale-105"
                            priority
                        />

                        <div className="absolute bottom-6 left-6 right-6 z-30 rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-xl transition duration-500 group-hover:border-cyan-400/30 group-hover:bg-black/60">
                            <p className="text-sm text-cyan-300">Rafael Andrade</p>

                            <p className="mt-1 text-lg font-bold text-white">
                                Full Stack Developer
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}