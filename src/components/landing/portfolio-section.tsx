export function PortfolioSection() {
  return (
    <section className="border-y border-outline-variant/20 bg-surface py-16 md:py-20" id="portfolio">
      <div className="mx-auto max-w-7xl px-4 text-center md:px-8">
        <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
          Portfólio
        </span>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-on-surface md:text-4xl">
          Projetos que transformam território
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-on-surface-variant md:text-lg">
          Da prospecção à entrega de geodados certificados — atuamos com
          governança ambiental e precisão em larga escala.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            className="rounded-md bg-brand-blue px-8 py-3 font-headline text-sm font-bold text-white transition-colors hover:bg-brand-blue-light"
          >
            Ver projetos realizados
          </button>
          <a
            href="#contact"
            className="font-headline text-sm font-bold text-brand-blue underline-offset-4 hover:underline"
          >
            Falar com especialista
          </a>
        </div>
      </div>
    </section>
  );
}
