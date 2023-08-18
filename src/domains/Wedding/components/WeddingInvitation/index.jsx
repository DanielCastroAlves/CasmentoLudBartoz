import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import text from "../../../../Assets/text.json";
import { useLanguage } from "../../../../hooks/useLanguage";
import { WeddingContainer, WeddingText } from "./style";

export const WeddingInvitation = () => {
    const theme = useTheme();
    const { language } = useLanguage();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    
    return (
        <WeddingContainer px={isMobile ? theme.spacing(4) : theme.spacing(30)}>
            <Stack width="100%" alignItems="center">
                <WeddingText fontSize={isMobile ? theme.spacing(5.5) : theme.spacing(6)} fontWeight={800} color={theme.palette.primary.main}>
                    {text.Wedding.title[language]}
                </WeddingText>
                <WeddingText fontSize={theme.spacing(4)} fontWeight={300} color={theme.palette.primary.main}>
                    {text.Wedding.subTitle[language]}
                </WeddingText>
            </Stack>
            <Stack width="100%" alignItems="center" gap={6}>
                <Typography fontSize={theme.spacing(3.5)} fontWeight={300} color={theme.palette.secondary.main} fontFamily='Open Sans'>
                    {text.Wedding.introP1[language]}
                </Typography>
                <Typography fontSize={theme.spacing(3.5)} fontWeight={300} color={theme.palette.secondary.main} fontFamily='Open Sans'>
                {text.Wedding.introP2[language]}
            </Typography>
            </Stack>

        </WeddingContainer>
        
    );
};
