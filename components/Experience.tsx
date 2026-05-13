"use client";

import { Briefcase, ShieldCheck } from "lucide-react";

const experiences = [
  {
    icon: ShieldCheck,
    role: "Analista de Qualidade",
    company: "Genesis Tech",
    period: "2018 — 2021",
    description: [
      "Monitoramento e análise da qualidade de aplicações e fluxos operacionais em ambientes de alto volume.",
      "Investigação, identificação e correção de falhas sistêmicas e inconsistências em aplicações e processos internos.",
      "Atuação proativa na detecção antecipada de erros, reduzindo impactos operacionais e prevenindo problemas críticos em produção.",
      "Criação de fluxos e otimizações para tornar operações internas mais eficientes e dinâmicas.",
      "Investigação de códigos e suporte técnico na identificação de causas raiz.",
      "Validação de funcionalidades, integrações e experiência do usuário em aplicações web.",
      "Documentação de processos, fluxos operacionais e padrões internos.",
    ],
  },
  {
    icon: Briefcase,
    role: "Engenheiro de Software",
    company: "Undefined Technology",
    period: "2025 — Atual",
    description: [
      "Desenvolvimento e manutenção de funcionalidades para aplicações web e mobile.",
      "Implementação e integração de APIs entre sistemas e serviços internos.",
      "Correção de bugs, testes e validação de funcionalidades em ambiente de desenvolvimento.",
      "Manutenção e organização de bancos de dados e estruturas de aplicação.",
      "Utilização de Git e metodologias ágeis como Scrum e Kanban.",
      "Acompanhamento técnico de estagiários e suporte no desenvolvimento da equipe.",
      "Distribuição de tarefas conforme prioridades e demandas do time.",
      "Atuação simultânea em múltiplos projetos e melhoria contínua de processos internos.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(6,182,212,0.12),transparent_35%)]" />

      <div className="absolute left-1/2 top-40 hidden h-[75%] w-px -translate-x-1/2 bg-cyan-400/30 shadow-[0_0_25px_rgba(34,211,238,0.8)] lg:block" />

      <div className="relative mx-auto max-w-6xl px-6">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Experiência
        </p>

        <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
          Minha trajetória no setor de tecnologia
        </h2>

        <div className="mt-16 space-y-10">
          {experiences.map(
            ({ icon: Icon, role, company, period, description }, index) => {
              const isLeft = index % 2 === 0;

              return (
                <article
                  key={role}
                  className={`relative flex items-center ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >
                  <div className="absolute left-1/2 top-1/2 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-cyan-950 bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,1)] lg:block" />

                  <div
                    className={`absolute top-1/2 hidden h-px w-24 -translate-y-1/2 bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,1)] lg:block ${
                      isLeft
                        ? "left-[calc(50%-6rem)]"
                        : "right-[calc(50%-6rem)]"
                    }`}
                  />

                  <div
                    className={`relative w-full rounded-3xl border border-cyan-400/40 bg-cyan-400/[0.08] p-6 shadow-[0_0_40px_rgba(34,211,238,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/70 hover:bg-cyan-400/[0.12] hover:shadow-[0_0_45px_rgba(34,211,238,0.18)] sm:max-w-xl lg:w-[48%] ${
                      !isLeft ? "lg:ml-auto" : ""
                    }`}
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400 text-black shadow-[0_0_20px_rgba(34,211,238,0.55)]">
                      <Icon size={26} />
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {role}
                        </h3>

                        <p className="mt-1 text-sm text-cyan-200">
                          {company}
                        </p>
                      </div>

                      <span className="rounded-full border border-cyan-400/20 bg-black/30 px-3 py-1 text-sm text-zinc-300">
                        {period}
                      </span>
                    </div>

                    <ul className="mt-6 space-y-3">
                      {description.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-sm leading-7 text-zinc-300"
                        >
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />

                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}