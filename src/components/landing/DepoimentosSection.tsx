/**
 * DepoimentosSection Component
 * Depoimentos relevantes para a persona
 */

interface Depoimento {
  nome: string;
  profissao: string;
  depoimento: string;
  rating: number;
}

interface DepoimentosSectionProps {
  titulo: string;
  subtitulo?: string;
  depoimentos: Depoimento[];
}

export const DepoimentosSection = ({ titulo, subtitulo, depoimentos }: DepoimentosSectionProps) => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Título */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {titulo}
          </h2>
          {subtitulo && (
            <p className="text-lg text-muted-foreground">
              {subtitulo}
            </p>
          )}
        </div>

        {/* Grid de Depoimentos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {depoimentos.map((depoimento, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-2xl shadow-lg border border-border hover:border-primary transition-all hover:shadow-xl"
            >
              {/* Quote Icon */}
              <div className="text-5xl text-primary/20 mb-4">"</div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(depoimento.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">⭐</span>
                ))}
              </div>

              {/* Depoimento */}
              <p className="text-foreground mb-6 leading-relaxed italic">
                {depoimento.depoimento}
              </p>

              {/* Nome e Profissão */}
              <div className="border-t border-border pt-4">
                <p className="font-bold text-lg">{depoimento.nome}</p>
                <p className="text-sm text-muted-foreground">{depoimento.profissao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
