import { createContext, useState } from "react";

export const LanguageContext = createContext();

export const LanguageContextProvider = ({ children }) => {
    const [language, setLanguage] = useState("pt");

    const handleLanguage = (lang) => {
        setLanguage(lang);
    };

    const providerValues = {
        language,
        setLanguage,
        handleLanguage,
    };

    return <LanguageContext.Provider value={providerValues}>{children}</LanguageContext.Provider>;
};
