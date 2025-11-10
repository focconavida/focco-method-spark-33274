/**
 * Landing Page H - Jovem Profissional Ansioso
 * Persona: Lucas, 28 anos, Primeiro emprego bom, síndrome do impostor
 * Dor: Ansiedade paralisante, medo de ser descoberto, medo de fracassar
 */

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { HeroSection } from '@/components/landing/HeroSection';
import { DoresSection } from '@/components/landing/DoresSection';
import { SolucaoSection } from '@/components/landing/SolucaoSection';
import { DepoimentosSection } from '@/components/landing/DepoimentosSection';
import { FormularioSection } from '@/components/landing/FormularioSection';
import { CTAWhatsAppSection } from '@/components/landing/CTAWhatsAppSection';

const AgendamentoH = () => {
  const whatsappNumber = '5583993787450';

  const scrollToForm = () => {
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'cta_click_landing_h', {
        page_variant: 'h',
        cta_type: 'primary_hero',
      });
    }
  };

  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view_landing_h', {
      page_variant: 'h',
      page_title: 'Jovem Profissional Ansioso',
    });
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="pt-24 md:pt-32">
        <HeroSection
          variant="jovem-ansioso"
          headline="Conseguiu o emprego dos sonhos mas vive com medo de ser demitido?"
          subheadline="Vença a síndrome do impostor. Desenvolva confiança REAL e alta performance sem ansiedade paralisante."
          ctaPrimary={{
            text: 'Quero vencer síndrome do impostor',
            icon: '💪',
          }}
          ctaSecondary={{
            text: 'Conversar no WhatsApp',
            icon: '💬',
            href: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Olá! Tenho síndrome do impostor e gostaria de conversar.')}`,
          }}
          proofText="⭐ 150+ jovens profissionais venceram ansiedade e síndrome do impostor"
          onCtaPrimaryClick={scrollToForm}
        />

        <DoresSection
          titulo="Você se sente assim no trabalho?"
          subtitulo="Síndrome do impostor é mais comum do que você imagina:"
          dores={[
            {
              icon: '😰',
              titulo: 'Medo de Ser Descoberto',
              descricao: 'Acha que a qualquer momento vão perceber que você "não é tão bom assim".',
            },
            {
              icon: '🤐',
              titulo: 'Fica Quieto em Reuniões',
              descricao: 'Tem medo de falar e parecer burro. Não compartilha ideias por insegurança.',
            },
            {
              icon: '😔',
              titulo: 'Acha Que Foi Sorte',
              descricao: 'Não reconhece suas conquistas. "Eu só tive sorte", "Qualquer um faria".',
            },
            {
              icon: '💔',
              titulo: 'Ansiedade Paralisante',
              descricao: 'Vive com medo de errar, de decepcionar, de ser demitido. Não dorme direito.',
            },
          ]}
          textoFinal="Você MERECE estar onde está. Síndrome do impostor é apenas um padrão mental que pode ser transformado."
        />

        <SolucaoSection
          titulo="Desenvolva confiança REAL (não fake)"
          subtitulo="Não é sobre fingir confiança. É sobre RECONHECER seu valor verdadeiro e desenvolver bem-estar mental."
          beneficios={[
            { icon: '✅', text: 'Reconhecer seu VALOR real (sem minimizar)' },
            { icon: '✅', text: 'Parar de se comparar com outros' },
            { icon: '✅', text: 'Falar em reuniões com confiança' },
            { icon: '✅', text: 'Lidar com pressão sem ansiedade paralisante' },
            { icon: '✅', text: 'Transformar autocrítica em autodesenvolvimento' },
            { icon: '✅', text: 'Alta performance sustentável (sem burnout)' },
          ]}
          textoFinal="O Método FOCCO trabalha síndrome do impostor com Mindfulness, Neurociência e Análise Comportamental."
        />

        <DepoimentosSection
          titulo="Jovens que venceram a síndrome do impostor"
          subtitulo="Histórias de quem tinha medo e desenvolveu confiança:"
          depoimentos={[
            {
              nome: 'Lucas Martins',
              profissao: 'Analista de Dados, 28 anos',
              depoimento: 'Primeiro emprego bom (R$ 8k). Mas vivia em pânico. Achava que iam me demitir a qualquer momento. FOCCO me ajudou reconhecer meu valor. Em 3 meses: ansiedade reduziu 70%, comecei a falar em reuniões, propus projeto. Fui PROMOVIDO!',
              rating: 5,
            },
            {
              nome: 'Mariana Silva',
              profissao: 'Designer UX, 26 anos',
              depoimento: 'Síndrome do impostor forte. Não apresentava ideias por medo. Com FOCCO aprendi que meus pensamentos não são fatos. Desenvolvi confiança real. Hoje lidero projetos e sou referência na equipe.',
              rating: 5,
            },
            {
              nome: 'Felipe Costa',
              profissao: 'Desenvolvedor Júnior, 24 anos',
              depoimento: 'Achava que todo mundo era melhor que eu. Comparação constante me destruía. Método FOCCO me ensinou a focar no MEU crescimento. Parei de me comparar. Virei Pleno em 8 meses.',
              rating: 5,
            },
          ]}
        />

        <FormularioSection
          titulo="Vença a síndrome do impostor de uma vez"
          subtitulo="Sessão diagnóstica gratuita para jovens profissionais com ansiedade e insegurança"
          ctaText="💪 Quero desenvolver confiança real"
          variant="h"
        />

        <CTAWhatsAppSection
          headline="Você merece estar onde está"
          subheadline="Converse comigo e descubra como desenvolver confiança verdadeira"
          whatsappMessage="Olá! Tenho síndrome do impostor e ansiedade no trabalho. Quero saber mais sobre como o Método FOCCO pode me ajudar a desenvolver confiança real e vencer a ansiedade paralisante."
          whatsappNumber={whatsappNumber}
          variant="h"
        />
      </div>

      <Footer />
    </div>
  );
};

export default AgendamentoH;
