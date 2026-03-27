import Image from "next/image";
import Link from "next/link";

import { SITE_CONTACT_EMAIL } from "@/lib/site-contact";

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-slate-200 bg-footer-tint dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-12 px-8 py-16 md:grid-cols-4">
        <div className="space-y-4">
          <div className="text-xl font-bold text-brand-blue dark:text-white">
            <Image
              src="/logo-topag.png"
              alt="Logotipo TOPAG"
              width={160}
              height={40}
              className="h-8 w-auto object-contain"
            />
          </div>
          <p className="font-sans text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            Referência técnica em georeferenciamento e consultoria ambiental
            para o agronegócio e construção civil em Palmas e região.
          </p>
        </div>
        <div className="col-start-3">
          <span className="mb-4 block font-sans text-xs font-bold tracking-widest text-brand-blue uppercase dark:text-[#4d5acb]">
            Links rápidos
          </span>
          <ul className="space-y-2">
            <li>
              <Link
                href="#services"
                className="font-sans text-sm text-slate-500 underline-offset-4 opacity-90 transition-opacity hover:text-brand-blue hover:underline dark:text-slate-400 dark:hover:text-white"
              >
                Serviços
              </Link>
            </li>
            <li>
              <Link
                href="#portfolio"
                className="font-sans text-sm text-slate-500 underline-offset-4 opacity-90 transition-opacity hover:text-brand-blue hover:underline dark:text-slate-400 dark:hover:text-white"
              >
                Portfólio
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="font-sans text-sm text-slate-500 underline-offset-4 opacity-90 transition-opacity hover:text-brand-blue hover:underline dark:text-slate-400 dark:hover:text-white"
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="font-sans text-sm text-slate-500 underline-offset-4 opacity-90 transition-opacity hover:text-brand-blue hover:underline dark:text-slate-400 dark:hover:text-white"
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <span className="mb-4 block font-sans text-xs font-bold tracking-widest text-brand-blue uppercase dark:text-[#4d5acb]">
            Informações legais
          </span>
          <ul className="space-y-2">
            <li>
              <Link
                href="#"
                className="font-sans text-sm text-slate-500 underline-offset-4 opacity-90 transition-opacity hover:text-brand-blue hover:underline dark:text-slate-400 dark:hover:text-white"
              >
                Política de privacidade
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="font-sans text-sm text-slate-500 underline-offset-4 opacity-90 transition-opacity hover:text-brand-blue hover:underline dark:text-slate-400 dark:hover:text-white"
              >
                Termos de uso
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-between gap-4 border-t border-slate-200 px-8 py-8 dark:border-slate-800 md:flex-row">
        <p className="font-sans text-xs text-slate-500 dark:text-slate-400">
          © 2026 TOPAG — Topografia e consultoria ambiental. Todos os direitos
          reservados.
        </p>
        <p className="font-sans text-xs text-slate-500 dark:text-slate-400">
          <a
            href={`mailto:${SITE_CONTACT_EMAIL}`}
            className="underline-offset-4 transition-colors hover:text-brand-blue hover:underline dark:hover:text-white"
          >
            {SITE_CONTACT_EMAIL}
          </a>
        </p>
      </div>
    </footer>
  );
}
