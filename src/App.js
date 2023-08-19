import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Theme/index.js";
import { Body } from "./Components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./domains/Home/index.jsx";
import { LanguageContextProvider } from "./context/LanguageContext.jsx";
import { Wedding } from "./domains/Wedding/index.jsx";
import { PreWedding } from "./domains/Wedding/pages/preWedding/index.jsx";
import { DressCode } from "./domains/Wedding/pages/dressCode/index.jsx";

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
            {
                path: "/",
                children: [
                    {
                        path: "wedding/prewedding",
                        element: <PreWedding />,
                    },
                ],
            },
            {
                path: "/",
                children: [
                    {
                        path: "wedding/dresscode",
                        element: <DressCode />,
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
