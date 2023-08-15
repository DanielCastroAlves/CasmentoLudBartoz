import { Box, Stack, Typography, useTheme } from "@mui/material";
import text from "../../Assets/text.json";
import { useLanguage } from "../../hooks/useLanguage";
import { WeddingInvitation } from "./components/WeddingInvitation";
import { LocationAndWeather } from "./components/LocationAndWeather";

export const Wedding = () => {
    const theme = useTheme();
    const { language } = useLanguage();
    return (
        <Stack width='100%' height='100%'>
            <WeddingInvitation />
            <LocationAndWeather />
        </Stack>
    );
};
