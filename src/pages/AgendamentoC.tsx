/**
 * Landing Page C - Empreendedor Sobrecarregado
 * Persona: Rafael, 40 anos, Empresário/Autônomo
 * Dor: Trabalha muito, negócio não cresce
 */

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { HeroSection } from '@/components/landing/HeroSection';
import { DoresSection } from '@/components/landing/DoresSection';
import { SolucaoSection } from '@/components/landing/SolucaoSection';
import { DepoimentosSection } from '@/components/landing/DepoimentosSection';
import { FormularioSection } from '@/components/landing/FormularioSection';
import { CTAWhatsAppSection } from '@/components/landing/CTAWhatsAppSection';

const AgendamentoC = () => {
  const whatsappNumber = '5583993787450';

  const scrollToForm = () => {
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'cta_click_landing_c', {
        page_variant: 'c',
        cta_type: 'primary_hero',
      });
    }
  };

  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view_landing_c', {
      page_variant: 'c',
      page_title: 'Empreendedor Sobrecarregado',
    });
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <HeroSection
        variant="empreendedor"
        headline="Trabalha 12 horas por dia, mas seu negócio não sai do lugar?"
        subheadline="Saia do caos operacional, ganhe foco estratégico e cresça seu negócio sem sacrificar sua vida pessoal"
        ctaPrimary={{
          text: 'Quero crescer sem me matar de trabalhar',
          icon: '🚀',
        }}
        ctaSecondary={{
          text: 'Falar com especialista',
          icon: '💬',
          href: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Olá! Vi a página para Empreendedores e gostaria de conversar.')}`,
        }}
        proofText="⭐ 80+ empreendedores conquistaram foco estratégico e crescimento sustentável"
        onCtaPrimaryClick={scrollToForm}
      />

      <DoresSection
        titulo="Seu negócio está assim?"
        subtitulo="Reconhece pelo menos uma dessas situações?"
        dores={[
          {
            icon: '🔥',
            titulo: 'Apagando Incêndios',
            descricao: 'Todo dia um problema novo. Vive no operacional, sem tempo para estratégia.',
          },
          {
            icon: '😓',
            titulo: 'Faz TUDO Sozinho',
            descricao: 'Não consegue delegar. "Ninguém faz como eu faço" - e se mata de trabalhar.',
          },
          {
            icon: '📊',
            titulo: 'Faturamento Estagnado',
            descricao: 'Muito esforço, pouco resultado. Mesmo faturamento há anos, sem crescimento.',
          },
          {
            icon: '👨‍👩‍👧',
            titulo: 'Perdendo Momentos',
            descricao: 'Fim de semana não existe. Família reclama que você não para nunca.',
          },
        ]}
        textoFinal="O problema não é falta de esforço. É falta de FOCO ESTRATÉGICO."
      />

      <SolucaoSection
        titulo="Do Caos ao Crescimento Escalável"
        subtitulo="É possível crescer seu negócio SEM se matar de trabalhar. Não é sobre trabalhar mais. É sobre trabalhar COM ESTRATÉGIA."
        beneficios={[
          { icon: '✅', text: 'Sair do operacional e focar no que realmente importa' },
          { icon: '✅', text: 'Delegar com confiança e construir equipe funcional' },
          { icon: '✅', text: 'Crescimento escalável sem depender só de você' },
          { icon: '✅', text: 'Tomar decisões estratégicas claras e assertivas' },
          { icon: '✅', text: 'Ter tempo para família mesmo sendo empreendedor' },
          { icon: '✅', text: 'Lucrar mais trabalhando menos horas' },
        ]}
        textoFinal="O Método FOCCO transforma empreendedores sobrecarregados em líderes estratégicos."
      />

      <DepoimentosSection
        titulo="Empreendedores que saíram do caos"
        subtitulo="Veja casos de quem estava na mesma situação que você:"
        depoimentos={[
          {
            nome: 'Rafael Costa',
            profissao: 'Dono de Agência Digital, SP',
            depoimento: 'Trabalhava 14h/dia, fazia de tudo mas agência não crescia. FOCCO me ensinou a delegar e focar em estratégia. Em 6 meses dobrei faturamento trabalhando 8h/dia. Minha equipe funciona sem mim.',
            rating: 5,
          },
          {
            nome: 'Amanda Santos',
            profissao: 'Dona de Loja Virtual, RJ',
            depoimento: 'Estava no limite, fazendo vendas, marketing, financeiro, tudo. Aprendi a montar processos e delegar. Hoje tenho 3 funcionários, vendo 3x mais e tenho fins de semana livres.',
            rating: 5,
          },
          {
            nome: 'Pedro Oliveira',
            profissao: 'Consultor Autônomo, MG',
            depoimento: 'Aceitava qualquer cliente, trabalhava sem parar. FOCCO me ajudou a ter foco: especialização + nicho certo. Trabalho metade das horas, ganho o dobro. Tenho vida de novo.',
            rating: 5,
          },
        ]}
      />

      <FormularioSection
        titulo="Transforme seu negócio com foco estratégico"
        subtitulo="Sessão diagnóstica gratuita para identificar gargalos e traçar plano de crescimento"
        ctaText="🚀 Quero crescer com estratégia"
        variant="c"
      />

      <CTAWhatsAppSection
        headline="Pronto para sair do caos?"
        subheadline="Converse comigo e descubra como ter um negócio que cresce sem te matar"
        whatsappMessage="Olá! Vi a página para Empreendedores e quero saber mais sobre como o Método FOCCO pode me ajudar a sair do caos operacional e crescer meu negócio com foco estratégico."
        whatsappNumber={whatsappNumber}
        variant="c"
      />

      <Footer />
    </div>
  );
};

export default AgendamentoC;
