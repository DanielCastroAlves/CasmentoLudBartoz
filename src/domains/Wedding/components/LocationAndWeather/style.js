import { Stack, styled } from "@mui/material";
import { Link } from "react-router-dom";
import brMap from "../../../../Assets/Images/brMap.png";

const CeremonyContainer = styled(Stack)(({ theme }) => ({
    alignItems: "center",
    border: `1px solid ${theme.palette.primary.main}`,
    direction: "column",
    gap: theme.spacing(8),
    padding: `${theme.spacing(11)} ${theme.spacing(0)}`,
    width: "50%%",
}));

const brMapContainer = styled(Stack)(({ theme }) => ({
    // position: "absolute",
    width: "300px",

    height: "300px",
    // backgroundImage: `linear-gradient(360deg, #FFF 0%, rgba(255, 255, 255, 0.78) 1.87%, rgba(255, 255, 255, 0.00) 51.77%), url(${brMap})`,
    // backgroundPosition: "center",
    // backgroundSize: "cover",
    // backgroundRepeat: "no-repeat",
    // maxWidth: "-webkit-fill-available",
    // overflow: "auto !important",
    backgroundColor: "red",

    // [theme.breakpoints.down("sm")]: {
    //     backgroundImage: `linear-gradient(360deg, #FFF 0%, rgba(255, 255, 255, 0.78) 1.87%, rgba(255, 255, 255, 0.00) 51.77%), url(${bgMobile})`,
    // },
}));
const CeremonyContainerMobile = styled(Stack)(({ theme }) => ({
    alignItems: "center",
    border: `1px solid ${theme.palette.primary.main}`,
    direction: "column",
    margin: `${theme.spacing(8)} ${theme.spacing(4)} 0px ${theme.spacing(4)}`,
    padding: `${theme.spacing(11)} ${theme.spacing(4)}`,
}));

export { CeremonyContainer, CeremonyContainerMobile, brMapContainer };
