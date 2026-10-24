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
        <img
          src="svg.png"
          alt="svg icon"
          className="inset-0 w-[56px] h-[56px]"
        />
      ),
      title: "Disponibilidade",
      description:
        "Tecnologia preparada para estar disponível quando a sua empresa precisar.",
    },
    {
      id: 2,
      icon: (
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28 2.29602L49 11.7017V25.7017C49 32.1915 46.9949 38.1158 42.9847 43.4747C38.9744 48.8336 33.9796 52.2426 28 53.7017C22.0204 52.2426 17.0256 48.8336 13.0153 43.4747C9.00511 38.1158 7 32.1915 7 25.7017V11.7017L28 2.29602Z"
            fill="black"
          />
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
          width="47"
          height="42"
          viewBox="0 0 47 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M44.3007 21.546C44.3007 18.3369 43.7352 15.4202 42.6043 12.796C41.4734 10.1718 39.9241 7.89289 37.9563 5.95934C35.9886 4.02578 33.7462 2.54956 31.2293 1.53067C28.7124 0.511781 26.0696 0.0015591 23.3007 3.5461e-06C20.5318 -0.00155201 17.9068 0.50867 15.4257 1.53067C12.9446 2.55267 10.7022 4.011 8.69867 5.90567C6.69511 7.80034 5.12711 10.0792 3.99467 12.7423C2.86222 15.4054 2.29678 18.3766 2.29833 21.6557C1.56878 22.0197 1.00333 22.5664 0.602 23.296C0.200667 24.0256 0 24.8274 0 25.7017V30.296C0 31.6089 0.455778 32.7211 1.36733 33.6327C2.27889 34.5442 3.35456 35 4.59433 35H7V20.7807C7 18.5204 7.41922 16.4057 8.25767 14.4363C9.09611 12.467 10.2628 10.7349 11.7577 9.24C13.2526 7.74511 14.9847 6.57845 16.954 5.74C18.9233 4.90156 21.0381 4.48234 23.2983 4.48234C25.5586 4.48234 27.6733 4.90156 29.6427 5.74C31.612 6.57845 33.3441 7.74511 34.839 9.24C36.3339 10.7349 37.5006 12.467 38.339 14.4363C39.1774 16.4057 39.5967 18.5204 39.5967 20.7807V37.296H21.0023V42H39.5967C40.9096 42 42.0218 41.5442 42.9333 40.6327C43.8449 39.7211 44.3007 38.6089 44.3007 37.296V34.4517C44.9571 34.0877 45.5039 33.5774 45.941 32.921C46.3781 32.2646 46.5967 31.4992 46.5967 30.625V25.2653C46.5967 24.4627 46.3781 23.7331 45.941 23.0767C45.5039 22.4202 44.9571 21.91 44.3007 21.546ZM14.0047 23.296C14.0047 22.6396 14.2232 22.0928 14.6603 21.6557C15.0974 21.2186 15.6442 21 16.3007 21C16.9571 21 17.5039 21.2186 17.941 21.6557C18.3781 22.0928 18.5967 22.6396 18.5967 23.296C18.5967 23.9524 18.3781 24.5179 17.941 24.9923C17.5039 25.4668 16.9571 25.704 16.3007 25.704C15.6442 25.704 15.0974 25.4668 14.6603 24.9923C14.2232 24.5179 14.0047 23.9524 14.0047 23.296ZM28.0047 23.296C28.0047 22.6396 28.2232 22.0928 28.6603 21.6557C29.0974 21.2186 29.6442 21 30.3007 21C30.9571 21 31.5039 21.2186 31.941 21.6557C32.3781 22.0928 32.5967 22.6396 32.5967 23.296C32.5967 23.9524 32.3781 24.5179 31.941 24.9923C31.5039 25.4668 30.9571 25.704 30.3007 25.704C29.6442 25.704 29.0974 25.4668 28.6603 24.9923C28.2232 24.5179 28.0047 23.9524 28.0047 23.296ZM37.3007 18.704C36.9367 16.5169 36.0982 14.5297 34.7853 12.7423C33.4724 10.955 31.8321 9.55111 29.8643 8.53067C27.8966 7.51023 25.7452 7 23.4103 7C21.6603 7 19.9103 7.34611 18.1603 8.03834C16.4103 8.73056 14.8423 9.73311 13.4563 11.046C12.0703 12.3589 10.9947 13.9448 10.2293 15.8037C9.464 17.6626 9.15444 19.7587 9.30067 22.092C12.2173 20.8522 14.6969 19.0291 16.7393 16.6227C18.7818 14.2162 20.0947 11.445 20.678 8.309C21.6984 10.3514 23.0471 12.1559 24.724 13.7223C26.4009 15.2888 28.315 16.5099 30.4663 17.3857C32.6177 18.2614 34.8966 18.6993 37.303 18.6993L37.3007 18.704Z"
            fill="black"
          />
        </svg>
      ),
      title: "Suporte",
      description:
        "Uma equipa especializada para resolver problemas e manter a sua operação ativa.",
    },
    {
      id: 4,
      icon: (
        <img
          src="svg2.png"
          alt="svg icon"
          className="inset-0 w-[56px] h-[56px]"
        />
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
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28 2.2959L49 11.7016V25.7016C49 32.1913 46.9949 38.1157 42.9847 43.4746C38.9744 48.8335 33.9796 52.2425 28 53.7016C22.0204 52.2425 17.0256 48.8335 13.0153 43.4746C9.00511 38.1157 7 32.1913 7 25.7016V11.7016L28 2.2959Z"
            fill="black"
          />
        </svg>
      ),
      title: "Confiança",
      description:
        "Construímos relações transparentes e responsáveis, com foco nas necessidades de cada cliente.",
    },
    {
      id: 2,
      icon: (
        <img
          src="svg.png"
          alt="svg icon"
          className="inset-0 w-[56px] h-[56px]"
        />
      ),
      title: "Compromisso",
      description:
        "Assumimos cada desafio com seriedade, procurando respostas adequadas e resultados concretos.",
    },
    {
      id: 3,
      icon: (
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M49 28.546C49 25.3369 48.4346 22.4202 47.3037 19.796C46.1728 17.1718 44.6235 14.8929 42.6557 12.9593C40.6879 11.0258 38.4456 9.54956 35.9287 8.53067C33.4118 7.51178 30.7689 7.00156 28 7C25.2311 6.99845 22.6061 7.50867 20.125 8.53067C17.6439 9.55267 15.4016 11.011 13.398 12.9057C11.3945 14.8003 9.82645 17.0792 8.69401 19.7423C7.56156 22.4054 6.99612 25.3766 6.99767 28.6557C6.26812 29.0197 5.70267 29.5664 5.30134 30.296C4.90001 31.0256 4.69934 31.8274 4.69934 32.7017V37.296C4.69934 38.6089 5.15512 39.7211 6.06667 40.6327C6.97823 41.5442 8.0539 42 9.29367 42H11.6993V27.7807C11.6993 25.5204 12.1186 23.4057 12.957 21.4363C13.7955 19.467 14.9621 17.7349 16.457 16.24C17.9519 14.7451 19.684 13.5784 21.6533 12.74C23.6227 11.9016 25.7374 11.4823 27.9977 11.4823C30.2579 11.4823 32.3727 11.9016 34.342 12.74C36.3113 13.5784 38.0434 14.7451 39.5383 16.24C41.0332 17.7349 42.1999 19.467 43.0383 21.4363C43.8768 23.4057 44.296 25.5204 44.296 27.7807V44.296H25.7017V49H44.296C45.6089 49 46.7211 48.5442 47.6327 47.6327C48.5442 46.7211 49 45.6089 49 44.296V41.4517C49.6565 41.0877 50.2032 40.5774 50.6403 39.921C51.0774 39.2646 51.296 38.4992 51.296 37.625V32.2653C51.296 31.4627 51.0774 30.7331 50.6403 30.0767C50.2032 29.4202 49.6565 28.91 49 28.546ZM18.704 30.296C18.704 29.6396 18.9226 29.0928 19.3597 28.6557C19.7968 28.2186 20.3436 28 21 28C21.6565 28 22.2032 28.2186 22.6403 28.6557C23.0775 29.0928 23.296 29.6396 23.296 30.296C23.296 30.9524 23.0775 31.5179 22.6403 31.9923C22.2032 32.4668 21.6565 32.704 21 32.704C20.3436 32.704 19.7968 32.4668 19.3597 31.9923C18.9226 31.5179 18.704 30.9524 18.704 30.296ZM32.704 30.296C32.704 29.6396 32.9226 29.0928 33.3597 28.6557C33.7968 28.2186 34.3436 28 35 28C35.6565 28 36.2032 28.2186 36.6403 28.6557C37.0774 29.0928 37.296 29.6396 37.296 30.296C37.296 30.9524 37.0774 31.5179 36.6403 31.9923C36.2032 32.4668 35.6565 32.704 35 32.704C34.3436 32.704 33.7968 32.4668 33.3597 31.9923C32.9226 31.5179 32.704 30.9524 32.704 30.296ZM42 25.704C41.636 23.5169 40.7976 21.5297 39.4847 19.7423C38.1718 17.955 36.5315 16.5511 34.5637 15.5307C32.5959 14.5102 30.4446 14 28.1097 14C26.3597 14 24.6097 14.3461 22.8597 15.0383C21.1097 15.7306 19.5417 16.7331 18.1557 18.046C16.7697 19.3589 15.694 20.9448 14.9287 22.8037C14.1633 24.6626 13.8538 26.7587 14 29.092C16.9167 27.8522 19.3962 26.0291 21.4387 23.6227C23.4811 21.2162 24.794 18.445 25.3773 15.309C26.3978 17.3514 27.7465 19.1559 29.4233 20.7223C31.1002 22.2888 33.0143 23.5099 35.1657 24.3857C37.317 25.2614 39.5959 25.6993 42.0023 25.6993L42 25.704Z"
            fill="black"
          />
        </svg>
      ),
      title: "Melhoria contínua",
      description:
        "Procuramos evoluir os nossos conhecimentos, processos e soluções para acompanhar as necessidades do mercado.",
    },
    {
      id: 4,
      icon: (
        <img
          src="svg2.png"
          alt="svg icon"
          className="inset-0 w-[56px] h-[56px]"
        />
      ),
      title: "Proximidade",
      description:
        "Ouvimos, compreendemos e trabalhamos em conjunto com os nossos clientes para encontrar as melhores soluções.",
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
