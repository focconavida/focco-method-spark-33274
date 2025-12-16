/**
 * Landing Page E - Mãe Executiva
 * Persona: Fernanda, 36 anos, Gerente + Mãe de 2 filhos
 * Dor: Culpa por não estar presente, não consegue ser boa mãe E boa profissional
 */

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { HeroSection } from '@/components/landing/HeroSection';
import { DoresSection } from '@/components/landing/DoresSection';
import { SolucaoSection } from '@/components/landing/SolucaoSection';
import { DepoimentosSection } from '@/components/landing/DepoimentosSection';
import { FormularioSection } from '@/components/landing/FormularioSection';
import { CTAWhatsAppSection } from '@/components/landing/CTAWhatsAppSection';

const AgendamentoE = () => {
  const whatsappNumber = '5583993787450';

  const scrollToForm = () => {
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'cta_click_landing_e', {
        page_variant: 'e',
        cta_type: 'primary_hero',
      });
    }
  };

  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view_landing_e', {
      page_variant: 'e',
      page_title: 'Mãe Executiva',
    });
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="pt-24 md:pt-32">
        <HeroSection
          variant="executiva"
          headline="Você se sente a pior mãe do mundo porque trabalha demais?"
          subheadline="Seja excelente profissional E mãe presente. Sim, é possível ter os dois sem culpa."
          ctaPrimary={{
            text: 'Quero ser boa mãe E boa profissional',
            icon: '💝',
          }}
          ctaSecondary={{
            text: 'Falar no WhatsApp',
            icon: '💬',
            href: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Olá! Vi a página para Mães Executivas e gostaria de conversar.')}`,
          }}
          proofText="⭐ Mais de 300 mães executivas recuperaram o equilíbrio família-trabalho"
          onCtaPrimaryClick={scrollToForm}
        />

        <DoresSection
          titulo="Você se reconhece nessas situações?"
          subtitulo="A culpa é o sentimento que mais machuca mães que trabalham:"
          dores={[
            {
              icon: '😢',
              titulo: 'Não Vê Filhos Crescerem',
              descricao: 'Sai quando eles dormem, volta quando já dormiram. Perde apresentações, aniversários.',
            },
            {
              icon: '💔',
              titulo: 'Culpa Paralisante',
              descricao: 'No trabalho sente culpa por pensar nos filhos. Em casa culpa por pensar no trabalho.',
            },
            {
              icon: '😰',
              titulo: 'Fim de Semana Trabalha',
              descricao: 'Filhos pedem para brincar, você está em reunião online ou respondendo emails.',
            },
            {
              icon: '😭',
              titulo: 'Sente que Está Falhando',
              descricao: 'Não é boa mãe, não é boa profissional. Sente que está falhando nos dois.',
            },
          ]}
          textoFinal="Você NÃO é uma mãe ruim. Você só não aprendeu ainda a ter equilíbrio com clareza."
        />

        <SolucaoSection
          titulo="Você PODE ser excelente profissional E mãe presente"
          subtitulo="Não é sobre desistir da carreira. É sobre ter CLAREZA, LIMITES e PRESENÇA de verdade."
          beneficios={[
            { icon: '✅', text: 'Trabalhar bem SEM abrir mão de momentos com filhos' },
            { icon: '✅', text: 'Estar presente de verdade (não só fisicamente)' },
            { icon: '✅', text: 'Eliminar culpa que te paralisa' },
            { icon: '✅', text: 'Definir limites claros entre trabalho e família' },
            { icon: '✅', text: 'Jantar com família TODO DIA' },
            { icon: '✅', text: 'Ser excelente profissional E mãe presente' },
          ]}
          textoFinal="O Método FOCCO ajuda mães executivas a encontrarem equilíbrio real entre carreira e maternidade."
        />

        <DepoimentosSection
          titulo="Mães que recuperaram o equilíbrio"
          subtitulo="Histórias de quem estava na mesma situação que você:"
          depoimentos={[
            {
              nome: 'Fernanda Costa',
              profissao: 'Gerente de Marketing, 2 filhos (8 e 4 anos)',
              depoimento: 'Eu não via meus filhos. Saía 7h, voltava 22h. Perdi a primeira apresentação da minha filha. Com FOCCO aprendi a ter limites reais. Hoje trabalho 9h/dia, jantar com família TODO DIA, sábado zero trabalho. Filhos dizem: mamãe voltou!',
              rating: 5,
            },
            {
              nome: 'Paula Andrade',
              profissao: 'Diretora Comercial, 1 filha (6 anos)',
              depoimento: 'Estava em depressão. Me odiava por ser mãe ausente. FOCCO me ensinou que o problema não era o cargo, era falta de clareza. Mantive diretoria, reduzi horas, delegação inteligente. Hoje sou excelente profissional E mãe presente.',
              rating: 5,
            },
            {
              nome: 'Roberta Lima',
              profissao: 'CEO Startup, 3 filhos',
              depoimento: 'Como CEO achava que tinha que estar disponível 24/7. Filhos cresciam sem mim. Aprendi a delegar, priorizar, estar presente. Empresa cresceu 40% e EU trabalho menos. Qualidade sobre quantidade.',
              rating: 5,
            },
          ]}
        />

        <FormularioSection
          titulo="Recupere o equilíbrio família-trabalho"
          subtitulo="Sessão diagnóstica de 60 min para mães executivas que querem ser excelentes nos dois"
          ctaText="💝 Quero equilíbrio SEM culpa"
          variant="e"
        />

        <CTAWhatsAppSection
          headline="Prefere conversar antes?"
          subheadline="Entre em contato pelo WhatsApp e tire suas dúvidas"
          whatsappMessage="Olá! Vi a página para Mães Executivas e gostaria de saber mais sobre como o Método FOCCO pode me ajudar a ser excelente profissional E mãe presente, sem culpa."
          whatsappNumber={whatsappNumber}
          variant="e"
        />
      </div>

      <Footer />
    </div>
  );
};

export default AgendamentoE;
