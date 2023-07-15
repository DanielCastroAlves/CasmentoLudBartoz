import React from "react";
import { Button, Stack, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { pol, ptBr } from "../../../../languageTexts.js";
import bgImage from "../../../../Images/bgmain.jpg";
import { StackTeste } from "./index.js";
import { Header } from "../../../../Components/Header/index.jsx";
import { MenuAppBar } from "../../../../Components/AppBar/index.jsx";

console.log("bgImage", bgImage);

export const Main = () => {
    const [language, setlanguage] = useState(null);

    const handleLanguage = (value) => {
        value === "Português" ? setlanguage(ptBr) : setlanguage(pol);
    };

    const theme = useTheme();
    return (
        <StackTeste justifyContent="flex-start" alignItems="center" width="100%" height="100vh" gap={8}>
            {/* <Header /> */}
            <MenuAppBar />
            <Stack direction="row" width='100%' height='100%' justifyContent="center" alignItems="center" gap={8}>
                <Button variant="contained" onClick={() => handleLanguage("Português")}>
                    Português
                </Button>
                <Button variant="outlined" onClick={() => handleLanguage("Polonês")}>
                    Polonês
                </Button>
            </Stack>

            {language && <Typography variant="h2">{language}</Typography>}
        </StackTeste>
    );
};
