import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import sv from '../locales/sv/translation.json';
import en from '../locales/en/translation.json';

const resources = {
  sv: { translation: sv },
  en: { translation: en },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'sv',
  fallbackLng: 'sv',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
