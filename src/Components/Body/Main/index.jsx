import { Button, Stack, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useLanguage } from "../../../hooks/useLanguage";
import { Footer } from "../Footer";
import { Header } from "../Header";

export const Main = () => {
    const { handleLanguage } = useLanguage();
    return (
        <Stack direction="row" width="100%" height="auto" justifyContent="center" alignItems="center" gap={8}>
            <Outlet />
        </Stack>
    );
};
