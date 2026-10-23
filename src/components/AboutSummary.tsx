import { useTranslation } from "react-i18next";

// Tipagem para os dados de cada variação
interface SummaryContentItem {
  title: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt: string;
}

// Tipagem das chaves/páginas disponíveis (pode adicionar mais conforme criar novas)
export type SummaryVariant =
  | "home"
  | "about"
  | "servicesInfra"
  | "servicesSupport"
  | "servicesCloud"
  | "servicesSecurity";

// Mapeamento dos conteúdos tipado
const summaryData: Record<SummaryVariant, SummaryContentItem> = {
  home: {
    title: "A sua tecnologia. O nosso compromisso.",
    paragraphs: [
      "Da infraestrutura à cloud, da segurança ao suporte técnico, disponibilizamos soluções pensadas para tornar a tecnologia da sua empresa mais segura, estável e eficiente.",
      "Acompanhamos o seu negócio de forma contínua, identificando problemas antes que eles afetem a sua operação.",
    ],
    imageSrc: "/1.png",
    imageAlt: "Profissionais trabalhando com tecnologia em escritório",
  },
  about: {
    title: "Somos o parceiro tecnológico da sua empresa.",
    paragraphs: [
      "Somos uma empresa angolana de tecnologia e serviços, dedicada a ajudar organizações a construir, gerir e proteger os seus ambientes tecnológicos.",
      "Atuamos em diferentes áreas das tecnologias de informação, desde a infraestrutura e os serviços cloud até ao suporte técnico, à monitorização e à cibersegurança..",
      "Mais do que implementar soluções, procuramos compreender os desafios de cada empresa, identificar oportunidades de melhoria e disponibilizar o suporte necessário para manter as operações a funcionar.",
    ],
    imageSrc: "/2.png",
    imageAlt: "Equipe de desenvolvimento",
  },
  servicesInfra: {
    title:
      "Cada problema técnico resolvido é um obstáculo a menos para a sua equipa.",
    paragraphs: [
      "Falhas de acesso, dificuldades com aplicações, problemas de conectividade ou avarias nos equipamentos podem comprometer o ritmo de trabalho.",
      "Um serviço de suporte estruturado permite registar pedidos, organizar prioridades e acompanhar cada ocorrência de forma consistente",
    ],
    imageSrc: "/operacao.png",
    imageAlt: "Infraestrutura tecnológica",
  },

  servicesSupport: {
    title:
      "Cada problema técnico resolvido é um obstáculo a menos para a sua equipa.",
    paragraphs: [
      "Falhas de acesso, dificuldades com aplicações, problemas de conectividade ou avarias nos equipamentos podem comprometer o ritmo de trabalho.",
      "Um serviço de suporte estruturado permite registar pedidos, organizar prioridades e acompanhar cada ocorrência de forma consistente.",
    ],
    imageSrc: "/tecnicoUrbano.png",
    imageAlt: "Infraestrutura tecnológica",
  },

  servicesCloud: {
    title: "A cloud deve adaptar-se à forma como a sua empresa trabalha.",
    paragraphs: [
      "As ferramentas digitais são fundamentais para a comunicação, a produtividade e a gestão da informação. No entanto, escolher as soluções certas e administrá-las corretamente exige planeamento.",
      "Apoiamos a sua empresa na implementação, migração e gestão de serviços cloud, considerando as necessidades dos utilizadores, os requisitos de segurança e os objetivos da organização.",
    ],
    imageSrc: "/nuvem.png",
    imageAlt: "Infraestrutura tecnológica",
  },

  servicesSecurity: {
    title: "A segurança da informação começa com as medidas certas.",
    paragraphs: [
      "Os sistemas, os equipamentos e os dados da sua empresa são recursos essenciais para a continuidade da operação.",
      "Ameaças digitais, acessos indevidos e configurações inadequadas podem comprometer a informação e afetar o funcionamento dos serviços",
      "Apoiamos a implementação de medidas de cibersegurança que ajudam a identificar riscos, reforçar a proteção e melhorar o controlo sobre os recursos tecnológicos.",
    ],
    imageSrc: "/seguranca.png",
    imageAlt: "Infraestrutura tecnológica",
  },
};

interface AboutSummaryProps {
  variant?: SummaryVariant;
}

export default function AboutSummary({ variant = "home" }: AboutSummaryProps) {
  const { t } = useTranslation();
  const content = summaryData[variant] || summaryData.home;

  return (
    <section
      className="w-full bg-white py-10 sm:py-14 md:py-24 overflow-hidden"
      data-aos="fade-up"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-6 items-center">
          <div className="w-full flex justify-center">
            <div className="relative w-full max-w-md sm:max-w-lg aspect-[4/3] md:aspect-[1/1] overflow-hidden rounded-2xl md:rounded-3xl shadow-sm">
              <img
                src={content.imageSrc}
                alt={t(content.imageAlt)}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          <div className="space-y-4 sm:space-y-5 md:space-y-6 w-full max-w-md sm:max-w-lg md:max-w-2xl mx-auto lg:mx-0 lg:max-w-[413px]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-semibold text-[#002341] leading-[1.15] tracking-tight break-words">
              {t(content.title)}
            </h2>

            <div
              style={{ lineHeight: "1.4" }}
              className="space-y-3 md:space-y-4 font-normal text-[#636364] text-sm sm:text-base md:text-lg lg:text-[18px] leading-relaxed"
            >
              {content.paragraphs.map((paragraph, index) => (
                <p key={index}>{t(paragraph)}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
