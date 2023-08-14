import { createContext, useState } from "react";

export const LanguageContext = createContext();

export const LanguageContextProvider = ({ children }) => {
    const [language, setLanguage] = useState("pt");
    const [urlForm, setUrlForm] = useState('https://form.jotform.com/232013769282355')

    const handleLanguage = (lang) => {
        setLanguage(lang);
    };

    const handleFormLanguage = (lang) => {
        switch(lang) {
            case 'pt':
              setUrlForm('https://form.jotform.com/232013769282355')
              break;
            case 'pol':
                setUrlForm('https://form.jotform.com/232013397735355')
              break;
            case 'eng':
                setUrlForm('https://form.jotform.com/232012755193047')
              break;
            case 'es':
                setUrlForm('https://form.jotform.com/232013397735355')
              break;
            default:
                setUrlForm('https://form.jotform.com/232013769282355')
          }
    }

    const providerValues = {
        language,
        setLanguage,
        handleLanguage,
        urlForm,
        handleFormLanguage
    };

    return <LanguageContext.Provider value={providerValues}>{children}</LanguageContext.Provider>;
};
