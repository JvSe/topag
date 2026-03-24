"use client";

import { FormEvent, useCallback } from "react";

/** WhatsApp comercial: +55 (63) 98416-7175. Sobrescreva com NEXT_PUBLIC_WHATSAPP_PHONE se precisar. */
const DEFAULT_WHATSAPP_E164 = "5563984167175";

function onlyDigits(phone: string): string {
  return phone.replace(/\D/g, "");
}

function buildWhatsAppUrl(phoneDigits: string, text: string): string {
  return `https://wa.me/${phoneDigits}?text=${encodeURIComponent(text)}`;
}

export function ContactForm() {
  const onSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const subject = String(fd.get("subject") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();

    if (!name || !email || !message) {
      window.alert("Por favor, preencha nome, e-mail e mensagem.");
      return;
    }

    const text = [
      "*Nova mensagem pelo site TOPAG*",
      "",
      `*Nome:* ${name}`,
      `*E-mail:* ${email}`,
      `*Assunto:* ${subject}`,
      "",
      "*Mensagem:*",
      message,
    ].join("\n");

    const raw =
      process.env.NEXT_PUBLIC_WHATSAPP_PHONE ?? DEFAULT_WHATSAPP_E164;
    const digits = onlyDigits(raw);

    if (digits.length < 10) {
      window.alert(
        "Número do WhatsApp inválido. Configure NEXT_PUBLIC_WHATSAPP_PHONE no .env.local (apenas dígitos, com DDI).",
      );
      return;
    }

    const url = buildWhatsAppUrl(digits, text);
    window.open(url, "_blank", "noopener,noreferrer");
  }, []);

  return (
    <form className="space-y-6" onSubmit={onSubmit}>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label
            htmlFor="contact-name"
            className="font-sans text-xs font-bold uppercase tracking-widest text-on-surface-variant"
          >
            Nome Completo
          </label>
          <input
            id="contact-name"
            name="name"
            required
            autoComplete="name"
            className="w-full rounded-md border-none bg-surface-container-low px-4 py-3 focus:ring-2 focus:ring-brand-blue"
            placeholder="Seu nome"
            type="text"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="contact-email"
            className="font-sans text-xs font-bold uppercase tracking-widest text-on-surface-variant"
          >
            E-mail
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-md border-none bg-surface-container-low px-4 py-3 focus:ring-2 focus:ring-brand-blue"
            placeholder="email@exemplo.com"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label
          htmlFor="contact-subject"
          className="font-sans text-xs font-bold uppercase tracking-widest text-on-surface-variant"
        >
          Assunto
        </label>
        <select
          id="contact-subject"
          name="subject"
          required
          className="w-full rounded-md border-none bg-surface-container-low px-4 py-3 focus:ring-2 focus:ring-brand-blue"
        >
          <option value="Topografia e nivelamento">Topografia e nivelamento</option>
          <option value="Consultoria ambiental">Consultoria ambiental</option>
          <option value="Georreferenciamento rural">Georreferenciamento rural</option>
          <option value="Outros serviços">Outros serviços</option>
        </select>
      </div>
      <div className="space-y-2">
        <label
          htmlFor="contact-message"
          className="font-sans text-xs font-bold uppercase tracking-widest text-on-surface-variant"
        >
          Mensagem
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          minLength={4}
          className="w-full rounded-md border-none bg-surface-container-low px-4 py-3 focus:ring-2 focus:ring-brand-blue"
          placeholder="Descreva seu projeto..."
          rows={4}
        />
      </div>
      <button
        type="submit"
        className="w-full cursor-pointer rounded-md bg-brand-blue py-4 text-lg font-extrabold text-white transition-all hover:bg-brand-blue-light"
      >
        Enviar pelo WhatsApp
      </button>
      <p className="font-sans text-xs text-on-surface-variant">
        Ao enviar, o WhatsApp será aberto com os dados acima. É necessário ter
        o aplicativo instalado ou usar o WhatsApp Web.
      </p>
    </form>
  );
}
