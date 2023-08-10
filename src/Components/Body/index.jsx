import React from "react";
import { Button, Stack, Typography, useTheme } from "@mui/material";
import { useState } from "react";

import { BodyContainer } from "./style.js";
import { Main } from "./Main";
import { Header } from "./Header/index.jsx";
import { Footer } from "./Footer/index.jsx";

export const Body = () => {
    const theme = useTheme();

    return (
        <BodyContainer justifyContent="flex-start" alignItems="center" width="100%" maxWidth="100vw" height="100vh" gap={8}>
            <Header />
            <Main />
            <Footer />
        </BodyContainer>
    );
};
