import { Box, Breadcrumbs, Stack, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";

const BreadCrumbLink = styled(Link)(({ theme }) => ({
    textDecoration: "none",
}));

const LinkText = styled(Typography)(({ theme }) => ({
    fontFamily: "Open Sans",
    fontSize: theme.spacing(4),
    textTransform: "uppercase",
}));

const LastLinkText = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.main,
    fontFamily: "Open Sans",
    fontSize: theme.spacing(4),
    fontWeight: 600,
    textTransform: "uppercase",
}));

const BreadCrumbContainer = styled(Breadcrumbs)(({ theme }) => ({
    "& .MuiBreadcrumbs-ol": {
        flexWrap: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "noWrap",
    },
}));

export { BreadCrumbLink, LinkText, LastLinkText, BreadCrumbContainer };
