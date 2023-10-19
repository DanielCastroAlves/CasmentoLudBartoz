import { Box, Divider, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { ContentContainer, FooterContainer, MenuLink, MobileFooterContainer } from "./style";
import mobileLogo from "../../../Assets/Images/logoMobile.svg";
import desktopLogo from "../../../Assets/Images/logoDesktop.svg";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";
import olivaLogo from "../../../Assets/Images/logoOliva.svg";
import { useLanguage } from "../../../hooks/useLanguage";
import text from "../../../Assets/text.json";

export const Footer = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const [logoHovered, setLogoHovered] = useState(mobileLogo);

    const { language } = useLanguage();

    return (
        <>
            {isMobile ? (
                <MobileFooterContainer>
                    <Stack direction="row" width="100%" height="100%" justifyContent="center" alignItems="center" gap={3}>
                        <Link to="/home">
                            <Box component="img" height={theme.spacing(12.5)} src={logoHovered} onMouseEnter={() => setLogoHovered(olivaLogo)} onMouseLeave={() => setLogoHovered(mobileLogo)}></Box>{" "}
                        </Link>
                        <Stack alignItems='center'>
                            <Typography fontSize={theme.spacing(4)} color={theme.palette.primary.main}>
                                LUDMILLA & BARTOSZ | 12.05.2024
                            </Typography>
                            <Typography fontSize={theme.spacing(2.5)} fontWeight={300} color={theme.palette.gray["500"]} fontFamily="Open Sans">
                                Villa Três Marias. Armação de Búzios, Rio de Janeiro - Brasil
                            </Typography>
                            <Typography fontSize={theme.spacing(2)} fontWeight={300} color={theme.palette.gray["500"]} fontFamily="Open Sans" sx={{ marginTop: 4 }}>
                                Ludmilla & Bartosz | © 2023 All rights reserved
                            </Typography>
                        </Stack>
                    </Stack>
                </MobileFooterContainer>
            ) : (
                <Grid container justifyContent="center" alignItems="center" px={15} py={6} height="172px" sx={{ backgroundColor: "#fff" }}>
                    <Grid xs={5} height="100%">
                        <Stack height="100%" width="100%" justifyContent="space-between">
                            <Box>
                                <Typography fontSize={theme.spacing(5.5)} color={theme.palette.primary.main}>
                                    LUDMILLA & BARTOSZ | 12.05.2024
                                </Typography>
                                <Typography fontSize={theme.spacing(3.5)} fontWeight={300} color={theme.palette.gray["500"]} fontFamily="Open Sans">
                                    Villa Três Marias. Armação de Búzios, Rio de Janeiro - Brasil
                                </Typography>
                            </Box>
                            <Typography fontSize={theme.spacing(3)} fontWeight={300} color={theme.palette.gray["500"]} fontFamily="Open Sans">
                                Ludmilla & Bartosz © 2023 All rights reserved | Site desenvolvido pela noiva e seus amigos
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid xs={2} style={{ display: "flex", justifyContent: "center" }}>
                        <Link to="/home">
                            <Box component="img" height={theme.spacing(14.75)} src={logoHovered} onMouseEnter={() => setLogoHovered(olivaLogo)} onMouseLeave={() => setLogoHovered(mobileLogo)}></Box>
                        </Link>
                    </Grid>
                    <Grid xs={5} style={{ display: "flex", justifyContent: "flex-end" }} height="100%">
                        <Stack height="100%" py={5} gap={5}>
                            <MenuLink to="/wedding/gifts">
                                <Typography>{text.gifts.title[language]}</Typography>
                            </MenuLink>
                            <MenuLink to="/home">
                                <Typography>RSVP</Typography>
                            </MenuLink>
                        </Stack>
                    </Grid>
                </Grid>
            )}
            <Divider />
        </>
    );
};
