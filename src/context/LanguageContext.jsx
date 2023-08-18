import { createContext, useState } from "react";
import brIcon from '../Assets/Images/brIcon.png'
import polIcon from '../Assets/Images/polIcon.png'
import engIcon from '../Assets/Images/engIcon.png'
import esIcon from '../Assets/Images/esIcon.png'

export const LanguageContext = createContext();

export const LanguageContextProvider = ({ children }) => {
    const [language, setLanguage] = useState("pt");
    const [urlForm, setUrlForm] = useState('https://form.jotform.com/232013769282355')

    const handleLanguage = (lang) => {
        setLanguage(lang);
    };

    const [menuOptions, setMenuOptions] = useState([
        {
            alt: "Bandeira do Brasil",
            image: brIcon,
            selected: true,
            language: "pt",
        },
        {
            alt: "Bandeira da Polônia",
            image: polIcon,
            selected: false,
            language: "pl",
        },
        {
            alt: "Bandeira do Reino Unido",
            image: engIcon,
            selected: false,
            language: "en",
        },
        {
            alt: "Bandeira da Espanha",
            image: esIcon,
            selected: false,
            language: "es",
        },
    ]);

    const handleFormLanguage = (lang) => {
        switch(lang) {
            case 'pt':
              setUrlForm('https://form.jotform.com/232013769282355')
              break;
            case 'pl':
                setUrlForm('https://form.jotform.com/232013749527355')
              break;
            case 'en':
                setUrlForm('https://form.jotform.com/232012755193047')
              break;
            case 'es':
                setUrlForm('https://form.jotform.com/232012755193047')
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
        handleFormLanguage,
        menuOptions,
        setMenuOptions
    };

    return <LanguageContext.Provider value={providerValues}>{children}</LanguageContext.Provider>;
};
