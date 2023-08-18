import React from "react";
import { Button, Stack, Typography, useTheme, Divider } from "@mui/material";
import { useState } from "react";

import { Main } from "./Main";
import { Header } from "./Header/index.jsx";
import { Footer } from "./Footer/index.jsx";
import { useLocation, useParams } from "react-router-dom";

export const Body = () => {
    const theme = useTheme();

    const location = useLocation();
    const url = location.pathname;


    return url === "/home" ? (
        <Stack width='100%' height='100%' p={0}>
            {/* <Header /> */}
            <Main />
            <Divider />
            <Footer />
        </Stack>
    ) : (
        <Stack width='100%' height='100%' p={0}>
            <Header />
            <Main />
            <Divider />
            <Footer />
        </Stack>
    );
};
