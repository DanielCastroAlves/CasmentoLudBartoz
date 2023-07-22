import { Button, Stack, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useLanguage } from "../../../hooks/useLanguage";

export const Main = () => {
    const { handleUrlLanguage } = useLanguage();
    return (
        <Stack direction="row" width="100%" height="100%" justifyContent="center" alignItems="center" gap={8}>
            <Button variant="contained" onClick={() => handleUrlLanguage("pt")}>
                Português
            </Button>
            <Button variant="outlined" onClick={() => handleUrlLanguage("pol")}>
                Polonês
            </Button>
            <Outlet />
        </Stack>
    );
};
