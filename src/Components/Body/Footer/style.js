import { Stack, styled } from "@mui/material";
import { Link } from "react-router-dom";

const FooterContainer = styled(Stack)(({ theme }) => ({
    // height: theme.spacing(80),
    // padding: `${theme.spacing(8)} ${theme.spacing(6)}`,
}));

const MenuLink = styled(Link)(() => ({
    textDecoration: "none",
}));

export { FooterContainer, MenuLink };
