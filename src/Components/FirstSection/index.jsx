import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import text from "../../Assets/text.json";
import { useLanguage } from "../../hooks/useLanguage";
import { WeddingContainer, StyledText } from "./style";

export const FirstSection = ({ title, subtitle, paragraph1, paragraph2, paragraph3 }) => {
    const theme = useTheme();
    const { language } = useLanguage();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <WeddingContainer px={isMobile ? theme.spacing(4) : theme.spacing(42.75)}>
            <Stack width="100%" alignItems="center">
                <StyledText fontSize={isMobile ? theme.spacing(5.5) : theme.spacing(6)} fontWeight={800} color={theme.palette.primary.main}>
                    {title}
                </StyledText>
                <StyledText fontSize={theme.spacing(4)} fontWeight={300} color={theme.palette.primary.main} fontFamily="Open Sans">
                    {subtitle}
                </StyledText>
            </Stack>
            {paragraph1 && (
                <Stack width="100%" alignItems="center" gap={6}>
                    <StyledText fontSize={theme.spacing(3.5)} fontWeight={300} color={theme.palette.secondary.main} fontFamily="Open Sans">
                        {paragraph1}
                    </StyledText>
                    {paragraph2 && (
                        <StyledText fontSize={theme.spacing(3.5)} fontWeight={300} color={theme.palette.secondary.main} fontFamily="Open Sans">
                            {paragraph2}
                        </StyledText>
                    )}
                </Stack>
            )}
        </WeddingContainer>
    );
};
