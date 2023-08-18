import { Box, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";

const GalleryContainer = styled(Box)(() => ({
    position: "relative",
    width: "100%",
}));
const GalleryTextContainer = styled(Box)(() => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    // backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: "10px",
    borderRadius: "5px",
    width: "100%",
}));

const GaleryLink = styled(Link)(() => ({
    width: "100%",
    textDecoration: "none",
}));

const GalleryText = styled(Typography)(({ theme }) => ({
    textAlign: "center",
    wordWrap: "break-word",
    // hyphens: "auto",
}));

export { GalleryContainer, GalleryTextContainer, GalleryText, GaleryLink };
