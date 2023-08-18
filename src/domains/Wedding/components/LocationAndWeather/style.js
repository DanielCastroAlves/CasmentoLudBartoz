import { Stack, styled } from "@mui/material";
import { Link } from "react-router-dom";

const CeremonyContainer = styled(Stack)(({theme}) => ({
    alignItems: 'center',
    border: `1px solid ${theme.palette.primary.main}`,
    direction: 'column',
    gap: theme.spacing(8),
    padding: `${theme.spacing(11)} ${theme.spacing(4)}`,
    width: "50%%",
}));

export { CeremonyContainer };
