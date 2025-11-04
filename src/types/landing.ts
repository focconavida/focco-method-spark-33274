/**
 * Types for Landing Pages Components
 * Google Ads Starter Project - Método FOCCO
 */

export type LandingPageVariant = 'a' | 'b' | 'c' | 'd';

export type HeroVariant = 'transformation' | 'professional' | 'method' | 'testimonial';

export interface HeroContent {
  variant: HeroVariant;
  headline: string;
  subheadline: string;
  ctaPrimary: {
    text: string;
    icon?: string;
  };
  ctaSecondary: {
    text: string;
    icon?: string;
  };
  backgroundImage: string;
  proofText: string;
  colors?: {
    primary: string;
    accent: string;
  };
}

export interface Problem {
  icon: string;
  title: string;
  description: string;
}

export interface Beneficio {
  icon: string;
  text: string;
  description?: string;
}

export interface Pilar {
  letter: string;
  title: string;
  subtitle: string;
  description: string;
  detailedDescription?: string;
  icon: string;
  color: string;
  scientific?: string; // Explicação científica (página C)
}

export interface Depoimento {
  id: string;
  nome: string;
  profissao: string;
  cidade?: string;
  foto?: string;
  depoimento: string;
  rating: number;
  antes?: string; // Situação antes
  depois?: string; // Resultado depois
  destacado?: boolean; // Para hero da página D
}

export interface TimelineStep {
  step: number;
  title: string;
  description: string;
  icon: string;
  duration?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface FormData {
  nome: string;
  email: string;
  whatsapp: string;
  mensagem?: string;
}

export interface LandingPageConfig {
  variant: LandingPageVariant;
  hero: HeroContent;
  showProblems?: boolean;
  problems?: Problem[];
  showPilares?: boolean;
  pilaresDetail?: 'normal' | 'deep';
  showBeneficios?: boolean;
  beneficios?: Beneficio[];
  beneficiosFocus?: 'personal' | 'professional' | 'general';
  showDepoimentos?: boolean;
  depoimentos?: Depoimento[];
  depoimentosLayout?: 'cards' | 'gallery' | 'carousel';
  showTimeline?: boolean;
  timeline?: TimelineStep[];
  showSobreValeria?: boolean;
  sobreValeriaDetail?: 'brief' | 'detailed';
  showFAQ?: boolean;
  faqs?: FAQ[];
  showResultadosNumeros?: boolean;
  resultadosNumeros?: {
    numero: string;
    label: string;
    icon: string;
  }[];
  formularioCTA: string;
  whatsappMessage: string;
  whatsappNumber: string;
  // GA4 Tracking
  gaPageId: string; // 'landing_a', 'landing_b', etc
}
