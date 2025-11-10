/**
 * Landing Page F - Provedor em Crise
 * Persona: Roberto, 42 anos, Sustenta família sozinho
 * Dor: Preso em emprego que odeia, mas tem contas a pagar
 */

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { HeroSection } from '@/components/landing/HeroSection';
import { DoresSection } from '@/components/landing/DoresSection';
import { SolucaoSection } from '@/components/landing/SolucaoSection';
import { DepoimentosSection } from '@/components/landing/DepoimentosSection';
import { FormularioSection } from '@/components/landing/FormularioSection';
import { CTAWhatsAppSection } from '@/components/landing/CTAWhatsAppSection';

const AgendamentoF = () => {
  const whatsappNumber = '5583993787450';

  const scrollToForm = () => {
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'cta_click_landing_f', {
        page_variant: 'f',
        cta_type: 'primary_hero',
      });
    }
  };

  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view_landing_f', {
      page_variant: 'f',
      page_title: 'Provedor em Crise',
    });
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="pt-24 md:pt-32">
        <HeroSection
          variant="provedor"
          headline="Sustenta a família mas morre por dentro todo dia?"
          subheadline="Mude de vida COM SEGURANÇA. Plano de transição sem perder renda e sem colocar família em risco."
          ctaPrimary={{
            text: 'Quero mudar SEM colocar família em risco',
            icon: '🛡️',
          }}
          ctaSecondary={{
            text: 'Falar com especialista',
            icon: '💬',
            href: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Olá! Vi a página para Provedores e gostaria de conversar sobre transição segura.')}`,
          }}
          proofText="⭐ 50+ provedores de família mudaram de vida com plano seguro"
          onCtaPrimaryClick={scrollToForm}
        />

        <DoresSection
          titulo="Você está preso nessa situação?"
          subtitulo="A responsabilidade de sustentar família sozinho paralisa:"
          dores={[
            {
              icon: '😔',
              titulo: 'Odeia o Trabalho',
              descricao: 'Acorda todo dia com aperto no peito. Cada reunião é um sacrifício.',
            },
            {
              icon: '⛓️',
              titulo: 'Preso pela Responsabilidade',
              descricao: 'Esposa, filhos, contas, escola, plano de saúde... Família depende de você.',
            },
            {
              icon: '😰',
              titulo: 'Medo de Arriscar',
              descricao: 'Quer mudar mas tem medo. "E se der errado? Minha família vai sofrer."',
            },
            {
              icon: '💀',
              titulo: 'Morrendo por Dentro',
              descricao: 'Faz sacrifício silencioso. Família não sabe o quanto você sofre todo dia.',
            },
          ]}
          textoFinal="Você NÃO precisa escolher entre felicidade e segurança da família. É possível ter os dois."
        />

        <SolucaoSection
          titulo="Mude de vida SEM colocar família em risco"
          subtitulo="Não é sobre largar tudo de uma vez. É sobre ter um PLANO SEGURO de transição gradual."
          beneficios={[
            { icon: '✅', text: 'Clareza do que você REALMENTE quer fazer' },
            { icon: '✅', text: 'Plano de transição SEM perda de renda' },
            { icon: '✅', text: 'Testar nova carreira mantendo emprego atual' },
            { icon: '✅', text: 'Segurança financeira para família durante transição' },
            { icon: '✅', text: 'Saber o momento certo de fazer a mudança' },
            { icon: '✅', text: 'Trabalhar feliz SEM colocar família em risco' },
          ]}
          textoFinal="O Método FOCCO cria planos seguros de transição para provedores de família."
        />

        <DepoimentosSection
          titulo="Provedores que mudaram COM SEGURANÇA"
          subtitulo="Histórias de quem sustentava família e conseguiu mudar:"
          depoimentos={[
            {
              nome: 'Roberto Silva',
              profissao: 'Ex-Engenheiro → Professor Online',
              depoimento: 'Odiava engenharia há 10 anos. Mas era único provedor (esposa + 2 filhos). FOCCO me ajudou criar plano seguro: mantive emprego, comecei dar aulas online à noite. Em 8 meses igualei salário. Hoje ganho 30% a MAIS e amo o que faço.',
              rating: 5,
            },
            {
              nome: 'Carlos Mendes',
              profissao: 'Ex-Contador → Consultor Financeiro',
              depoimento: 'Família dependia 100% de mim. Tinha medo de arriscar. Com FOCCO fiz transição gradual: fim de semana começou consultoria, construiu base de clientes, depois saiu. Família MAIS segura financeiramente hoje.',
              rating: 5,
            },
            {
              nome: 'Marcos Oliveira',
              profissao: 'Ex-Bancário → Empreendedor',
              depoimento: 'Preso no banco há 15 anos. Sustentava família inteira. FOCCO me mostrou que dava para empreender SEM largar emprego. Testei, validei, escalei. Quando abri empresa estava seguro. Melhor decisão da vida.',
              rating: 5,
            },
          ]}
        />

        <FormularioSection
          titulo="Plano seguro de transição profissional"
          subtitulo="Sessão diagnóstica gratuita para traçar caminho de mudança SEM colocar família em risco"
          ctaText="🛡️ Quero plano seguro de transição"
          variant="f"
        />

        <CTAWhatsAppSection
          headline="Pronto para mudar COM SEGURANÇA?"
          subheadline="Converse comigo e descubra como fazer transição sem risco"
          whatsappMessage="Olá! Vi a página para Provedores de Família e quero saber mais sobre como o Método FOCCO pode me ajudar a mudar de vida COM SEGURANÇA, sem colocar minha família em risco."
          whatsappNumber={whatsappNumber}
          variant="f"
        />
      </div>

      <Footer />
    </div>
  );
};

export default AgendamentoF;
