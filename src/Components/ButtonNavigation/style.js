import { Button, styled } from "@mui/material";

const LeftBtnNavigation = styled(Button)(({ theme }) => ({
    backgroundColor: "#FFFFFF",
    padding: `${theme.spacing(4)} ${theme.spacing(6)} ${theme.spacing(4)} ${theme.spacing(6)}`,
    borderRadius: "50px !important",
    boxShadow: "none",

    "&:hover": {
        backgroundColor: "#FFFFFF",
        boxShadow: "none",
        "& .MuiTypography-root": {
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        },
        "& .icon-container svg": {
            filter: "drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))",
        },
    },
    "&:focus": {
        backgroundColor: "#FFFFFF",
        boxShadow: "none",
    },
}));
const RightBtnNavigation = styled(Button)(({ theme }) => ({
    backgroundColor: "#FFFFFF",
    padding: `${theme.spacing(4)} ${theme.spacing(6)} ${theme.spacing(4)} ${theme.spacing(6)}`,
    borderRadius: "50px !important",
    boxShadow: "none",

    "&:hover": {
        backgroundColor: "#FFFFFF",
        boxShadow: "none",
        "& .MuiTypography-root": {
            textShadow: "-2px 2px 4px rgba(0, 0, 0, 0.5)",
        },
        "& .icon-container svg": {
            filter: "drop-shadow(-3px 5px 2px rgb(0 0 0 / 0.4))",
        },
    },
    "&:focus": {
        backgroundColor: "#FFFFFF",
        boxShadow: "none",
    },
}));

export { LeftBtnNavigation, RightBtnNavigation };
