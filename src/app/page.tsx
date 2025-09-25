export default function Home() {
  return (
    <div className="relative min-h-dvh overflow-hidden">
      {/* Orbs background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-16 -left-24 size-[44rem] rounded-full orb bg-gradient-to-tr from-fuchsia-500/30 via-indigo-500/30 to-cyan-400/30 float-slow" />
        <div className="absolute bottom-[-8rem] -right-32 size-[40rem] rounded-full orb bg-gradient-to-tr from-emerald-400/30 via-teal-400/30 to-sky-400/30 float-slow" style={{animationDelay: '1.5s'}} />
      </div>

      <main className="relative mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <section className="glass rounded-[var(--radius-xl)] p-8 sm:p-12 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.25)]">
          <div className="flex flex-col items-start gap-6">
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium opacity-80">
              <span className="size-2 rounded-full bg-emerald-500" />
              Disponible para proyectos
            </span>
            <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight">
              Nicolas Wagimin Bravo
            </h1>
            <p className="max-w-2xl text-balance text-base sm:text-lg opacity-80">
              Ingeniero de software enfocado en crear experiencias digitales elegantes, rápidas y accesibles.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a href="#contacto" className="rounded-full bg-foreground px-5 py-2.5 text-background text-sm font-medium hover:opacity-90 transition">
                Contáctame
              </a>
              <a href="#trabajo" className="rounded-full border px-5 py-2.5 text-sm font-medium hover:bg-foreground/5 transition">
                Ver trabajo
              </a>
            </div>
          </div>
        </section>

        <section id="trabajo" className="mt-14 grid gap-6 sm:grid-cols-2">
          {["Diseño limpio","Rendimiento","Accesibilidad","Estrategia"].map((label, i) => (
            <div key={i} className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <div className="size-8 rounded-xl bg-gradient-to-tr from-fuchsia-500 to-cyan-400" />
                <h3 className="text-base font-semibold">{label}</h3>
              </div>
              <p className="mt-3 text-sm opacity-80">
                Soluciones pensadas para impacto real, con una base técnica sólida y estética moderna.
              </p>
            </div>
          ))}
        </section>

        <section id="contacto" className="mt-14">
          <div className="glass rounded-2xl p-6">
            <h2 className="text-xl font-semibold">Hablemos</h2>
            <p className="mt-2 text-sm opacity-80">Escríbeme para colaborar o conversar ideas.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="mailto:nicolaswagiminbravo@gmail.com" className="rounded-full border px-4 py-2 text-sm hover:bg-foreground/5">Email</a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="rounded-full border px-4 py-2 text-sm hover:bg-foreground/5">LinkedIn</a>
              <a href="https://github.com/nicolaswagimin" target="_blank" rel="noreferrer" className="rounded-full border px-4 py-2 text-sm hover:bg-foreground/5">GitHub</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
