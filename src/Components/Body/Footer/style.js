import { Stack, styled } from "@mui/material";
import { Link } from "react-router-dom";

const MenuLink = styled(Link)(({ theme }) => ({
    textDecoration: "none",

    "& .MuiTypography-root": {
        color: theme.palette.primary.main,
        fontFamily: "Open Sans",
        lineHeight: "normal",
        fontSize: theme.spacing(3.375),
        fontWeight: 300,
        textAlign: "right",
        textTransform: "uppercase",
    },
    "&:hover .MuiTypography-root": {
        color: theme.palette.primary.main, 
        fontWeight: 400,
    },

    "&:focus .MuiTypography-root": {
        color: theme.palette.secondary.main, 
        fontWeight: 600,
    },
}));
const MobileFooterContainer = styled(Stack)(({ theme }) => ({
    justifyContent: "center",
    alignItems: "center",
    gap: theme.spacing(5),
    height: "109px",
    width: '100%'
}));
const ContentContainer = styled(Stack)(({ theme }) => ({
    // width: '100%',
    // height: '100%',
    margin: `${theme.spacing(5)} ${theme.spacing(9.75)} ${theme.spacing(5)} ${theme.spacing(9.75)}`
}));

export { MenuLink, MobileFooterContainer, ContentContainer };
