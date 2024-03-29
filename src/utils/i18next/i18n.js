import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import XHR from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import translationRU from "../../locales/ru/translation.json";
import translationEN from "../../locales/en/translation.json";

const resources = {
    ru: {
        translation: translationRU,
    },
    en: {
        translation: translationEN,
    },
};

const languages = ["ru", "en"];

i18n
    // load translation using xhr -> see /public/locales
    // learn more: https://github.com/i18next/i18next-xhr-backend
    .use(XHR)
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        resources,
        whitelist: languages,
        fallbackLng: "en", // use en if detected lng is not available
        debug: true,
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        react: {
            transEmptyNodeValue: "",
            useSuspense: false,
            transSupportBasicHtmlNodes: true,
            transKeepBasicHtmlNodesFor: ["br", "strong", "i"],
        }
    });

export default i18n;

export { languages };
