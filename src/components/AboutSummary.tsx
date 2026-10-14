import React from "react";

// Tipagem para os dados de cada variação
interface SummaryContentItem {
  title: React.ReactNode;
  paragraphs: string[];
  imageSrc: string;
  imageAlt: string;
}

// Tipagem das chaves/páginas disponíveis (pode adicionar mais conforme criar novas)
export type SummaryVariant = "home" | "about" | "services";

// Mapeamento dos conteúdos tipado
const summaryData: Record<SummaryVariant, SummaryContentItem> = {
  home: {
    title: (
      <>
        A sua tecnologia. <br />
        O nosso <br />
        compromisso.
      </>
    ),
    paragraphs: [
      "Da infraestrutura à cloud, da segurança ao suporte técnico, disponibilizamos soluções pensadas para tornar a tecnologia da sua empresa mais segura, estável e eficiente.",
      "Acompanhamos o seu negócio de forma contínua, identificando problemas antes que eles afetem a sua operação.",
    ],
    imageSrc: "/1.png",
    imageAlt: "Profissionais trabalhando com tecnologia em escritório",
  },
  about: {
    title: (
      <>
        Somos o parceiro
        <br /> tecnológico da
        <br /> sua empresa.
      </>
    ),
    paragraphs: [
      "Somos uma empresa angolana de tecnologia e serviços, dedicada a ajudar organizações a construir, gerir e proteger os seus ambientes tecnológicos.",
      "Atuamos em diferentes áreas das tecnologias de informação, desde a infraestrutura e os serviços cloud até ao suporte técnico, à monitorização e à cibersegurança..",
      "Mais do que implementar soluções, procuramos compreender os desafios de cada empresa, identificar oportunidades de melhoria e disponibilizar o suporte necessário para manter as operações a funcionar.",
    ],
    imageSrc: "/2.jpg",
    imageAlt: "Equipe de desenvolvimento",
  },
  services: {
    title: (
      <>
        Soluções sob medida <br />
        para a sua <br />
        operação.
      </>
    ),
    paragraphs: ["Texto da página de serviços...", "Segundo parágrafo..."],
    imageSrc: "/services-img.png",
    imageAlt: "Infraestrutura tecnológica",
  },
};

interface AboutSummaryProps {
  variant?: SummaryVariant;
}

export default function AboutSummary({ variant = "home" }: AboutSummaryProps) {
  const content = summaryData[variant] || summaryData.home;

  return (
    <section className="w-full bg-white py-16 md:py-24" data-aos="fade-up">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center">
          <div className="w-full flex justify-center">
            <div className="relative w-full max-w-lg aspect-[4/3] md:aspect-[1/1] overflow-hidden rounded-3xl shadow-sm">
              <img
                src={content.imageSrc}
                alt={content.imageAlt}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          <div className="space-y-6 lg:max-w-[413px]">
            <h2 className="text-3xl sm:text-4xl md:text-[2.6rem] lg:text-[48px] font-semibold text-[#002341] leading-[1.15] tracking-tight">
              {content.title}
            </h2>

            <div
              style={{ lineHeight: "1.4" }}
              className="space-y-4 font-normal text-[#636364] text-base md:text-lg lg:text-[18px] leading-relaxed"
            >
              {content.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
