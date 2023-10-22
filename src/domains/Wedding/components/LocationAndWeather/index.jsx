import { Box, Stack, Typography, dividerClasses, useMediaQuery, useTheme } from "@mui/material";
import { useLanguage } from "../../../../hooks/useLanguage";
import { useEffect, useState } from "react";
import { CeremonyContainer, CeremonyContainerMobile, brMapContainer } from "./style";
import sargatana from "../../../../Assets/Images/Sargatana.png";
import brMap from "../../../../Assets/Images/brMap.png";
import text from "../../../../Assets/text.json";

export const LocationAndWeather = () => {
    const { language } = useLanguage();
    const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [urlLanguage, setUrlLanguage] = useState(`https://forecast7.com/${language}/n22d76n41d89/armacao-dos-buzios/`);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://weatherwidget.io/js/widget.min.js";
        script.async = true;
        script.onload = () => {
            // Widget script loaded, you can initialize the widget here
            // Be cautious, some widget scripts might not handle dynamic changes well
        };
        document.body.appendChild(script);
        setUrlLanguage(`https://forecast7.com/${language}/n22d76n41d89/armacao-dos-buzios/`);

        return () => {
            document.body.removeChild(script);
        };
    }, [language]);

    const isSmallScreen = useMediaQuery("(max-width:1500px)");
    const isMediumScreen = useMediaQuery("(max-width:1600px)");

    let fontSizeDressCode = theme.spacing(5.5);
    let fontSizeDressCodeOption = theme.spacing(4);

    if (isMediumScreen) {
        fontSizeDressCode = theme.spacing(4.5);
        fontSizeDressCodeOption = theme.spacing(3);
    } else if (isSmallScreen) {
        fontSizeDressCode = "1px";
        fontSizeDressCodeOption = theme.spacing(2.5);
    }

    return (
        <Stack width="100%" alignItems="center" px={!isMobile && 42.75} mt={!isMobile && 15}>
            <Stack direction={!isMobile ? "row" : "column"} width="100%" gap={!isMobile && 8}>
                {!isMobile ? (
                    <CeremonyContainer width="50%">
                        <Typography fontSize={theme.spacing(7)} color={theme.palette.primary.main}>
                            {text.preWedding.BoxEvent.boxTitle[language]}
                        </Typography>
                        <Stack width="100%" gap={2} alignItems="center">
                            <Stack direction="row" width="100%" justifyContent="center" gap={2}>
                                {language === "es" ? (
                                    <Typography fontSize={theme.spacing(6)} color={theme.palette.primary.main}>
                                        Reserva
                                    </Typography>
                                ) : (
                                    <>
                                        <Typography fontSize={theme.spacing(5.5)} color={theme.palette.primary.main}>
                                            Save
                                        </Typography>
                                        <Typography fontSize={theme.spacing(6.5)} color={theme.palette.secondary.main} fontFamily="Corinthia">
                                            the
                                        </Typography>
                                        <Typography fontSize={theme.spacing(5.5)} color={theme.palette.primary.main}>
                                            Date
                                        </Typography>
                                    </>
                                )}
                            </Stack>
                            <Typography fontSize={theme.spacing(4.5)} fontWeight={300} color={theme.palette.gray["500"]} fontFamily="Open Sans">
                                {text.preWedding.BoxEvent.dateTime[language]}
                            </Typography>
                        </Stack>
                        <Stack direction="row" width="100%" height="100%" px={2} gap={4} my={5}>
                            <Stack gap={4} width="50%" alignItems="center">
                                <Stack width="100%" alignItems="center">
                                    <Typography fontSize={theme.spacing(9.5)} color={theme.palette.secondary.main} fontFamily="Corinthia">
                                        Villa Três Marias
                                    </Typography>
                                    <Stack>
                                        <Typography color={theme.palette.gray["500"]} fontWeight={300} fontFamily="Open Sans">
                                            {text.preWedding.BoxEvent.addressP1[language]}
                                        </Typography>
                                        <Typography color={theme.palette.gray["500"]} fontWeight={300} fontFamily="Open Sans">
                                            {text.preWedding.BoxEvent.addressP2[language]}
                                        </Typography>
                                    </Stack>
                                </Stack>
                                <Stack direction="row" width="100%" justifyContent="center" my={5}>
                                    <img src={sargatana} alt="Lagartixa marron" />
                                </Stack>
                                <Stack direction="row" width="100%" gap={4} justifyContent="center" alignItems="baseline">
                                    <Typography fontSize={fontSizeDressCode} color={theme.palette.secondary.main} fontWeight={400}>
                                        {language === "es" ? "Código de vestimenta:" : "Dress Code:"}
                                    </Typography>
                                    <Typography fontSize={fontSizeDressCodeOption} color={theme.palette.gray["500"]} fontWeight={300} fontFamily="Open Sans">
                                        {text.preWedding.dressCode[language]}
                                    </Typography>
                                </Stack>
                            </Stack>
                            <Stack
                                width="50%"
                                sx={{
                                    backgroundImage: `linear-gradient(360deg, #FFF 0%, rgba(255, 255, 255, 0.78) 1.87%, rgba(255, 255, 255, 0.00) 51.77%), url(${brMap})`,
                                    backgroundPosition: "center",
                                    backgroundSize: "contain", // A imagem será redimensionada para cobrir completamente o elemento pai sem distorções
                                    backgroundRepeat: "no-repeat",
                                    maxWidth: "-webkit-fill-available",
                                    overflow: "auto !important",
                                }}
                            >
                                {/* <img src={brMap} alt="Mapa geográfico do Brasil" /> */}
                            </Stack>
                        </Stack>
                    </CeremonyContainer>
                ) : (
                    <CeremonyContainerMobile>
                        <Stack width="100%" gap={2} alignItems="center">
                            <Typography fontSize={theme.spacing(6.5)} color={theme.palette.primary.main}>
                                {text.preWedding.boxTitle[language]}
                            </Typography>
                            <Stack direction="row" width="100%" justifyContent="center" gap={2}>
                                {language === "es" ? (
                                    <Typography fontSize={theme.spacing(6.5)} color={theme.palette.primary.main}>
                                        Reserva
                                    </Typography>
                                ) : (
                                    <>
                                        <Typography fontSize={theme.spacing(6.5)} color={theme.palette.primary.main}>
                                            Save
                                        </Typography>
                                        <Typography fontSize={theme.spacing(6.5)} color={theme.palette.secondary.main} fontFamily="Corinthia">
                                            the
                                        </Typography>
                                        <Typography fontSize={theme.spacing(6.5)} color={theme.palette.primary.main}>
                                            Date
                                        </Typography>
                                    </>
                                )}
                            </Stack>
                            <Typography color={theme.palette.secondary.main} sx={{ marginBottom: theme.spacing(4) }}>
                                {text.preWedding.BoxEvent.dateTime[language]}
                            </Typography>
                        </Stack>
                        <img src={brMap} alt="Mapa geográfico do Brasil" />
                        <Stack mt={theme.spacing(11)}>
                            <Typography fontSize={theme.spacing(12)} color={theme.palette.secondary.main} fontFamily="Corinthia">
                                Villa Três Marias
                            </Typography>
                            <Typography color={theme.palette.gray["500"]} fontWeight={300} fontFamily="Open Sans">
                                {text.preWedding.BoxEvent.addressP1[language]}
                            </Typography>
                            <Typography color={theme.palette.gray["500"]} fontWeight={300} fontFamily="Open Sans">
                                {text.preWedding.BoxEvent.addressP2[language]}
                            </Typography>
                        </Stack>
                        <Box my={8}>
                            <img src={sargatana} alt="Lagartixa marron" />
                        </Box>
                        <Stack direction="row" gap={4} alignItems="baseline">
                            <Typography fontSize={theme.spacing(5)} color={theme.palette.secondary.main} fontWeight={400}>
                                {language === "es" ? "Código de vestimenta:" : "Dress Code:"}
                            </Typography>
                            <Typography color={theme.palette.gray["500"]} fontWeight={300} fontFamily="Open Sans">
                                {text.preWedding.dressCode[language]}
                            </Typography>
                        </Stack>
                    </CeremonyContainerMobile>
                )}
                <Box width={!isMobile ? "50%" : "100%"} height={isMobile ? "315px" : "auto"} px={isMobile && 4} mt={isMobile && 4} sx={{ border: `1px solid ${theme.palette.primary.main}` }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.946544808715!2d-41.91187708872573!3d-22.76736497926735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96ff1202fcdb65%3A0xa27673cadca1dc57!2sVilla%20Tres%20Marias%20Buzios!5e0!3m2!1sen!2sch!4v1689846300672!5m2!1sen!2sch"
                        width="100%"
                        height="100%"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        frameBorder="0"
                    ></iframe>
                </Box>
            </Stack>
            <Stack width="100%" height="100%" mt={!isMobile ? 8 : 4} px={isMobile && 4}>
                <a
                    class="weatherwidget-io"
                    href={urlLanguage}
                    data-accent=""
                    data-raincolor="#04405F"
                    data-suncolor="#D4AE60"
                    data-textcolor="#545454"
                    data-font="Open Sans"
                    data-label_1="BÚZIOS"
                    data-label_2={text.Wedding.weatherLabel[language]}
                    data-icons="Climacons Animated"
                    data-theme="pure"
                    data-highcolor="#9C4522"
                    data-lowcolor="#04405F"
                >
                    {text.Wedding.weatherLabel[language]}
                </a>
            </Stack>
        </Stack>
    );
};
