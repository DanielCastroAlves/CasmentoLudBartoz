import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
// import { appLanguage } from "../../Assets/appLanguage.js";
import { useLanguage } from "../../hooks/useLanguage.jsx";
import text from '../../Assets/text.json'

export const Home = () => {
    const { language } = useLanguage();

    return <div>{text[language].title}</div>;
};
