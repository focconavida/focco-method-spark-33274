const ComoFunciona = () => {
  const whatsappNumber = '5583993787450';
  const whatsappMessage = 'Olá! Quero saber como funciona o Método FOCCO.';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const passos = [
    {
      numero: '1',
      titulo: 'Conversa Inicial',
      descricao: 'Fale comigo no WhatsApp. Em 15 minutos, entendo sua situação e vejo se posso ajudar.',
      icon: 'fa-comments',
      tempo: '15 minutos'
    },
    {
      numero: '2',
      titulo: 'Sessão Experimental',
      descricao: 'Uma primeira sessão para você sentir como funciona e se conectar com o método.',
      icon: 'fa-lightbulb',
      tempo: '1h30'
    },
    {
      numero: '3',
      titulo: 'Programa Personalizado',
      descricao: 'Criamos juntos um caminho sob medida para sua transformação, com acompanhamento próximo.',
      icon: 'fa-route',
      tempo: 'Personalizado'
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-heading mb-4">Como Funciona</h2>
          <p className="text-muted-foreground text-lg">
            Simples, direto e sem compromisso. Você decide se faz sentido para você.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Linha conectando os passos */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-success"
                 style={{ top: '80px', left: '15%', right: '15%' }}></div>

            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              {passos.map((passo, index) => (
                <div key={index} className="text-center">
                  {/* Número do passo */}
                  <div className="relative inline-block mb-6">
                    <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center shadow-xl mx-auto">
                      <div className="text-center">
                        <div className="text-5xl font-bold text-primary-foreground mb-1">{passo.numero}</div>
                      </div>
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap shadow-md">
                      {passo.tempo}
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                      <i className={`fas ${passo.icon} text-xl text-primary`}></i>
                    </div>
                    <h3 className="font-heading text-xl font-bold">{passo.titulo}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {passo.descricao}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <button className="btn-hero text-lg px-12 py-6">
                <i className="fab fa-whatsapp mr-3"></i>
                Começar Agora no WhatsApp
              </button>
            </a>
            <p className="text-sm text-muted-foreground mt-4">
              Resposta rápida • Sem compromisso • Totalmente confidencial
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;
