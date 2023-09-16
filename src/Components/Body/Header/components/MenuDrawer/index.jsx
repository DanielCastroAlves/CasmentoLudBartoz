import React from "react";
import Drawer from "@mui/material/Drawer";
import { Box, Divider, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { HeaderMenuDrawerContainer, MenuAvatar, MenuLink } from "./style";
import mobileLogo from "../../../../../Assets/Images/logoMobile.svg";
import desktopLogo from "../../../../../Assets/Images/logoDesktop.svg";
import { X } from "@phosphor-icons/react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "../../../../../hooks/useLanguage";

export const MenuDrawer = ({ open, setOpen, handleDrawerOpen }) => {
    const theme = useTheme();
    const { menuOptions } = useLanguage();
    const location = useLocation();
    const url = location.pathname;
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Stack height='100%'>
            <Drawer
                anchor="right"
                open={open}
                onClose={handleDrawerOpen}
                PaperProps={{
                    sx: { width: "100%", height: "100%", padding: theme.spacing(6) },
                }}
            >
                <Stack width="100%" height="100%" gap={6}>
                    <Stack width="100%" direction="row" justifyContent="flex-end">
                        <X size={32} onClick={(_) => setOpen(!open)} color={theme.palette.primary.main} />
                    </Stack>
                    <HeaderMenuDrawerContainer>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" width="100%">
                            <Box width={`calc(50% - ${theme.spacing(8)})`}>
                                <Divider sx={{ borderColor: theme.palette.primary.main }} />
                            </Box>
                            <img
                                src={isMobile ? mobileLogo : desktopLogo}
                                alt="Logo"
                                // height='92px'
                                style={{
                                    position: "absolute",
                                    top: 55,
                                    left: `45%`,
                                    right: 0,
                                    bottom: 0,
                                    objectFit: "cover",
                                    zIndex: -1,
                                }}
                            />
                            <Box width={`calc(48% - ${theme.spacing(8)})`}>
                                <Divider sx={{ borderColor: theme.palette.primary.main }} />
                            </Box>
                        </Stack>
                        <Stack width="100%" height="100%" py={16} px={4} gap={22} alignItems="center">
                            <Typography variant="h6" color={theme.palette.primary.main}>
                                LUDMILLA & BARTOSZ
                            </Typography>
                            <Stack width="100%" alignItems="flex-start" gap={2}>
                                <MenuLink to="/home">
                                    <Typography fontSize={theme.spacing(5)} onClick={_ => setOpen()} fontWeight={url === "/home" ? 700 : 400} color={url === "/home" ? theme.palette.primary.main : theme.palette.secondary.main}>
                                        HOME
                                    </Typography>
                                </MenuLink>
                                <MenuLink to="/wedding">
                                    <Typography fontSize={theme.spacing(5)} onClick={_ => setOpen()} fontWeight={url === "/wedding" ? 700 : 400} color={url === "/wedding" ? theme.palette.primary.main : theme.palette.secondary.main}>
                                        CASAMENTO
                                    </Typography>
                                </MenuLink>
                                <MenuLink to="/travel">
                                    <Typography fontSize={theme.spacing(5)} onClick={_ => setOpen()} fontWeight={url === "/travel" ? 700 : 400} color={url === "/travel" ? theme.palette.primary.main : theme.palette.secondary.main}>
                                        VIAGEM
                                    </Typography>
                                </MenuLink>
                                <MenuLink to="/qea">
                                    <Typography fontSize={theme.spacing(5)} onClick={_ => setOpen()} fontWeight={url === "/qea" ? 700 : 400} color={url === "/qea" ? theme.palette.primary.main : theme.palette.secondary.main}>
                                        Q&A
                                    </Typography>
                                </MenuLink>
                            </Stack>
                            <Stack direction="row" width="100%" justifyContent="center" gap={4}>
                                {menuOptions.map((item, i) => (
                                    <MenuAvatar key={item.language} alt={item.alt} src={item.image} sx={item.selected ? { border: `1px solid ${theme.palette.primary.main}` } : {}} onClick={(_) => handleDrawerOpen(i, item.language)} />
                                ))}
                            </Stack>
                            <Stack gap={4}alignItems='center'>
                                <MenuLink to="/wedding/gifts">
                                    <Typography color={theme.palette.primary.secondary}>PRESENTE DE CASAMENTO</Typography>
                                </MenuLink>
                                <MenuLink to="/teamBG">
                                    <Typography color={theme.palette.primary.secondary}>TEAM BRIDE & GROOM</Typography>
                                </MenuLink>
                                <MenuLink to="/home">
                                    <Typography color={theme.palette.primary.secondary}>CONFIRME PRESENÇA</Typography>
                                </MenuLink>
                            </Stack>
                        </Stack>
                    </HeaderMenuDrawerContainer>
                </Stack>
            </Drawer>
        </Stack>
    );
};
