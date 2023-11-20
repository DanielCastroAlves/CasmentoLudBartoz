import React from "react";
import { Box, Stack } from "@mui/material";
import text from "../../Assets/text.json";
import CustomTimeline from "./components/CustomTimeline";

import rioImage from "../../Assets/Images/cardImage/RiodeJaneiroCard.png";
import buziosImage from "../../Assets/Images/cardImage/B_Búzios=Enabled.png";
import { FirstSection } from "../../Components/FirstSection";
import { useLanguage } from "../../hooks/useLanguage";

import { ContainerPageCity, Description, TituloDescription } from "../RJ/style";

import CarouselTravel from "./components/Carousel";

const Travel = () => {
  const { language } = useLanguage();

  const citys = [
    {
      id: 1,
      title: text.Travel.CardsSubPag.Titulo1[language],
      image: buziosImage,
      destination: "travel/buzios",
      description: text.Travel.CardsSubPag.Body1[language],
    },
    {
      id: 2,
      title: text.Travel.CardsSubPag.Titulo2[language],
      image: rioImage,
      destination: "travel/rio-de-janeiro",
      description: text.Travel.CardsSubPag.Body1[language],
    },
  ];

  return (
    <Stack width="100%" height="100%" mb={10} mt={-10}>
      <FirstSection
        title={text.Travel.title[language]}
        subtitle={text.Travel.subTitle[language]}
        paragraph1={text.Travel.introP1[language]}
        paragraph2={text.Travel.introP2[language]}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "0px 0 -100px 0",
        }}
      >
        <CustomTimeline topics={text.Travel.itinerary} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "80px 0 -90px 0",
        }}
      >
        <ContainerPageCity>
          <TituloDescription>
            {text.Travel.Heading2[language]}
          </TituloDescription>
          <Description
            dangerouslySetInnerHTML={{ __html: text.Travel.Body2P1[language] }}
          />
          {/* <Description>{text.Travel.Body2P1[language]}</Description> */}
          <Description>
            {" "}
            <ul>
              <li>{text.Travel.storypoints[0][language]}</li>
              <li>{text.Travel.storypoints[1][language]}</li>
              <li>{text.Travel.storypoints[2][language]}</li>
            </ul>
          </Description>

          <Description>{text.Travel.Body2P2[language]}</Description>
          <Description
            dangerouslySetInnerHTML={{ __html: text.Travel.Body2P3[language] }}
          />
          {/* <Description>{text.Travel.Body2P3[language]}</Description> */}
        </ContainerPageCity>
      </Box>

      <CarouselTravel dataInfo={citys} />
    </Stack>
  );
};

export default Travel;
