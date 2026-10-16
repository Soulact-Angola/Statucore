import React from "react";
import { useTranslation } from "react-i18next";

interface ImageTextFeatureProps {
  tag?: string;
  title: string | React.ReactNode;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
}

export default function ImageTextFeature({
  tag,
  title,
  description,
  imageSrc,
  imageAlt = "Imagem ilustrativa",
  imagePosition = "right",
}: ImageTextFeatureProps) {
  const { t } = useTranslation();
  return (
    <section className="w-full py-16 md:py-24 bg-white overflow-hidden">
      <div className=" mx-auto px-6 md:px-12">
        <div
          className={`flex flex-col lg:flex-row items-center justify-center gap-[24px] ${
            imagePosition === "left" ? "lg:flex-row-reverse" : ""
          }`}
        >
          <div className="w-full lg:flex-1 space-y-4 m-0  max-w-[411px]">
            {tag && (
              <span className="text-xs md:text-sm lg:text-[24px] font-semibold tracking-wider text-[#0027B0] uppercase m-0">
                {t(tag)}
              </span>
            )}
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-semibold text-[#002341] leading-tight tracking-tight m-0">
              {typeof title === "string" ? t(title) : title}
            </h2>
            <p className=" text-[#636364] text-sm md:text-base lg:text-[18px] leading-relaxed pt-2 m-0 max-w-xl">
              {t(description)}
            </p>
          </div>

          {/* Bloco da Imagem com largura fixa de 592px e altura de 599px em desktop */}
          <div className="w-full lg:w-[592px] flex-shrink-0 m-0">
            <div className="relative w-full aspect-[4/3] md:aspect-[1/1] lg:aspect-auto lg:h-[599px] overflow-hidden rounded-3xl shadow-sm">
              <img
                src={imageSrc}
                alt={t(imageAlt)}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
