import { Avatar, Stack, Box, styled } from "@mui/material";
import { Link } from "react-router-dom";

const HeaderContainer = styled(Stack)(({ theme }) => ({
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: `${theme.spacing(4)} ${theme.spacing(0)}`,
    width: "100%",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    backgroundColor: "rgba(255, 255, 255, 0.25);",
    backdropFilter: "blur(6px)",
    zIndex: 1,
}));

const LanguageIconContainer = styled(Box)(({ theme }) => ({
    "&:hover svg": {
        fill: theme.palette.secondary.main,
    },
}));

const MenuAvatar = styled(Avatar)(({ theme }) => ({
    backgroundColor: "transparent",
    cursor: "pointer",
}));

const MenuLink = styled(Link)(({ theme }) => ({
    textDecoration: "none",
}));

export { HeaderContainer, MenuAvatar, MenuLink, LanguageIconContainer };
