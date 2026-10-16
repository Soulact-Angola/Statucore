import { useTranslation } from "react-i18next";

export default function PrivacyPolicy() {
  const { t } = useTranslation();
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-4">
        {t("Política de Privacidade")}
      </h1>
      <p className="text-gray-600 leading-relaxed">
        {t(
          "Esta página contém as informações sobre como recolhemos, usamos e protegemos os seus dados pessoais na StatuCore.",
        )}
      </p>
    </div>
  );
}
