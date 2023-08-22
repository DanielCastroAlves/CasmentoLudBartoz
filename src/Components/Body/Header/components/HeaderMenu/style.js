import { Avatar, Menu, Stack, styled } from "@mui/material";
import { Link } from "react-router-dom";

const MenuAvatar = styled(Avatar)(() => ({
    backgroundColor: "transparent",
    cursor: "pointer",
}));
const MenuContainer = styled(Menu)(({ theme }) => ({
    "& .MuiPaper-root": {
        borderRadius: '12px',
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

export { MenuAvatar, MenuContainer };
