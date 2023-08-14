import { Stack, styled } from "@mui/material";
import bgImage from "../../Assets/Images/bgmain.jpg";

const HomeContainer = styled(Stack)(() => ({
    // position: "absolute",
    width: "100%",
    height: "1200px",
    backgroundImage: `linear-gradient(360deg, #FFF 0%, rgba(255, 255, 255, 0.78) 37.87%, rgba(255, 255, 255, 0.00) 81.77%), url(${bgImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    maxWidth: "-webkit-fill-available",
}));

export { HomeContainer };
