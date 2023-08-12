import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Theme/index.jsx";
import { Body } from "./Components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./domains/Home/index.jsx";
import { LanguageContextProvider } from "./context/LanguageContext.jsx";
import { NewBody } from "./Components/NewBody/index.jsx";

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
        ],
    },
]);

const router2 = createBrowserRouter([
    {
        element: <NewBody />,
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
