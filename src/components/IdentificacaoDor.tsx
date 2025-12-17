const IdentificacaoDor = () => {
  const personas = [
    {
      icon: 'fa-battery-empty',
      titulo: 'Estou em burnout',
      descricao: 'Exausto, sem energia, sentindo que está no limite e precisa de uma mudança urgente.',
      cor: 'from-red-500 to-orange-500'
    },
    {
      icon: 'fa-compass',
      titulo: 'Perdi meu propósito',
      descricao: 'Conquistei coisas, mas sinto um vazio. Não sei mais qual é minha direção na vida.',
      cor: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'fa-face-frown',
      titulo: 'Ansiedade me paralisa',
      descricao: 'Preocupação constante, mente acelerada, medo de não dar conta de tudo.',
      cor: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="font-heading mb-4">Você se identifica com isso?</h2>
          <p className="text-muted-foreground text-lg">
            Muitas pessoas bem-sucedidas enfrentam essas dificuldades em silêncio. Você não está sozinho.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {personas.map((persona, index) => (
            <div
              key={index}
              className="card-elevated text-center group hover:scale-105 transition-transform"
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${persona.cor} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                <i className={`fas ${persona.icon} text-4xl text-white`}></i>
              </div>
              <h3 className="font-heading text-2xl mb-3 text-foreground">
                "{persona.titulo}"
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {persona.descricao}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-primary font-semibold">
            Se você se identificou com pelo menos um desses cenários, o Método FOCCO pode te ajudar.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IdentificacaoDor;
