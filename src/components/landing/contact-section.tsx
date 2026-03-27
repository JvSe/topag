import { MapPin, Phone } from "lucide-react";
import Image from "next/image";

import { ContactForm } from "@/components/landing/contact-form";
import { LANDING_IMAGES } from "@/lib/landing-images";

export function ContactSection() {
  return (
    <section className="bg-surface py-16 md:py-24" id="contact">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-on-surface md:text-5xl">
              Vamos mapear seu projeto?
            </h2>
            <p className="mt-4 mb-8 text-base text-on-surface-variant md:mb-10 md:text-lg">
              Entre em contato para uma consultoria inicial sem compromisso.
            </p>
            <ContactForm />
          </div>
          <div className="flex flex-col gap-8">
            <div className="relative min-h-[300px] flex-1 overflow-hidden rounded-xl bg-surface-container-high md:min-h-[400px]">
              <Image
                src={LANDING_IMAGES.contactMap}
                alt="Mapa institucional TOPAG"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-surface-container-low p-6">
                <MapPin
                  aria-hidden
                  className="mb-2 block size-6 text-brand-blue"
                  strokeWidth={1.75}
                />
                <h4 className="font-bold">Sede Administrativa</h4>
                <p className="text-sm text-on-surface-variant">
                  R. Vinte e Seis, quadra 148 - lote 08 - Jardim Aureny III (Taquaralto), Palmas - TO, 77062-060
                </p>
              </div>
              <div className="rounded-lg bg-surface-container-low p-6">
                <Phone
                  aria-hidden
                  className="mb-2 block size-6 text-brand-blue"
                  strokeWidth={1.75}
                />
                <h4 className="font-bold">Atendimento</h4>
                <p className="text-sm text-on-surface-variant">
                  +55 (63) 984167175
                  <br />
                  contato@topag.com.br
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
