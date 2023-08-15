import { Box, Stack, Typography, useTheme } from "@mui/material";
import text from "../../../../Assets/text.json";
import { useLanguage } from "../../../../hooks/useLanguage";
import { WeddingContainer } from "./style";

export const WeddingInvitation = () => {
    const theme = useTheme();
    const { language } = useLanguage();
    
    return (
        <WeddingContainer>
            <Stack width="100%" alignItems="center">
                <Typography fontSize={theme.spacing(6)} fontWeight={800} color={theme.palette.primary.main}>
                    {text.Wedding.title[language]}
                </Typography>
                <Typography fontSize={theme.spacing(4)} fontWeight={300} color={theme.palette.primary.main}>
                    {text.Wedding.subTitle[language]}
                </Typography>
            </Stack>
            <Stack width="100%" alignItems="center" gap={6}>
                <Typography fontSize={theme.spacing(3.5)} fontWeight={300} color={theme.palette.secondary.main}>
                    {text.Wedding.introP1[language]}
                </Typography>
                <Typography fontSize={theme.spacing(3.5)} fontWeight={300} color={theme.palette.secondary.main}>
                {text.Wedding.introP2[language]}
            </Typography>
            </Stack>

        </WeddingContainer>
        
    );
};
