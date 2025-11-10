import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CheckCircle, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trackAgendamento, trackWhatsAppClick } from '@/utils/analytics';

const Obrigado = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const whatsappNumber = '5583993787450';
  const whatsappMessage = 'Olá! Acabei de agendar uma sessão e gostaria de confirmar';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // Detectar de qual landing page veio
  const landingPage = location.state?.from || 'unknown';

  useEffect(() => {
    // Rastrear conversão de agendamento
    trackAgendamento(landingPage, 'formulario');

    // Scroll to top
    window.scrollTo(0, 0);
  }, [landingPage]);

  const handleWhatsAppClick = () => {
    trackWhatsAppClick('obrigado', 'cta_confirmacao');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="min-h-screen flex items-center justify-center px-4 pt-32 pb-16">
        <div className="max-w-3xl mx-auto">
          {/* Check icon animado */}
          <div className="mb-8 text-center animate-fade-in">
            <div className="inline-flex items-center justify-center w-32 h-32 bg-green-100 rounded-full mb-6">
              <CheckCircle className="w-16 h-16 text-green-600" />
            </div>
          </div>

          {/* Mensagem principal */}
          <div className="text-center mb-12 space-y-4 animate-slide-up">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              Agendamento Recebido!
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Obrigada pelo interesse no Método FOCCO, estou feliz que você está aqui! <Heart className="inline w-6 h-6 text-red-500" />
            </p>
          </div>

          {/* Card com próximos passos */}
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 mb-8 border border-primary/10 animate-slide-up">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6 text-center">
              Próximos passos:
            </h2>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <span className="text-foreground">
                  <strong>Recebi seu agendamento</strong> e vou analisar com atenção para preparar nossa sessão diagnóstica
                </span>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <span className="text-foreground">
                  <strong>Entrarei em contato em até 24 horas</strong> para confirmar data e horário que funcionam melhor para você
                </span>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <span className="text-foreground">
                  <strong>Verifique seu email</strong> (inclusive pasta de spam/lixo eletrônico)
                </span>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  4
                </div>
                <span className="text-foreground">
                  Se preferir, <strong>pode me chamar no WhatsApp</strong> a qualquer momento!
                </span>
              </li>
            </ul>
          </div>

          {/* CTA WhatsApp */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 mb-8 text-white text-center">
            <h3 className="text-2xl font-heading font-bold mb-3">
              Quer falar agora?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Estou disponível no WhatsApp para tirar qualquer dúvida!
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" onClick={handleWhatsAppClick}>
              <Button className="bg-white text-green-600 hover:bg-green-50 text-lg px-8 py-6 font-semibold">
                <i className="fab fa-whatsapp mr-3 text-2xl"></i>
                Chamar no WhatsApp
              </Button>
            </a>
          </div>

          {/* Sugestões de conteúdo */}
          <div className="text-center mb-8">
            <p className="text-lg text-muted-foreground mb-6">
              Enquanto aguarda, que tal conhecer mais sobre o Método FOCCO?
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href="/blog"
                className="block p-6 bg-card border border-border rounded-xl hover:border-primary hover:shadow-lg transition-all group"
              >
                <div className="text-4xl mb-3">📚</div>
                <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition">
                  Ler artigos do blog
                </h4>
                <p className="text-sm text-muted-foreground">
                  Conteúdos sobre mindfulness, burnout e desenvolvimento pessoal
                </p>
              </a>

              <a
                href="/sobre"
                className="block p-6 bg-card border border-border rounded-xl hover:border-primary hover:shadow-lg transition-all group"
              >
                <div className="text-4xl mb-3">👩‍🏫</div>
                <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition">
                  Conhecer Valéria Dias
                </h4>
                <p className="text-sm text-muted-foreground">
                  Idealizadora do Método FOCCO e especialista em mindfulness
                </p>
              </a>
            </div>
          </div>

          {/* Mensagem final */}
          <div className="text-center text-muted-foreground">
            <p className="text-sm">
              Mal posso esperar para nossa conversa! ✨
            </p>
            <p className="text-xs mt-2">
              <strong>Valéria Dias</strong> - Método FOCCO
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Obrigado;
