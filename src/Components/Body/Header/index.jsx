import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import { Avatar, Box, Button, IconButton, Stack, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Alarm, Heart, Cube, List, Globe } from "@phosphor-icons/react";
import brIcon from "../../../Assets/Images/brIcon.png";
import { BoxTeste, HeaderContainer, LanguageIconContainer, MenuAvatar, MenuLink } from "./style";
import { MenuDrawer } from "./components/MenuDrawer";
import { HeaderMenu } from "./components/HeaderMenu";
import { useLanguage } from "../../../hooks/useLanguage";
import { Link, useLocation } from "react-router-dom";
import text from "../../../Assets/text.json";
import mobileLogo from "../../../Assets/Images/logoMobile.svg";
import olivaLogo from "../../../Assets/Images/logoOliva.svg";

export const Header = () => {
    const theme = useTheme();
    const { handleFormLanguage, handleLanguage, language, menuOptions, setMenuOptions } = useLanguage();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const [logoHovered, setLogoHovered] = useState(mobileLogo);

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
        <Box width="100%" height={isMobile ? theme.spacing(20.2) : theme.spacing(21.5)} mb={isMobile ? theme.spacing(20.2) : theme.spacing(21.5)} sx={{ zIndex: "99" }}>
            <AppBar position="static" width="100%" top={0} zIndex={100} sx={{ background: "transparent !important", boxShadow: "none", position: "fixed" }}>
                <Box sx={{ paddingLeft: "0px" }}>
                    <HeaderContainer>
                        <Link to="/home">
                            <Box sx={{ paddingLeft: !isMobile && 15 }}>
                                <img src={logoHovered} height={!isMobile && "64px"} alt="Logo Ludmila e Bartosz" onMouseEnter={() => setLogoHovered(olivaLogo)} onMouseLeave={() => setLogoHovered(mobileLogo)} />
                            </Box>
                        </Link>

                        <Stack direction="row" alignItems="center" gap={18} sx={{ marginRight: !isMobile && 15 }}>
                            {!isMobile && (
                                <Stack direction="row" alignItems="center" gap={9}>
                                    <MenuLink to="/home">
                                        <Typography fontSize={theme.spacing(5)} fontWeight={url.includes("home") ? 700 : 400} color={url.includes("home") ? theme.palette.secondary.main : theme.palette.primary.main}>
                                            {text.MenuHeaderLinks.home[language].toUpperCase()}
                                        </Typography>
                                    </MenuLink>
                                    <MenuLink to="/wedding">
                                        <Typography fontSize={theme.spacing(5)} fontWeight={url.includes("wedding") ? 700 : 400} color={url.includes("wedding") ? theme.palette.secondary.main : theme.palette.primary.main}>
                                            {text.MenuHeaderLinks.wedding[language].toUpperCase()}
                                        </Typography>
                                    </MenuLink>
                                    <MenuLink to="/home">
                                        <Typography fontSize={theme.spacing(5)} fontWeight={url.includes("travel") ? 700 : 400} color={url.includes("travel") ? theme.palette.secondary.main : theme.palette.primary.main}>
                                            {text.MenuHeaderLinks.travel[language].toUpperCase()}
                                        </Typography>
                                    </MenuLink>
                                    <MenuLink to="/home">
                                        <Typography fontSize={theme.spacing(5)} fontWeight={url.includes("qea") ? 700 : 400} color={url.includes("qea") ? theme.palette.secondary.main : theme.palette.primary.main}>
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
                                <LanguageIconContainer sx={{ cursor: "pointer" }}>
                                    <Globe size={42} weight="thin" color={theme.palette.primary.main} onClick={(e) => handleClick(e, 0)} />
                                </LanguageIconContainer>

                                // menuOptions.map((item, i) => item.selected && <MenuAvatar key={i} alt={item.alt} src={item.image} onClick={(e) => handleClick(e, i)} />)
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
