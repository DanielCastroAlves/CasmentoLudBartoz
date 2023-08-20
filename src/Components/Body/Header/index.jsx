import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import { Avatar, Box, Button, IconButton, Stack, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Alarm, Heart, Cube, List } from "@phosphor-icons/react";
import brIcon from "../../../Assets/Images/brIcon.png";
import { HeaderContainer, MenuAvatar, MenuLink } from "./style";
import { MenuDrawer } from "./components/MenuDrawer";
import { HeaderMenu } from "./components/HeaderMenu";
import engIcon from "../../../Assets/Images/engIcon.png";
import polIcon from "../../../Assets/Images/polIcon.png";
import esIcon from "../../../Assets/Images/esIcon.png";
import { useLanguage } from "../../../hooks/useLanguage";
import { useLocation } from "react-router-dom";
import text from "../../../Assets/text.json";
import mobileLogo from "../../../Assets/Images/logoMobile.svg";
import desktopLogo from "../../../Assets/Images/logoDesktop.svg";

export const Header = () => {
    const theme = useTheme();
    const { handleFormLanguage, handleLanguage, language, menuOptions, setMenuOptions } = useLanguage();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const [open, setOpen] = useState(false);

    const location = useLocation();
    const url = location.pathname;

    const handleDrawerOpen = (index, lang) => {
        const updatedMenuOptions = menuOptions.map((option, i) => ({
            ...option,
            selected: i === index ? true : false,
        }));
        setMenuOptions(updatedMenuOptions);
        handleLanguage(lang);
        handleFormLanguage(lang);
        setOpen(!open);
    };


    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event, index) => {
        setAnchorEl(event.currentTarget);
    };

    return (
        <Box>
            <AppBar position="static" width="100%" sx={{ background: "transparent !important", boxShadow: "none", position: 'fixed' }}>
                <Box sx={{ paddingLeft: "0px" }}>
                    <HeaderContainer>
                        <Box sx={{ paddingLeft: !isMobile && 15 }}>
                            <img src={mobileLogo} height={!isMobile && '64px'} alt="Logo Ludmila e Bartosz" />
                        </Box>
                        <Stack direction="row" alignItems="center" gap={18} sx={{ paddingRight: !isMobile && 15 }}>
                            {!isMobile && (
                                <Stack direction="row" alignItems="center" gap={9}>
                                    <MenuLink to="/home">
                                        <Typography fontSize={theme.spacing(5)} fontWeight={url.includes('home') ? 700 : 400} color={url.includes('home') ? theme.palette.secondary.main : theme.palette.primary.main}>
                                            {text.MenuHeaderLinks.home[language].toUpperCase()}
                                        </Typography>
                                    </MenuLink>
                                    <MenuLink to="/wedding">
                                        <Typography fontSize={theme.spacing(5)} fontWeight={url.includes('wedding') ? 700 : 400} color={url.includes('wedding') ? theme.palette.secondary.main : theme.palette.primary.main}>
                                            {text.MenuHeaderLinks.wedding[language].toUpperCase()}
                                        </Typography>
                                    </MenuLink>
                                    <MenuLink to="/home">
                                        <Typography fontSize={theme.spacing(5)} fontWeight={url.includes('travel') ? 700 : 400} color={url.includes('travel') ? theme.palette.secondary.main : theme.palette.primary.main}>
                                            {text.MenuHeaderLinks.travel[language].toUpperCase()}
                                        </Typography>
                                    </MenuLink>
                                    <MenuLink to="/home">
                                        <Typography fontSize={theme.spacing(5)} fontWeight={url.includes('qea') ? 700 : 400} color={url.includes('qea') ? theme.palette.secondary.main : theme.palette.primary.main}>
                                            {text.MenuHeaderLinks.qea[language].toUpperCase()}
                                        </Typography>
                                    </MenuLink>
                                </Stack>
                            )}
                            {isMobile ? (
                                <Box>
                                    <MenuAvatar onClick={(_) => setOpen(!open)}>
                                        <List size={32} color={theme.palette.primary.main} />
                                    </MenuAvatar>
                                </Box>
                            ) : (
                                menuOptions.map((item, i) => item.selected && <MenuAvatar key={i} alt={item.alt} src={item.image} onClick={(e) => handleClick(e, i)} />)
                            )}
                        </Stack>
                    </HeaderContainer>
                </Box>
            </AppBar>
            <MenuDrawer open={open} setOpen={setOpen} handleDrawerOpen={handleDrawerOpen} />
            <HeaderMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} handleClick={handleClick} />
        </Box>
    );
};
