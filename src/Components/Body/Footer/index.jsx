import { Box, Divider, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { FooterContainer } from "./style";
import smallLogo from "../../../Images/smallLogo.png";
import { Link } from "react-router-dom";

export const Footer = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <>
            {isMobile ? (
                <Stack justifyContent="center">
                    <Stack direction="row">
                        <Box component="img" src={smallLogo}></Box>
                        <Stack>
                            <Typography fontSize={"12px"} color={theme.palette.primary.main}>
                                LUDMILLA & BARTOSZ | 12.05.2024
                            </Typography>
                            <Typography fontWeight={300} fontSize={"8px"} color={theme.palette.gray["500"]}>
                                Villa Três Marias. Armação de Búzios, Rio de Janeiro - Brasil
                            </Typography>
                        </Stack>
                        {/* <Typography fontWeight={300} fontSize={"8px"} color={theme.palette.gray["500"]}>
                            Ludmilla & Bartosz 2023 All rights reserved
                        </Typography> */}
                    </Stack>
                </Stack>
            ) : (
                <FooterContainer direction="row" justifyContent="space-between" alignItems="center" width="100%">
                    <Stack justifyContent="space-between" height="100%">
                        <Box>
                            <Typography variant="h6" color={theme.palette.primary.main}>
                                LUDMILLA & BARTOSZ | 12.05.2024
                            </Typography>
                            <Typography fontWeight={300} color={theme.palette.gray["500"]}>
                                Villa Três Marias. Armação de Búzios, Rio de Janeiro - Brasil
                            </Typography>
                        </Box>
                    </Stack>
                    <Stack justifyContent="space-between">
                        <Box component="img" src={smallLogo}></Box>
                    </Stack>
                    <Stack justifyContent="space-between" height="100%" py={5}>
                        <Typography color={theme.palette.primary.main}>PRESENTE DE CASAMENTO</Typography>
                        <Typography color={theme.palette.primary.main}>PLANEJAMENTO DE VIAGEM</Typography>
                        <Typography color={theme.palette.primary.main}>PERGUNTAS E RESPOSTAS</Typography>
                    </Stack>
                </FooterContainer>
            )}
            <Divider />
        </>
    );
};
