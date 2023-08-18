import { Box, Stack, Typography, useTheme } from "@mui/material";
import text from "../../Assets/text.json";
import { useLanguage } from "../../hooks/useLanguage";
import { WeddingInvitation } from "./components/WeddingInvitation";
import { LocationAndWeather } from "./components/LocationAndWeather";
import { Gallery } from "./components/Gallery";
import { Navigation } from "./components/Navigation";

export const Wedding = () => {
    const theme = useTheme();
    const { language } = useLanguage();
    return (
        <Stack width='100%' height='100%' mb={10}>
            <WeddingInvitation />
            <LocationAndWeather />
            <Gallery />
        </Stack>
    );
};
