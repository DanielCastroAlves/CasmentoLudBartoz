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
const CeremonyContainerMobile = styled(Stack)(({theme}) => ({
    alignItems: 'center',
    border: `1px solid ${theme.palette.primary.main}`,
    direction: 'column',
    margin: `${theme.spacing(8)} ${theme.spacing(4)} 0px ${theme.spacing(4)}`,
    padding: `${theme.spacing(11)} ${theme.spacing(4)}`,
}));

export { CeremonyContainer, CeremonyContainerMobile };
