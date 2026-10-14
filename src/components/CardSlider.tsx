import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

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

export default function CardSlider({
  items,
  autoPlayInterval = 4000,
}: CardSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [cardWidth, setCardWidth] = useState(0);

  const cardRef = useRef<HTMLDivElement>(null);

  // Atualiza a largura real do card dinamicamente ao redimensionar a tela
  useEffect(() => {
    const updateCardWidth = () => {
      if (cardRef.current) {
        setCardWidth(cardRef.current.offsetWidth);
      }
    };

    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  // Controle do Autoplay
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      handleNext();
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [isPlaying, currentIndex, autoPlayInterval, items.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length,
    );
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Reorganiza o array ciclicamente mantendo o comportamento perfeito que você aprovou
  const orderedItems = [
    ...items.slice(currentIndex),
    ...items.slice(0, currentIndex),
  ];

  return (
    <div className="w-full py-12 bg-white overflow-hidden">
      {/* 1. CONTAINER DO CARROSSEL: Respeita os 122px à esquerda e sangra na direita */}
      <div className="w-full pl-[122px] overflow-hidden mb-10">
        <motion.div className="flex gap-8" layout>
          {orderedItems.map((item, index) => (
            <motion.div
              key={item.id}
              ref={index === 0 ? cardRef : null}
              layout
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              // Largura dinâmica mantendo 2 cards inteiros e o pedacinho do próximo na ponta
              style={{ width: "calc((100vw - 122px - 32px) / 2.2)" }}
              className="flex-shrink-0 min-w-[280px] md:min-w-[400px]"
            >
              <div className="relative w-full max-h-[400px] aspect-[4/3] overflow-hidden rounded-3xl shadow-sm mb-4">
                <img
                  src={item.imageSrc}
                  alt={item.imageAlt || item.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <h3 className="text-xl md:text-2xl lg:text-[28px] font-bold text-[#002341] mb-2">
                {item.title}
              </h3>

              {item.description && (
                <p
                  style={{ lineHeight: "1.4" }}
                  className=" text-[#002341] text-sm md:text-base lg:text-[16px] font-normal leading-relaxed line-clamp-3"
                >
                  {item.description}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="w-full px-[122px]">
        <div className="flex items-center justify-between">
          {/* Botão Play/Pause */}
          <button
            onClick={togglePlayPause}
            className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-neutral-800 transition-colors shadow-sm focus:outline-none"
            aria-label={isPlaying ? "Pausar" : "Reproduzir"}
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

          {/* Botões de Avançar e Recuar */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-neutral-100 text-[#0B1B3D] flex items-center justify-center hover:bg-neutral-200 transition-colors shadow-sm focus:outline-none"
              aria-label="Anterior"
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
              aria-label="Próximo"
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
