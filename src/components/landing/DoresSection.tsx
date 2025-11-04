/**
 * DoresSection Component - "Você se sente assim?"
 * Lista as dores específicas da persona
 */

interface Dor {
  icon: string;
  titulo: string;
  descricao: string;
}

interface DoresSectionProps {
  titulo: string;
  subtitulo?: string;
  dores: Dor[];
  textoFinal?: string;
}

export const DoresSection = ({ titulo, subtitulo, dores, textoFinal }: DoresSectionProps) => {
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

        {/* Grid de Dores */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {dores.map((dor, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl border-2 border-border hover:border-primary transition-all hover:shadow-lg group"
            >
              {/* Ícone */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {dor.icon}
              </div>

              {/* Título */}
              <h3 className="text-xl font-bold mb-3">
                {dor.titulo}
              </h3>

              {/* Descrição */}
              <p className="text-muted-foreground leading-relaxed">
                {dor.descricao}
              </p>
            </div>
          ))}
        </div>

        {/* Texto Final */}
        {textoFinal && (
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-lg md:text-xl font-semibold text-foreground/90 leading-relaxed">
              {textoFinal}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
