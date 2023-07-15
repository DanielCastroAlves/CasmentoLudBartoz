import { Box, Button, ButtonGroup, Chip, ListItem, Stack, styled } from "@mui/material";
import bgImage from "../../../../Images/bgmain.jpg";

const StackTeste = styled(Stack)(({ theme }) => ({
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundImage: `url(${bgImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    maxWidth: "-webkit-fill-available",
}));

export { StackTeste };
