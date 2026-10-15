import React from "react";

export interface BenefitItem {
  number?: string | number;
  title: string;
  description: string;
}

export interface BenefitsSectionProps {
  title: string;
  items: BenefitItem[];
}

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({
  title,
  items,
}) => {
  return (
    <section
      className="w-full bg-white border-t border-[#DFE3E6] px-6 py-16 md:px-12 lg:px-28 md:py-24 text-[#0f172a]"
      data-aos="fade-up"
    >
      <div className="mx-auto">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[240px_minmax(0,1fr)] xl:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] xl:gap-4 items-start">
          {/* Coluna da Esquerda: Título Principal */}
          <div>
            <h2 className="text-3xl md:text-4xl xl:text-[48px] font-bold font-geist tracking-tight text-[#000000] sticky top-8">
              {title}
            </h2>
          </div>

          {/* Coluna da Direita: Lista de Benefícios */}
          <div className="flex flex-col">
            {items.map((item, index) => (
              <div
                key={index}
                className={`flex items-start gap-5 py-6 ${
                  index === 0 ? "pt-0" : ""
                }`}
              >
                {/* Círculo com o Número */}
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#131314] text-white flex items-center justify-center font-bold text-sm mt-0.5 shadow-sm">
                  {item.number ?? index + 1}
                </div>

                {/* Conteúdo do Benefício com a linha ajustada ao tamanho do texto */}
                <div className="flex-1">
                  <div
                    className={`inline-block w-fit max-w-full ${
                      index !== items.length - 1
                        ? "border-b border-[#DFE3E6] pb-6"
                        : ""
                    }`}
                  >
                    <h3 className="font-poppins text-base xl:text-[21px] font-medium text-[#000000] mb-1">
                      {item.title}
                    </h3>
                    <p className="font-poppins font-medium text-sm xl:text-[16px] text-[#474747] leading-relaxed xl:max-w-[532px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
