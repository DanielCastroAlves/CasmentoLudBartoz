import { createContext, useState } from "react";

export const LanguageContext = createContext();

export const LanguageContextProvider = ({ children }) => {
    const [urlLanguage, setUrlLanguage] = useState("pt");

    const handleUrlLanguage = (lang) => {
        setUrlLanguage(lang);
    };

    const providerValues = {
        urlLanguage,
        setUrlLanguage,
        handleUrlLanguage,
    };

    return <LanguageContext.Provider value={providerValues}>{children}</LanguageContext.Provider>;
};
