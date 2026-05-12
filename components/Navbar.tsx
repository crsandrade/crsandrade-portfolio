export function Navbar() {
    return (
        <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
                <a
                    href="#"
                    className="text-lg font-black tracking-tight text-white"
                >
                    Rafael<span className="text-amber-400">.</span>
                </a>

                <nav className="hidden items-center gap-6 md:flex">
                    <a
                        href="#projects"
                        className="text-sm text-zinc-300 transition hover:text-amber-400"
                    >
                        Projetos
                    </a>

                    <a
                        href="#about"
                        className="text-sm text-zinc-300 transition hover:text-amber-400"
                    >
                        Sobre
                    </a>

                    <a
                        href="#contact"
                        className="text-sm text-zinc-300 transition hover:text-amber-400"
                    >
                        Contato
                    </a>

                    <a
                        href="#skills"
                        className="text-sm text-zinc-300 transition hover:text-amber-400"
                    >
                        Skills
                    </a>
                </nav>
            </div>
        </header>
    );
}