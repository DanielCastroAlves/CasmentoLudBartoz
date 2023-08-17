import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
// import { appLanguage } from "../../Assets/appLanguage.js";
import { useLanguage } from "../../hooks/useLanguage.jsx";
import text from "../../Assets/text.json";
import { Header } from "../../Components/Body/Header/index.jsx";
import { Box, Button, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { HomeContainer } from "./style.js";

export const Home = () => {
    const { urlForm } = useLanguage();

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    // return <div>{text[language].title}</div>;
    return (
        <Stack direction="column" width="100%" height="100%">
            <HomeContainer>
                <Header />
                <Stack alignItems="center" justifyContent="center" height="100%" px={4}>
                    <Typography fontSize={theme.spacing(6)} fontWeight={800} color={theme.palette.primary.main}>
                        LUDMILLA & BARTOSZ
                    </Typography>
                    <Typography fontSize={theme.spacing(4)} fontWeight={300} color={theme.palette.primary.main}>
                        12.05.2024 | BÚZIOS
                    </Typography>
                </Stack>
            </HomeContainer>
            <Stack justifyContent="center" alignItems="center" gap={4} sx={{ overflow: "hidden" }}>
                <Typography fontSize={theme.spacing(8)} fontWeight={700} color={theme.palette.secondary.main}>
                    RSVP
                </Typography>
                <Typography fontSize={theme.spacing(4.5)} fontFamily={"Open Sans"} color={theme.palette.gray["500"]}>
                    RESPOND SIL VOUS PLAIT
                </Typography>
                    <iframe src={urlForm} title="Confirme Presença" width="100%" height={isMobile ? '2500px' : '1700px'} frameBorder="0" scrolling="no"></iframe>
            </Stack>
        </Stack>
    );
};
