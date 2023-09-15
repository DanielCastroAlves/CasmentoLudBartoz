import { Box, Divider, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { ContentContainer, FooterContainer, MenuLink, MobileFooterContainer } from "./style";
import mobileLogo from "../../../Assets/Images/logoMobile.svg";
import desktopLogo from "../../../Assets/Images/logoDesktop.svg";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";

export const Footer = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <>
            {isMobile ? (
                <MobileFooterContainer>
                    <ContentContainer direction='row' gap={3}>
                        <Box component="img" height={theme.spacing(12.5)} src={isMobile ? mobileLogo : desktopLogo}></Box>
                        <Stack width="100%" height="100%" alignItems="center">
                            <Typography fontSize={theme.spacing(4)} color={theme.palette.primary.main}>
                                LUDMILLA & BARTOSZ | 12.05.2024
                            </Typography>
                            <Typography fontSize={theme.spacing(2.5)} fontWeight={300} color={theme.palette.gray["500"]} fontFamily='Open Sans'>
                                Villa Três Marias. Armação de Búzios, Rio de Janeiro - Brasil
                            </Typography>
                            <Typography fontSize={theme.spacing(2.5)} fontWeight={300} color={theme.palette.gray["500"]} fontFamily='Open Sans' sx={{ marginTop: 4 }}>
                                Ludmilla & Bartosz | © 2023 All rights reserved
                            </Typography>
                        </Stack>
                    </ContentContainer>
                </MobileFooterContainer>
            ) : (
                <Grid container justifyContent="center" alignItems="center" px={15} py={6} height="172px" sx={{ backgroundColor: "#fff" }}>
                    <Grid xs={5} height="100%">
                        <Stack height="100%" width="100%" justifyContent="space-between">
                            <Box>
                                <Typography fontSize={theme.spacing(5.5)} color={theme.palette.primary.main}>
                                    LUDMILLA & BARTOSZ | 12.05.2024
                                </Typography>
                                <Typography fontSize={theme.spacing(3.5)} fontWeight={300} color={theme.palette.secondary.main} fontFamily='Open Sans'>
                                    Villa Três Marias. Armação de Búzios, Rio de Janeiro - Brasil
                                </Typography>
                            </Box>
                            <Typography fontSize={theme.spacing(3)} fontWeight={300} color={theme.palette.gray["500"]} fontFamily='Open Sans'>
                                Ludmilla & Bartosz © 2023 All rights reserved | Site desenvolvido pela noiva e seus amigos
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid xs={2} style={{ display: "flex", justifyContent: "center" }}>
                        <Box component="img" height={theme.spacing(14.75)} src={isMobile ? mobileLogo : desktopLogo}></Box>
                    </Grid>
                    <Grid xs={5} style={{ display: "flex", justifyContent: "flex-end" }} height="100%">
                        <Stack justifyContent="space-between" height="100%" py={5} gap={5}>
                            <MenuLink to="/wedding/gifts">
                                <Typography>PRESENTE DE CASAMENTO</Typography>
                            </MenuLink>
                            <MenuLink to="/teamBG">
                                <Typography>TEAM BRIDE & GROOM</Typography>
                            </MenuLink>
                            <MenuLink to="/home">
                                <Typography>CONFIRME PRESENÇA</Typography>
                            </MenuLink>
                        </Stack>
                    </Grid>
                </Grid>
                // </Stack>
            )}
            <Divider />
        </>
    );
};
