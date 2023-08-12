import { Box, Divider, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { FooterContainer, MenuLink } from "./style";
import smallLogo from "../../../Assets/Images/smallLogo.png";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";

export const Footer = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <>
            {isMobile ? (
                <Stack justifyContent="center" alignItems='center' width="100%" height='96px'>
                    <Stack direction="row" height='100%'>
                        <Box component="img" src={smallLogo} height='45px'></Box>
                        <Stack width="100%" height="100%" alignItems='center'>
                                <Typography fontSize={"18px"} color={theme.palette.primary.main}>
                                    LUDMILLA & BARTOSZ | 12.05.2024
                                </Typography>
                                <Typography fontWeight={300} fontSize={"8px"} color={theme.palette.gray["500"]}>
                                    Villa Três Marias. Armação de Búzios, Rio de Janeiro - Brasil
                                </Typography>
                            <Typography fontWeight={300} fontSize={"8px"} color={theme.palette.gray["500"]} sx={{marginTop: 4}}>
                                Ludmilla & Bartosz | © 2023 All rights reserved
                            </Typography>
                        </Stack>
                    </Stack>
                    {/* <Stack direction="row" width='100%'>
                        <Box component="img" src={smallLogo}></Box>
                        <Stack width='100%'>
                            <Typography fontSize={"12px"} color={theme.palette.primary.main}>
                                LUDMILLA & BARTOSZ | 12.05.2024
                            </Typography>
                            <Typography fontWeight={300} fontSize={"8px"} color={theme.palette.gray["500"]}>
                                Villa Três Marias. Armação de Búzios, Rio de Janeiro - Brasil
                            </Typography>
                        </Stack>
                    </Stack> */}
                </Stack>
            ) : (
                <Grid container justifyContent="center" alignItems="center" px={8} py={4} height="172px" sx={{ backgroundColor: "#fff" }}>
                    <Grid xs={5} height="100%">
                        <Stack height="100%" width="100%" justifyContent="space-between">
                            <Box>
                                <Typography fontSize="22px" color={theme.palette.primary.main}>
                                    LUDMILLA & BARTOSZ | 12.05.2024
                                </Typography>
                                <Typography fontSize="13.5px" color={theme.palette.secondary.main}>
                                    Villa Três Marias. Armação de Búzios, Rio de Janeiro - Brasil
                                </Typography>
                            </Box>
                            <Typography fontSize="12px" color={theme.palette.secondary.main}>
                                Ludmilla & Bartosz © 2023 All rights reserved | Site desenvolvido pela noiva e seus amigos
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid xs={2} style={{ display: "flex", justifyContent: "center" }}>
                        <Box component="img" src={smallLogo}></Box>
                    </Grid>
                    <Grid xs={5} style={{ display: "flex", justifyContent: "flex-end" }} height="100%">
                        <Stack justifyContent="space-between" height="100%" py={5} gap={5}>
                            <MenuLink to="/home">
                                <Typography fontSize="13.5px" color={theme.palette.primary.main}>
                                    PRESENTE DE CASAMENTO
                                </Typography>
                            </MenuLink>
                            <MenuLink to="/home">
                                {" "}
                                <Typography fontSize="13.5px" color={theme.palette.primary.main}>
                                    PLANEJAMENTO DE VIAGEM
                                </Typography>
                            </MenuLink>
                            <MenuLink to="/home">
                                <Typography fontSize="13.5px" color={theme.palette.primary.main}>
                                    PERGUNTAS E RESPOSTAS
                                </Typography>
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
