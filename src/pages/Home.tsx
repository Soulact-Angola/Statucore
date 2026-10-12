import AboutSummary from "../components/AboutSummary";
import FeatureCards from "../components/FeatureCard";
import OurServicesSection from "../components/OurServicesSection";
import ServiceFeatureBlock from "../components/ServiceFeatureBlock";

export default function Home() {
  const mspBenefits = [
    {
      title: "Monitorização 24/7",
      description:
        "Acompanhamento contínuo dos seus sistemas para identificar problemas antes que afetem o negócio.",
    },
    {
      title: "Manutenção proativa",
      description:
        "Correção de falhas e atualizações de segurança sem interrupções.",
    },
    {
      title: "Suporte especializado",
      description:
        "Equipa técnica pronta para resolver incidentes rapidamente.",
    },
    {
      title: "Gestão contínua",
      description:
        "Alinhamento técnico e de infraestrutura com os objetivos da empresa.",
    },
  ];
  return (
    <>
      <section className="relative w-full h-[85vh] min-h-[550px] max-h-[800px] flex items-center overflow-hidden bg-slate-950">
        <img
          src="/home.png"
          alt="Tecnologia e Serviços"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-slate-950/45 mix-blend-multiply" />
        <div className="absolute inset-0 bg-blue-950/30" />

        <div className="relative z-10 container mx-auto  px-6 md:px-12 lg:px-28">
          <div className="max-w-xl space-y-6" data-aos="fade-up">
            <h1 className="font-poppins text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight">
              Tecnologia &amp; <br />
              Serviços
            </h1>

            <p className="font-inter text-slate-200 text-lg sm:text-xl font-normal tracking-wide">
              O núcleo da sua operação tecnológica
            </p>

            <div className="pt-2">
              <button
                type="button"
                className="font-inter inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-medium text-base px-7 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 cursor-pointer"
              >
                Falar com um especialista
              </button>
            </div>
          </div>
        </div>
      </section>

      <AboutSummary variant="home" />

      <h1
        className="text-[#012120] lg:text-[48px] font-semibold text-3xl font-bold text-center mb-8"
        data-aos="fade-up"
      >
        Destaques
      </h1>
      <FeatureCards variant="home" />

      <OurServicesSection />

      <section className="w-full bg-white py-16">
        {/* Bloco 1: Serviços Geridos / MSP */}
        <ServiceFeatureBlock
          sectionTitle="Serviços geridos / MSP"
          heading="A sua equipa cuida do negócio. Nós cuidamos da tecnologia."
          description="Assumimos a gestão completa e proativa da sua infraestrutura e dos seus serviços de TI, garantindo alta disponibilidade, manutenção e suporte ininterruptos."
          imageSrc="/1.png"
          imageAlt="Equipa de TI a monitorizar sistemas"
          imagePosition="right"
          benefitsTitle="Benefícios"
          benefitsList={mspBenefits}
          ctaText="Quero gerir melhor a minha TI"
        />

        {/* Bloco 2: Monitorização 24/7 (Com imagem invertida à esquerda) */}
        <ServiceFeatureBlock
          heading="Os seus sistemas não param. O nosso acompanhamento também não."
          description="Garantimos a gestão próxima da sua infraestrutura e dos seus serviços de TI, assegurando alta disponibilidade, manutenção e suporte especializado."
          imageSrc="/1.png"
          imageAlt="Monitorização de servidores"
          imagePosition="left"
          benefitsTitle="Pequenos destaques"
          benefitsList={[
            {
              title: "Monitorização contínua",
              description:
                "Acompanhamento em tempo real de toda a infraestrutura.",
            },
            {
              title: "Alertas em tempo real",
              description: "Identificação imediata de comportamentos anómalos.",
            },
            {
              title: "Resposta proativa",
              description:
                "Resolução célere para impedir problemas antes de se tornarem crises.",
            },
          ]}
        />
      </section>
    </>
  );
}
