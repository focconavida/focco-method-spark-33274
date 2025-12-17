import { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    {
      pergunta: 'Como funciona a primeira sessão?',
      resposta: 'A primeira sessão é um momento de conhecimento mútuo. Conversamos sobre seus desafios, objetivos e avalio se há fit entre o que você busca e o Método FOCCO. Não há compromisso - você decide se quer continuar.'
    },
    {
      pergunta: 'Quanto tempo leva para ver resultados?',
      resposta: 'Muitas pessoas relatam mudanças perceptíveis já nas primeiras semanas - mais clareza mental, redução da ansiedade, melhor qualidade do sono. Transformações profundas e duradouras geralmente aparecem entre 2-3 meses de trabalho consistente.'
    },
    {
      pergunta: 'É online ou presencial?',
      resposta: 'Ofereço ambas as modalidades. As sessões online funcionam muito bem e permitem flexibilidade de horário e local. Para sessões presenciais, atendo em João Pessoa/PB.'
    },
    {
      pergunta: 'Qual a diferença entre terapia e o Método FOCCO?',
      resposta: 'A terapia foca no cuidado emocional, tratamento de traumas e questões psicológicas. O Método FOCCO é voltado para desenvolvimento pessoal, clareza de propósito, gestão de estresse e alta performance. Ambos podem ser complementares.'
    },
    {
      pergunta: 'E se eu não puder continuar?',
      resposta: 'Você tem total flexibilidade. Pode pausar, retomar ou encerrar quando quiser. Não há multas ou penalidades. Respeito seu ritmo e suas decisões.'
    },
    {
      pergunta: 'Funciona para o meu caso específico?',
      resposta: 'O Método FOCCO é eficaz para burnout, ansiedade, falta de propósito, transições de carreira, gestão emocional e desenvolvimento de lideranças. Se você tem dúvidas, fale comigo no WhatsApp e podemos conversar sobre sua situação específica.'
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="font-heading mb-4">Perguntas Frequentes</h2>
          <p className="text-muted-foreground text-lg">
            Respondendo as dúvidas mais comuns
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border overflow-hidden hover:border-primary/30 transition-colors"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full text-left p-6 flex items-start justify-between gap-4 hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="fas fa-question text-primary"></i>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground pt-1">
                    {faq.pergunta}
                  </h3>
                </div>
                <i className={`fas fa-chevron-down text-primary transition-transform flex-shrink-0 mt-2 ${
                  activeIndex === index ? 'rotate-180' : ''
                }`}></i>
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 pl-20">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.resposta}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Ainda tem dúvidas?</p>
          <a
            href={`https://wa.me/5583993787450?text=${encodeURIComponent('Olá! Tenho algumas dúvidas sobre o Método FOCCO.')}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn-outline">
              <i className="fab fa-whatsapp mr-2"></i>
              Fale Comigo no WhatsApp
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
