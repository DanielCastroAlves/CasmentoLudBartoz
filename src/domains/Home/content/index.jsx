import React from "react";
import { Button, Stack, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { pol, ptBr } from "../../languageTexts.js";
import { Header } from "../../Components/Body/Header/index.jsx";

import { HomeContainer } from "./index.jsx";


export const Home = () => {
    const [language, setlanguage] = useState(null);

    const handleLanguage = (value) => {
        value === "Português" ? setlanguage(ptBr) : setlanguage(pol);
    };

    const theme = useTheme();
    return (
        <HomeContainer justifyContent="flex-start" alignItems="center" width="100%" height="100vh" gap={8}>
            {/* <Header /> */}
            {/* <Stack direction="row" width='100%' height='100%' justifyContent="center" alignItems="center" gap={8}>
                <Button variant="contained" onClick={() => handleLanguage("Português")}>
                    Português
                </Button>
                <Button variant="outlined" onClick={() => handleLanguage("Polonês")}>
                    Polonês
                </Button>
            </Stack> */}

            {language && <Typography variant="h2">{language}</Typography>}
        </HomeContainer>
    );
};
