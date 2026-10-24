import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export interface CardItem {
  id: string | number;
  title: string;
  description?: string;
  imageSrc: string;
  imageAlt?: string;
}

interface CardSliderProps {
  items: CardItem[];
  autoPlayInterval?: number;
}

const DESKTOP_GAP = 32;

export default function CardSlider({
  items,
  autoPlayInterval = 4000,
}: CardSliderProps) {
  const { t } = useTranslation();
  // Posição absoluta: cresce/decresce sem nunca voltar a 0
  const [position, setPosition] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [containerWidth, setContainerWidth] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const n = items.length;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => setContainerWidth(el.offsetWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (!isPlaying || n < 2) return;
    const timer = setInterval(
      () => setPosition((p) => p + 1),
      autoPlayInterval,
    );
    return () => clearInterval(timer);
  }, [isPlaying, autoPlayInterval, n, position]);

  const handleNext = () => setPosition((p) => p + 1);
  const handlePrev = () => setPosition((p) => p - 1);

  // Breakpoints baseados na largura real do container
  const isDesktop = containerWidth >= 1024;
  const isTablet = containerWidth >= 640 && containerWidth < 1024;

  const gap = isDesktop ? DESKTOP_GAP : isTablet ? 24 : 16;

  const cardWidth = !containerWidth
    ? 0
    : isDesktop
      ? Math.max(260, (containerWidth / 2 - DESKTOP_GAP) / 1.05) // igual ao desktop aprovado
      : isTablet
        ? containerWidth * 0.62
        : containerWidth * 0.78;

  const step = cardWidth + gap;

  // Slots renderizados: 2 de cada lado do centro (os de ±2 ficam fora do ecrã)
  const slots = [-2, -1, 0, 1, 2].map((d) => position + d);

  return (
    <div className="w-full py-8 md:py-12 bg-white overflow-hidden">
      <motion.div
        ref={containerRef}
        className="w-full grid overflow-hidden mb-6 md:mb-10 cursor-grab active:cursor-grabbing touch-pan-y"
        onPanEnd={(_, info) => {
          if (info.offset.x < -50) handleNext();
          else if (info.offset.x > 50) handlePrev();
        }}
      >
        {cardWidth > 0 &&
          slots.map((slot) => {
            const item = items[((slot % n) + n) % n];
            const x = (slot - position) * step;

            return (
              <motion.div
                key={slot} // chave = slot absoluto, não o id do item
                initial={{ x }}
                animate={{ x }}
                transition={{ type: "spring", stiffness: 260, damping: 30 }}
                style={{
                  gridArea: "1 / 1",
                  width: cardWidth,
                  justifySelf: "center",
                }}
              >
                <div className="relative w-full aspect-[4/3] max-h-[400px] overflow-hidden rounded-3xl shadow-sm mb-4">
                  <img
                    src={item.imageSrc}
                    alt={t(item.imageAlt || item.title)}
                    draggable={false}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <h3 className="text-xl md:text-2xl lg:text-[28px] font-bold text-[#002341] mb-2">
                  {t(item.title)}
                </h3>

                {item.description && (
                  <p
                    style={{ lineHeight: "1.4" }}
                    className="text-[#002341] text-sm md:text-base lg:text-[16px] font-normal line-clamp-3"
                  >
                    {t(item.description)}
                  </p>
                )}
              </motion.div>
            );
          })}
      </motion.div>

      {/* Controles */}
      <div className="w-full px-5 md:px-12 lg:px-[122px]">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setIsPlaying((p) => !p)}
            className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-neutral-800 transition-colors shadow-sm focus:outline-none"
            aria-label={isPlaying ? t("Pausar") : t("Reproduzir")}
          >
            {isPlaying ? (
              <svg
                width="14"
                height="16"
                viewBox="0 0 14 16"
                fill="currentColor"
              >
                <rect width="4" height="16" rx="1" />
                <rect x="10" width="4" height="16" rx="1" />
              </svg>
            ) : (
              <svg
                width="14"
                height="16"
                viewBox="0 0 14 16"
                fill="currentColor"
              >
                <polygon points="2,0 14,8 2,16" />
              </svg>
            )}
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-neutral-100 text-[#0B1B3D] flex items-center justify-center hover:bg-neutral-200 transition-colors shadow-sm focus:outline-none"
              aria-label={t("Anterior")}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-blue-700 text-white flex items-center justify-center hover:bg-blue-800 transition-colors shadow-sm focus:outline-none"
              aria-label={t("Próximo")}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
