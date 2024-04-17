import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enLang from "./lang/en.json";
import frLang from "./lang/fr.json";
import arLang from "./lang/ar.json";
const resources = {
  en: {
    translation: enLang,
  },
  fr: {
    translation: frLang,
  },
  ar: {
    translation: arLang,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
