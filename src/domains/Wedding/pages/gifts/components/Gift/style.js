import { Box, Divider, Stack, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";

const GiftContainer = styled(Stack)(({ theme }) => ({
    direction: 'row',
    borderBottom: `1px solid ${theme.palette.secondary.main}`,
    borderTop: `1px solid ${theme.palette.secondary.main}`,
    borderRight: `1px solid ${theme.palette.secondary.main}`,
    height: "400px",
    width: "100%",
    // marginTop: '200px'
}));
const GiftContainer2 = styled(Stack)(({ theme }) => ({
    borderBottom: `1px solid ${theme.palette.primary.main}`,
    borderTop: `1px solid ${theme.palette.primary.main}`,
    borderLeft: `1px solid ${theme.palette.primary.main}`,
    height: "500px",
    width: "100%",
    // marginTop: '200px'
}));



export { GiftContainer, GiftContainer2 };
