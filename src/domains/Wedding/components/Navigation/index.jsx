import { Button, Stack } from "@mui/material";
import { ArrowRight } from "@phosphor-icons/react";


export const Navigation = () => {
    return (
        <Stack width="100%" direction="row" justifyContent="space-between">
            <Button variant="contained" endIcon={<ArrowRight  />}>
                Send
            </Button>
            <Button variant="contained" endIcon={<ArrowRight  />}>
                Send
            </Button>
        </Stack>
    );
};
