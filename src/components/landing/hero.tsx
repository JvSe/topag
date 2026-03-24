import { BadgeCheck, Factory, LocateFixed } from "lucide-react";
import Image from "next/image";

import { LANDING_IMAGES } from "@/lib/landing-images";

export function Hero() {
  return (
    <header className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src={LANDING_IMAGES.hero}
          alt="Levantamento topográfico e geotecnologia em campo"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-brand-blue/70 to-brand-blue/40" />
      </div>
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 md:px-8 lg:grid-cols-2">
        <div className="space-y-6 md:space-y-8">
          <div className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3 py-1 text-white backdrop-blur-sm">
            <Factory aria-hidden className="size-4 shrink-0" strokeWidth={1.75} />
            <span className="font-sans text-[10px] font-bold uppercase tracking-widest md:text-xs">
              Líder em Geotecnologia
            </span>
          </div>
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tighter text-white md:text-6xl lg:text-7xl">
            Precisão que Transforma,{" "}
            <span className="text-[#C3EEB6]">Sustentabilidade</span> que
            Protege.
          </h1>
          <p className="max-w-xl font-sans text-base leading-relaxed text-blue-50/80 md:text-xl">
            Soluções avançadas em topografia e consultoria ambiental para
            garantir a viabilidade técnica e legal do seu empreendimento.
          </p>
          <div className="flex flex-col gap-4 pt-4 sm:flex-row">
            <button
              type="button"
              className="rounded-md bg-brand-blue px-8 py-4 font-headline text-lg font-extrabold text-white shadow-xl shadow-black/20 transition-all hover:filter-brightness-125 cursor-pointer"
            >
              Peça um Orçamento
            </button>
            <button
              type="button"
              className="rounded-md border border-white/20 bg-white/5 px-8 py-4 font-headline text-lg font-bold text-white backdrop-blur-md transition-all hover:bg-white/10"
            >
              Nossos Projetos
            </button>
          </div>
        </div>
        <div className="relative hidden lg:block">
          <div className="rounded-xl border border-white/10 bg-surface-container-lowest/10 p-8 shadow-2xl backdrop-blur-xl">
            <div className="mb-8 flex items-center justify-between">
              <span className="font-sans text-xs font-medium uppercase tracking-widest text-blue-50 opacity-60">
                Status do Campo
              </span>
              <span className="h-3 w-3 animate-pulse rounded-full bg-blue-400" />
            </div>
            <div className="space-y-6">
              <div className="flex items-end justify-between border-b border-white/5 pb-4">
                <div>
                  <p className="font-sans text-xs font-medium uppercase tracking-widest text-blue-50/50">
                    Coordenadas Ativas
                  </p>
                  <p className="font-headline text-xl font-bold text-blue-50">
                    10.309° S, 48.320° W
                  </p>
                </div>
                <LocateFixed
                  aria-hidden
                  className="size-8 shrink-0 text-blue-400"
                  strokeWidth={1.75}
                />
              </div>
              <div className="flex items-end justify-between border-b border-white/5 pb-4">
                <div>
                  <p className="font-sans text-xs font-medium uppercase tracking-widest text-blue-50/50">
                    Precisão RTK
                  </p>
                  <p className="font-headline text-xl font-bold text-blue-50">
                    +/- 0.002m
                  </p>
                </div>
                <BadgeCheck
                  aria-hidden
                  className="size-8 shrink-0 text-blue-400"
                  strokeWidth={1.75}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
