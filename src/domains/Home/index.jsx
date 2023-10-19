import React from "react";
import { useLanguage } from "../../hooks/useLanguage.jsx";
import { Header } from "../../Components/Body/Header/index.jsx";
import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { HomeContainer } from "./style.js";

export const Home = () => {
  const { urlForm } = useLanguage();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack direction="column" width="100%" height="100%">
      <HomeContainer>
        <Header />
        <Stack
          alignItems="center"
          justifyContent="center"
          height="100%"
          px={4}
          mt={!isMobile ? 110 : 50}
        >
          <Typography
            fontSize={!isMobile ? theme.spacing(9.5) : theme.spacing(7)}
            fontWeight={400}
            color={theme.palette.primary.main}
          >
            LUDMILLA & BARTOSZ
          </Typography>
          <Typography
            fontSize={!isMobile ? theme.spacing(5.75) : theme.spacing(4)}
            fontWeight={300}
            color={theme.palette.primary.main}
            fontFamily="Open Sans"
          >
            12.05.2024 | BÚZIOS
          </Typography>
        </Stack>
      </HomeContainer>
      <Stack
        justifyContent="center"
        alignItems="center"
        gap={4}
        sx={{ overflow: "hidden" }}
        mt={15}
      >
        <Typography
          fontSize={theme.spacing(8)}
          fontWeight={700}
          color={theme.palette.primary.main}
        >
          RSVP
        </Typography>
        <Typography
          fontSize={theme.spacing(4.5)}
          fontFamily={"Open Sans"}
          fontWeight={300}
          color={theme.palette.primary.main}
        >
          RESPOND SIL VOUS PLAIT
        </Typography>
        <Stack height='100%'>

        </Stack>
        <iframe
          src={urlForm}
          title="Confirme Presença"
          width="100%"
          height={isMobile ? "3000px" : "1700px"}
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </Stack>
    </Stack>
  );
};
