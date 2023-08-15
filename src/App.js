import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Theme/index.js";
import { Body } from "./Components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./domains/Home/index.jsx";
import { LanguageContextProvider } from "./context/LanguageContext.jsx";
import { Wedding } from "./domains/Wedding/index.jsx";

const router = createBrowserRouter([
    {
        element: <Body />,
        children: [
            {
                path: "/",
                children: [
                    {
                        path: "home",
                        element: <Home />,
                    },
                ],
            },
            {
                path: "/",
                children: [
                    {
                        path: "wedding",
                        element: <Wedding />,
                    },
                ],
            },
        ],
    },
]);


function App() {
    return (
        <ThemeProvider theme={theme}>
            <LanguageContextProvider>
                <RouterProvider router={router} />
            </LanguageContextProvider>
        </ThemeProvider>
    );
}

export default App;
