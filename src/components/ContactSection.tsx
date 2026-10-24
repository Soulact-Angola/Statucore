import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export interface ContactSectionProps {
  title?: string;
  imageSrc: string;
  imageAlt?: string;
  serviceOptions?: string[];
  onSubmit?: (formData: Record<string, any>) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  title = "Conte-nos o que a sua empresa precisa.",
  imageSrc,
  imageAlt = "Atendente de suporte",
  serviceOptions = [
    "Infraestrutura",
    "Suporte Técnico",
    "Cloud",
    "Cibersegurança",
    "Serviços Geridos",
    "Monitorização 24/7",
    "Helpdesk",
    "Outsourcing IT",
    "Outro",
  ],
  onSubmit,
}) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    emailCorporativo: "",
    ddi: "+351",
    telefone: "",
    servicoInteresse: "",
    mensagem: "",
    concordoPrivacidade: false,
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
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
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <section className="w-full bg-[#f1f5f9] px-6 py-16 md:px-12 lg:px-28 md:py-24 text-[#0f172a]">
      <div className="w-full">
        {/* Título Principal */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0a0f1d] max-w-xl leading-tight">
            {t(title)}
          </h2>
        </div>

        {/* Layout de duas colunas (Imagem + Formulário) */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-8 items-stretch">
          {/* Coluna da Imagem */}
          <div className="w-full lg:flex">
            <div className="w-full h-[400px] sm:h-[480px] lg:h-auto lg:flex-1 rounded-2xl overflow-hidden shadow-sm">
              <img
                src={imageSrc}
                alt={t(imageAlt)}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Coluna do Formulário */}
          <div className="min-w-0 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Nome */}
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

              {/* Empresa */}
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

              {/* Email Corporativo */}
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

              {/* DDI e Telefone (Linha Dupla) */}
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

              {/* Serviço de interesse (Com suporte ao menu flutuante demonstrado na imagem auxiliar) */}
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

                {/* Lista Dropdown Estilizada conforme a segunda vista da imagem */}
                {isDropdownOpen && (
                  <div className="absolute z-20 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
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

              {/* Mensagem */}
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

              {/* Checkbox de Termos e Privacidade */}
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
                    "Gostaria que a Statucore entrasse em contacto comigo com base nas informações fornecidas acima. Concordo com o processamento dos meus dados pessoais conforme descrito no",
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

              {/* Botão de Envio */}
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
  );
};
