import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from '../locales/en/translation.json';
import translationKO from '../locales/ko/translation.json';

// the translations
const resources = {
  en: {
    translation: translationEN
  },
  ko: {
    translation: translationKO
  }
};

const options = {
  order: ['localStorage'],
  lookupLocalStorage: 'i18nextLng',
  caches: ['localStorage']
};
i18n
  .use(initReactI18next)
  // .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: ['ko', 'en'],
    detector: options,
    react: {
      useSuspense: false
    },
    lng: localStorage.getItem('i18nextLng') // if you're using a language detector, do not define the lng option
    // debug: process.env.NODE_ENV === 'development',
  });

export default i18n;
