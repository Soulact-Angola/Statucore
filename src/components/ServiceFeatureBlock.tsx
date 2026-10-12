import React from "react";

interface BenefitItem {
  title: string;
  description: string;
}

interface ServiceFeatureBlockProps {
  sectionTitle?: string;
  heading: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  benefitsTitle?: string;
  benefitsList?: BenefitItem[];
  ctaText?: string;
  ctaHref?: string;
}

export default function ServiceFeatureBlock({
  sectionTitle,
  heading,
  description,
  imageSrc,
  imageAlt,
  imagePosition = "right",
  benefitsTitle = "Benefícios",
  benefitsList = [],
  ctaText,
  ctaHref = "#",
}: ServiceFeatureBlockProps) {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20">
        {/* Título Principal da Secção (Opcional) */}
        {sectionTitle && (
          <div className="text-center">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-[#0B1B3D] tracking-tight m-0">
              {sectionTitle}
            </h2>
          </div>
        )}

        {/* Bloco Superior: Grelha com gap exato de 22px */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-[22px] items-center">
          {/* Se imagePosition for 'left', a imagem aparece primeiro e alinhada à direita */}
          {imagePosition === "left" && (
            <div className="lg:col-span-6 flex lg:justify-end">
              <div className="relative rounded-3xl overflow-hidden shadow-xl w-full max-w-[480px] aspect-square m-0">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="w-full h-full object-cover block m-0"
                />
              </div>
            </div>
          )}

          {/* Coluna de Texto Superior com margens limpas (0px) */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-4 m-0 p-0">
            <h3 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1B3D] leading-tight m-0 p-0">
              {heading}
            </h3>

            <p className="font-inter text-slate-500 text-xs md:text-sm leading-relaxed max-w-sm m-0 p-0">
              {description}
            </p>
          </div>

          {/* Se imagePosition for 'right' (padrão), FORÇAMOS A DIV PAI a colar a imagem à ESQUERDA */}
          {imagePosition === "right" && (
            <div className="lg:col-span-6 flex justify-start">
              <div className="relative rounded-3xl overflow-hidden shadow-xl w-full max-w-[480px] aspect-square m-0">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="w-full h-full object-cover block m-0"
                />
              </div>
            </div>
          )}
        </div>

        {/* Bloco Inferior: Título Benefícios à Esquerda e Lista com borda inferior à Direita */}
        {benefitsList && benefitsList.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-4">
            <div className="lg:col-span-4">
              <h3 className="font-poppins text-3xl md:text-4xl font-bold text-[#0B1B3D] m-0">
                {benefitsTitle}
              </h3>
            </div>

            <div className="lg:col-span-8 space-y-6">
              <div className="space-y-6">
                {benefitsList.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-5 pb-6 border-b border-slate-100 last:border-none m-0"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold mt-0.5">
                      {index + 1}
                    </div>
                    <div className="space-y-1 m-0">
                      <h4 className="font-poppins font-bold text-slate-900 text-base m-0">
                        {item.title}
                      </h4>
                      <p className="font-inter text-slate-500 text-xs md:text-sm leading-relaxed m-0">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {ctaText && (
                <div className="pt-2">
                  <a
                    href={ctaHref}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 transition-colors shadow-sm"
                  >
                    {ctaText}
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
