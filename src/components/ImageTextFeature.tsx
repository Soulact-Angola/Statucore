import React, { useId } from "react";
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

  // Id único por bloco (os ":" do useId partem o seletor CSS)
  const uid = useId().replace(/:/g, "");
  const anchorId = `image-text-${uid}`;

  // Imagem e texto entram de lados opostos, conforme a posição da imagem
  const imageAos = imagePosition === "right" ? "fade-left" : "fade-right";
  const textAos = imagePosition === "right" ? "fade-right" : "fade-left";

  const aos = (type: string, delay = 0) => ({
    "data-aos": type,
    "data-aos-anchor": `#${anchorId}`,
    "data-aos-delay": delay,
    "data-aos-duration": 1200,
    "data-aos-easing": "ease-out-cubic",
  });

  return (
    <section className="w-full py-16 md:py-24 bg-white overflow-hidden">
      <div className=" mx-auto px-6 md:px-12">
        <div
          id={anchorId}
          className={`flex flex-col lg:flex-row items-center justify-center gap-[24px] ${
            imagePosition === "left" ? "lg:flex-row-reverse" : ""
          }`}
        >
          <div className="w-full lg:flex-1 space-y-4 m-0  max-w-[411px]">
            {tag && (
              <span
                className="block text-xs md:text-sm lg:text-[24px] font-semibold tracking-wider text-[#0027B0] uppercase m-0"
                {...aos(textAos)}
              >
                {t(tag)}
              </span>
            )}
            <h2
              className="text-3xl sm:text-4xl lg:text-[48px] font-semibold text-[#002341] leading-tight tracking-tight m-0"
              {...aos(textAos, 150)}
            >
              {typeof title === "string" ? t(title) : title}
            </h2>
            <p
              className=" text-[#636364] text-sm md:text-base lg:text-[18px] leading-relaxed pt-2 m-0 max-w-xl"
              {...aos(textAos, 300)}
            >
              {t(description)}
            </p>
          </div>

          {/* Bloco da Imagem com largura fixa de 592px e altura de 599px em desktop */}
          <div
            className="w-full lg:w-[592px] flex-shrink-0 m-0"
            {...aos(imageAos)}
          >
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
