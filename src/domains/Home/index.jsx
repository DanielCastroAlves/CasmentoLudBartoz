import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
// import { appLanguage } from "../../Assets/appLanguage.js";
import { useLanguage } from "../../hooks/useLanguage.jsx";
import text from "../../Assets/text.json";
import { Header } from "../../Components/Body/Header/index.jsx";
import { Button, Stack, Typography, useTheme } from "@mui/material";
import { HomeContainer } from "./style.js";

export const Home = () => {
    const { language } = useLanguage();

    const theme = useTheme();

    // return <div>{text[language].title}</div>;
    return (
        <Stack width="100%">
            <HomeContainer>
                <Header />
                <Stack alignItems="center" justifyContent="center" height="100%">
                    <Typography fontSize="38px" fontWeight={700} color={theme.palette.primary.main}>
                        LUDMILLA & BARTOSZ
                    </Typography>
                    <Typography fontSize="23px" fontWeight={300} color={theme.palette.primary.main}>
                        12.05.2024 | BÚZIOS
                    </Typography>
                </Stack>
            </HomeContainer>
            <Stack height="2000px">...</Stack>
        </Stack>
    );
};
