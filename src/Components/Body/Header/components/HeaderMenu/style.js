import { Avatar, Menu, Stack, MenuItem, styled } from "@mui/material";
import { Link } from "react-router-dom";

const StyledAvatar = styled(Avatar)(() => ({
    backgroundColor: "transparent",
    cursor: "pointer",
    transition: "box-shadow 0.3s ease-in-out",

    "&:hover": {
        boxShadow: "0px 4px 10px 0px rgba(84, 84, 84, 0.40)",
    },
}));
const MenuContainer = styled(Menu)(({ theme }) => ({
    "& .MuiPaper-root": {
        borderRadius: "12px",
        // borderBottomLeftRadius: theme.spacing(8),
        // borderBottomRightRadius: theme.spacing(8),
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        backgroundColor: "rgba(255, 255, 255, 0.25)",
        // padding: 0,
        marginTop: theme.spacing(20),
        // paddingRight: 15
        // left: 1455
    },
}));

const MenuItemContainer = styled(MenuItem)(({ theme }) => ({
    "&:hover": {
        backgroundColor: "transparent",
    },
    "&:focus": {
        backgroundColor: "transparent",
    },
}));

export { StyledAvatar, MenuContainer, MenuItemContainer };
