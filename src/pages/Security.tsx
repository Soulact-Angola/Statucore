import AboutSummary from "../components/AboutSummary";
import { BenefitsSection } from "../components/BenefitsSection";
import CtaBanner from "../components/CtaBanner";
import { FaqSection } from "../components/FaqSection";
import { FeatureSection } from "../components/FeatureSection";
import HeroBanner from "../components/HeroBanner";
import { SolutionCardsSection } from "../components/SolutionCardsSection";

export default function Security() {
  const solucoesCards = [
    {
      imageSrc: "/help.png",
      title: "Firewall",
      description:
        "Ajudamos a implementar e configurar mecanismos de controlo do tráfego de rede para reforçar a proteção dos sistemas e gerir as comunicações autorizadas.",
    },
    {
      imageSrc: "/help.png",
      title: "Antivírus corporativo",
      description:
        "Apoiamos a implementação e administração de soluções de proteção contra software malicioso e outras ameaças abrangidas pelas ferramentas adotadas.",
    },
    {
      imageSrc: "/help.png",
      title: "Autenticação multifator (MFA)",
      description:
        "Reforçamos a proteção dos acessos através de uma camada adicional de verificação de identidade, reduzindo a dependência exclusiva de palavras-passe.",
    },

    {
      imageSrc: "/help.png",
      title: "Auditorias de segurança",
      description:
        "Avaliamos configurações, controlos e práticas de segurança para identificar fragilidades e recomendar medidas de melhoria.",
    },
  ];

  const beneficiosItens = [
    {
      title: "Redução de vulnerabilidades",
      description:
        "Identifique fragilidades e estabeleça prioridades para melhorar a proteção.",
    },
    {
      title: "Controlo de acessos",
      description:
        "Reforce a gestão de identidades, permissões e mecanismos de autenticação.",
    },
    {
      title: "Proteção dos dados",
      description:
        "Adote medidas para reduzir o risco de acesso indevido e exposição da informação.",
    },
    {
      title: "Preparação para incidentes",
      description:
        "Melhore a capacidade de identificar situações suspeitas e definir respostas adequadas.",
    },
    {
      title: "Maior visibilidade",
      description:
        "Compreenda melhor os controlos existentes e as áreas que necessitam de atenção.",
    },
  ];

  const Items = [
    {
      title: "Diagnóstico",
      description:
        "Compreendemos a infraestrutura existente, as necessidades dos utilizadores e os requisitos da empresa.",
    },
    {
      title: "Planeamento",
      description:
        "Definimos as soluções, as configurações e as etapas necessárias para a implementação ou migração.",
    },
    {
      title: "Implementação",
      description:
        "Configuramos os serviços e apoiamos a transição, procurando reduzir o impacto no trabalho diário.",
    },
    {
      title: "Gestão e acompanhamento",
      description:
        "Apoiamos a administração e a melhoria contínua dos ambientes abrangidos.",
    },
  ];
  return (
    <>
      <HeroBanner
        title="Proteja os seus sistemas. Reforce a confiança no seu negócio."
        subtitle="Ajudamos a sua empresa a reduzir riscos digitais através de soluções de proteção, controlo de acessos e avaliação de segurança adaptadas ao seu ambiente tecnológico."
        imageSrc="/heroseguranca.png"
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

      <AboutSummary variant="servicesSecurity" />

      <SolutionCardsSection
        title="As nossas soluções"
        subtitle="Camadas de proteção para o seu ambiente tecnológico."
        cards={solucoesCards}
      />

      <BenefitsSection title="Benefícios" items={beneficiosItens} />

      <FeatureSection
        title="A nossa abordagem"
        imageSrc="/nossaseguranca.jpg"
        items={Items}
      />

      <FaqSection />

      <CtaBanner
        title="A proteção do seu negócio começa com uma avaliação."
        description="Converse com a nossa equipa para compreender os riscos do seu ambiente tecnológico e identificar medidas de segurança adequadas"
        imageSrc="/10.png"
        imageAlt="Segurança de TI"
        buttonText="Solicitar uma avaliação de segurança"
        buttonHref="/contact"
      />
    </>
  );
}
