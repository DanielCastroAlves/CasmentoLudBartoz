import Grid from "@mui/material/Unstable_Grid2";
import dressCodeMobile1 from "../../../../../../Assets/Images/dresscode/dressCodeMobile1.png";
import dressCodeDesktop1 from "../../../../../../Assets/Images/dresscode/dressCodeDesktop1.png";
import { Box, Divider, List, ListItem, ListItemIcon, ListItemText, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useLanguage } from "../../../../../../hooks/useLanguage";
import text from "../../../../../../Assets/text.json";
import dressCodeMobile2 from "../../../../../../Assets/Images/dresscode/dressCodeMobile2.png";
import dressCodeMobile3 from "../../../../../../Assets/Images/dresscode/dressCodeMobile3.png";
import dressCodeMobile4 from "../../../../../../Assets/Images/dresscode/dressCodeMobile4.png";
import dressCodeMobile5 from "../../../../../../Assets/Images/dresscode/dressCodeMobile5.png";
import dressCodeDesktop2 from "../../../../../../Assets/Images/dresscode/dressCodeDesktop2.png";
import dressCodeDesktop3 from "../../../../../../Assets/Images/dresscode/dressCodeDesktop3.png";
import dressCodeDesktop4 from "../../../../../../Assets/Images/dresscode/dressCodeDesktop4.png";
import dressCodeDesktop5 from "../../../../../../Assets/Images/dresscode/dressCodeDesktop5.png";
import { CheckCircle, Dot } from "@phosphor-icons/react";
export const DressCodeInfo = () => {
    const theme = useTheme();
    const { language } = useLanguage();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const path = [
        { label: "Casamento", url: "/wedding" },
        { label: "Presente", url: "/wedding/gift" },
    ];
    return (
        <Grid container height="100%" justifyContent="center" alignItems="space-between" px={13} mt={15}>
            <Grid xs={12} sm={6}>
                <img src={isMobile ? dressCodeMobile1 : dressCodeDesktop1} width="100%" alt="Praia vista de cima" />
            </Grid>
            <Grid xs={12} sm={6}>
                <Stack p={4} gap={8} height="100%" justifyContent="space-between">
                    <Typography fontSize={theme.spacing(5)} color={theme.palette.secondary.main}>
                        {text.dressCode.heading1[language]}
                    </Typography>
                    <Typography fontSize={theme.spacing(4.5)} color={theme.palette.gray["500"]} fontWeight="300" fontFamily="Open Sans">
                        {text.dressCode.body1[language]}
                    </Typography>
                    <Typography fontSize={theme.spacing(5)} color={theme.palette.secondary.main}>
                        {text.dressCode.heading2[language]}
                    </Typography>
                    <Typography fontSize={theme.spacing(4.5)} color={theme.palette.gray["500"]} fontWeight="300" fontFamily="Open Sans">
                        {text.dressCode.body2[language]}
                    </Typography>
                    <Stack width="100%">
                        <img src={isMobile ? dressCodeMobile2 : dressCodeDesktop2} height="auto" alt="Gráfico de previsão de tempo" />
                    </Stack>
                </Stack>
            </Grid>
            <Grid xs={12} sm={6} mt={15}>
                <Stack p={4} gap={8} height="100%">
                    <Typography fontSize={theme.spacing(5)} color={theme.palette.secondary.main}>
                        {text.dressCode.heading3[language]}
                    </Typography>
                    <Typography fontSize={theme.spacing(4.5)} color={theme.palette.gray["500"]} fontWeight="300" fontFamily="Open Sans">
                        {text.dressCode.body3[language]}
                    </Typography>
                </Stack>
            </Grid>
            <Grid xs={12} sm={6} mt={15}>
                <img src={isMobile ? dressCodeMobile3 : dressCodeDesktop3} width="100%" alt="Amigos brindando" />
            </Grid>
            {isMobile ? (
                <>
                    <Grid xs={12} sm={6} a>
                        <Stack p={4} gap={2} height="100%" justifyContent="center">
                            <Typography fontSize={theme.spacing(5)} color={theme.palette.secondary.main}>
                                {text.dressCode.heading4[language]}
                            </Typography>
                            <Typography fontSize={theme.spacing(4.5)} color={theme.palette.gray["500"]} fontWeight="300" fontFamily="Open Sans">
                                {text.dressCode.body4[language]}
                            </Typography>
                            <List component="nav">
                                {text.dressCode.tipsList.map((item, i) => {
                                    return (
                                        <ListItem key={i + item}>
                                            <ListItemIcon>
                                                <Dot size={40} />
                                            </ListItemIcon>
                                            <Typography fontSize={theme.spacing(4.5)} color={theme.palette.gray["500"]} fontWeight="300" fontFamily="Open Sans">
                                                {item[language]}
                                            </Typography>
                                        </ListItem>
                                    );
                                })}
                            </List>
                        </Stack>
                    </Grid>
                    <Grid xs={12} sm={6}>
                        <img src={isMobile ? dressCodeMobile4 : dressCodeDesktop4} width="100%" alt="Amigas ao redor da noiva" />
                    </Grid>
                </>
            ) : (
                <>
                    <Grid xs={12} sm={6} mt={15}>
                        <img src={isMobile ? dressCodeMobile4 : dressCodeDesktop4} width="100%" alt="Amigas ao redor da noiva" />
                    </Grid>
                    <Grid xs={12} sm={6} mt={15}>
                        <Stack p={4} gap={2} height="100%" justifyContent="center">
                            <Typography fontSize={theme.spacing(5)} color={theme.palette.secondary.main}>
                                {text.dressCode.heading4[language]}
                            </Typography>
                            <Typography fontSize={theme.spacing(4.5)} color={theme.palette.gray["500"]} fontWeight="300" fontFamily="Open Sans">
                                {text.dressCode.body4[language]}
                            </Typography>
                            <List component="nav">
                                {text.dressCode.tipsList.map((item, i) => {
                                    return (
                                        <ListItem key={i + item}>
                                            <ListItemIcon>
                                                <Dot size={40} />
                                            </ListItemIcon>
                                            <Typography fontSize={theme.spacing(4.5)} color={theme.palette.gray["500"]} fontWeight="300" fontFamily="Open Sans">
                                                {item[language]}
                                            </Typography>
                                        </ListItem>
                                    );
                                })}
                            </List>
                        </Stack>
                    </Grid>
                </>
            )}
            {isMobile ? (
                <>
                    <Grid xs={12} sm={6}>
                        <Stack p={4} gap={8} height="100%" justifyContent="center">
                            <Typography fontSize={theme.spacing(5)} color={theme.palette.secondary.main}>
                                {text.dressCode.heading5[language]}
                            </Typography>
                            <List component="nav">
                                {text.dressCode.notAllowed.map((item, i) => {
                                    return (
                                        <ListItem key={i + item}>
                                            <ListItemIcon>
                                                <Dot size={40} />
                                            </ListItemIcon>
                                            <Typography fontSize={theme.spacing(4.5)} color={theme.palette.gray["500"]} fontWeight="300" fontFamily="Open Sans">
                                                {item[language]}
                                            </Typography>
                                        </ListItem>
                                    );
                                })}
                            </List>
                        </Stack>
                    </Grid>
                    <Grid xs={12} sm={6}>
                        <img src={isMobile ? dressCodeMobile5 : dressCodeDesktop5} width="100%" alt="Vários barcos no mar" />
                    </Grid>
                    <Grid xs={12} sm={6}>
                        <Stack p={4} gap={8} height="100%" justifyContent="center">
                            <Typography fontSize={theme.spacing(5)} color={theme.palette.secondary.main}>
                                {text.dressCode.heading6[language]}
                            </Typography>
                            <Typography fontSize={theme.spacing(4.5)} color={theme.palette.gray["500"]} fontWeight="300" fontFamily="Open Sans">
                                {text.dressCode.body6[language]}
                            </Typography>
                        </Stack>
                    </Grid>
                </>
            ) : (
                <>
                    <Grid xs={12} sm={6} mt={15}>
                        <Stack p={4} gap={8} height="100%" justifyContent="center">
                            <Typography fontSize={theme.spacing(5)} color={theme.palette.secondary.main}>
                                {text.dressCode.heading5[language]}
                            </Typography>
                            <List component="nav">
                                {text.dressCode.notAllowed.map((item, i) => {
                                    return (
                                        <ListItem key={i + item}>
                                            <ListItemIcon>
                                                <Dot size={40} />
                                            </ListItemIcon>
                                            <Typography fontSize={theme.spacing(4.5)} color={theme.palette.gray["500"]} fontWeight="300" fontFamily="Open Sans">
                                                {item[language]}
                                            </Typography>
                                        </ListItem>
                                    );
                                })}
                            </List>
                            <Typography fontSize={theme.spacing(5)} color={theme.palette.secondary.main}>
                                {text.dressCode.heading6[language]}
                            </Typography>
                            <Typography fontSize={theme.spacing(4.5)} color={theme.palette.gray["500"]} fontWeight="300" fontFamily="Open Sans">
                                {text.dressCode.body6[language]}
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid xs={12} sm={6} mt={15}>
                        <img src={isMobile ? dressCodeMobile5 : dressCodeDesktop5} width="100%" alt="Vários barcos no mar" />
                    </Grid>
                </>
            )}
        </Grid>
    );
};
