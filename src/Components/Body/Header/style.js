import { Avatar, Stack, styled } from "@mui/material";
import { Link } from "react-router-dom";

const HeaderContainer = styled(Stack)(({ theme }) => ({
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: `${theme.spacing(4)} ${theme.spacing(4)}`,
    width: "100%",
    boxShadow: 'none',
    background: 'rgba(255, 255, 255, 0.25)'
}));

const MenuAvatar = styled(Avatar)(({ theme }) => ({
    backgroundColor: "transparent",
    cursor: "pointer",
}));

const MenuLink = styled(Link)(({ theme }) => ({
    textDecoration: "none",
}));

export { HeaderContainer, MenuAvatar, MenuLink };
