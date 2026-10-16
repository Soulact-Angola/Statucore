import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

interface FaqItem {
  question: string;
  answer: string;
}

export const FaqSection: React.FC = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      question: "Os serviços podem ser adaptados à minha empresa?",
      answer:
        "Sim. As soluções podem ser definidas de acordo com a dimensão da organização, a infraestrutura existente, os objetivos e as necessidades identificadas.",
    },
    {
      question: "Como posso saber qual é o serviço mais adequado?",
      answer:
        "O primeiro passo é partilhar connosco o seu desafio. A nossa equipa poderá compreender a necessidade e orientar os próximos passos.",
    },
    {
      question: "Posso contratar mais do que um serviço?",
      answer:
        "As diferentes áreas podem ser complementares. Por exemplo, uma empresa pode combinar infraestrutura, suporte técnico e segurança, de acordo com as suas necessidades e com o âmbito dos serviços disponíveis.",
    },
    {
      question: "Como posso solicitar uma proposta?",
      answer:
        "Preencha o formulário de contacto, indique o serviço de interesse e descreva brevemente a sua necessidade. A equipa poderá analisar o pedido e dar seguimento ao contacto.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="w-full bg-white px-4 sm:px-6 md:px-12 lg:px-[84px] xl:px-24 py-12 sm:py-16 md:py-24"
      data-aos="fade-up"
    >
      <div className="max-w-4xl mx-auto">
        {/* Título Principal */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-[40px] font-bold font-geist tracking-tight text-[#1C3A4A]">
            {t("Perguntas frequentes")}
          </h2>
        </div>

        {/* Lista de Acordeões / FAQ */}
        <div className="flex flex-col gap-3 sm:gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#F3F2F0] rounded-2xl overflow-hidden transition-colors"
              >
                {/* Cabeçalho da Pergunta (Clicável) */}
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer gap-4"
                >
                  <span className="font-poppins text-sm sm:text-base md:text-lg font-medium text-[#1C3A4A]">
                    {t(faq.question)}
                  </span>

                  {/* Ícone animado (+ muda para -) */}
                  <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center relative text-[#1C3A4A]">
                    {/* Linha Horizontal (Sempre visível) */}
                    <span className="absolute w-3.5 sm:w-4 h-0.5 bg-[#1C3A4A] rounded-full" />

                    {/* Linha Vertical (Desvanece/roda para formar o traço '-') */}
                    <motion.span
                      animate={{
                        rotate: isOpen ? 90 : 0,
                        opacity: isOpen ? 0 : 1,
                      }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="absolute w-0.5 h-3.5 sm:h-4 bg-[#1C3A4A] rounded-full"
                    />
                  </div>
                </button>

                {/* Resposta com Animação de Altura (Framer Motion) */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: [0.04, 0.62, 0.23, 0.98],
                      }}
                    >
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 text-xs sm:text-sm md:text-base font-poppins text-[#1C3A4A] opacity-90 leading-relaxed">
                        <p>{t(faq.answer)}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
