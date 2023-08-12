import * as React from "react";
import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#9C4522",
        },
        secondary: {
            main: "#52736B",
        },
        gray: {
            50: "#F9F9F9",
            200: "#f2f2f2",
            300: "#D9D9D9",
            400: "#B5B5B5",
            500: "#545454",
            600: "#666666",
            700: "#565656",
            800: "#949494",
            900: "#1E1E1E",
        },
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
        fontFamily: "Cinzel, sans-serif",
    },

    spacing: (factor) => `${0.25 * factor}rem`,
});
