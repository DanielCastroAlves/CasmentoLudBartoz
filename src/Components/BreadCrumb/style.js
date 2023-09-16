import { Stack, styled } from "@mui/material";
import { Link } from "react-router-dom";

const BreadCrumbLink = styled(Link)(({ theme }) => ({
    textDecoration: "none",

    "& .MuiTypography-root": {
        color: theme.palette.gray['500'],
        fontFamily: "Open Sans",
        fontSize: theme.spacing(4),
        fontWeight: 400,
        textTransform: "uppercase",
    },
    "&:hover .MuiTypography-root": {
        // color: theme.palette.primary.main, 
        fontWeight: 600,
    },

    "&:focus .MuiTypography-root": {
        // color: theme.palette.secondary.main, 
        fontWeight: 600,
    },
}));

export {BreadCrumbLink}