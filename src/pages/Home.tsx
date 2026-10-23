import { useTranslation } from "react-i18next";
import AboutSummary from "../components/AboutSummary";
import Button from "../components/Button";
import CtaBanner from "../components/CtaBanner";
import FeatureCards from "../components/FeatureCard";
import HeroBanner from "../components/HeroBanner";
import OurServicesSection from "../components/OurServicesSection";
import ServiceFeatureBlock from "../components/ServiceFeatureBlock";
import TargetAudienceSection from "../components/TargetAudienceSection";
import ParallaxSections from "../components/ParallaxSections";

export default function Home() {
  const { t } = useTranslation();
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
      <ParallaxSections />

      {/* <HeroBanner
        title={<span className="block max-w-xl">Tecnologia & Serviços</span>}
        subtitle="O núcleo da sua operação tecnológica"
        imageSrc="/home.png"
        isHome={true}
        buttons={[{ title: "Falar com um especialista", href: "/contact" }]}
      /> */}

      <AboutSummary variant="home" />

      <h1
        className="text-[#012120] lg:text-[48px] font-semibold text-3xl font-bold text-center mb-8"
        data-aos="fade-up"
      >
        {t("Destaques")}
      </h1>
      <FeatureCards variant="home" />

      <OurServicesSection />

      <section className="w-full bg-white ">
        <ServiceFeatureBlock
          sectionTitle="Serviços geridos / MSP"
          heading="A sua equipa cuida do negócio. Nós cuidamos da tecnologia."
          description="Assumimos a gestão completa e proativa da sua infraestrutura e dos seus serviços de TI, garantindo alta disponibilidade, manutenção e suporte ininterruptos."
          imageSrc="/servicosgeridos.png"
          imageAlt="Equipa de TI a monitorizar sistemas"
          imagePosition="right"
          benefitsTitle="Benefícios"
          benefitsList={mspBenefits}
          ctaText="Quero gerir melhor a minha TI"
        />

        <ServiceFeatureBlock
          sectionTitle="Monitorização 24/7"
          heading="Os seus sistemas não param. O nosso acompanhamento também não."
          description="Garantimos a gestão próxima da sua infraestrutura e dos seus serviços de TI, assegurando alta disponibilidade, manutenção e suporte especializado."
          imageSrc="/monitorizar.png"
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

        <ServiceFeatureBlock
          sectionTitle="Helpdesk corporativo"
          heading="Quando a tecnologia falha, a sua equipa não precisa de parar."
          description="Centralizamos pedidos, incidentes e suporte técnico num único ponto de contacto, proporcionando mais rapidez, organização e visibilidade."
          imageSrc="/helpdesk.png"
          imageAlt="Monitorização de servidores"
          imagePosition="right"
          benefitsTitle="Benefícios"
          ctaText="Falar com a equipa de suporte"
          benefitsList={[
            {
              title: "Registo e acompanhamento de chamados",
            },
            {
              title: "Gestão de incidentes",
            },
            {
              title: "Priorização de solicitações",
            },
            {
              title: "Histórico de atendimento",
            },
            {
              title: "Relatórios de suporte",
            },
            {
              title: "Atendimento remoto e presencial",
            },
          ]}
        />

        <ServiceFeatureBlock
          sectionTitle="Outsourcing IT"
          heading="A experiência técnica que a sua empresa precisa, sem aumentar a estrutura interna."
          description="Disponibilizamos profissionais e equipas especializadas para apoiar a sua operação de TI, de forma flexível e alinhada às necessidades do seu negócio."
          imageSrc="/Outsourcing.png"
          imageAlt="Outsourcing IT"
          imagePosition="left"
          benefitsTitle="Destaques"
          benefitsList={[
            {
              title: "Especialistas quando precisa",
              description:
                "Acesso a competências técnicas específicas sem processos complexos de contratação.",
            },
            {
              title: "Flexibilidade",
              description:
                "Modelos de colaboração adaptados à dimensão e às necessidades da sua empresa.",
            },
            {
              title: "Mais eficiência",
              description:
                "Reduza a carga operacional da sua equipa e concentre recursos no que gera valor.",
            },
          ]}
        />
      </section>

      <TargetAudienceSection />

      <CtaBanner
        title="A segurança é uma prioridade, não uma opção para depois."
        description="Ameaças digitais podem comprometer dados, sistemas e operações. Ajudamos a sua empresa a reduzir riscos e a construir uma infraestrutura mais protegida."
        imageSrc="/seguranca-bg.png" // Substitui pelo caminho da tua imagem
        imageAlt="Segurança de TI"
        buttonText="Proteger a minha empresa"
        buttonHref="/contact"
      />

      <section
        className="w-full py-20 md:py-28 bg-[#EBEFF7] text-center"
        data-aos="fade-up"
      >
        <div className="mx-auto px-6 md:px-12 space-y-6 m-0">
          <h2
            style={{ lineHeight: "1.2" }}
            className="lg:max-w-[1079px] text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-semibold text-[#000211] leading-tight tracking-tight m-0 mx-auto pb-[24px]"
          >
            {t(
              "A tecnologia da sua empresa está preparada para o próximo desafio?",
            )}
          </h2>

          {/* Descrição */}
          <p
            style={{ lineHeight: "1.2" }}
            className="font-medium  text-[#434343] text-sm md:text-base lg:text-[24px] lg:max-w-[627px]  mx-auto leading-relaxed m-0 pb-[32px]"
          >
            {t(
              "Fale com a nossa equipa. Vamos entender as suas necessidades e encontrar a solução mais adequada para o seu negócio.",
            )}
          </p>

          {/* Contentor dos Botões */}
          <div className="pt-4 flex flex-wrap justify-center gap-4 items-center m-0">
            <Button title="Falar com um especialista" href="/contact" />
            <Button
              title="Conhecer os nossos serviços"
              href="/servicos"
              className="bg-blue-600 hover:bg-blue-700" // Podes ajustar classes adicionais se necessário
            />
          </div>
        </div>
      </section>
    </>
  );
}
