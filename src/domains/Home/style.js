import { Stack, styled } from "@mui/material";
import bgDesktop from "../../Assets/Images/bgHomeDesktop.png";
import bgMobile from "../../Assets/Images/bgHomeMobile.png";

const HomeContainer = styled(Stack)(({theme}) => ({
    // position: "absolute",
    width: "100%",
    height: "100vh",
    backgroundImage: `linear-gradient(360deg, #FFF 0%, rgba(255, 255, 255, 0.78) 1.87%, rgba(255, 255, 255, 0.00) 51.77%), url(${bgDesktop})`,
    // backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    maxWidth: "-webkit-fill-available",
    overflow: "auto !important",

    [theme.breakpoints.down("sm")]: {
        backgroundImage: `linear-gradient(360deg, #FFF 0%, rgba(255, 255, 255, 0.78) 1.87%, rgba(255, 255, 255, 0.00) 51.77%), url(${bgMobile})`,
    },
}));

export { HomeContainer };
