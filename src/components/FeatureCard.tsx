import React from "react";
import { useTranslation } from "react-i18next";

export interface FeatureCardItem {
  id?: string | number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export type FeatureCardsVariant = "home" | "about" | "services";

interface FeatureCardsProps {
  variant?: FeatureCardsVariant;
  items?: FeatureCardItem[];
}

// Mapeamento dos cards padrão com placeholders para os seus SVGs
const featureData: Record<FeatureCardsVariant, FeatureCardItem[]> = {
  home: [
    {
      id: 1,
      icon: (
        <svg
          className="w-9 h-9 text-slate-900"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M12 2v4m0 12v4M2 12h4m12 0h4" />
        </svg>
      ),
      title: "Disponibilidade",
      description:
        "Tecnologia preparada para estar disponível quando a sua empresa precisar.",
    },
    {
      id: 2,
      icon: (
        <svg
          className="w-9 h-9 text-slate-900"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: "Segurança",
      description:
        "Proteção dos seus sistemas, dados e utilizadores contra ameaças.",
    },
    {
      id: 3,
      icon: (
        <svg
          className="w-9 h-9 text-slate-900"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M3 18v-6a9 9 0 0118 0v6" />
        </svg>
      ),
      title: "Suporte",
      description:
        "Uma equipa especializada para resolver problemas e manter a sua operação ativa.",
    },
    {
      id: 4,
      icon: (
        <svg
          className="w-9 h-9 text-slate-900"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M23 6l-9.5 9.5-5-5L1 18" />
        </svg>
      ),
      title: "Escalabilidade",
      description:
        "Soluções que acompanham o crescimento e as necessidades do seu negócio.",
    },
  ],
  about: [
    {
      id: 1,
      icon: (
        <svg
          className="w-9 h-9 text-slate-900"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M12 2v4m0 12v4M2 12h4m12 0h4" />
        </svg>
      ),
      title: "Disponibilidade",
      description:
        "Tecnologia preparada para estar disponível quando a sua empresa precisar.",
    },
    {
      id: 2,
      icon: (
        <svg
          className="w-9 h-9 text-slate-900"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: "Segurança",
      description:
        "Proteção dos seus sistemas, dados e utilizadores contra ameaças.",
    },
    {
      id: 3,
      icon: (
        <svg
          className="w-9 h-9 text-slate-900"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M3 18v-6a9 9 0 0118 0v6" />
        </svg>
      ),
      title: "Suporte",
      description:
        "Uma equipa especializada para resolver problemas e manter a sua operação ativa.",
    },
    {
      id: 4,
      icon: (
        <svg
          className="w-9 h-9 text-slate-900"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M23 6l-9.5 9.5-5-5L1 18" />
        </svg>
      ),
      title: "Escalabilidade",
      description:
        "Soluções que acompanham o crescimento e as necessidades do seu negócio.",
    },
  ],
  services: [],
};

export default function FeatureCards({
  variant = "home",
  items,
}: FeatureCardsProps) {
  const { t } = useTranslation();
  const cardsList = items || featureData[variant] || featureData.home;

  return (
    <section className="w-full bg-white py-12 md:py-16" data-aos="fade-up">
      {/* 
        Utilizamos w-full para garantir largura total e px-28 (ou adaptável) 
        removendo o container fixo que limitava o crescimento horizontal com o zoom.
      */}
      <div className="w-full px-6 md:px-16 lg:px-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {cardsList.map((card, index) => (
            <div
              key={card.id || index}
              className="bg-[#F3F2F0] border-t-[3.5px] border-t-[#0049E3] rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-start w-full"
            >
              <div className="mb-5">{card.icon}</div>

              <h3 className="font-poppins lg:text-[24px] font-semibold text-[#012120] mb-3 tracking-tight">
                {t(card.title)}
              </h3>

              <p
                style={{ lineHeight: "1.4" }}
                className="text-[#474747] lg:text-[16px] font-normal text-sm leading-relaxed"
              >
                {t(card.description)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
