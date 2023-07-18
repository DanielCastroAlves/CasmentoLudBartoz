import React from "react";
import { Button, Stack, Typography, useTheme } from "@mui/material";
import { useState } from "react";

import { StackTeste } from "./style.js";
import { Main } from "./Main";
import { Header } from "./Header/index.jsx";
import { Footer } from "./Footer/index.jsx";

export const Body = () => {
    const theme = useTheme();

    return (
        <StackTeste justifyContent="flex-start" alignItems="center" width="100%" maxWidth="100vw" height="100vh" gap={8}>
            <Header />
            <Main />
            <Footer />
        </StackTeste>
    );
};
