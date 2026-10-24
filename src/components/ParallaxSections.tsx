// ParallaxSections.tsx
import { useEffect, useRef, useState } from "react";

export interface SectionData {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle: string;
  cta: string;
  href: string;
  image: string;
}

const DEFAULT_SECTIONS: SectionData[] = [
  {
    id: "tecnologia",
    title: "Tecnologia & Serviços",
    subtitle: "O núcleo da sua operação tecnológica",
    cta: "Falar com um especialista",
    href: "#contacto",
    image: "/1.png",
  },
  {
    id: "outra",
    title: "Outra secção",
    subtitle: "Descrição da secção",
    cta: "Saber mais",
    href: "#mais",
    image: "/2.png",
  },
  {
    id: "outra",
    title: "Outra secção",
    subtitle: "Descrição da secção",
    cta: "Saber mais",
    href: "#mais",
    image: "/10.png",
  },
];

const clamp = (v: number, min = 0, max = 1) => Math.min(Math.max(v, min), max);

const SHIFT = 15; // vh de parallax da imagem que entra (0 = sem parallax)
const OVERLAY = 0.4; // mesmo overlay para todas as imagens (0–1)

export default function ParallaxSections({
  sections = DEFAULT_SECTIONS,
}: {
  sections?: SectionData[];
}) {
  const ref = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [navVisible, setNavVisible] = useState(false);
  const count = sections.length;

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const el = ref.current;
      if (!el) return;
      const { top, bottom } = el.getBoundingClientRect();
      const mid = window.innerHeight / 2;

      setProgress(clamp(-top / window.innerHeight, 0, count - 1));
      // O indicador só aparece enquanto este bloco ocupa o ecrã
      setNavVisible(top < mid && bottom > mid);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [count]);

  const goTo = (index: number) => {
    const el = ref.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: top + clamp(index, 0, count - 1) * window.innerHeight,
      behavior: "smooth",
    });
  };

  const thumbHeight = 100 / count;
  const thumbTop = (progress / Math.max(count - 1, 1)) * (100 - thumbHeight);
  const current = Math.round(progress);

  return (
    <>
      {/* Indicador lateral (só visível dentro desta secção) */}
      <nav
        aria-label="Section navigation"
        aria-hidden={!navVisible}
        className={`fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-6 transition-opacity duration-300 md:flex lg:right-[34px] ${
          navVisible ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <button
          type="button"
          aria-label="Previous section"
          tabIndex={navVisible ? 0 : -1}
          onClick={() => goTo(current - 1)}
          className="flex h-8 w-8 items-center justify-center text-white/90 transition-opacity hover:opacity-60"
        >
          <svg
            width="18"
            height="10"
            viewBox="0 0 18 10"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path d="M1 9l8-8 8 8" />
          </svg>
        </button>

        <div
          className="relative h-[210px] w-[3px] bg-white/30"
          aria-hidden="true"
        >
          <span
            className="absolute left-0 w-full bg-white"
            style={{ height: `${thumbHeight}%`, top: `${thumbTop}%` }}
          />
        </div>

        <button
          type="button"
          aria-label="Next section"
          tabIndex={navVisible ? 0 : -1}
          onClick={() => goTo(current + 1)}
          className="flex h-8 w-8 items-center justify-center text-white/90 transition-opacity hover:opacity-60"
        >
          <svg
            width="18"
            height="10"
            viewBox="0 0 18 10"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path d="M1 1l8 8 8-8" />
          </svg>
        </button>
      </nav>

      <main ref={ref} className="relative bg-black">
        {sections.map((s, i) => {
          // Só a secção que entra tem parallax; a que sai fica parada e é coberta
          const e = i === 0 ? 1 : clamp(progress - (i - 1));
          const offset = -(1 - e) * SHIFT;

          return (
            <section
              key={s.id}
              id={s.id}
              className="sticky top-0 h-screen w-full overflow-hidden bg-black"
            >
              {/* Imagem */}
              <div
                className="absolute inset-x-0 -bottom-[15vh] top-0 will-change-transform"
                style={{ transform: `translate3d(0, ${offset}vh, 0)` }}
              >
                <img
                  src={s.image}
                  alt=""
                  draggable={false}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Overlay único, igual para todas as secções */}
              <div
                className="absolute inset-0 bg-black"
                style={{ opacity: OVERLAY }}
              />

              {/* Conteúdo (fixo, sem fade nem movimento ao sair) */}
              <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
                {s.eyebrow && (
                  <p className="mb-8 text-[15px] font-light uppercase tracking-[0.35em] md:mb-10">
                    {s.eyebrow}
                  </p>
                )}
                <h2 className="max-w-3xl text-4xl font-bold leading-[1.1] sm:text-5xl md:text-6xl">
                  {s.title}
                </h2>
                <p className="mt-6 max-w-xl text-base md:text-lg">
                  {s.subtitle}
                </p>
                <a
                  href={s.href}
                  className="mt-10 inline-flex h-[46px] items-center justify-center rounded-full bg-blue-600 px-6 text-[15px] font-semibold text-white transition-colors duration-300 hover:bg-blue-700"
                >
                  {s.cta}
                </a>
              </div>
            </section>
          );
        })}
      </main>
    </>
  );
}
