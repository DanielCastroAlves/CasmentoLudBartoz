import { Box, Stack, useTheme, Typography } from "@mui/material";
import preWedding1 from "../../../../Assets/Images/preWedding1.png";
import preWedding2 from "../../../../Assets/Images/preWedding2.png";
import preWedding3 from "../../../../Assets/Images/preWedding3.png";
import preWedding4 from "../../../../Assets/Images/preWedding4.png";
import { GalleryContainer, GalleryText, GaleryLink } from "./style";
import { Link } from "react-router-dom";

export const Gallery = () => {
    const theme = useTheme();
    return (
        <Stack width="100%" mt={15}>
            {/* <Grid container></Grid> */}
            <Stack width="100%" direction="row" gap={4}>
                <GaleryLink to="/home">
                    <GalleryContainer>
                        <img src={preWedding1} width="100%" alt="Capirinha na praia" />
                        <GalleryText>
                            <Typography fontSize={theme.spacing(9.5)} fontWeight={700} color={theme.palette.gray["500"]} sx={{ textShadow: "0px 15px 21px #FFF, 0px 4px 4px #FFF" }}>
                                Pre Wedding
                            </Typography>
                        </GalleryText>
                    </GalleryContainer>
                </GaleryLink>
                <GaleryLink to="/home">
                    <GalleryContainer>
                        <img src={preWedding2} width="100%" alt="Mulher de vestido amarelo na praia com flor no cabelo" />
                        <GalleryText>
                            <Typography fontSize={theme.spacing(9.5)} fontWeight={700} color={theme.palette.gray["500"]} sx={{ textShadow: "0px 15px 21px #FFF, 0px 4px 4px #FFF" }}>
                                Dress Code
                            </Typography>
                        </GalleryText>
                    </GalleryContainer>
                </GaleryLink>
                <GaleryLink to="/home">
                    <GalleryContainer>
                        <img src={preWedding3} width="100%" alt="Água de coco na areia" />
                        <GalleryText>
                            <Typography fontSize={theme.spacing(9.5)} fontWeight={700} color={theme.palette.gray["500"]} sx={{ textShadow: "0px 15px 21px #FFF, 0px 4px 4px #FFF" }}>
                                Presente
                            </Typography>
                        </GalleryText>
                    </GalleryContainer>
                </GaleryLink>
            </Stack>
            <Stack width="100%" mt={2}>
                <GaleryLink to="/home">
                    <GalleryContainer>
                        <img src={preWedding4} width="100%" alt="Orla de praia" />
                        <GalleryText>
                            <Typography fontSize={theme.spacing(9.5)} fontWeight={700} color={theme.palette.gray["500"]} sx={{ textShadow: "0px 15px 21px #FFF, 0px 4px 4px #FFF" }}>
                                Nossa História
                            </Typography>
                        </GalleryText>
                    </GalleryContainer>
                </GaleryLink>
            </Stack>
        </Stack>
    );
};
