import React from "react";
import Button from "./Button"; // Importa o teu componente de botão

interface HeroButton {
  title: string;
  href: string;
}

interface HeroBannerProps {
  title: string | React.ReactNode;
  subtitle: string;
  imageSrc: string;
  imageAlt?: string;
  buttons?: HeroButton[]; // Array de botões (funciona com 1 ou mais)
}

export default function HeroBanner({
  title,
  subtitle,
  imageSrc,
  imageAlt = "Tecnologia e Serviços",
  buttons = [],
}: HeroBannerProps) {
  return (
    <section className="relative h-200 w-full py-34 flex items-center overflow-hidden bg-slate-950">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-slate-950/45 mix-blend-multiply" />
      <div className="absolute inset-0 bg-blue-950/30" />

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-30.5">
        <div className=" space-y-6" data-aos="fade-up">
          <h1 className="w-full font-poppins text-4xl sm:text-5xl md:text-6xl lg:text-[74px] font-bold text-white leading-[1.1] tracking-tight m-0 pb-4">
            {title}
          </h1>

          <p className="w-full text-[#FFFFFF] text-lg sm:text-xl lg:text-[24px] pb-12 font-normal tracking-wide m-0">
            {subtitle}
          </p>

          {buttons.length > 0 && (
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              {buttons.map((btn, index) => (
                <Button key={index} title={btn.title} href={btn.href} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
