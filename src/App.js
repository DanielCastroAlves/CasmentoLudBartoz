import React from "react";
import { Main } from "./Domains/Main/components/content/index.jsx";
import { useTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Theme/index.jsx";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Main  />
        </ThemeProvider>
    );
}

export default App;
