import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useLanguage } from "../../../../hooks/useLanguage";
import { useEffect, useState } from "react";
import { CeremonyContainer, CeremonyContainerMobile } from "./style";
import sargatana from "../../../../Assets/Images/Sargatana.png";
import brMap from "../../../../Assets/Images/brMap.png";
import text from '../../../../Assets/text.json'

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

    return (
        <Stack width="100%" alignItems="center" px={!isMobile && 30} mt={!isMobile && 15}>
            <Stack direction={!isMobile ? "row" : "column"} width="100%" gap={!isMobile && 8}>
                {!isMobile ? (
                    <CeremonyContainer width="50%">
                        <Typography fontSize={theme.spacing(6.5)} color={theme.palette.primary.main}>
                            Cerimônia & Festa
                        </Typography>
                        <Stack width="100%" gap={2} alignItems="center">
                            <Stack direction="row" width="100%" justifyContent="center" gap={2}>
                                <Typography fontSize={theme.spacing(6.5)} color={theme.palette.primary.main}>
                                    Save
                                </Typography>
                                <Typography fontSize={theme.spacing(6.5)} color={theme.palette.secondary.main} fontFamily="Corinthia">
                                    the
                                </Typography>
                                <Typography fontSize={theme.spacing(6.5)} color={theme.palette.primary.main}>
                                    Date
                                </Typography>
                            </Stack>
                            <Typography color={theme.palette.secondary.main}>WEEK-DAY, DD.MM.YYYY às HH:MM</Typography>
                        </Stack>
                        <Stack direction="row" width="100%" height="100%" justifyContent="space-between" gap={4} my={5}>
                            <Stack gap={4} alignItems="center">
                                <Typography fontSize={theme.spacing(12)} color={theme.palette.secondary.main} fontFamily="Corinthia">
                                    Villa Três Marias
                                </Typography>
                                <Stack>
                                    <Typography color={theme.palette.gray["500"]} fontWeight={300} fontFamily="Open Sans">
                                        RUA TRÊS MARIAS, 20 - MANGUINHOS
                                    </Typography>
                                    <Typography color={theme.palette.gray["500"]} fontWeight={300} fontFamily="Open Sans">
                                        ARMAÇÃO DE BÚZIOS, RJ. BRASIL.
                                    </Typography>
                                </Stack>
                                <Box my={5}>
                                    <img src={sargatana} alt="Lagartixa marron" />
                                </Box>
                                <Stack direction="row" gap={4} alignItems="baseline">
                                    <Typography fontSize={theme.spacing(5)} color={theme.palette.secondary.main} fontWeight={400}>
                                        Dress Code:
                                    </Typography>
                                    <Typography color={theme.palette.gray["500"]} fontWeight={300} fontFamily="Open Sans">
                                        SEMI-FORMAL BEACH
                                    </Typography>
                                </Stack>
                            </Stack>
                            <Stack>
                                <img src={brMap} alt="Mapa geográfico do Brasil" />
                            </Stack>
                        </Stack>
                    </CeremonyContainer>
                ) : (
                    <CeremonyContainerMobile>
                        <Stack width="100%" gap={2} alignItems="center">
                            <Typography fontSize={theme.spacing(6.5)} color={theme.palette.primary.main}>
                                Cerimônia & Festa
                            </Typography>
                            <Stack direction="row" width="100%" justifyContent="center" gap={2}>
                                <Typography fontSize={theme.spacing(6.5)} color={theme.palette.primary.main}>
                                    Save
                                </Typography>
                                <Typography fontSize={theme.spacing(6.5)} color={theme.palette.secondary.main} fontFamily="Corinthia">
                                    the
                                </Typography>
                                <Typography fontSize={theme.spacing(6.5)} color={theme.palette.primary.main}>
                                    Date
                                </Typography>
                            </Stack>
                            <Typography color={theme.palette.secondary.main} sx={{ marginBottom: theme.spacing(4) }}>
                                WEEK-DAY, DD.MM.YYYY às HH:MM
                            </Typography>
                        </Stack>
                        <img src={brMap} alt="Mapa geográfico do Brasil" />
                        <Stack mt={theme.spacing(11)}>
                            <Typography fontSize={theme.spacing(12)} color={theme.palette.secondary.main} fontFamily="Corinthia">
                                Villa Três Marias
                            </Typography>
                            <Typography color={theme.palette.gray["500"]} fontWeight={300} fontFamily="Open Sans">
                                RUA TRÊS MARIAS, 20 - MANGUINHOS
                            </Typography>
                            <Typography color={theme.palette.gray["500"]} fontWeight={300} fontFamily="Open Sans">
                                ARMAÇÃO DE BÚZIOS, RJ. BRASIL.
                            </Typography>
                        </Stack>
                        <Box my={8}>
                            <img src={sargatana} alt="Lagartixa marron" />
                        </Box>
                        <Stack direction="row" gap={4} alignItems="baseline">
                            <Typography fontSize={theme.spacing(5)} color={theme.palette.secondary.main} fontWeight={400}>
                                Dress Code:
                            </Typography>
                            <Typography color={theme.palette.gray["500"]} fontWeight={300} fontFamily="Open Sans">
                                SEMI-FORMAL BEACH
                            </Typography>
                        </Stack>
                    </CeremonyContainerMobile>
                )}
                <Box width={!isMobile ? "50%" : "100%"} height={isMobile ? "315px" : "auto"} px={isMobile && 4} mt={isMobile && 4}>
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
                    data-label_1="Búzios"
                    data-label_2={text.Wedding.weatherLabel[language]}
                    data-icons="Climacons Animated"
                    data-theme="pure"
                    data-highcolor="#9C4522"
                    data-lowcolor="#04405F"
                    // style={{ zIndex: -1 }}
                >
                    Búzios {text.Wedding.weatherLabel[language]}
                </a>
            </Stack>
        </Stack>
    );
};
