import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { pageTranslations } from "./pageTranslations";

const resources = {
  pt: {
    translation: {
      header: {
        primaryNavigation: "Navegação principal",
        changeLanguage: "Alterar idioma",
        language: "Idioma",
        openMenu: "Abrir menu",
        closeMenu: "Fechar menu",
        contact: "Contate-nos",
      },
      navigation: {
        home: "Início",
        services: "Serviços",
        infrastructure: "Infraestrutura",
        support: "Suporte Técnico",
        cloud: "Cloud",
        security: "Segurança",
        about: "Sobre nós",
        contact: "Contato",
      },
    },
  },
  fr: {
    translation: {
      header: {
        primaryNavigation: "Navigation principale",
        changeLanguage: "Changer de langue",
        language: "Langue",
        openMenu: "Ouvrir le menu",
        closeMenu: "Fermer le menu",
        contact: "Nous contacter",
      },
      navigation: {
        home: "Accueil",
        services: "Services",
        infrastructure: "Infrastructure",
        support: "Support technique",
        cloud: "Cloud",
        security: "Sécurité",
        about: "À propos",
        contact: "Contact",
      },
      ...pageTranslations.fr,
    },
  },
  en: {
    translation: {
      header: {
        primaryNavigation: "Main navigation",
        changeLanguage: "Change language",
        language: "Language",
        openMenu: "Open menu",
        closeMenu: "Close menu",
        contact: "Contact us",
      },
      navigation: {
        home: "Home",
        services: "Services",
        infrastructure: "Infrastructure",
        support: "Technical support",
        cloud: "Cloud",
        security: "Security",
        about: "About us",
        contact: "Contact",
      },
      ...pageTranslations.en,
    },
  },
};

const syncDocumentLanguage = (language: string) => {
  document.documentElement.lang = language;
  document.title = i18n.t("Statucore | Tecnologia com propósito");
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute(
      "content",
      i18n.t(
        "Infraestrutura, suporte técnico, cloud e segurança para a tecnologia do seu negócio avançar.",
      ),
    );
};

i18n.on("languageChanged", syncDocumentLanguage);

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "pt",
    supportedLngs: ["pt", "fr", "en"],
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage"],
      lookupLocalStorage: "statucore-language",
      caches: ["localStorage"],
    },
  })
  .then(() => syncDocumentLanguage(i18n.resolvedLanguage ?? "pt"));

export default i18n;
