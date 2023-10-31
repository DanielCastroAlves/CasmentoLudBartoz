import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import text from "../../Assets/text.json";
import { useLanguage } from "../../hooks/useLanguage";
import { WeddingContainer, StyledText } from "./style";
import { useLocation } from "react-router-dom";

export const FirstSection = ({ title, subtitle, paragraph1, paragraph2, paragraph3, paragraph4, title2 }) => {
    const theme = useTheme();
    const { language } = useLanguage();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const location = useLocation();
    const url = location.pathname;

    return (
        <WeddingContainer px={isMobile ? theme.spacing(4) : theme.spacing(42.75)}>
            {isMobile ? (
                <Stack width="100%" alignItems="center">
                    {url === "/wedding" ? (
                        <>
                            <StyledText fontSize={isMobile ? theme.spacing(5.5) : theme.spacing(8)} fontWeight={700} color={theme.palette.primary.main}>
                                {title}
                            </StyledText>
                            <StyledText fontSize={isMobile ? theme.spacing(5.5) : theme.spacing(8)} fontWeight={700} color={theme.palette.primary.main}>
                                {title2}
                            </StyledText>
                        </>
                    ) : (
                        <>
                            <StyledText fontSize={isMobile ? theme.spacing(5.5) : theme.spacing(8)} fontWeight={700} color={theme.palette.primary.main}>
                                {title}
                            </StyledText>
                        </>
                    )}

                    <StyledText fontSize={theme.spacing(4)} fontWeight={300} color={theme.palette.primary.main} fontFamily="Open Sans" sx={{ marginTop: 5 }}>
                        {subtitle}
                    </StyledText>
                </Stack>
            ) : (
                <Stack width="100%" alignItems="center">
                    {url === "/wedding" ? (
                        <>
                            <StyledText fontSize={isMobile ? theme.spacing(5.5) : theme.spacing(8)} fontWeight={700} color={theme.palette.primary.main}>
                                {`${title}`}
                            </StyledText>
                            <StyledText fontSize={isMobile ? theme.spacing(5.5) : theme.spacing(8)} fontWeight={700} color={theme.palette.primary.main}>
                                {`${title2}`}
                            </StyledText>
                        </>
                    ) : (
                        <>
                            <StyledText fontSize={isMobile ? theme.spacing(5.5) : theme.spacing(8)} fontWeight={700} color={theme.palette.primary.main}>
                                {`${title}`}
                            </StyledText>
                        </>
                    )}

                    <StyledText fontSize={theme.spacing(5.5)} fontWeight={300} color={theme.palette.primary.main} fontFamily="Open Sans">
                        {subtitle}
                    </StyledText>
                </Stack>
            )}

            {paragraph1 && (
                <Stack width="100%" alignItems="center" gap={6}>
                    <StyledText fontSize={!isMobile ? theme.spacing(4.5) : theme.spacing(3.5)} fontWeight={300} color={theme.palette.gray["500"]} fontFamily="Open Sans" dangerouslySetInnerHTML={{ __html: paragraph1 }} />
                    {/* <StyledText fontSize={!isMobile ? theme.spacing(4.5) : theme.spacing(3.5)} fontWeight={300} color={theme.palette.gray["500"]} fontFamily="Open Sans">
                        {paragraph1}
                    </StyledText> */}
                    {paragraph2 && (
                        <StyledText fontSize={!isMobile ? theme.spacing(4.5) : theme.spacing(3.5)} fontWeight={300} color={theme.palette.gray["500"]} fontFamily="Open Sans" dangerouslySetInnerHTML={{ __html: paragraph2 }} />
                        // <StyledText fontSize={!isMobile ? theme.spacing(4.5) : theme.spacing(3.5)} fontWeight={300} color={theme.palette.gray["500"]} fontFamily="Open Sans">
                        //     {paragraph2}
                        // </StyledText>
                    )}
                    {paragraph3 && (
                        <StyledText fontSize={!isMobile ? theme.spacing(4.5) : theme.spacing(3.5)} fontWeight={300} color={theme.palette.gray["500"]} fontFamily="Open Sans" dangerouslySetInnerHTML={{ __html: paragraph3 }} />
                        // <StyledText fontSize={!isMobile ? theme.spacing(4.5) : theme.spacing(3.5)} fontWeight={300} color={theme.palette.gray["500"]} fontFamily="Open Sans">
                        //     {paragraph3}
                        // </StyledText>
                    )}
                    {paragraph4 && (
                        <StyledText fontSize={!isMobile ? theme.spacing(4.5) : theme.spacing(3.5)} fontWeight={300} color={theme.palette.gray["500"]} fontFamily="Open Sans" dangerouslySetInnerHTML={{ __html: paragraph4 }} />
                        // <StyledText fontSize={!isMobile ? theme.spacing(4.5) : theme.spacing(3.5)} fontWeight={300} color={theme.palette.gray["500"]} fontFamily="Open Sans">
                        //     {paragraph4}
                        // </StyledText>
                    )}
                </Stack>
            )}
        </WeddingContainer>
    );
};
