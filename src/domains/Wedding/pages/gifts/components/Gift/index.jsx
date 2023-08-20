import { Box, Divider, Paper, Stack, Typography, useTheme } from "@mui/material";
import mobile1 from "../../../../../../Assets/Images/gifts/mobile1.png";
import { GiftContainer, GiftContainer2 } from "./style";

export const Gift = () => {
    const theme = useTheme();

    return (
        <Stack mt={20} p={40}>
            <Stack direction="row" px={20} width="100%">
                <GiftContainer>
                    <Stack direction="row" alignItems="center" height="100%">
                        {/* <Stack> */}
                        <img
                            src={mobile1}
                            alt="Logo"
                            style={{
                                position: "absolute",
                                // top: 0,
                                left: 130,
                                right: 0,
                                // bottom: 0,
                                // objectFit: "cover",
                                // zIndex: -1,
                            }}
                        />
                        {/* </Stack> */}

                        <Stack direction="row" height="100%" justifyContent="flex-start" width="10%">
                            <Divider orientation="vertical" sx={{ borderColor: theme.palette.secondary.main }} />
                        </Stack>
                        teste
                    </Stack>
                
                </GiftContainer>
            </Stack>
            <Stack direction="row" p={20} width="100%">
                <GiftContainer>
                    <Stack direction="row" alignItems="center" height="100%">
                        {/* <Stack> */}
                        <img
                            src={mobile1}
                            alt="Logo"
                            style={{
                                position: "absolute",
                                // top: 0,
                                left: 130,
                                right: 0,
                                // bottom: 0,
                                // objectFit: "cover",
                                // zIndex: -1,
                            }}
                        />
                        {/* </Stack> */}

                        <Stack direction="row" height="100%" justifyContent="flex-start" width="10%">
                            <Divider orientation="vertical" sx={{ borderColor: theme.palette.secondary.main }} />
                        </Stack>
                    </Stack>
                </GiftContainer>
            </Stack>
        </Stack>
    );
};
