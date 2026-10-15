import React from "react";

export interface SolutionCardItem {
  imageSrc: string;
  imageAlt?: string;
  title: string;
  description?: string; // Opcional: alguns cards têm parágrafo e outros não
}

export interface SolutionCardsSectionProps {
  title: string;
  subtitle?: string;
  cards: SolutionCardItem[];
}

export const SolutionCardsSection: React.FC<SolutionCardsSectionProps> = ({
  title,
  subtitle,
  cards,
}) => {
  return (
    <section
      className="w-full bg-white px-6 py-16 lg:px-28  md:py-24 text-[#0f172a]"
      data-aos="fade-up"
    >
      <div className="   mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-semibold tracking-tight text-[#002341] mb-3">
            {title}
          </h2>
          {subtitle && (
            <p className="text-[#636364] text-sm md:text-base lg:text-[18px] font-normal">
              {subtitle}
            </p>
          )}
        </div>

        {/* Grelha com os 4 Cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          data-aos="fade-up"
        >
          {cards.slice(0, 4).map((card, index) => (
            <div key={index} className="flex flex-col">
              {/* Contentor da Imagem do Card */}
              <div className="w-full h-64 sm:h-72 rounded-2xl overflow-hidden shadow-sm mb-4 bg-gray-100">
                <img
                  src={card.imageSrc}
                  alt={card.imageAlt || card.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Título do Card */}
              <h3 className="text-lg lg:text-[28px] font-bold text-[#002341] mb-2">
                {card.title}
              </h3>

              {/* Parágrafo Condicional (Renderizado apenas se fornecido) */}
              {card.description && (
                <p
                  style={{ lineHeight: "1.4" }}
                  className="text-xs sm:text-sm lg:text-[16px] text-[#636364] font-normal leading-relaxed"
                >
                  {card.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
