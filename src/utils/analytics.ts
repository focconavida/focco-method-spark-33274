/**
 * Google Analytics 4 - Tracking de Eventos
 * Uso: trackEvent('agendamento_concluido', { landing_page: 'agendamento-a' })
 */

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

/**
 * Rastreia evento personalizado no GA4
 */
export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
    console.log('📊 GA4 Event:', eventName, eventParams);
  }
};

/**
 * Rastreia conversão de agendamento
 */
export const trackAgendamento = (landingPage: string, origem?: string) => {
  trackEvent('agendamento_concluido', {
    event_category: 'conversao',
    event_label: 'agendamento',
    landing_page: landingPage,
    origem: origem || 'formulario',
    value: 1
  });

  // Também envia para o Google Ads (se configurado)
  trackGoogleAdsConversion();
};

/**
 * Rastreia clique no botão de WhatsApp
 */
export const trackWhatsAppClick = (landingPage: string, localizacao: string) => {
  trackEvent('whatsapp_click', {
    event_category: 'engajamento',
    event_label: 'whatsapp',
    landing_page: landingPage,
    localizacao: localizacao // 'hero', 'cta', 'footer', etc
  });
};

/**
 * Rastreia conversão no Google Ads
 * Configurar as variáveis de ambiente:
 * VITE_GOOGLE_ADS_ID=AW-123456789
 * VITE_GOOGLE_ADS_LABEL=abCD1234efGH
 */
export const trackGoogleAdsConversion = () => {
  const adsId = import.meta.env.VITE_GOOGLE_ADS_ID;
  const adsLabel = import.meta.env.VITE_GOOGLE_ADS_LABEL;

  if (typeof window !== 'undefined' && window.gtag && adsId && adsLabel) {
    window.gtag('event', 'conversion', {
      'send_to': `${adsId}/${adsLabel}`,
      'value': 1.0,
      'currency': 'BRL'
    });
    console.log('🎯 Google Ads Conversion tracked!');
  }
};

/**
 * Rastreia visualização de página
 */
export const trackPageView = (pageTitle: string, pagePath: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_title: pageTitle,
      page_path: pagePath
    });
  }
};

/**
 * Rastreia rolagem da página (scroll depth)
 */
export const trackScroll = (percentage: number) => {
  trackEvent('scroll', {
    event_category: 'engajamento',
    event_label: `scroll_${percentage}%`,
    value: percentage
  });
};

/**
 * Rastreia tempo na página
 */
export const trackTimeOnPage = (seconds: number) => {
  trackEvent('time_on_page', {
    event_category: 'engajamento',
    event_label: 'tempo_permanencia',
    value: seconds
  });
};
