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

const pages = [];
const settings = ["Link 1", "Link 2", "Link 3", "Link 4"];

export const Header = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const [open, setOpen] = useState(false);

    const handleDrawerOpen = (index) => {
        const updatedMenuOptions = menuOptions.map((option, i) => ({
            ...option,
            selected: i === index ? true : false,
        }));
        setMenuOptions(updatedMenuOptions);
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
                                    <MenuAvatar onClick={(_) => setOpen(!open)}>
                                        <List size={32} color={theme.palette.primary.main} />
                                    </MenuAvatar>
                                </Box>
                            ) : (
                                menuOptions.map((item, i) => item.selected && <MenuAvatar key={i} alt={item.alt} src={item.image} onClick={(e) => handleClick(e, i)} />)
                            )}
                        </Stack>
                    </HeaderContainer>
                </Toolbar>
            </AppBar>
            <MenuDrawer open={open} setOpen={setOpen} handleDrawerOpen={handleDrawerOpen} menuOptions={menuOptions} />
            <HeaderMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} handleClick={handleClick} menuOptions={menuOptions} setMenuOptions={setMenuOptions} />
        </>
    );
};
