import { Box, Breadcrumbs, Stack, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";

const BreadCrumbLink = styled(Link)(({ theme }) => ({
    textDecoration: "none",


}));

const LinkText = styled(Typography)(({ theme }) => ({
    // color: theme.palette.gray["500"],
    fontFamily: "Open Sans",
    fontSize: theme.spacing(4),
    // fontWeight: 400,
    textTransform: "uppercase",
}));
const LastLinkText = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.main,
    fontFamily: "Open Sans",
    fontSize: theme.spacing(4),
    fontWeight: 600,
    textTransform: "uppercase",
}));

export { BreadCrumbLink, LinkText, LastLinkText };
