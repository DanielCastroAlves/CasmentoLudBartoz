import { Box, Stack, Typography, useTheme } from "@mui/material";
import text from "../../Assets/text.json";
import { useLanguage } from "../../hooks/useLanguage";
import { LocationAndWeather } from "./components/LocationAndWeather";
import { Gallery } from "./components/Gallery";
import { FirstSection } from "../../Components/FirstSection";

export const Wedding = () => {
    const theme = useTheme();
    const { language } = useLanguage();
    return (
        <Stack width="100%" height="100%" mb={10}>
            <FirstSection title={text.Wedding.title[language]} subtitle={text.Wedding.subTitle[language]} paragraph1={text.Wedding.introP1[language]} paragraph2={text.Wedding.introP2[language]} />
            <LocationAndWeather />
            <Gallery />
        </Stack>
    );
};
