import { useEffect, useState, useCallback, useRef } from 'react';

interface Review {
  author: string;
  rating: number;
  text: string;
  time: string;
}

const GoogleReviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [rating, setRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  // Place ID do Google (extraído do link)
  const placeId = '0x9bd94f894260dd:0xe9a65081321b28f7';

  // Link do perfil do Google
  const googleProfileLink = 'https://maps.app.goo.gl/6mLXML44sgmziWrL8';

  useEffect(() => {
    // Por enquanto, vamos usar reviews estáticas até configurar a API
    // Essas serão substituídas por reviews reais da API do Google
    // APENAS avaliações com 4+ estrelas
    const mockReviews: Review[] = [
      {
        author: "Maria Silva",
        rating: 5,
        text: "Experiência transformadora! A Valéria é uma profissional excepcional que me ajudou a encontrar clareza e propósito. O Método FOCCO realmente funciona!",
        time: "2 semanas atrás"
      },
      {
        author: "João Santos",
        rating: 5,
        text: "O Método FOCCO mudou minha vida profissional. Consegui organizar minhas prioridades e hoje trabalho com muito mais foco e produtividade.",
        time: "1 mês atrás"
      },
      {
        author: "Ana Paula Costa",
        rating: 5,
        text: "Excelente trabalho! Consegui clareza sobre minha carreira e aprendi técnicas práticas para gerenciar meu estresse. Recomendo muito!",
        time: "2 meses atrás"
      },
      {
        author: "Carlos Oliveira",
        rating: 5,
        text: "Profissional incrível! As sessões me ajudaram a desenvolver inteligência emocional e melhorar meus relacionamentos no trabalho.",
        time: "3 meses atrás"
      },
      {
        author: "Fernanda Lima",
        rating: 4,
        text: "Muito bom! A abordagem é prática e os resultados aparecem rapidamente. Estou mais confiante e focada nos meus objetivos.",
        time: "1 mês atrás"
      },
      {
        author: "Ricardo Mendes",
        rating: 5,
        text: "Transformação real! Aprendi a dizer não sem culpa e a estabelecer limites saudáveis. Minha qualidade de vida melhorou muito.",
        time: "2 semanas atrás"
      }
    ];

    // Simular loading
    setTimeout(() => {
      // Filtrar apenas avaliações 4+ estrelas
      const filteredReviews = mockReviews.filter(review => review.rating >= 4);
      setReviews(filteredReviews);
      setRating(4.9);
      setTotalReviews(filteredReviews.length);
      setLoading(false);
    }, 500);
  }, []);

  // Navegação do carrossel
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  }, [reviews.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, [reviews.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // Autoplay
  useEffect(() => {
    if (reviews.length === 0 || isPaused) {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
      return;
    }

    autoplayRef.current = setInterval(() => {
      nextSlide();
    }, 5000); // Muda a cada 5 segundos

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [reviews.length, isPaused, nextSlide]);

  // Suporte a touch/swipe para mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<i key={i} className="fas fa-star text-yellow-400"></i>);
      } else if (i - 0.5 <= rating) {
        stars.push(<i key={i} className="fas fa-star-half-alt text-yellow-400"></i>);
      } else {
        stars.push(<i key={i} className="far fa-star text-yellow-400"></i>);
      }
    }
    return stars;
  };

  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
        <p className="text-muted-foreground mt-4">Carregando avaliações...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header com nota geral */}
      <div className="text-center">
        <a
          href={googleProfileLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block hover:opacity-80 transition-opacity"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <img
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
              alt="Google"
              className="h-6"
            />
            <span className="text-2xl font-bold text-gray-700">Avaliações</span>
          </div>
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="text-4xl font-bold text-primary">{rating.toFixed(1)}</span>
            <div className="flex gap-1">
              {renderStars(rating)}
            </div>
          </div>
          <p className="text-muted-foreground">
            Baseado em {totalReviews} {totalReviews === 1 ? 'avaliação' : 'avaliações'}
          </p>
        </a>
      </div>

      {/* Carrossel de reviews */}
      <div className="relative">
        <div
          className="overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onClick={() => setIsPaused(!isPaused)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 px-4"
              >
                <div className="card-elevated hover:shadow-xl transition-shadow max-w-2xl mx-auto">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-user text-primary text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{review.author}</h4>
                      <div className="flex gap-1">
                        {renderStars(review.rating)}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-base leading-relaxed mb-4 min-h-[80px]">
                    "{review.text}"
                  </p>
                  <p className="text-sm text-muted-foreground">{review.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Setas de navegação */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            prevSlide();
          }}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-50 text-primary rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all hover:scale-110 z-10"
          aria-label="Avaliação anterior"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-50 text-primary rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all hover:scale-110 z-10"
          aria-label="Próxima avaliação"
        >
          <i className="fas fa-chevron-right"></i>
        </button>

        {/* Indicadores (dots) */}
        <div className="flex justify-center gap-2 mt-6">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-primary w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Ir para avaliação ${index + 1}`}
            />
          ))}
        </div>

        {/* Indicador de pausa/play */}
        <div className="text-center mt-4">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <i className={`fas ${isPaused ? 'fa-pause' : 'fa-play'} text-xs`}></i>
            <span>{isPaused ? 'Pausado' : 'Reproduzindo automaticamente'}</span>
          </div>
        </div>
      </div>

      {/* Link para ver todas */}
      <div className="text-center pt-4">
        <a
          href={googleProfileLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
        >
          Ver todas as avaliações no Google
          <i className="fas fa-external-link-alt text-sm"></i>
        </a>
      </div>
    </div>
  );
};

export default GoogleReviews;
