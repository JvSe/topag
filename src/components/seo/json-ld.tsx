type JsonLdProps = {
  data: Record<string, unknown>;
};

// JSON-LD inserido no HTML (Server Component) para evitar depender de JS.
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      // Escapa "<" para reduzir risco de XSS em conteúdo serializado.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

