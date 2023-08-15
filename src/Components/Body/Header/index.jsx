import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import { Avatar, Box, Button, IconButton, Stack, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Alarm, Heart, Cube, List } from "@phosphor-icons/react";
import headerLogo from "../../../Assets/Images/smallLogo.png";
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

export const Header = () => {
    const theme = useTheme();
    const { handleFormLanguage, handleLanguage, language } = useLanguage();
    console.log("language", text.MenuHeaderLinks.home[language]);
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

    const [menuOptions, setMenuOptions] = useState([
        {
            alt: "Bandeira do Brasil",
            image: brIcon,
            selected: true,
            language: "pt",
        },
        {
            alt: "Bandeira da Polônia",
            image: polIcon,
            selected: false,
            language: "pol",
        },
        {
            alt: "Bandeira do Reino Unido",
            image: engIcon,
            selected: false,
            language: "eng",
        },
        {
            alt: "Bandeira da Espanha",
            image: esIcon,
            selected: false,
            language: "es",
        },
    ]);

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event, index) => {
        setAnchorEl(event.currentTarget);
    };

    return (
        <Box>
            <AppBar position="static" width="100%" sx={{ background: "transparent !important", boxShadow: "none" }}>
                <Box sx={{ paddingLeft: "0px" }}>
                    <HeaderContainer>
                        <Box sx={{ paddingLeft: !isMobile && 15 }}>
                            <img src={headerLogo} alt="Logo Ludmila e Bartosz" />
                        </Box>
                        <Stack direction="row" alignItems="center" gap={18} sx={{ paddingRight: !isMobile && 15 }}>
                            {!isMobile && (
                                <Stack direction="row" alignItems="center" gap={9}>
                                    <MenuLink to="/home">
                                        <Typography fontSize={theme.spacing(5)} fontWeight={url === "/home" ? 700 : 400} color={url === "/home" ? theme.palette.secondary.main : theme.palette.primary.main}>
                                            {text.MenuHeaderLinks.home[language].toUpperCase()}
                                        </Typography>
                                    </MenuLink>
                                    <MenuLink to="/wedding">
                                        <Typography fontSize={theme.spacing(5)} fontWeight={url === "/wedding" ? 700 : 400} color={url === "/wedding" ? theme.palette.secondary.main : theme.palette.primary.main}>
                                            {text.MenuHeaderLinks.wedding[language].toUpperCase()}
                                        </Typography>
                                    </MenuLink>
                                    <MenuLink to="/home">
                                        <Typography fontSize={theme.spacing(5)} fontWeight={url === "/travel" ? 700 : 400} color={url === "/travel" ? theme.palette.secondary.main : theme.palette.primary.main}>
                                            {text.MenuHeaderLinks.travel[language].toUpperCase()}
                                        </Typography>
                                    </MenuLink>
                                    <MenuLink to="/home">
                                        <Typography fontSize={theme.spacing(5)} fontWeight={url === "/qea" ? 700 : 400} color={url === "/qea" ? theme.palette.secondary.main : theme.palette.primary.main}>
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
            <MenuDrawer open={open} setOpen={setOpen} handleDrawerOpen={handleDrawerOpen} menuOptions={menuOptions} />
            <HeaderMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} handleClick={handleClick} menuOptions={menuOptions} setMenuOptions={setMenuOptions} />
        </Box>
    );
};
