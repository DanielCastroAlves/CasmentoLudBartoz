import React from "react";
import Drawer from "@mui/material/Drawer";
import { Box, Divider, Stack, Typography, useTheme } from "@mui/material";
import { HeaderMenuDrawerContainer, MenuAvatar, MenuLink } from "./style";
import smallLogo from "../../../../../Assets/Images/smallLogo.png";
import { X } from "@phosphor-icons/react";


export const MenuDrawer = ({ open, setOpen, handleDrawerOpen, menuOptions }) => {

    console.log('menuOptions', menuOptions)

    const theme = useTheme();

    return (
        <div>
            <Drawer
                anchor="top"
                open={open}
                onClose={handleDrawerOpen}
                PaperProps={{
                    sx: { width: "100%", height: "100%", padding: theme.spacing(6) },
                }}
            >
                <Stack width="100%" height="100%" gap={6}>
                    <Stack width="100%" direction="row" justifyContent="flex-end">
                        <X size={32} onClick={_ => setOpen(!open)} color={theme.palette.primary.main} />
                    </Stack>
                    <HeaderMenuDrawerContainer>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" width="100%">
                            <Box width={`calc(50% - ${theme.spacing(8)})`}>
                                <Divider sx={{ borderColor: theme.palette.primary.main }} />
                            </Box>
                            <img
                                src={smallLogo}
                                alt="Logo"
                                style={{
                                    position: "absolute",
                                    top: 55,
                                    left: `calc(50% - ${theme.spacing(6)})`,
                                    right: 0,
                                    bottom: 0,
                                    objectFit: "cover",
                                    zIndex: -1,
                                }}
                            />
                            <Box width={`calc(51% - ${theme.spacing(8)})`}>
                                <Divider sx={{ borderColor: theme.palette.primary.main }} />
                            </Box>
                        </Stack>
                        <Stack width="100%" height="100%" py={16} px={4} gap={22} alignItems="center">
                            <Typography variant="h6" color={theme.palette.primary.main}>
                                LUDMILLA & BARTOSZ
                            </Typography>
                            <Stack width="100%" alignItems="flex-start" gap={2}>
                                <MenuLink to="/home">
                                    <Typography fontSize={theme.spacing(5)} fontWeight={400} color={theme.palette.secondary.main}>
                                        HOME
                                    </Typography>
                                </MenuLink>
                                <MenuLink to="/home">
                                    <Typography fontSize={theme.spacing(5)} fontWeight={400} color={theme.palette.secondary.main}>
                                        CASAMENTO
                                    </Typography>
                                </MenuLink>
                                <MenuLink to="/home">
                                    <Typography fontSize={theme.spacing(5)} fontWeight={400} color={theme.palette.secondary.main}>
                                        VIAGEM
                                    </Typography>
                                </MenuLink>
                                <MenuLink to="/home">
                                    <Typography fontSize={theme.spacing(5)} fontWeight={400} color={theme.palette.secondary.main}>
                                        Q&A
                                    </Typography>
                                </MenuLink>
                            </Stack>
                            <Stack direction="row" width="100%" justifyContent="center" gap={4}>
                                {menuOptions.map((item, i) => (
                                    <MenuAvatar key={item.language} alt={item.alt} src={item.image} sx={item.selected ? { border: `1px solid ${theme.palette.primary.main}` } : {}} onClick={(_) => handleDrawerOpen(i)} />
                                ))}
                            </Stack>
                            <Stack gap={4}>
                                <MenuLink to="/home">
                                    <Typography color={theme.palette.primary.secondary}>PRESENTE DE CASAMENTO</Typography>
                                </MenuLink>
                                <MenuLink to="/home">
                                    <Typography color={theme.palette.primary.secondary}>PLANEJAMENTO DE VIAGEM</Typography>
                                </MenuLink>
                                <MenuLink to="/home">
                                    <Typography color={theme.palette.primary.secondary}>PERGUNTAS E RESPOSTAS</Typography>
                                </MenuLink>
                            </Stack>
                        </Stack>
                    </HeaderMenuDrawerContainer>
                </Stack>
            </Drawer>
        </div>
    );
};
