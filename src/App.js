import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Theme/index.jsx";
import { Body } from './Components/Body'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Body  />
        </ThemeProvider>
    );
}

export default App;
