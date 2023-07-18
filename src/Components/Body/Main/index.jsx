import { Button, Stack, Typography, useTheme } from "@mui/material";
import { pol, ptBr } from "../../../languageTexts.js";
import { useState } from "react";

export const Main = () => {
    const [language, setlanguage] = useState(null);
    const handleLanguage = (value) => {
        value === "Português" ? setlanguage(ptBr) : setlanguage(pol);
    };

    return (
        <Stack direction="row" width="100%" height="100%" justifyContent="center" alignItems="center" gap={8}>
            <Button variant="contained" onClick={() => handleLanguage("Português")}>
                Português
            </Button>
            <Button variant="outlined" onClick={() => handleLanguage("Polonês")}>
                Polonês
            </Button>
            {language && <Typography variant="h2">{language}</Typography>}
        </Stack>
    );
};
