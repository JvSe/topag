import { Bus, Factory, ShieldCheck, Users } from "lucide-react";

export function BentoSection() {
  return (
    <section className="bg-surface-container-low py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 text-center md:mb-20">
          <h2 className="text-3xl font-extrabold tracking-tight text-on-surface md:text-5xl">
            Por que TOPAG?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-on-surface-variant md:text-lg">
            Investimos no que há de mais moderno para entregar resultados
            superiores aos nossos clientes.
          </p>
        </div>
        <div className="grid h-auto grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-2 md:gap-6">
          <div className="group relative flex min-h-[300px] flex-col justify-end overflow-hidden rounded-xl bg-brand-blue p-8 text-white md:col-span-2 md:row-span-2 md:min-h-0 md:p-10">
            <div className="absolute top-0 right-0 p-8 opacity-20 transition-transform duration-500 group-hover:scale-110">
              <Factory
                aria-hidden
                className="size-20 stroke-[1.25] md:size-[120px]"
              />
            </div>
            <div className="relative z-10">
              <h3 className="mb-4 text-2xl font-extrabold md:text-3xl">
                Equipamentos Modernos
              </h3>
              <p className="text-base leading-relaxed text-blue-50/70 md:text-lg">
                Utilizamos drones RTK de última geração, estações totais
                robóticas e receptores GNSS multifrequência para garantir o
                menor erro possível.
              </p>
            </div>
          </div>
          <div className="group flex items-center gap-6 rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-6 transition-colors duration-300 hover:bg-secondary-fixed md:col-span-2 md:p-8">
            <div className="shrink-0 rounded-lg bg-secondary-fixed p-4 text-brand-blue group-hover:bg-white">
              <Users aria-hidden className="size-9" strokeWidth={1.75} />
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-on-surface md:text-xl">
                Equipe Especializada
              </h3>
              <p className="mt-1 text-sm text-on-surface-variant">
                Engenheiros e geógrafos com vasta experiência em campo.
              </p>
            </div>
          </div>
          <div className="group flex flex-col justify-center rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-6 transition-colors duration-300 hover:bg-tertiary-accent md:col-span-1 md:p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-tertiary-accent text-tertiary-ink group-hover:bg-white">
              <Bus aria-hidden className="size-6" strokeWidth={1.75} />
            </div>
            <h3 className="text-lg font-extrabold text-on-surface md:text-xl">
              Entrega Ágil
            </h3>
            <p className="mt-1 text-sm text-on-surface-variant">
              Fluxo de processamento otimizado.
            </p>
          </div>
          <div className="group flex flex-col justify-center rounded-xl bg-primary-fixed p-6 text-brand-blue md:col-span-1 md:p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-blue text-white">
              <ShieldCheck aria-hidden className="size-6" strokeWidth={1.75} />
            </div>
            <h3 className="text-lg font-extrabold md:text-xl">
              Segurança Jurídica
            </h3>
            <p className="mt-1 text-sm text-brand-blue">
              Conformidade total com as normas vigentes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
