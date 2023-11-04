import { Box, Breadcrumbs, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Link, useMatch } from "react-router-dom";
import { BreadCrumbContainer, BreadCrumbLink, LastLinkText, LinkText } from "./style";

export const BreadCrumb = ({ data }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Stack direction="row" width="100%" justifyContent={isMobile && "center"} marginLeft={!isMobile && 36} px={isMobile && 4} mb={20}>
            <BreadCrumbContainer separator=">" aria-label="breadcrumb">
                {data.map((link, index) => {
                    return (
                        <BreadCrumbLink underline="hover" color="inherit" to={link.url}>
                            <LinkText fontSize={isMobile ? theme.spacing(2.5) : theme.spacing(4)} color={index === data.length - 1 ? theme.palette.primary.main : theme.palette.gray["500"]} fontWeight={index === data.length - 1 ? 600 : 400}>
                                {link.label}
                            </LinkText>
                        </BreadCrumbLink>
                    );
                })}
            </BreadCrumbContainer>
        </Stack>
    );
};
