"use client";

import { useState } from "react";

const links = [
  { label: "Projetos", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Sobre", href: "#about" },
  { label: "Contato", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="text-lg font-black tracking-tight text-white">
          Rafael<span className="text-amber-400">.</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-300 transition hover:text-amber-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-zinc-200 md:hidden"
          aria-label="Abrir menu"
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-white/10 bg-zinc-950 px-6 py-4 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-3 py-2 text-zinc-300 transition hover:bg-white/5 hover:text-amber-400"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}