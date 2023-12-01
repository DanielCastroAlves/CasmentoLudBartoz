import React from "react";
import { useLanguage } from "../../hooks/useLanguage.jsx";
import { Header } from "../../Components/Body/Header/index.jsx";
import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { HomeContainer } from "./style.js";
import { useLocation } from "react-router-dom";
import text from "../../Assets/text.json";

export const Home = () => {
    const { urlForm } = useLanguage();

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const location = useLocation();
    const url = location.pathname;

    const { language } = useLanguage();

    return (
        <Stack direction="column" width="100%" height="100%">
            <HomeContainer>
                {url === "/home" && <Header />}

                <Stack alignItems="center" justifyContent="center" height="100%" px={4} mt={!isMobile ? 110 : 50}>
                    {/* <SubListItem key={j} dangerouslySetInnerHTML={{ __html: p }} /> */}

                    <Typography fontSize={!isMobile ? theme.spacing(9.5) : theme.spacing(7)} fontWeight={400} color={theme.palette.primary.main} style={{ textAlign: "center" }}>
                        Ludmilla & Bartosz
                    </Typography>
                    {/* 
                    {!isMobile ? (
                        <>
                            <Typography fontSize={!isMobile ? theme.spacing(9.5) : theme.spacing(7)} fontWeight={400} color={theme.palette.primary.main} style={{ textAlign: "center" }}>
                                {text.home.TtitleSite[language]}
                            </Typography>
                        </>
                    ) : (
                        <>
                            <Typography fontSize={!isMobile ? theme.spacing(9.5) : theme.spacing(7)} fontWeight={400} color={theme.palette.primary.main} style={{ textAlign: "center" }}>
                                {language === "en" ? "Ludmilla & Bartosz's" : text.MenuHeaderLinks.wedding[language]}
                            </Typography>
                            <Typography fontSize={!isMobile ? theme.spacing(9.5) : theme.spacing(7)} fontWeight={400} color={theme.palette.primary.main} style={{ textAlign: "center" }}>
                                {language === "en" ? text.MenuHeaderLinks.wedding[language] : "Ludmilla & Bartosz"}
                            </Typography>
                        </>
                    )} */}

                    <Typography fontSize={!isMobile ? theme.spacing(5.75) : theme.spacing(4)} fontWeight={300} color={theme.palette.primary.main} fontFamily="Open Sans">
                        12.05.2024 | BÚZIOS
                    </Typography>
                </Stack>
            </HomeContainer>
            <Stack justifyContent="center" alignItems="center" gap={4} sx={{ overflow: "hidden" }} mt={15}>
                <Typography fontSize={theme.spacing(8)} fontWeight={700} color={theme.palette.primary.main}>
                    RSVP
                </Typography>
                <Typography fontSize={theme.spacing(4.5)} fontFamily={"Open Sans"} fontWeight={300} color={theme.palette.primary.main}>
                    {text.home.Subtitle[language]}
                </Typography>
                <Stack height="100%"></Stack>
                <iframe src={urlForm} title="Confirme Presença" width="100%" height={isMobile ? "3000px" : "2000px"} frameBorder="0" scrolling="no"></iframe>
            </Stack>
        </Stack>
    );
};
