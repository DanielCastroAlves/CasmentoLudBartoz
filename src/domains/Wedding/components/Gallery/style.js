import { Box, styled } from "@mui/material";
import { Link } from "react-router-dom";

const GalleryContainer = styled(Box)(() => ({
    position: "relative",
    width: "100%",
}));
const GalleryText = styled(Box)(() => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    // backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: "10px",
    borderRadius: "5px",
}));

const GaleryLink = styled(Link)(() => ({
    width:  '100%',
    textDecoration: "none",
}));

export { GalleryContainer, GalleryText, GaleryLink };
