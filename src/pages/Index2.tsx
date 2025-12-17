import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import HeaderV2 from '@/components/HeaderV2';
import FooterV2 from '@/components/FooterV2';
import IdentificacaoDor from '@/components/IdentificacaoDor';
import QuemSou from '@/components/QuemSou';
import ComoFunciona from '@/components/ComoFunciona';
import GoogleReviews from '@/components/GoogleReviews';
import FAQ from '@/components/FAQ';
import heroImage from '@/assets/hero-bg.jpg';
import valeriaProfile from '@/assets/valeria-profile.jpg';

const Index2 = () => {
  const whatsappNumber = '5583993787450';
  const whatsappMessage = 'Olá! Quero transformar minha vida com o Método FOCCO.';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const pilaresFoccoResumido = [
    {
      letter: 'F',
      title: 'FOCO',
      subtitle: 'Clareza sobre o essencial',
      icon: 'fa-bullseye',
      color: 'bg-gradient-to-br from-[#2C5F6F] to-[#3A7A8E]'
    },
    {
      letter: 'O',
      title: 'OBSERVAÇÃO',
      subtitle: 'Atenção ao que importa',
      icon: 'fa-eye',
      color: 'bg-gradient-to-br from-[#3A7A8E] to-[#4A94A8]'
    },
    {
      letter: 'C',
      title: 'CONSCIÊNCIA',
      subtitle: 'Decisões alinhadas',
      icon: 'fa-brain',
      color: 'bg-gradient-to-br from-[#4A94A8] to-[#5AAEC2]'
    },
    {
      letter: 'C',
      title: 'CLAREZA',
      subtitle: 'Vida com propósito',
      icon: 'fa-lightbulb',
      color: 'bg-gradient-to-br from-[#5AAEC2] to-[#6AC8DC]'
    },
    {
      letter: 'O',
      title: 'OBJETIVO',
      subtitle: 'Conquistas autênticas',
      icon: 'fa-flag-checkered',
      color: 'bg-gradient-to-br from-[#6AC8DC] to-[#7AE2F6]'
    }
  ];

  return (
    <div className="min-h-screen">
      <HeaderV2 />

      {/* Hero Section EMOCIONAL */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(44, 95, 111, 0.9), rgba(58, 122, 142, 0.85)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container-custom relative z-10 px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Coluna Esquerda - Textos EMOCIONAIS */}
            <div className="space-y-8 text-center lg:text-left animate-fade-in order-2 lg:order-1">
              <div className="space-y-6">
                <h1 className="text-primary-foreground font-heading font-bold leading-tight text-4xl sm:text-5xl lg:text-6xl">
                  Você está exausto, ansioso e perdido?
                </h1>
                <p className="text-xl md:text-2xl text-primary-foreground/95 leading-relaxed">
                  Sente que está vivendo no piloto automático, sem propósito e sem energia para continuar?
                </p>
                <p className="text-lg text-primary-foreground/90 leading-relaxed">
                  <strong>Eu entendo.</strong> Passei 12 anos assim. E descobri um caminho para sair dessa.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-accent hover:bg-accent-light text-accent-foreground text-lg px-12 py-7 rounded-xl font-bold shadow-2xl hover:shadow-3xl transition-all hover:scale-105">
                    <i className="fab fa-whatsapp mr-3 text-2xl"></i>
                    Quero Mudar Minha Vida Agora
                  </Button>
                </a>
              </div>
              <p className="text-sm text-primary-foreground/70 text-center lg:text-left">
                ✓ Sem compromisso • ✓ Resposta em minutos • ✓ 100% confidencial
              </p>
            </div>

            {/* Coluna Direita - Foto Valéria */}
            <div className="flex justify-center items-center order-1 lg:order-2">
              <div className="relative max-w-md">
                <div className="absolute -inset-6 bg-gradient-to-br from-accent/40 to-primary-foreground/40 rounded-3xl blur-3xl"></div>
                <div className="relative">
                  <img
                    src={valeriaProfile}
                    alt="Valéria Dias - Quem vai te guiar nessa jornada"
                    className="rounded-3xl shadow-2xl w-full object-cover"
                  />
                  <div className="absolute bottom-6 left-6 right-6 bg-primary-foreground/95 backdrop-blur-sm rounded-xl p-5 shadow-xl">
                    <p className="font-heading font-bold text-primary text-xl mb-1">Valéria Dias</p>
                    <p className="text-sm text-muted-foreground">Eu também já estive no seu lugar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Identificação/Dor - PERSONAS */}
      <IdentificacaoDor />

      {/* Quem Sou - CONEXÃO EMOCIONAL CEDO */}
      <QuemSou />

      {/* Solução - 5 PILARES RESUMIDOS */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="font-heading mb-4">A Solução: Método FOCCO</h2>
            <p className="text-muted-foreground text-lg">
              Um método comprovado que integra mindfulness, neurociência e comportamento para sua transformação real
            </p>
          </div>

          {/* Grid Horizontal de Pilares */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {pilaresFoccoResumido.map((pilar, index) => (
              <div
                key={index}
                className={`${pilar.color} text-primary-foreground p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group`}
              >
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-primary-foreground/20 rounded-xl flex items-center justify-center mx-auto">
                    <i className={`fas ${pilar.icon} text-3xl text-primary-foreground`}></i>
                  </div>
                  <div className="text-4xl font-bold font-heading opacity-30">{pilar.letter}</div>
                  <h3 className="font-heading text-lg font-bold">{pilar.title}</h3>
                  <p className="text-sm text-primary-foreground/90">{pilar.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/sobre" className="text-primary hover:text-primary-dark font-semibold inline-flex items-center gap-2 group">
              Entenda o método completo
              <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Como Funciona - 3 PASSOS */}
      <ComoFunciona />

      {/* Prova Social - DEPOIMENTOS */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading mb-4">Transformações Reais</h2>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <i key={star} className="fas fa-star text-yellow-500 text-2xl"></i>
                ))}
              </div>
              <span className="text-xl font-semibold text-foreground">4.9/5</span>
              <span className="text-muted-foreground">no Google</span>
            </div>
            <p className="text-muted-foreground text-lg">
              Veja o que dizem pessoas que transformaram suas vidas
            </p>
          </div>
          <GoogleReviews />
        </div>
      </section>

      {/* FAQ - ELIMINA OBJEÇÕES */}
      <FAQ />

      {/* CTA Final com URGÊNCIA */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary-dark to-primary text-primary-foreground relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

        <div className="container-custom text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-8">
            {/* Badge de urgência */}
            <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-full font-semibold shadow-lg">
              <i className="fas fa-fire text-xl"></i>
              <span>Vagas Limitadas Este Mês</span>
            </div>

            <h2 className="font-heading text-4xl md:text-5xl text-primary-foreground">
              Pronto para começar sua transformação?
            </h2>

            <p className="text-xl text-primary-foreground/95 leading-relaxed max-w-2xl mx-auto">
              Não deixe para amanhã a vida que você merece viver hoje. Dê o primeiro passo agora.
            </p>

            <div className="flex justify-center px-4 sm:px-6 mt-8">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto max-w-md">
                <Button className="bg-accent hover:bg-accent-light text-accent-foreground text-xl px-16 py-8 rounded-2xl font-bold shadow-2xl hover:shadow-3xl transition-all hover:scale-105 w-full">
                  <i className="fab fa-whatsapp mr-4 text-3xl"></i>
                  Falar com Valéria Agora
                </Button>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-primary-foreground/80 text-sm">
              <div className="flex items-center gap-2">
                <i className="fas fa-clock"></i>
                <span>Resposta em minutos</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-shield-alt"></i>
                <span>100% confidencial</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-handshake"></i>
                <span>Sem compromisso</span>
              </div>
            </div>

            <p className="text-sm text-primary-foreground/60 italic">
              "O melhor momento para plantar uma árvore foi há 20 anos. O segundo melhor momento é agora."
            </p>
          </div>
        </div>
      </section>

      <FooterV2 />
    </div>
  );
};

export default Index2;
