import AboutSummary from "../components/AboutSummary";
import { BenefitsSection } from "../components/BenefitsSection";
import CtaBanner from "../components/CtaBanner";
import { FaqSection } from "../components/FaqSection";
import { FeatureSection } from "../components/FeatureSection";
import HeroBanner from "../components/HeroBanner";
import { SolutionCardsSection } from "../components/SolutionCardsSection";

export default function Infrastructure() {
  const solucoesCards = [
    {
      imageSrc: "/help.png",
      title: "Microsoft 365",
      description:
        "Apoiamos a configuração e administração das ferramentas Microsoft 365 para facilitar a comunicação, a colaboração e a produtividade das equipas.",
    },
    {
      imageSrc: "/help.png",
      title: "Google Workspace",
      description:
        "Ajudamos a implementar e gerir as ferramentas Google Workspace, incluindo email profissional, armazenamento e aplicações de colaboração.",
    },
    {
      imageSrc: "/help.png",
      title: "Backup Cloud",
      description:
        "Apoiamos a implementação de cópias de segurança em cloud para ajudar a proteger a informação e preparar a recuperação de dados, de acordo com a solução adotada.",
    },
    {
      imageSrc: "/help.png",
      title: "Migrações para a cloud",
      description:
        "Planeamos e apoiamos a transferência de dados, aplicações e serviços para ambientes cloud, considerando as dependências técnicas e as necessidades da operação.",
    },
  ];

  const beneficiosItens = [
    {
      title: "Colaboração simplificada",
      description:
        "Facilite o trabalho conjunto e a partilha de informação entre equipas autorizadas.",
    },
    {
      title: "Acesso aos recursos",
      description:
        "Permita que os utilizadores acedam aos serviços de que precisam, de acordo com as permissões definidas.",
    },
    {
      title: "Proteção da informação",
      description:
        "Adote medidas adequadas de segurança, cópia de segurança e recuperação de dados.",
    },
    {
      title: "Gestão simplificada",
      description:
        "Organize os recursos e as ferramentas digitais utilizadas pela empresa.",
    },
    {
      title: "Flexibilidade operacional",
      description:
        "Avalie soluções que acompanhem as necessidades dos utilizadores e a evolução do negócio.",
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
        title="A base tecnológica que mantém o seu negócio em movimento."
        subtitle="Projetamos, implementamos e gerimos infraestruturas tecnológicas para ajudar a sua empresa a operar com mais estabilidade, conectividade e eficiência."
        imageSrc="/infraTi.png"
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

      <AboutSummary variant="servicesInfra" />

      <SolutionCardsSection title="As nossas soluções" cards={solucoesCards} />

      <BenefitsSection title="Benefícios" items={beneficiosItens} />

      <FeatureSection
        title="A nossa abordagem"
        subtitle="Tecnologia com propósito. Serviço com responsabilidade."
        imageSrc="/abordagem.jpg"
        items={Items}
      />

      <FaqSection />

      <CtaBanner
        title="A sua infraestrutura está preparada para acompanhar o crescimento da sua empresa?"
        description="Converse com a nossa equipa e descubra como melhorar a base tecnológica do seu negócio."
        imageSrc="/equipeOperacao.png"
        imageAlt="Segurança de TI"
        buttonText="Proteger a minha empresa"
        buttonHref="/contact"
      />
    </>
  );
}
