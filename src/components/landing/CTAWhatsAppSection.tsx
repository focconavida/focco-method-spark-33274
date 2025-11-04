/**
 * CTAWhatsAppSection Component
 * CTA final para WhatsApp
 */

import { Button } from '@/components/ui/button';

interface CTAWhatsAppSectionProps {
  headline: string;
  subheadline?: string;
  whatsappMessage: string;
  whatsappNumber: string;
  variant: 'a' | 'b' | 'c' | 'd';
  urgencia?: boolean;
}

export const CTAWhatsAppSection = ({
  headline,
  subheadline,
  whatsappMessage,
  whatsappNumber,
  variant,
  urgencia,
}: CTAWhatsAppSectionProps) => {
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const handleClick = () => {
    // Track GA4
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', `whatsapp_click_landing_${variant}`, {
        page_variant: variant,
      });
    }
  };

  return (
    <section className="section-padding bg-accent text-accent-foreground">
      <div className="container-custom text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-bold">
            {headline}
          </h2>

          {/* Subheadline */}
          {subheadline && (
            <p className="text-lg md:text-xl opacity-90 leading-relaxed">
              {subheadline}
            </p>
          )}

          {/* Urgência */}
          {urgencia && (
            <p className="text-lg font-semibold bg-accent-foreground/10 inline-block px-6 py-3 rounded-full">
              ⚡ Vagas limitadas este mês
            </p>
          )}

          {/* Botão WhatsApp */}
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" onClick={handleClick}>
            <Button
              size="lg"
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white text-lg px-12 py-7 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105 mt-4"
            >
              <i className="fab fa-whatsapp mr-3 text-2xl"></i>
              Conversar no WhatsApp Agora
            </Button>
          </a>

          <p className="text-sm opacity-80 mt-4">
            Resposta em até 2h no horário comercial • Sem compromisso
          </p>
        </div>
      </div>
    </section>
  );
};
