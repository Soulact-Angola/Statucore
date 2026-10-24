import { useTranslation } from "react-i18next";

export interface ApproachItem {
  number: string | number;
  title: string;
  description: string;
}

interface OurApproachProps {
  title?: string;
  subtitle?: string;
  steps?: ApproachItem[];
  imageSrc: string;
  imageAlt?: string;
}

export default function OurApproach({
  title = "A nossa abordagem",
  subtitle = "Trabalhamos de forma estruturada para que cada solução responda a uma necessidade real do negócio.",
  steps = [
    {
      number: 1,
      title: "Compreender",
      description:
        "Analisamos as necessidades, os sistemas existentes e os desafios da sua empresa.",
    },
    {
      number: 2,
      title: "Planear",
      description:
        "Definimos uma abordagem alinhada com os objetivos, os recursos e as prioridades do negócio.",
    },
    {
      number: 3,
      title: "Implementar",
      description:
        "Colocamos as soluções em prática com atenção à segurança, à estabilidade e à continuidade das operações.",
    },
    {
      number: 4,
      title: "Acompanhar",
      description:
        "Prestamos suporte e avaliamos oportunidades de melhoria à medida que as necessidades evoluem.",
    },
  ],
  imageSrc,
  imageAlt = "Técnico a trabalhar em infraestrutura de servidores",
}: OurApproachProps) {
  const { t } = useTranslation();
  return (
    <section className="w-full py-16 bg-white">
      {/* Container Principal respeitando o layout da página */}
      <div className="mx-auto px-6 md:px-28">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-[#0B1B3D] mb-4">
            {t(title)}
          </h2>
          <p className="font-inter text-slate-600 text-sm md:text-base leading-relaxed">
            {t(subtitle)}
          </p>
        </div>

        {/* Grid Principal: conteúdo alinhado às extremidades com 112px entre as colunas */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_488px] gap-10 lg:gap-[112px] items-center">
          {/* Lista de Passos */}
          <div className="flex flex-col">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative py-6 first:pt-0 last:pb-0 flex items-start gap-5"
              >
                {/* Indicador Numérico em círculo preto */}
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0B1B3D] text-white font-poppins font-semibold flex items-center justify-center text-sm shadow-sm">
                  {step.number}
                </div>

                {/* Conteúdo do Passo */}
                <div>
                  <h3 className="font-poppins text-lg md:text-xl font-bold text-[#0B1B3D] mb-1">
                    {t(step.title)}
                  </h3>
                  <p className="font-inter text-slate-600 text-sm md:text-base leading-relaxed">
                    {t(step.description)}
                  </p>
                </div>
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 right-6 border-t border-slate-100"
                />
              </div>
            ))}
          </div>

          {/* Imagem com dimensões fixas exatas: 488px de largura e 480px de altura */}
          <div className="flex justify-center lg:justify-end">
            <div
              style={{ width: "488px", height: "480px" }}
              className="relative max-w-full overflow-hidden rounded-3xl shadow-md flex-shrink-0"
            >
              <img
                src={imageSrc}
                alt={t(imageAlt)}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
