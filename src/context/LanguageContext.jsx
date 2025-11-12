import React, { createContext, useState, useContext } from "react";

// Context তৈরি করা হলো
const LanguageContext = createContext();

// Provider Component (এইটা wrap করবে পুরো App কে)
export const LanguageProvider = ({ children }) => {
  const [currentLang, setCurrentLang] = useState("en"); // Default English

  const changeLanguage = (lang) => {
    setCurrentLang(lang);
  };

  return (
    <LanguageContext.Provider value={{ currentLang, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// সহজে ব্যবহার করার জন্য custom hook
export const useLanguage = () => useContext(LanguageContext);
