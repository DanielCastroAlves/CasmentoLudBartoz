import { Stack, styled } from "@mui/material";

const WeddingContainer = styled(Stack)(({ theme }) => ({
    alignItems: "center",
    // justifyContent: "center",
    gap: theme.spacing(10),
    padding: `${theme.spacing(15)} ${theme.spacing(4)}`,
    width: "100%",
    width: '100%'
}));


export { WeddingContainer };
