import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

type Props = {};

const SelectLanguage = (props: Props) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState<"en" | "tr">();

  const changeLanguage = () => {
    alert("Tüm çeviriler henüz tamamlanmamış durumda.");
    if (language === "tr") {
      i18n.changeLanguage("en");
      setLanguage("en");
    } else {
      i18n.changeLanguage("tr");
      setLanguage("tr");
    }
  };

  useEffect(() => {
    if (i18n.language === "tr") {
      setLanguage("tr");
    } else {
      setLanguage("en");
    }
  }, []);
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      onClick={changeLanguage}
      style={{
        width: "24px",
        height: "24px",
        overflow: "hidden",
        borderRadius: "100px",
        backgroundColor: "var(--primary)",
      }}
    >
      <AnimatePresence mode="wait">
        {language === "en" ? (
          <motion.img
            key="en"
            initial={{ x: -32 }}
            animate={{ x: 0 }}
            exit={{ x: 32 }}
            transition={{ duration: "0.1", type: "tween" }}
            src="./images/flags/united-kingdom.png"
            alt="en flag"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        ) : (
          <motion.img
            key="tr"
            initial={{ x: -32 }}
            animate={{ x: 0 }}
            exit={{ x: 32 }}
            transition={{ duration: "0.1", type: "tween" }}
            src="./images/flags/turkey.png"
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default SelectLanguage;
