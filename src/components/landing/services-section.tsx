import { ArrowRight, Building2, Leaf, Map } from "lucide-react";

export function ServicesSection() {
  return (
    <section className="bg-surface-container-low py-16 md:py-24" id="services">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 md:mb-16">
          <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
            Nossa especialização
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-on-surface md:text-5xl">
            Soluções de Ponta a Ponta
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          <div className="group rounded-xl bg-surface-container-lowest p-8 transition-all duration-300 hover:scale-[1.02] hover:bg-brand-blue md:p-10">
            <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-lg bg-brand-blue text-white group-hover:bg-white group-hover:text-brand-blue">
              <Building2 aria-hidden className="size-8" strokeWidth={1.75} />
            </div>
            <h3 className="mb-4 text-2xl font-extrabold text-on-surface group-hover:text-white">
              Topografia
            </h3>
            <p className="leading-relaxed text-on-surface-variant group-hover:text-white/80">
              Levantamentos planialtimétricos, demarcação de lotes e
              acompanhamento de obras com precisão milimétrica e tecnologia
              GNSS.
            </p>
            <div className="mt-8 flex items-center gap-2 font-bold text-brand-blue group-hover:text-white">
              <span className="font-sans text-sm uppercase tracking-wider">
                Ver Detalhes
              </span>
              <ArrowRight aria-hidden className="size-5" strokeWidth={2} />
            </div>
          </div>
          <div className="group rounded-xl bg-surface-container-lowest p-8 transition-all duration-300 hover:scale-[1.02] hover:bg-brand-blue md:p-10">
            <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-lg bg-brand-blue text-white group-hover:bg-white group-hover:text-brand-blue">
              <Leaf aria-hidden className="size-8" strokeWidth={1.75} />
            </div>
            <h3 className="mb-4 text-2xl font-extrabold text-on-surface group-hover:text-white">
              Consultoria Ambiental
            </h3>
            <p className="leading-relaxed text-on-surface-variant group-hover:text-white/80">
              Licenciamento ambiental, PRAD, laudos de fauna e flora, e gestão
              de resíduos para garantir total conformidade legal.
            </p>
            <div className="mt-8 flex items-center gap-2 font-bold text-brand-blue group-hover:text-white">
              <span className="font-sans text-sm uppercase tracking-wider">
                Ver Detalhes
              </span>
              <ArrowRight aria-hidden className="size-5" strokeWidth={2} />
            </div>
          </div>
          <div className="group rounded-xl bg-surface-container-lowest p-8 transition-all duration-300 hover:scale-[1.02] hover:bg-brand-blue md:p-10">
            <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-lg bg-brand-blue text-white group-hover:bg-white group-hover:text-brand-blue">
              <Map aria-hidden className="size-8" strokeWidth={1.75} />
            </div>
            <h3 className="mb-4 text-2xl font-extrabold text-on-surface group-hover:text-white">
              Georeferenciamento
            </h3>
            <p className="leading-relaxed text-on-surface-variant group-hover:text-white/80">
              Certificação de imóveis rurais (SIGEF/INCRA) e urbanos com
              georeferenciamento de alta precisão e análise geoespacial.
            </p>
            <div className="mt-8 flex items-center gap-2 font-bold text-brand-blue group-hover:text-white">
              <span className="font-sans text-sm uppercase tracking-wider">
                Ver Detalhes
              </span>
              <ArrowRight aria-hidden className="size-5" strokeWidth={2} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
