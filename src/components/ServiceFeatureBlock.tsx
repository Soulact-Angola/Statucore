import { useTranslation } from "react-i18next";

interface BenefitItem {
  title: string;
  description?: string;
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
  const { t } = useTranslation();
  return (
    <section className="w-full py-16 md:py-24 bg-white" data-aos="fade-up">
      {/* Bloco Superior (Com limite de largura e padding lateral) */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20">
        {/* Título Principal da Secção (Opcional) */}
        {sectionTitle && (
          <div className="text-center">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-[#0B1B3D] tracking-tight m-0">
              {t(sectionTitle)}
            </h2>
          </div>
        )}

        {/* Bloco Superior: Texto e imagem com gap exato de 22px */}
        <div
          className={`grid grid-cols-1 gap-y-12 lg:gap-[22px] lg:justify-center items-center ${
            imagePosition === "left"
              ? "lg:grid-cols-[480px_413px]"
              : "lg:grid-cols-[413px_480px]"
          }`}
        >
          {/* Coluna da Imagem */}
          <div
            className={`flex ${
              imagePosition === "left" ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl w-full max-w-[480px] aspect-square m-0">
              <img
                src={imageSrc}
                alt={t(imageAlt)}
                className="w-full h-full object-cover block m-0"
              />
            </div>
          </div>

          {/* Coluna de Texto */}
          <div
            className={`flex flex-col justify-center space-y-4 m-0 p-0 lg:max-w-[413px] ${
              imagePosition === "left" ? "lg:order-2" : "lg:order-1"
            }`}
          >
            <h3 className="text-3xl md:text-4xl lg:text-[48px] font-semibold text-[#002341] leading-tight m-0 p-0">
              {t(heading)}
            </h3>

            <p className="font-inter text-slate-500 text-xs md:text-sm leading-relaxed max-w-sm m-0 p-0">
              {t(description)}
            </p>
          </div>
        </div>
      </div>

      {/* LINHA DE LARGURA TOTAL (De ponta a ponta do ecrã) */}
      {benefitsList && benefitsList.length > 0 && (
        <div className="w-full border-b border-[#DFE3E6] my-16 md:my-24" />
      )}

      {/* Bloco Inferior: Benefícios (Com limite de largura e padding lateral restaurados) */}
      {benefitsList && benefitsList.length > 0 && (
        <div
          className="px-6 md:px-12 lg:px-[112px] max-w-7xl"
          data-aos="fade-up"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h3 className="font-geist text-3xl md:text-4xl lg:text-[48px] font-bold text-[#000000] m-0">
                {t(benefitsTitle)}
              </h3>
            </div>

            <div className="lg:col-span-8 space-y-6">
              <div className="space-y-6">
                {benefitsList.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-5 pb-6 mb-[20px] border-b border-[#DFE3E6] w-full lg:max-w-[480px] m-0"
                  >
                    {/* Círculo com o Número */}
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold mt-0.5">
                      {index + 1}
                    </div>

                    {/* Bloco de Texto */}
                    <div className="space-y-1 w-full m-0">
                      <h4 className="font-poppins font-medium text-[#000000] text-base lg:text-[21.9px] m-0">
                        {t(item.title)}
                      </h4>
                      <p className="font-poppins text-[#474747] text-xs md:text-sm lg:text-[16px] leading-relaxed m-0">
                        {t(item.description ?? "")}
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
                    {t(ctaText)}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
