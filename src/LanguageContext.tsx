/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, TranslationDictionary, translations } from "./translations";

interface LanguageContextProps {
  language: Language;
  t: TranslationDictionary;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Try to load initial language from localStorage or default to Romanian "ro"
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("algorithm_pref_lang") as Language;
    if (saved === "ro" || saved === "ru") {
      return saved;
    }
    return "ro"; // Default to Romanian as first requested, RO/RU
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("algorithm_pref_lang", lang);
  };

  const t = translations[language];

  // Also sync HTML lang attribute
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, t, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
