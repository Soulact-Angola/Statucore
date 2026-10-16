import AboutSummary from "../components/AboutSummary";
import { BenefitsSection } from "../components/BenefitsSection";
import CtaBanner from "../components/CtaBanner";
import { FaqSection } from "../components/FaqSection";
import { FeatureSection } from "../components/FeatureSection";
import HeroBanner from "../components/HeroBanner";
import { SolutionCardsSection } from "../components/SolutionCardsSection";

export default function Cloud() {
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
        title="Mais flexibilidade para trabalhar."
        subtitle="Ajudamos a sua empresa a adotar e gerir soluções cloud que facilitam a colaboração, simplificam o acesso à informação e apoiam a proteção dos dados."
        imageSrc="/heroCloud.png"
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

      <AboutSummary variant="servicesCloud" />

      <SolutionCardsSection
        title="As nossas soluções"
        subtitle="Ferramentas e serviços cloud para o seu negócio."
        cards={solucoesCards}
      />

      <BenefitsSection title="Benefícios" items={beneficiosItens} />

      <FeatureSection
        title="A nossa abordagem"
        imageSrc="/nossaCloud.jpg"
        items={Items}
      />

      <FaqSection />

      <CtaBanner
        title="Prepare a sua empresa para trabalhar de forma mais conectada."
        description="Fale connosco para identificar as soluções cloud mais adequadas às necessidades do seu negócio."
        imageSrc="/colaboracaoCloud.png"
        imageAlt="Segurança de TI"
        buttonText="Proteger a minha empresa"
        buttonHref="/contact"
      />
    </>
  );
}
