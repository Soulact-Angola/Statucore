import React from "react";

export interface StepItem {
  number?: string | number;
  title: string;
  description: string;
}

export interface FeatureSectionProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt?: string;
  items: StepItem[];
}

export const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  subtitle,
  imageSrc,
  imageAlt = "",
  items,
}) => {
  return (
    <section
      className="relative w-full bg-[#f1f5f9] px-6 py-16 md:px-12 md:py-24 overflow-hidden text-[#0f172a]"
      data-aos="fade-up"
    >
      {/* SVG do Canto Superior Esquerdo */}
      <div className="absolute top-0 left-0 pointer-events-none">
        <svg
          width="241"
          height="228"
          viewBox="0 0 241 228"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M188.103 56.834C186.385 55.8367 185.799 54.0232 184.866 52.5523C162.984 17.6555 141.074 -17.2331 119.33 -52.2161C117.053 -55.8871 114.659 -57.2956 110.25 -57.1907C80.551 -56.5642 50.8508 -56.1916 21.1453 -55.937C17.7175 -55.9007 15.9143 -54.7794 14.5391 -51.7228C11.2699 -44.393 7.83053 -37.1321 4.18694 -30.0046C2.59218 -26.8823 2.73572 -24.548 4.67037 -21.5224C23.3471 7.84273 41.8658 37.3297 60.4217 66.7906C66.1432 75.8922 71.8552 85.0116 77.5768 94.1131C78.1463 95.0196 78.8642 95.822 78.9074 97.3191C76.0133 97.3905 73.1179 97.5071 70.2156 97.5511C59.2873 97.7031 48.3372 97.6822 37.421 98.025C34.0727 98.1273 32.2521 96.9364 30.5092 94.1525C6.67067 55.758 -17.2695 17.4238 -41.292 -20.8858C-42.8542 -23.3649 -42.949 -25.2353 -41.5429 -27.8377C-29.9854 -48.9738 -18.5171 -70.1579 -7.21875 -91.411C-5.6957 -94.2726 -3.91066 -95.1044 -0.809467 -95.133C43.665 -95.445 88.1327 -95.8298 132.577 -96.3422C136.477 -96.3998 138.897 -95.2533 140.992 -91.8419C162.808 -56.2673 184.743 -20.7434 206.799 14.6846C208.697 17.7363 208.872 19.9266 207.087 23.0609C201.481 32.882 196.258 42.9328 190.849 52.8599C190.152 54.2338 189.719 55.888 188.103 56.834Z"
            fill="#0046DC"
          />
          <path
            d="M-64.1141 14.7056C-62.1576 15.9008 -61.5918 17.496 -60.7374 18.8557C-38.6741 54.0574 -16.5188 89.2166 5.32196 124.574C7.90811 128.781 10.6468 129.892 15.3549 129.788C44.6822 129.168 74.0284 128.811 103.362 128.563C106.762 128.535 108.624 127.56 110.028 124.45C113.558 116.639 117.293 108.916 121.196 101.307C122.472 98.8186 122.028 97.0821 120.621 94.8709C109.284 77.0247 98.0589 59.1005 86.7868 41.2201C73.6774 20.3896 60.5583 -0.422987 47.4571 -21.226C46.8876 -22.1324 46.3744 -23.1005 45.8775 -24.0138C47.0305 -25.21 48.3596 -24.8144 49.5562 -24.8127C61.9542 -24.9997 74.345 -24.9603 86.7419 -25.4012C90.7805 -25.545 92.8545 -24.0561 94.8808 -20.7737C109.986 3.73702 125.294 28.1273 140.537 52.5518C148.733 65.6842 156.862 78.8961 165.196 91.9423C166.941 94.6809 167.327 96.7781 165.663 99.8165C153.983 121.094 142.446 142.448 131.061 163.861C129.441 166.901 127.547 167.766 124.264 167.789C79.9902 168.071 35.6954 168.434 -8.57771 168.97C-12.2141 169.009 -14.0428 167.79 -15.8966 164.785C-38.0916 128.591 -60.4431 92.4742 -82.8235 56.4103C-84.3241 53.9877 -84.7454 52.125 -83.2556 49.4527C-77.2013 38.6305 -71.387 27.6557 -65.4932 16.7468C-65.1933 16.149 -64.7314 15.5925 -64.1141 14.7056Z"
            fill="#9FB3FA"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Cabeçalho */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
            {title}
          </h2>
          {subtitle && (
            <p className="text-gray-600 text-sm md:text-base font-medium">
              {subtitle}
            </p>
          )}
        </div>

        {/* Conteúdo Principal (Imagem + Lista de Passos) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Imagem */}
          <div className="lg:col-span-6 w-full flex justify-center">
            <div className="w-full h-[320px] sm:h-[400px] lg:h-[460px] rounded-2xl overflow-hidden shadow-sm">
              <img
                src={imageSrc}
                alt={imageAlt || title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Lista de Itens */}
          <div className="lg:col-span-6 flex flex-col divide-y divide-gray-200/60">
            {items.map((item, index) => (
              <div
                key={index}
                className={`flex items-start gap-4 py-5 ${
                  index === 0 ? "pt-0" : ""
                } ${index === items.length - 1 ? "pb-0" : ""}`}
              >
                {/* Círculo com o Número */}
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm mt-0.5">
                  {item.number ?? index + 1}
                </div>

                {/* Conteúdo do Item */}
                <div className="flex-1">
                  <h3 className="text-base font-bold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
