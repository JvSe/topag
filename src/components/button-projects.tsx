"use client";
const DEFAULT_WHATSAPP_E164 = "5563984167175";

function onlyDigits(phone: string): string {
  return phone.replace(/\D/g, "");
}

function buildWhatsAppUrl(phoneDigits: string, text: string): string {
  return `https://wa.me/${phoneDigits}?text=${encodeURIComponent(text)}`;
}

export function ButtonProjects() {
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
  return (
    <button
      type="button"
      onClick={onClickProjects}
      className="rounded-md hover:scale-[1.02] cursor-pointer border border-white/20 bg-white/5 px-8 py-4 font-headline text-lg font-bold text-white backdrop-blur-md transition-all hover:bg-white/10"

    >
      Nossos Projetos
    </button>
  );
}