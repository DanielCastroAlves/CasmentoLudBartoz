import { Avatar, Menu, Stack, styled } from "@mui/material";
import { Link } from "react-router-dom";

const MenuAvatar = styled(Avatar)(() => ({
    backgroundColor: "transparent",
    cursor: "pointer",
}));
const MenuContainer = styled(Menu)(({ theme }) => ({
    "& .MuiPaper-root": {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: theme.spacing(8),
        borderBottomRightRadius: theme.spacing(8),
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    },
}));

export { MenuAvatar, MenuContainer };
