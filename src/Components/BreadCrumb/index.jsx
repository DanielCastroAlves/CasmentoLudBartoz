import { Breadcrumbs, Stack, Typography, useTheme } from "@mui/material";
import { Link, useMatch } from "react-router-dom";
import { BreadCrumbLink } from "./style";

export const BreadCrumb = () => {
    function handleClick(event) {
        event.preventDefault();
        console.info("You clicked a breadcrumb.");
    }
    const theme = useTheme();

    const match = useMatch("/example/:lastPart");
    const value = match?.props.lastPart;

    console.log(match, value);
    // if (!!value) {
    //     // do some stuff here
    // }
    return (
        // <div role="presentation" onClick={handleClick}>
        <Stack direction="row" width="100%" marginLeft={36} mb={20}>
            <Breadcrumbs separator=">" aria-label="breadcrumb">
                <BreadCrumbLink underline="hover" color="inherit" to="/home">
                    <Typography>teste 1</Typography>
                </BreadCrumbLink>
                <BreadCrumbLink underline="hover" color="inherit" to="/home">
                    <Typography>teste 2 </Typography>
                </BreadCrumbLink>
                <BreadCrumbLink underline="hover" color="text.primary" to="/home" aria-current="page">
                    <Typography>teste 3</Typography>
                </BreadCrumbLink>
            </Breadcrumbs>
        </Stack>

        // </div>
    );
};
