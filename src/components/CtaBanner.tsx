import React from "react";
import Button from "./Button"; // Importa o teu componente de botão existente

interface CtaBannerProps {
  title: string | React.ReactNode;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  buttonText: string;
  buttonHref: string;
}

export default function CtaBanner({
  title,
  description,
  imageSrc,
  imageAlt = "Imagem de fundo",
  buttonText,
  buttonHref,
}: CtaBannerProps) {
  return (
    <section
      className="relative w-full py-24 md:py-32 flex items-center justify-center overflow-hidden bg-slate-950 text-center"
      data-aos="fade-up"
    >
      {/* Imagem de Fundo */}
      <img
        src={imageSrc}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover object-center m-0"
      />

      {/* Overlay mais claro e suave */}
      <div className="absolute inset-0 bg-blue-950/50 mix-blend-multiply" />
      <div className="absolute inset-0 bg-slate-950/30" />

      {/* Conteúdo Centralizado */}
      <div className="relative z-10  mx-auto px-6 md:px-12 space-y-6 m-0">
        <h2
          style={{ lineHeight: "1.2" }}
          className=" text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-semibold text-white leading-tight tracking-tight m-0 pb-[24px] text-center lg:max-w-[1013px]"
        >
          {title}
        </h2>

        <p
          style={{ lineHeight: "1.2" }}
          className="font-inter text-white text-sm md:text-base lg:text-[24px] lg:max-w-[731px] mx-auto leading-relaxed m-0"
        >
          {description}
        </p>

        <div className="pt-4 m-0">
          <Button title={buttonText} href={buttonHref} />
        </div>
      </div>
    </section>
  );
}
