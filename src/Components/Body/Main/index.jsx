import { Button, Stack, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useLanguage } from "../../../hooks/useLanguage";

export const Main = () => {
    const { handleLanguage } = useLanguage();
    return (
        <Stack direction="row" width="100%" height="100%" justifyContent="center" alignItems="center" gap={8}>
            <Button variant="contained" onClick={() => handleLanguage("pt")}>
                Português
            </Button>
            <Button variant="outlined" onClick={() => handleLanguage("pol")}>
                Polonês
            </Button>
            <Outlet />
        </Stack>
    );
};
