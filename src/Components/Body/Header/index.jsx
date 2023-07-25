import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import { Avatar, Box, Button, IconButton, Stack, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Alarm, Heart, Cube, List } from "@phosphor-icons/react";
import headerLogo from "../../../Assets/Images/smallLogo.png";
import brIcon from "../../../Assets/Images/brIcon.png";
import { HeaderContainer, MenuAvatar, MenuLink } from "./style";
import { Link } from "react-router-dom";
import { HeaderDrawer, MenuDrawer } from "../../MenuDrawer";

const pages = [];
const settings = ["Link 1", "Link 2", "Link 3", "Link 4"];

export const Header = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(!open);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <>
            {" "}
            <AppBar position="static" width="100%" sx={{ backgroundColor: "transparent !important" }}>
                <Toolbar sx={{ padding: "0px" }}>
                    <HeaderContainer>
                        <img src={headerLogo} alt="Logo Ludmila e Bartosz" />
                        <Stack direction="row" alignItems="center" gap={18}>
                            {!isMobile && (
                                <Stack direction="row" alignItems="center" gap={9}>
                                    <MenuLink to="/home">
                                        <Typography fontSize={theme.spacing(5)} fontWeight={400} color={theme.palette.primary.main}>
                                            HOME
                                        </Typography>
                                    </MenuLink>
                                    <MenuLink to="/home">
                                        <Typography fontSize={theme.spacing(5)} fontWeight={400} color={theme.palette.primary.main}>
                                            CASAMENTO
                                        </Typography>
                                    </MenuLink>
                                    <MenuLink to="/home">
                                        <Typography fontSize={theme.spacing(5)} fontWeight={400} color={theme.palette.primary.main}>
                                            VIAGEM
                                        </Typography>
                                    </MenuLink>
                                    <MenuLink to="/home">
                                        <Typography fontSize={theme.spacing(5)} fontWeight={400} color={theme.palette.primary.main}>
                                            Q&A
                                        </Typography>
                                    </MenuLink>
                                </Stack>
                            )}
                            {isMobile ? (
                                <Box>
                                    <MenuAvatar onClick={(_) => alert("levado")}>
                                        <List size={32} color={theme.palette.primary.main} />
                                    </MenuAvatar>
                                </Box>
                            ) : (
                                <MenuAvatar alt="Bandeira do Brasil" src={brIcon} onClick={_ => handleDrawerOpen(!open)} />
                            )}
                        </Stack>
                    </HeaderContainer>
                </Toolbar>
            </AppBar>
            <MenuDrawer open={open} handleDrawerOpen={handleDrawerOpen} />
        </>
    );
};
