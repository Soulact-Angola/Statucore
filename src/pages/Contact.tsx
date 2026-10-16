import { useState } from "react";
import { useTranslation } from "react-i18next";
import HeroBanner from "../components/HeroBanner";

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    emailCorporativo: "",
    ddi: "244",
    telefone: "",
    servicoInteresse: "",
    mensagem: "",
    concordoPrivacidade: false,
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const serviceOptions = [
    "Infraestrutura",
    "Suporte Técnico",
    "Cloud",
    "Cibersegurança",
    "Serviços Geridos",
    "Monitorização 24/7",
    "Helpdesk",
    "Outsourcing IT",
    "Outro",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const { checked } = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados do formulário:", formData);
  };

  return (
    <>
      <HeroBanner
        title="Vamos falar sobre os desafios tecnológicos da sua empresa."
        subtitle="O núcleo da sua operação tecnológica"
        imageSrc="/heroContact.jpg"
        buttons={[{ title: "Falar com um especialista", href: "/contact" }]}
      />

      <section className="w-full bg-white px-6 py-16 md:px-12 lg:px-28 md:py-24 text-[#0f172a]">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-12 lg:gap-16 items-start">
            {/* Coluna da Esquerda: Título, Descrição e Informações */}
            <div className="flex flex-col justify-between h-full pt-2">
              <div>
                <h2
                  style={{ lineHeight: "1.2" }}
                  className="text-3xl sm:text-4xl lg:text-[56px] font-semibold tracking-tight text-[#002341] leading-tight mb-6  lg:max-w-[602px]"
                >
                  {t("Conte-nos o que a sua empresa precisa.")}
                </h2>

                <p
                  style={{ lineHeight: "1.4" }}
                  className="text-[#636364] text-sm sm:text-base lg:text-[18px] font-normal leading-relaxed mb-10 lg:max-w-[602px]"
                >
                  {t(
                    "Use o formulário para descrever o que a sua organização precisa. Responderemos com a atenção e o rigor que o seu desafio merece.",
                  )}
                </p>

                <div className="space-y-6">
                  {/* Localização */}
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0006 2.01565C11.032 2.01565 10.1256 2.19532 9.28163 2.55465C8.43763 2.91398 7.69529 3.41398 7.05463 4.05465C6.41396 4.69531 5.91396 5.43765 5.55463 6.28165C5.19529 7.12565 5.01562 8.03198 5.01562 9.00065C5.01562 9.87598 5.13296 10.7196 5.36763 11.5316C5.60229 12.3436 5.95396 13.1093 6.42263 13.8286C6.89129 14.61 7.41463 15.3443 7.99263 16.0316C8.57063 16.719 9.09396 17.4533 9.56263 18.2346C9.81263 18.61 10.0236 18.9773 10.1956 19.3366C10.3676 19.696 10.5473 20.0786 10.7346 20.4846C10.8286 20.672 10.9223 20.883 11.0156 21.1176C11.109 21.3523 11.234 21.5553 11.3906 21.7266C11.5473 21.898 11.7503 21.984 11.9996 21.9846C12.2496 21.9846 12.4526 21.8986 12.6086 21.7266C12.7646 21.5546 12.8896 21.3516 12.9836 21.1176C13.0776 20.8836 13.1713 20.6726 13.2646 20.4846C13.452 20.0786 13.6316 19.696 13.8036 19.3366C13.9756 18.9773 14.1866 18.61 14.4366 18.2346C14.9053 17.4846 15.4286 16.758 16.0066 16.0546C16.5846 15.3513 17.108 14.609 17.5766 13.8276C18.0453 13.109 18.397 12.3433 18.6316 11.5306C18.8663 10.718 18.9836 9.87431 18.9836 8.99965C18.9836 8.03098 18.804 7.12465 18.4446 6.28065C18.0853 5.43665 17.5853 4.69431 16.9446 4.05365C16.304 3.41298 15.5616 2.91298 14.7176 2.55365C13.8736 2.19431 12.9673 2.01465 11.9986 2.01465L12.0006 2.01565ZM12.0006 11.7656C11.3133 11.7656 10.7273 11.5156 10.2426 11.0156C9.75796 10.5156 9.51563 9.92198 9.51563 9.23465C9.51563 8.54731 9.75796 7.96132 10.2426 7.47665C10.7273 6.99198 11.3133 6.74965 12.0006 6.74965C12.688 6.74965 13.274 6.99198 13.7586 7.47665C14.2433 7.96132 14.4856 8.54731 14.4856 9.23465C14.4856 9.92198 14.2433 10.5156 13.7586 11.0156C13.274 11.5156 12.688 11.7656 12.0006 11.7656Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-gray-900 leading-snug">
                        {t("Localização")}
                      </h3>
                      <p className="text-sm text-gray-500 leading-normal">
                        Luanda, Angola
                      </p>
                    </div>
                  </div>

                  {/* Contacto */}
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <svg
                        width="20"
                        height="17"
                        viewBox="0 0 20 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18 4.032V2.016L9.984 7.032L1.968 2.016V4.032L9.984 9.001L18 4.032ZM18 0C18.5313 0 18.9923 0.203 19.383 0.609C19.7737 1.015 19.969 1.48367 19.969 2.015V14.015C19.969 14.5463 19.7737 15.015 19.383 15.421C18.9923 15.827 18.5313 16.03 18 16.03H1.969C1.43767 16.03 0.976667 15.827 0.586 15.421C0.195333 15.015 0 14.5463 0 14.015V2.015C0 1.48367 0.195333 1.015 0.586 0.609C0.976667 0.203 1.43767 0 1.969 0H18Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-gray-900 leading-snug">
                        {t("Contacto")}
                      </h3>
                      <p className="text-sm text-gray-500 leading-normal">
                        {t("Disponível através deste formulário")}
                      </p>
                    </div>
                  </div>

                  {/* Monitorização */}
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.2196 16.219L17.0166 14.906L12.5166 12.187V6.98399H11.0166V12.984L16.2196 16.219ZM12.0006 2.01599C14.7506 2.01599 17.1023 2.99266 19.0556 4.94599C21.009 6.89932 21.9856 9.25099 21.9856 12.001C21.9856 14.751 21.009 17.1027 19.0556 19.056C17.1023 21.0093 14.7506 21.986 12.0006 21.986C9.25062 21.986 6.89896 21.0093 4.94563 19.056C2.99229 17.1027 2.01563 14.751 2.01562 12.001C2.01562 9.25099 2.99229 6.89932 4.94563 4.94599C6.89896 2.99266 9.25062 2.01599 12.0006 2.01599Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-gray-900 leading-snug">
                        {t("Monitorização")}
                      </h3>
                      <p className="text-sm text-gray-500 leading-normal">
                        {t("Operação contínua, 24 horas por dia")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna da Direita: Formulário */}
            <div className="min-w-0 bg-[#f8fafc] rounded-2xl p-6 sm:p-8 shadow-xl shadow-gray-200/50 border border-gray-100 relative">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    {t("Nome")}
                  </label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:border-blue-600 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    {t("Empresa")}
                  </label>
                  <input
                    type="text"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:border-blue-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    {t("Email corporativo")}
                  </label>
                  <input
                    type="email"
                    name="emailCorporativo"
                    value={formData.emailCorporativo}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:border-blue-600 transition-colors"
                    required
                  />
                </div>

                <div className="grid grid-cols-12 gap-3">
                  <div className="col-span-4 sm:col-span-3">
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      {t("DDI")}
                    </label>
                    <input
                      type="text"
                      name="ddi"
                      value={formData.ddi}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:border-blue-600 transition-colors text-center"
                    />
                  </div>
                  <div className="col-span-8 sm:col-span-9">
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      {t("Telefone")}
                    </label>
                    <input
                      type="tel"
                      name="telefone"
                      placeholder="922556655"
                      value={formData.telefone}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:border-blue-600 transition-colors placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    {t("Serviço de interesse")}
                  </label>
                  <div
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 flex items-center justify-between cursor-pointer focus:border-blue-600"
                  >
                    <span
                      className={
                        formData.servicoInteresse
                          ? "text-gray-900"
                          : "text-gray-400"
                      }
                    >
                      {formData.servicoInteresse
                        ? t(formData.servicoInteresse)
                        : t("Selecione um serviço")}
                    </span>
                    <svg
                      className={`w-4 h-4 text-gray-500 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>

                  {isDropdownOpen && (
                    <div className="absolute z-30 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-xl max-h-60 overflow-y-auto">
                      {serviceOptions.map((option, idx) => (
                        <div
                          key={idx}
                          onClick={() => {
                            setFormData((prev) => ({
                              ...prev,
                              servicoInteresse: option,
                            }));
                            setIsDropdownOpen(false);
                          }}
                          className={`px-4 py-2.5 text-sm cursor-pointer transition-colors ${
                            formData.servicoInteresse === option
                              ? "bg-blue-50 text-blue-700 font-medium"
                              : "text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          {t(option)}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    {t("Mensagem")}
                  </label>
                  <textarea
                    name="mensagem"
                    rows={3}
                    value={formData.mensagem}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:border-blue-600 transition-colors resize-none"
                  />
                </div>

                <div className="flex items-start gap-2.5 pt-1">
                  <input
                    type="checkbox"
                    name="concordoPrivacidade"
                    id="privacidade"
                    checked={formData.concordoPrivacidade}
                    onChange={handleChange}
                    className="mt-0.5 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                    required
                  />
                  <label
                    htmlFor="privacidade"
                    className="text-xs text-gray-500 leading-normal select-none"
                  >
                    {t(
                      "Gostaria que a Statucore entrasse em contato comigo com base nas informações fornecidas acima. Concordo com o processamento dos meus dados pessoais conforme descrito no",
                    )}{" "}
                    <a
                      href="#"
                      className="text-blue-600 underline hover:text-blue-800"
                    >
                      {t("Aviso de Privacidade")}
                    </a>
                    .
                  </label>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-[#0047ff] hover:bg-blue-700 text-white font-medium text-sm rounded-lg transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    {t("Enviar pedido")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
