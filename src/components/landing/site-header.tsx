import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-surface/80 backdrop-blur-md shadow-[0_20px_40px_rgba(17,26,117,0.06)] dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-8 py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-topag.png"
            alt="Logotipo TOPAG"
            width={160}
            height={40}
            className="h-4 w-auto object-contain md:h-6"
            priority
          />
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="#services"
            className="font-headline border-b-2 border-brand-blue pb-1 text-sm font-bold tracking-tight text-brand-blue dark:text-white"
          >
            Serviços
          </Link>
          <Link
            href="#portfolio"
            className="font-headline text-sm font-bold tracking-tight text-slate-600 transition-colors hover:text-brand-blue dark:text-slate-400"
          >
            Portfólio
          </Link>
          <Link
            href="#about"
            className="font-headline text-sm font-bold tracking-tight text-slate-600 transition-colors hover:text-brand-blue dark:text-slate-400"
          >
            Sobre
          </Link>
          <Link
            href="#contact"
            className="font-headline text-sm font-bold tracking-tight text-slate-600 transition-colors hover:text-brand-blue dark:text-slate-400"
          >
            Contato
          </Link>
        </div>
        <button
          type="button"
          className="rounded-md bg-brand-blue px-6 py-2.5 font-headline text-sm font-bold tracking-tight text-white transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:bg-brand-blue-light active:opacity-80"
        >
          Solicitar orçamento
        </button>
      </div>
    </nav>
  );
}
