import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { appLanguage } from "../../Assets/appLanguage.js";
import { useLanguage } from "../../hooks/useLanguage.jsx";

export const Home = () => {
    const { urlLanguage } = useLanguage();

    return <div>{appLanguage[urlLanguage].title}</div>;
};
