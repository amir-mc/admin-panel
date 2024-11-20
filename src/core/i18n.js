import i18n from 'i18next';
import Backends from 'i18next-http-backend';
import { initReactI18next } from "react-i18next";
 
i18n.use(Backends).use(initReactI18next).init({
    lng:"fa",
})
export default i18n;   
