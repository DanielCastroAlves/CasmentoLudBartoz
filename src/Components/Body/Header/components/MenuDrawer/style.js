import { Avatar, Stack, styled } from "@mui/material";
import bgImage from "../../../../../Assets/Images/bgmain.jpg";
import { Link } from "react-router-dom";

const HeaderMenuDrawerContainer = styled(Stack)(({ theme }) => ({
    // border: '2px solid blue',
    direction: 'row',
    borderBottom: `1px solid ${theme.palette.primary.main}`,
    borderLeft: `1px solid ${theme.palette.primary.main}`,
    borderRight: `1px solid ${theme.palette.primary.main}`,
    justifyContent: 'flex-start',
    height: "100%",
    // marginTop: theme.spacing(8),
    width: "100%",
}));

const MenuLink = styled(Link)(() => ({
    textDecoration: "none",
}));

const MenuAvatar = styled(Avatar)(() => ({
    backgroundColor: "transparent",
    cursor: "pointer",
}));

export { HeaderMenuDrawerContainer, MenuLink, MenuAvatar };
