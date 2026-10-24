import { useTranslation } from "react-i18next";

export default function TermsOfService() {
  const { t } = useTranslation();
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-4">{t("Termos de Serviço")}</h1>
      <p className="text-gray-600 leading-relaxed">
        {t(
          "Ao utilizar os nossos serviços e plataforma, concorda com os seguintes termos e condições gerais de utilização.",
        )}
      </p>
    </div>
  );
}
