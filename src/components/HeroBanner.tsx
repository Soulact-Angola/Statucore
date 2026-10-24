import React from "react";
import Button from "./Button";
import { useTranslation } from "react-i18next";

interface HeroButton {
  title: string;
  href: string;
}

interface HeroBannerProps {
  title: string | React.ReactNode;
  subtitle: string;
  imageSrc: string;
  imageAlt?: string;
  buttons?: HeroButton[];
  isHome?: boolean; // <--- Adicionamos esta prop opcional
}

export default function HeroBanner({
  title,
  subtitle,
  imageSrc,
  imageAlt = "Tecnologia e Serviços",
  buttons = [],
  isHome = false, // <--- Valor padrão como falso para as outras páginas
}: HeroBannerProps) {
  const { t } = useTranslation();

  return (
    <section className="relative flex min-h-[80svh] w-full items-center overflow-hidden bg-slate-950 py-16 sm:min-h-[85svh] sm:py-20 md:py-24 lg:h-200 lg:min-h-0 lg:py-34">
      <img
        src={imageSrc}
        alt={t(imageAlt)}
        // Aplicamos a classe e o estilo dinamicamente com base na prop 'isHome'
        className={`absolute inset-0 h-full w-full object-cover ${
          isHome ? "object-[95%_0%]" : "object-center"
        }`}
        style={
          isHome ? { transform: "scale(1.15) translateY(10%)" } : undefined
        }
      />

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-slate-950/35 to-slate-950/10" />

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-28">
        <div className="space-y-6" data-aos="fade-up">
          <h1 className="m-0 w-full pb-4 font-poppins text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[74px]">
            {typeof title === "string" ? t(title) : title}
          </h1>

          <p className="m-0 w-full pb-8 text-base font-normal tracking-wide text-[#FFFFFF] sm:pb-12 sm:text-xl lg:text-[24px]">
            {t(subtitle)}
          </p>

          {buttons.length > 0 && (
            <div className="flex flex-wrap items-center gap-3 pt-2 sm:gap-4">
              {buttons.map((btn, index) => (
                <Button
                  key={index}
                  title={t(btn.title)}
                  href={btn.href}
                  className={buttons.length === 2 ? "whitespace-nowrap" : ""}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
