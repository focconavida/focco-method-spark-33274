import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GoogleMapsLocation from '@/components/GoogleMapsLocation';

const Contato = () => {
  const whatsappNumber = '5583993787450';
  const whatsappMessage = 'Olá, seja bem-vindo! Como posso te ajudar?';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const contatosDiretos = [
    {
      icon: 'fa-envelope',
      titulo: 'E-mail',
      valor: 'focconavida@gmail.com',
      link: 'mailto:focconavida@gmail.com',
      descricao: 'Envie sua mensagem por e-mail',
    },
    {
      icon: 'fa-whatsapp',
      titulo: 'WhatsApp',
      valor: '(83) 99378-7450',
      link: whatsappLink,
      descricao: 'Fale conosco diretamente',
    },
    {
      icon: 'fa-instagram',
      titulo: 'Instagram',
      valor: '@metodofocco',
      link: '#',
      descricao: 'Siga-nos nas redes sociais',
    },
  ];

  const beneficios = [
    {
      icon: 'fa-bolt',
      titulo: 'Resposta Rápida',
      descricao: 'Retornamos seu contato em até 24 horas',
    },
    {
      icon: 'fa-calendar-check',
      titulo: 'Agendamento Flexível',
      descricao: 'Horários que se adaptam à sua rotina',
    },
    {
      icon: 'fa-lock',
      titulo: 'Confidencialidade',
      descricao: 'Suas informações são 100% seguras',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-56 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="font-heading mb-6">Vamos Conversar?</h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Estamos prontos para ouvir você e iniciar sua jornada de transformação
            </p>

            {/* CTA Principal WhatsApp */}
            <div className="inline-block">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="btn-hero text-lg px-12 py-8 h-auto group">
                  <i className="fab fa-whatsapp text-3xl mr-4 group-hover:scale-110 transition-transform"></i>
                  <div className="text-left">
                    <div className="font-bold">Fale Conosco no WhatsApp</div>
                    <div className="text-sm font-normal opacity-90">Clique para iniciar a conversa</div>
                  </div>
                </Button>
              </a>
            </div>

            <p className="text-muted-foreground text-sm mt-6">
              <i className="fas fa-check-circle text-accent mr-2"></i>
              Atendimento humanizado e personalizado
            </p>
          </div>
        </div>
      </section>

      {/* Benefícios de Entrar em Contato */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-heading mb-4">Por Que Entrar em Contato?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Descubra como o Método FOCCO pode transformar sua vida
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {beneficios.map((beneficio, index) => (
              <div
                key={index}
                className="card-outline text-center group hover:border-accent transition-all"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:scale-110 transition-all">
                  <i className={`fas ${beneficio.icon} text-2xl text-primary group-hover:text-accent-foreground transition-colors`}></i>
                </div>
                <h3 className="font-heading text-lg mb-2">{beneficio.titulo}</h3>
                <p className="text-muted-foreground text-sm">{beneficio.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Canais de Contato Direto */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading mb-4">Outros Canais de Contato</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Escolha o canal mais conveniente para você
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {contatosDiretos.map((contato, index) => (
              <a
                key={index}
                href={contato.link}
                target={contato.link.startsWith('http') ? '_blank' : undefined}
                rel={contato.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="card-elevated group hover:shadow-xl transition-all"
              >
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                    <i className={`fab ${contato.icon} text-3xl text-primary group-hover:text-primary-foreground transition-colors`}></i>
                  </div>
                  <h3 className="font-heading text-xl mb-2 group-hover:text-accent transition-colors">
                    {contato.titulo}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">{contato.descricao}</p>
                  <p className="font-semibold text-primary">{contato.valor}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Localização Google Maps */}
      <GoogleMapsLocation />

      {/* FAQ Rápido */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-center mb-12">Perguntas Frequentes</h2>

            <div className="space-y-6">
              <div className="card-outline">
                <h3 className="font-heading text-lg mb-2 flex items-center gap-2">
                  <i className="fas fa-question-circle text-accent"></i>
                  Quanto tempo leva para ter resultados?
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed ml-7">
                  Muitos clientes relatam mudanças significativas já nas primeiras semanas.
                  No entanto, o processo de transformação é individual e depende do seu comprometimento.
                </p>
              </div>

              <div className="card-outline">
                <h3 className="font-heading text-lg mb-2 flex items-center gap-2">
                  <i className="fas fa-question-circle text-accent"></i>
                  Qual a diferença entre mentoria individual e workshops?
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed ml-7">
                  A mentoria individual é personalizada e focada 100% em você. Os workshops são
                  em grupo e promovem troca de experiências enquanto todos aprendem juntos.
                </p>
              </div>

              <div className="card-outline">
                <h3 className="font-heading text-lg mb-2 flex items-center gap-2">
                  <i className="fas fa-question-circle text-accent"></i>
                  As sessões são online ou presenciais?
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed ml-7">
                  Oferecemos as duas modalidades! Você escolhe o formato que melhor se adapta à sua rotina.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">Ainda tem dúvidas?</p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="btn-outline">
                  <i className="fab fa-whatsapp mr-2"></i>
                  Fale Conosco Agora
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contato;
