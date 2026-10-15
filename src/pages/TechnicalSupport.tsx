import AboutSummary from "../components/AboutSummary";
import { BenefitsSection } from "../components/BenefitsSection";
import CtaBanner from "../components/CtaBanner";
import { FaqSection } from "../components/FaqSection";
import { FeatureSection } from "../components/FeatureSection";
import HeroBanner from "../components/HeroBanner";
import { SolutionCardsSection } from "../components/SolutionCardsSection";

export default function TechnicalSupport() {
  const solucoesCards = [
    {
      imageSrc: "/help.png",
      title: "Helpdesk",
      description:
        "Centralizamos os pedidos de assistência técnica, facilitando o registo, a classificação e o acompanhamento das solicitações dos utilizadores.",
    },
    {
      imageSrc: "/help.png",
      title: "Service Desk",
      description:
        "Apoiamos a organização dos serviços de TI através de processos estruturados para gerir incidentes, pedidos e outras necessidades operacionais.",
    },
    {
      imageSrc: "/help.png",
      title: "GLPI",
      description:
        "Apoiamos a implementação e configuração do GLPI para centralizar chamados, organizar ativos tecnológicos e melhorar a gestão dos serviços de TI.",
    },
    {
      imageSrc: "/help.png",
      title: "Gestão de incidentes",
      description:
        "Ajudamos a identificar, classificar, priorizar e acompanhar incidentes que afetam os sistemas e a produtividade dos utilizadores.",
    },
  ];

  const beneficiosItens = [
    {
      title: "Pedidos centralizados",
      description:
        "Organize as solicitações técnicas num processo de atendimento estruturado.",
    },
    {
      title: "Acompanhamento transparente",
      description:
        "Facilite a consulta do estado dos pedidos e do histórico das intervenções.",
    },
    {
      title: "Melhor priorização",
      description:
        "Identifique as ocorrências que exigem maior atenção de acordo com a urgência e o impacto.",
    },
    {
      title: "Informação para decidir",
      description:
        "Utilize o histórico de incidentes para identificar problemas recorrentes e oportunidades de melhoria.",
    },
  ];

  const Items = [
    {
      title: "Avaliação da infraestrutura",
      description:
        "Analisamos os recursos existentes, identificamos necessidades e compreendemos os desafios da sua operação.",
    },
    {
      title: "Planeamento técnico",
      description:
        "Definimos uma solução alinhada com os requisitos, os recursos disponíveis e os objetivos do negócio.",
    },
    {
      title: "Implementação",
      description:
        "Configuramos e integramos os componentes necessários, procurando minimizar o impacto nas atividades da empresa.",
    },
    {
      title: "Acompanhamento",
      description:
        "Apoiamos a manutenção e a evolução da infraestrutura de acordo com o âmbito do serviço contratado.",
    },
  ];
  return (
    <>
      <HeroBanner
        title={
          <>
            A tecnologia deve facilitar o trabalho da sua equipa, não
            dificultá-lo.
          </>
        }
        subtitle="Apoiamos a sua empresa na resolução de incidentes e na gestão de pedidos técnicos, com processos organizados para reduzir interrupções e melhorar a experiência dos utilizadores."
        imageSrc="/heroSuporte.png"
        buttons={[
          {
            title: "Solicitar uma proposta",
            href: "/contato",
          },
          {
            title: "Conhecer nossas soluções",
            href: "/sobre",
          },
        ]}
      />

      <AboutSummary variant="servicesSupport" />

      <SolutionCardsSection
        title="As nossas soluções"
        subtitle="Suporte organizado para diferentes necessidades."
        cards={solucoesCards}
      />

      <BenefitsSection title="Benefícios" items={beneficiosItens} />

      <FeatureSection
        title="Como funciona o nosso suporte"
        imageSrc="/nossosuporte.jpg"
        items={Items}
      />

      <FaqSection />

      <CtaBanner
        title={<>A sua equipa precisa de um suporte técnico mais organizado?</>}
        description="Vamos conversar sobre as necessidades da sua empresa e encontrar uma abordagem adequada à sua operação."
        imageSrc="/suaequipaTi.png"
        imageAlt="Segurança de TI"
        buttonText="Proteger a minha empresa"
        buttonHref="/contact"
      />
    </>
  );
}
