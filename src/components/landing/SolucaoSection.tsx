/**
 * SolucaoSection Component - Método FOCCO adaptado
 * Mostra como o método resolve as dores da persona
 */

interface SolucaoSectionProps {
  titulo: string;
  subtitulo: string;
  beneficios: {
    icon: string;
    text: string;
  }[];
  textoFinal?: string;
}

export const SolucaoSection = ({ titulo, subtitulo, beneficios, textoFinal }: SolucaoSectionProps) => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Título */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {titulo}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {subtitulo}
          </p>
        </div>

        {/* Lista de Benefícios */}
        <div className="max-w-4xl mx-auto space-y-4">
          {beneficios.map((beneficio, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:border-primary transition-all hover:shadow-md group"
            >
              {/* Ícone */}
              <div className="text-3xl flex-shrink-0 group-hover:scale-110 transition-transform">
                {beneficio.icon}
              </div>

              {/* Texto */}
              <p className="text-lg font-semibold leading-relaxed pt-1">
                {beneficio.text}
              </p>
            </div>
          ))}
        </div>

        {/* Texto Final */}
        {textoFinal && (
          <div className="text-center max-w-3xl mx-auto mt-12">
            <p className="text-xl font-semibold text-primary">
              {textoFinal}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
