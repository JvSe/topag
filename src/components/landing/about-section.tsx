import Image from "next/image";

import { LANDING_IMAGES } from "@/lib/landing-images";

export function AboutSection() {
  return (
    <section className="overflow-hidden bg-surface py-16 md:py-24" id="about">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square overflow-hidden rounded-xl bg-surface-container-high">
              <Image
                src={LANDING_IMAGES.about}
                alt="Equipe técnica TOPAG em campo"
                width={800}
                height={800}
                className="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden max-w-[200px] rounded-lg bg-brand-blue p-6 text-white shadow-2xl sm:block md:-bottom-8 md:-right-8 md:max-w-xs md:p-8">
              <p className="font-headline text-3xl font-extrabold md:text-4xl">
                15+
              </p>
              <p className="mt-2 font-sans text-[10px] font-medium uppercase tracking-widest opacity-70 md:text-sm">
                Anos de experiência técnica comprovada no campo.
              </p>
            </div>
          </div>
          <div className="order-1 space-y-6 lg:order-2">
            <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
              Quem Somos
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-on-surface md:text-5xl">
              Fusão de Tecnologia e Responsabilidade
            </h2>
            <p className="text-base leading-relaxed text-on-surface-variant md:text-lg">
              A TOPAG nasceu da necessidade de integrar dados geoespaciais
              rigorosos com práticas ambientais sustentáveis. Somos uma
              consultoria boutique que atende desde grandes mineradoras até
              proprietários rurais, focando na excelência do dado.
            </p>
            <div className="grid grid-cols-1 gap-6 pt-6 sm:grid-cols-2 md:gap-8">
              <div className="border-l-4 border-primary-fixed pl-4">
                <h4 className="font-headline font-bold text-on-surface">
                  Missão
                </h4>
                <p className="text-sm text-on-surface-variant">
                  Entregar dados que impulsionam decisões seguras e
                  responsáveis.
                </p>
              </div>
              <div className="border-l-4 border-primary-fixed pl-4">
                <h4 className="font-headline font-bold text-on-surface">
                  Visão
                </h4>
                <p className="text-sm text-on-surface-variant">
                  Ser a referência nacional em geotecnologia aplicada ao meio
                  ambiente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
