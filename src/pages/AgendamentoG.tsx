/**
 * Landing Page G - Profissional Liberal Caótico
 * Persona: Juliana, 38 anos, Psicóloga/Advogada/Dentista autônoma
 * Dor: Agenda lotada, não tem vida pessoal, burnout iminente
 */

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { HeroSection } from '@/components/landing/HeroSection';
import { DoresSection } from '@/components/landing/DoresSection';
import { SolucaoSection } from '@/components/landing/SolucaoSection';
import { DepoimentosSection } from '@/components/landing/DepoimentosSection';
import { FormularioSection } from '@/components/landing/FormularioSection';
import { CTAWhatsAppSection } from '@/components/landing/CTAWhatsAppSection';

const AgendamentoG = () => {
  const whatsappNumber = '5583993787450';

  const scrollToForm = () => {
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'cta_click_landing_g', {
        page_variant: 'g',
        cta_type: 'primary_hero',
      });
    }
  };

  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view_landing_g', {
      page_variant: 'g',
      page_title: 'Profissional Liberal Caótico',
    });
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="pt-24 md:pt-32">
        <HeroSection
          variant="executiva"
          headline="Sua agenda está lotada mas você está vazia por dentro?"
          subheadline="Consultório sustentável: ganhe mais atendendo menos. Tenha agenda que respeita SUA vida."
          ctaPrimary={{
            text: 'Quero agenda sustentável',
            icon: '📅',
          }}
          ctaSecondary={{
            text: 'Falar com especialista',
            icon: '💬',
            href: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Olá! Sou profissional liberal e gostaria de conversar sobre agenda sustentável.')}`,
          }}
          proofText="⭐ 200+ profissionais liberais construíram consultório sustentável"
          onCtaPrimaryClick={scrollToForm}
        />

        <DoresSection
          titulo="Sua agenda está assim?"
          subtitulo="Profissionais liberais de sucesso que estão no caos:"
          dores={[
            {
              icon: '📅',
              titulo: 'Agenda Lotada Sempre',
              descricao: 'Segunda a sábado. Manhã, tarde, noite. 40, 50 atendimentos por semana.',
            },
            {
              icon: '😫',
              titulo: 'Virou Máquina de Atender',
              descricao: 'Não tem tempo para nada. Não almoça direito. Não vê família. Não tem hobbies.',
            },
            {
              icon: '💔',
              titulo: 'Burnout Iminente',
              descricao: 'Exausta física e emocionalmente. Ajuda outras pessoas mas está destruída.',
            },
            {
              icon: '🚫',
              titulo: 'Não Consegue Dizer Não',
              descricao: 'Aceita qualquer paciente/cliente. Agenda te controla, você não controla ela.',
            },
          ]}
          textoFinal="O problema não é ter muitos clientes. É não ter LIMITES, ESTRATÉGIA e VALOR adequado."
        />

        <SolucaoSection
          titulo="Consultório sustentável É POSSÍVEL"
          subtitulo="Você pode ter sucesso profissional SEM se destruir. É sobre trabalhar COM INTELIGÊNCIA."
          beneficios={[
            { icon: '✅', text: 'Definir número IDEAL de atendimentos (sem burnout)' },
            { icon: '✅', text: 'Aumentar ticket médio (ganhar mais atendendo menos)' },
            { icon: '✅', text: 'Especialização estratégica (nicho lucrativo)' },
            { icon: '✅', text: 'Agenda que respeita SUA vida pessoal' },
            { icon: '✅', text: 'Sábados livres para família e lazer' },
            { icon: '✅', text: 'Faturamento igual ou maior com menos horas' },
          ]}
          textoFinal="O Método FOCCO ajuda profissionais liberais a construírem consultório sustentável e lucrativo."
        />

        <DepoimentosSection
          titulo="Profissionais que saíram do caos"
          subtitulo="Histórias de quem tinha agenda lotada e estava se destruindo:"
          depoimentos={[
            {
              nome: 'Juliana Santos',
              profissao: 'Psicóloga Clínica',
              depoimento: 'Atendia 45 pacientes/semana. Segunda a sábado, 8h às 21h. Burnout total. FOCCO me ensinou: atendo 25 pacientes, cobro mais, nicho específico (ansiedade). Faturamento IGUAL, trabalho 30h/semana. Tenho vida de volta.',
              rating: 5,
            },
            {
              nome: 'Dr. Carlos Andrade',
              profissao: 'Dentista',
              depoimento: 'Consultório lotado mas sem lucro. Atendia qualquer procedimento. Com FOCCO especializei em estética, aumentei ticket, reduzi volume. Ganho 40% a MAIS trabalhando metade das horas. Qualidade sobre quantidade.',
              rating: 5,
            },
            {
              nome: 'Dra. Mariana Costa',
              profissao: 'Advogada',
              depoimento: 'Aceitava qualquer caso. Trabalhava fins de semana. Estava no limite. Aprendi a ter critério, cobrar valor justo, definir limites. Escritório mais lucrativo, menos clientes, mais qualidade de vida.',
              rating: 5,
            },
          ]}
        />

        <FormularioSection
          titulo="Construa consultório sustentável"
          subtitulo="Sessão diagnóstica para profissionais liberais que querem sucesso SEM burnout"
          ctaText="📅 Quero agenda sustentável"
          variant="g"
        />

        <CTAWhatsAppSection
          headline="Cansada de agenda caótica?"
          subheadline="Converse comigo e descubra como ter consultório lucrativo E vida pessoal"
          whatsappMessage="Olá! Sou profissional liberal (psicóloga/advogada/dentista/nutricionista) e quero saber mais sobre como o Método FOCCO pode me ajudar a ter agenda sustentável, ganhar mais atendendo menos e ter vida pessoal de volta."
          whatsappNumber={whatsappNumber}
          variant="g"
        />
      </div>

      <Footer />
    </div>
  );
};

export default AgendamentoG;
