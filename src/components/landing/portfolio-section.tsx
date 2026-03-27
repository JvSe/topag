"use client";

import Image from "next/image";

const DEFAULT_WHATSAPP_E164 = "5563984167175";

/** Qualidade do otimizador (1–100). Padrão do Next é 75. */
const GALLERY_IMAGE_QUALITY = 92;

/** Fotos em `public/images/photo01.jpg` … `photo10.jpg`. Ajuste legendas abaixo se quiser. */
const PORTFOLIO_GALLERY_ITEMS = Array.from({ length: 10 }, (_, i) => {
  const num = String(i + 1).padStart(2, "0");
  return {
    src: `/images/photo${num}.jpg`,
    alt: `Foto ${num} — portfólio de projetos TOPAG`,
    caption: `Projeto ${num}`,
  };
});

function onlyDigits(phone: string): string {
  return phone.replace(/\D/g, "");
}

function buildWhatsAppUrl(phoneDigits: string, text: string): string {
  return `https://wa.me/${phoneDigits}?text=${encodeURIComponent(text)}`;
}

export function PortfolioSection() {
  const onClickProjects = () => {
    const raw = process.env.NEXT_PUBLIC_WHATSAPP_PHONE ?? DEFAULT_WHATSAPP_E164;
    const digits = onlyDigits(raw);

    const text = [
      "Olá! Tenho interesse nos projetos realizados pela TOPAG.",
      "Podem me enviar exemplos e explicar como funciona o atendimento?",
    ].join("\n");

    const url = buildWhatsAppUrl(digits, text);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const galleryLoop = [...PORTFOLIO_GALLERY_ITEMS, ...PORTFOLIO_GALLERY_ITEMS];

  return (
    <section
      className="overflow-x-hidden border-y border-outline-variant/20 bg-surface py-16 md:py-20"
      id="portfolio"
    >
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
      </div>

      <div
        className="portfolio-marquee-outer relative mt-12 w-full"
        role="region"
        aria-label="Galeria de projetos em rolagem"
      >
        <div className="portfolio-marquee-track hover:cursor-grab active:cursor-grabbing">
          {galleryLoop.map((item, index) => (
            <figure
              key={`${item.src}-${index}`}
              className="portfolio-marquee-item group relative h-[304px] w-[min(92vw,272px)] shrink-0 overflow-hidden rounded-2xl border border-outline-variant/25 bg-surface-container-lowest shadow-[0_12px_40px_-18px_rgba(43,52,139,0.35)] sm:h-[320px] sm:w-[min(88vw,304px)] md:h-[344px] md:w-[320px] lg:h-[368px] lg:w-[352px]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                quality={GALLERY_IMAGE_QUALITY}
                sizes="(max-width: 639px) 272px, (max-width: 767px) 304px, (max-width: 1023px) 320px, 352px"
                className="transform-gpu object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-on-surface/80 via-on-surface/10 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 px-4 pb-4 text-left">
                <span className="font-headline text-xs font-bold uppercase tracking-[0.18em] text-tertiary-accent/95">
                  TOPAG
                </span>
                <p className="mt-1 font-headline text-sm font-bold leading-snug text-white drop-shadow-sm md:text-base">
                  {item.caption}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 text-center md:px-8">
        <p className="mt-3 text-xs text-on-surface-variant/80">
          Passe o cursor sobre a faixa para pausar a rolagem.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={onClickProjects}
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
