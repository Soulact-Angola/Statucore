import { useTranslation } from "react-i18next";

export default function OurServicesSection() {
  const { t } = useTranslation();
  const services = [
    {
      id: 1,
      title: "Infraestrutura",
      description:
        "Projetamos, implementamos e gerimos a infraestrutura tecnológica necessária para manter os seus sistemas estáveis, conectados e preparados para crescer.",
      itemsList: [
        "Redes Empresariais",
        "Servidores",
        "Datacenter",
        "Virtualização",
      ],
      imageSrc: "/infra.png",
      hoverBg: "bg-[#E2E8F0]", // Cor de fundo no hover semelhante à imagem
    },
    {
      id: 2,
      title: "Suporte Técnico",
      description:
        "Oferecemos suporte técnico especializado para responder rapidamente a incidentes, pedidos e necessidades do dia a dia da sua empresa.",
      itemsList: ["Helpdesk", "Service Desk", "GLPI", "Gestão de Incidentes"],
      imageSrc: "/suporte.png",
      hoverBg: "bg-[#E2E8F0]",
    },
    {
      id: 3,
      title: "Cloud",
      description:
        "Ajudamos a sua empresa a tirar partido da cloud com soluções seguras, escaláveis e adaptadas à sua realidade.",
      itemsList: [
        "Microsoft 365",
        "Google Workspace",
        "Backup Cloud",
        "Migrações",
      ],
      imageSrc: "/cloud.png",
      hoverBg: "bg-[#E5D4C0]", // Tom amarelado/bege da imagem
    },
    {
      id: 4,
      title: "Segurança",
      description:
        "Reduzimos riscos e protegemos os seus sistemas, dados e utilizadores através de uma abordagem integrada de cibersegurança.",
      itemsList: ["Firewall", "Antivírus Corporativo", "MFA", "Auditorias"],
      imageSrc: "/security.png",
      hoverBg: "bg-[#E5D4C0]",
    },
  ];

  return (
    <section className="w-full bg-[#EBEFF7] py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10 pointer-events-none">
        <svg
          width="241"
          height="228"
          viewBox="0 0 241 228"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M188.104 56.834C186.386 55.8367 185.8 54.0232 184.867 52.5523C162.985 17.6555 141.075 -17.2331 119.331 -52.2161C117.054 -55.8871 114.66 -57.2956 110.251 -57.1907C80.552 -56.5642 50.8518 -56.1916 21.1462 -55.937C17.7185 -55.9007 15.9152 -54.7794 14.5401 -51.7228C11.2708 -44.393 7.83151 -37.1321 4.18792 -30.0046C2.59316 -26.8823 2.73669 -24.548 4.67135 -21.5224C23.3481 7.84273 41.8668 37.3297 60.4226 66.7906C66.1442 75.8922 71.8562 85.0116 77.5777 94.1131C78.1473 95.0196 78.8652 95.822 78.9084 97.3191C76.0143 97.3905 73.1188 97.5071 70.2166 97.5511C59.2883 97.7031 48.3382 97.6822 37.422 98.025C34.0737 98.1273 32.2531 96.9364 30.5102 94.1525C6.67164 55.758 -17.2685 17.4238 -41.2911 -20.8858C-42.8532 -23.3649 -42.948 -25.2353 -41.542 -27.8377C-29.9845 -48.9738 -18.5161 -70.1579 -7.21777 -91.411C-5.69473 -94.2726 -3.90968 -95.1044 -0.808491 -95.133C43.666 -95.445 88.1337 -95.8298 132.578 -96.3422C136.478 -96.3998 138.898 -95.2533 140.993 -91.8419C162.809 -56.2673 184.744 -20.7434 206.8 14.6846C208.698 17.7363 208.873 19.9266 207.088 23.0609C201.482 32.882 196.259 42.9328 190.85 52.8599C190.153 54.2338 189.72 55.888 188.104 56.834Z"
            fill="#0046DC"
          />
          <path
            d="M-64.1132 14.7055C-62.1567 15.9007 -61.5909 17.4959 -60.7365 18.8556C-38.6732 54.0572 -16.5179 89.2165 5.32287 124.574C7.90901 128.781 10.6477 129.892 15.3558 129.788C44.6831 129.167 74.0293 128.811 103.363 128.563C106.763 128.534 108.625 127.56 110.029 124.45C113.559 116.639 117.294 108.916 121.197 101.307C122.473 98.8185 122.029 97.082 120.622 94.8708C109.285 77.0246 98.0598 59.1003 86.7877 41.2199C73.6783 20.3895 60.5592 -0.423109 47.458 -21.2261C46.8885 -22.1326 46.3753 -23.1007 45.8784 -24.0139C47.0314 -25.2102 48.3605 -24.8145 49.5571 -24.8128C61.9551 -24.9998 74.3459 -24.9604 86.7428 -25.4013C90.7814 -25.5452 92.8554 -24.0562 94.8817 -20.7738C109.987 3.7369 125.295 28.1272 140.538 52.5516C148.734 65.6841 156.863 78.896 165.197 91.9421C166.942 94.6807 167.328 96.778 165.664 99.8164C153.984 121.094 142.447 142.448 131.062 163.861C129.442 166.901 127.547 167.766 124.265 167.789C79.9911 168.071 35.6963 168.434 -8.57681 168.97C-12.2132 169.009 -14.0419 167.79 -15.8957 164.785C-38.0907 128.591 -60.4422 92.474 -82.8226 56.4102C-84.3232 53.9875 -84.7445 52.1249 -83.2547 49.4526C-77.2004 38.6304 -71.3861 27.6556 -65.4923 16.7467C-65.1924 16.1489 -64.7305 15.5924 -64.1132 14.7055Z"
            fill="#9FB3FA"
          />
        </svg>
      </div>

      {/* Container flexível substituído por w-full e padding responsivo (incluindo o lg:px-28) */}
      <div className="w-full px-6 md:px-16 lg:px-28">
        <div
          className="text-center max-w-2xl mx-auto mb-14 space-y-4"
          data-aos="fade-up"
        >
          <h2 className="font-poppins text-3xl sm:text-4xl font-bold lg:text-[48px] text-[#000211] tracking-tight">
            {t("Os nossos serviços")}
          </h2>
          <p
            style={{ lineHeight: "1.4" }}
            className="font-normal pt-[24px] mx-auto lg:max-w-[467px] text-[#000211] lg:text-[16px] text-base md:text-lg leading-relaxed"
          >
            {t(
              "Combinamos infraestrutura, suporte, cloud e segurança para criar um ambiente tecnológico confiável, preparado para as exigências do seu negócio.",
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative group h-[480px] rounded-3xl overflow-hidden shadow-md flex flex-col justify-between p-6 bg-slate-900 transition-all duration-300 hover:-translate-y-1 w-full"
              data-aos="fade-up"
              data-aos-delay={service.id * 100}
            >
              <img
                src={service.imageSrc}
                alt={t(service.title)}
                className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500 group-hover:opacity-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-slate-950/30 transition-opacity duration-500 group-hover:opacity-0" />

              <div className="relative z-10 space-y-4 transition-opacity duration-300 group-hover:opacity-0 group-hover:pointer-events-none">
                <h3 className="font-poppins lg:text-[24px] text-2xl font-bold text-white tracking-tight">
                  {t(service.title)}
                </h3>

                <ul
                  style={{ lineHeight: "1.1" }}
                  className="space-y-2 font-poppins text-[#FFFFFF] text-sm"
                >
                  {service.itemsList.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-white rounded-full inline-block" />
                      <span className="lg:text-[16px]">{t(item)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className={`absolute inset-0 ${service.hoverBg} p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20`}
              >
                <div className="space-y-4">
                  <h3 className="font-poppins text-2xl font-bold text-[#0B1B3D] tracking-tight">
                    {t(service.title)}
                  </h3>

                  <p className="font-inter text-slate-700 text-sm leading-relaxed">
                    {t(service.description)}
                  </p>

                  <ul className="space-y-2 font-inter text-slate-800 text-sm">
                    {service.itemsList.map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 bg-[#0B1B3D] rounded-full inline-block" />
                        <span>{t(item)}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <a
                    href="#saiba-mais"
                    className="inline-flex items-center text-[#0B1B3D] font-semibold text-sm hover:underline space-x-2"
                  >
                    <span>{t("Saiba mais")}</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
