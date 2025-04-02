import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Übersetzungen
const resources = {
  en: {
    translation: {
      "hello": "Hello World"
    }
  },
  de: {
    translation: {
      "hello": "Hallo Welt"
    }
  },
  ru: {
    translation: {
      "hello": "Привет мир"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
