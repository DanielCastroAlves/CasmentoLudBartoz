import { Stack, Typography, styled } from "@mui/material";

const WeddingContainer = styled(Stack)(({ theme }) => ({
    alignItems: "center",
    gap: theme.spacing(10),
    width: "100%",
}));
const StyledText = styled(Typography)(({ theme }) => ({
    textAlign: "center",
    wordWrap: "break-word",
    hyphens: "auto",
}));

export { WeddingContainer, StyledText };
