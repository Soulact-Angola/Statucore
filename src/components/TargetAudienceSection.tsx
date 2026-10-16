import { useTranslation } from "react-i18next";

interface TargetItem {
  title: string;
  description: string;
  imageSrc: string;
}

interface TargetAudienceProps {
  sectionTitle?: string;
  items?: TargetItem[];
}

const defaultItems: TargetItem[] = [
  {
    title: "Pequenas e médias empresas",
    description:
      "Estruture a sua infraestrutura e tenha suporte especializado sem aumentar a complexidade.",
    imageSrc: "/peqmedia.png",
  },
  {
    title: "Grandes empresas",
    description:
      "Garanta disponibilidade, segurança e eficiência em ambientes tecnológicos mais exigentes.",
    imageSrc: "/grandesempresas.png",
  },
  {
    title: "Instituições",
    description:
      "Soluções de TI para operações que exigem estabilidade, controlo e segurança.",
    imageSrc: "/instituicoes.png",
  },
  {
    title: "Outros setores",
    description:
      "Crie soluções personalizadas para as necessidades específicas da sua organização.",
    imageSrc: "/outrossetores.png",
  },
];

export default function TargetAudienceSection({
  sectionTitle = "Para quem trabalhamos",
  items = defaultItems,
}: TargetAudienceProps) {
  const { t } = useTranslation();
  return (
    <section
      className="w-full py-16 md:py-24 bg-white overflow-hidden"
      data-aos="fade-up"
    >
      {/* Container principal limitado a max-w-[1220px] para controlar a expansão horizontal */}
      <div className=" mx-auto px-6 md:px-12 lg:px-28 space-y-12">
        {/* Título Principal */}
        <div className="text-center">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-[#0B1B3D] tracking-tight m-0">
            {t(sectionTitle)}
          </h2>
        </div>

        {/* Contentor dos Cards: Grid de 4 colunas no desktop / Scroll horizontal suave no mobile */}
        <div className="flex lg:grid lg:grid-cols-4 overflow-x-auto lg:overflow-visible snap-x snap-mandatory gap-6 pb-6 lg:pb-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[280px] sm:w-[320px] lg:w-full snap-start relative rounded-3xl overflow-hidden shadow-xl aspect-[3/4] flex flex-col justify-start p-6 md:p-8 group m-0"
            >
              {/* Imagem de Fundo do Card */}
              <img
                src={item.imageSrc}
                alt={t(item.title)}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105 m-0"
              />

              {/* Overlay uniforme e consistente em todo o card */}
              <div className="absolute inset-0 bg-slate-950/50" />

              {/* Conteúdo de Texto do Card (posicionado no topo) */}
              <div className="relative z-10 space-y-3 m-0">
                <h3 className="font-poppins text-xl md:text-2xl font-bold text-white leading-snug m-0">
                  {t(item.title)}
                </h3>
                <p className="font-inter text-slate-200 text-xs md:text-sm leading-relaxed m-0">
                  {t(item.description)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
