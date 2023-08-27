import { createTheme } from "@mui/material/styles";
import {palette} from './palette'
import { typography } from "./typography";

export const theme = createTheme({
    typography: {
        ...typography,
    },
    palette: {
        ...palette,
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
    typography: {
        fontFamily: "Cinzel",
    },

    spacing: (factor) => `${0.25 * factor}rem`,
});
