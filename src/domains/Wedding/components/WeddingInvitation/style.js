import { Stack, Typography, styled } from "@mui/material";

const WeddingContainer = styled(Stack)(({ theme }) => ({
    alignItems: "center",
    // justifyContent: "center",
    gap: theme.spacing(10),
    // padding: `${theme.spacing(15)} ${theme.spacing(30)}`,
    width: "100%",
}));
const WeddingText = styled(Typography)(({ theme }) => ({
    textAlign: "center", 
    wordWrap: "break-word", 
    hyphens: "auto", 
}));


export { WeddingContainer, WeddingText };
