/**
 * CTAWhatsAppSection Component
 * CTA final para WhatsApp
 */

import { Button } from '@/components/ui/button';
import { trackGoogleAdsConversion } from '@/utils/analytics';

interface CTAWhatsAppSectionProps {
  headline: string;
  subheadline?: string;
  whatsappMessage: string;
  whatsappNumber: string;
  variant: 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h';
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
        conversion_location: 'cta_section',
      });
    }

    // Track Google Ads Conversion
    trackGoogleAdsConversion();
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
          <div className="px-4">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" onClick={handleClick}>
              <Button
                size="lg"
                className="bg-[#25D366] hover:bg-[#20BA5A] text-white text-base md:text-lg px-6 md:px-12 py-6 md:py-7 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105 mt-4 w-full md:w-auto"
              >
                <i className="fab fa-whatsapp mr-2 md:mr-3 text-xl md:text-2xl"></i>
                <span className="break-words">Conversar no WhatsApp Agora</span>
              </Button>
            </a>
          </div>

          <p className="text-sm opacity-80 mt-4">
            Resposta em até 2h no horário comercial • Sem compromisso
          </p>
        </div>
      </div>
    </section>
  );
};
