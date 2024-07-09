import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18n
  .use(Backend)
  .use(initReactI18next)
  .init(
    {
      fallbackLng: "tr",
      backend: {
        loadPath:
          "https://productive-rogue-hedge.glitch.me/translations/{{lng}}",
      },
    },
    (err) => {
      if (err) return console.error("something went wrong loading", err);
      else {
        console.log("translation request success");
      }
    }
  );

export default i18n;
