import AboutSummary from "../components/AboutSummary";
import type { CardItem } from "../components/CardSlider";
import CardSlider from "../components/CardSlider";
import { ContactSection } from "../components/ContactSection";
import CtaBanner from "../components/CtaBanner";
import FeatureCards from "../components/FeatureCard";
import { FeatureSection } from "../components/FeatureSection";
import HeroBanner from "../components/HeroBanner";
import ImageTextFeature from "../components/ImageTextFeature";
import OurApproach from "../components/OurApproach";

export default function About() {
  const data: CardItem[] = [
    {
      id: 1,
      title: "Infraestrutura tecnológica",
      description:
        "Criamos bases tecnológicas sólidas através de redes empresariais, servidores, datacenters e virtualização.",
      imageSrc: "tec.jpg",
    },
    {
      id: 2,
      title: "Serviços geridos e monitorização",
      description:
        "Acompanhamos ambientes tecnológicos de forma contínua, ajudando a identificar problemas e a reduzir interrupções.",
      imageSrc: "tec.jpg",
    },
    {
      id: 3,
      title: "Suporte técnico e Helpdesk",
      description:
        "Apoiamos os utilizadores e ajudamos a resolver incidentes para que as equipas possam trabalhar com menos obstáculos.",
      imageSrc: "tec.jpg",
    },
  ];

  const dataSetor: CardItem[] = [
    {
      id: 1,
      title: "Bancário",

      imageSrc: "tec.jpg",
    },
    {
      id: 2,
      title: "Saúde",
      imageSrc: "tec.jpg",
    },
    {
      id: 3,
      title: "Educação",
      imageSrc: "tec.jpg",
    },
  ];

  const diferencialItems = [
    {
      title: "Uma visão integrada de TI",
      description:
        "Relacionamos infraestrutura, cloud, segurança e suporte para responder aos desafios tecnológicos de forma coordenada.",
    },
    {
      title: "Acompanhamento contínuo",
      description:
        "Valorizamos a prevenção, a monitorização e a manutenção para ajudar a reduzir falhas e interrupções.",
    },
    {
      title: "Soluções ajustadas à realidade de cada empresa",
      description:
        "Consideramos as necessidades, os recursos e os objetivos de cada organização antes de recomendar uma solução.",
    },
    {
      title: "Relações de longo prazo",
      description:
        "Procuramos ser um parceiro em quem os clientes podem confiar, tanto na resolução dos desafios atuais como na preparação dos próximos passos.",
    },
  ];

  return (
    <>
      <HeroBanner
        title={
          <>
            Tecnologia que <br />
            acompanha o crescimento <br />
            do seu negócio
          </>
        }
        subtitle="Ajudamos empresas a gerir a tecnologia com mais segurança, eficiência e confiança. Combinamos conhecimento técnico, acompanhamento contínuo e soluções adaptadas às necessidades de cada organização."
        imageSrc="/heroSobre.jpg"
        buttons={[{ title: "Fale connosco", href: "/contact" }]}
      />
      <AboutSummary variant="about" />
      <ImageTextFeature
        tag="A NOSSA MISSÃO"
        title={
          <>
            Tornar a tecnologia uma <br />
            vantagem para <br />
            cada negócio.
          </>
        }
        description="A nossa missão é ajudar empresas a utilizar a tecnologia de forma segura, eficiente e estratégica, através de serviços especializados que simplificam operações, reduzem riscos e contribuem para a continuidade do negócio."
        imageSrc="/missao.png"
        imagePosition="right"
      />
      <ImageTextFeature
        tag="A NOSSA VISÃO"
        title={
          <>
            Construir relações <br />
            de confiança através <br />
            da tecnologia.
          </>
        }
        description="Queremos ser um parceiro tecnológico de referência para empresas em Angola, reconhecido pela qualidade dos serviços, pela proximidade com os clientes e pela capacidade de responder aos desafios de um mercado em constante evolução."
        imageSrc="/visao.jpg"
        imagePosition="left"
      />
      <div
        data-aos="fade-up"
        className="max-w-7xl mx-auto px-6 md:px-12 space-y-6 "
      >
        <h1 className="text-[#012120] lg:text-[48px] font-semibold text-3xl font-bold text-center mb-8">
          Os nossos valores
        </h1>
        <p
          style={{ lineHeight: "1.4" }}
          className="text-[#636364] text-sm md:text-base lg:text-[18px] leading-relaxed pt-2 m-0 lg:max-w-[422px] text-center mx-auto "
        >
          A forma como trabalhamos é tão importante quanto a tecnologia que
          disponibilizamos.
        </p>
      </div>
      <FeatureCards variant="about" />
      <CardSlider items={data} autoPlayInterval={5000} />;
      <OurApproach
        imageSrc="/abordagem.png"
        // Opcional: Você pode passar títulos customizados se quiser, ou deixar os padrões
      />
      <CardSlider items={dataSetor} autoPlayInterval={5000} />;
      <FeatureSection
        title="O Nosso Diferencial"
        subtitle="Tecnologia com propósito. Serviço com responsabilidade."
        imageSrc="/nossodiferencial.png"
        items={diferencialItems}
      />
      <CtaBanner
        title={
          <>
            O seu negócio tem objetivos. Nós ajudamos a tecnologia a
            acompanhá-los.
          </>
        }
        description="Conte-nos quais são os seus desafios tecnológicos. A nossa equipa está disponível para conversar consigo e explorar soluções adequadas à sua empresa."
        imageSrc="/reuniao.png"
        imageAlt="Segurança de TI"
        buttonText="Fale com a nossa equipe"
        buttonHref="/contact"
      />
      <ContactSection
        title="Conte-nos o que a sua empresa precisa."
        imageSrc="/profissional.png"
        onSubmit={(data) => {
          console.log("Dados do formulário:", data);
        }}
      />
    </>
  );
}
