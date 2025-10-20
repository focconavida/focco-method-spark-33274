import { useEffect, useState } from 'react';

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

  // Place ID do Google (extraído do link)
  const placeId = '0x9bd94f894260dd:0xe9a65081321b28f7';

  // Link do perfil do Google
  const googleProfileLink = 'https://maps.app.goo.gl/6mLXML44sgmziWrL8';

  useEffect(() => {
    // Por enquanto, vamos usar reviews estáticas até configurar a API
    // Essas serão substituídas por reviews reais da API do Google
    const mockReviews: Review[] = [
      {
        author: "Cliente 1",
        rating: 5,
        text: "Experiência transformadora! A Valéria é uma profissional excepcional.",
        time: "2 semanas atrás"
      },
      {
        author: "Cliente 2",
        rating: 5,
        text: "O Método FOCCO mudou minha vida. Recomendo muito!",
        time: "1 mês atrás"
      },
      {
        author: "Cliente 3",
        rating: 5,
        text: "Excelente trabalho! Consegui clareza e foco que eu precisava.",
        time: "2 meses atrás"
      }
    ];

    // Simular loading
    setTimeout(() => {
      setReviews(mockReviews);
      setRating(5.0);
      setTotalReviews(mockReviews.length);
      setLoading(false);
    }, 500);
  }, []);

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

      {/* Lista de reviews */}
      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="card-elevated hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="fas fa-user text-primary text-xl"></i>
              </div>
              <div>
                <h4 className="font-semibold">{review.author}</h4>
                <div className="flex gap-1">
                  {renderStars(review.rating)}
                </div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-3">
              "{review.text}"
            </p>
            <p className="text-xs text-muted-foreground">{review.time}</p>
          </div>
        ))}
      </div>

      {/* Link para ver todas */}
      <div className="text-center">
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
