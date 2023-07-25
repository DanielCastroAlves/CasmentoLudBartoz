import { Stack, styled } from "@mui/material";

const FooterContainer = styled(Stack)(({ theme }) => ({
    height: theme.spacing(80),
    padding: `${theme.spacing(8)} ${theme.spacing(6)}`,
}));

export { FooterContainer };
