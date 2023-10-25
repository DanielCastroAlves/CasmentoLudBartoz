import React from "react";
import { Box, Stack } from "@mui/material";
import text from "../../Assets/text.json";
import CustomTimeline from "./components/CustomTimeline";
import CardPage from "./components/CardPage";
import rioImage from "../../Assets/Images/cardImage/RiodeJaneiroCard.png";
import buziosImage from "../../Assets/Images/cardImage/B_Búzios=Enabled.png";
import { FirstSection } from "../../Components/FirstSection";
import { useLanguage } from "../../hooks/useLanguage";

import Carousel from "react-multi-carousel";
import {
  ContainerCarouselTravel,
 
} from "./components/CardPage/style";
import { ContainerPageCity, Description, TituloDescription } from "../RJ/style";

const Travel = () => {
  const { language } = useLanguage();

  const citys = [
    {
      id: 1,
      title: text.Travel.CardsSubPag.Titulo2[language],
      image: rioImage,
      destination: "travel/rio-de-janeiro",
      description: text.Travel.CardsSubPag.Body1[language],
    },
    {
      id: 2,
      title: text.Travel.CardsSubPag.Titulo1[language],
      image: buziosImage,
      destination: "travel/buzios",
      description: text.Travel.CardsSubPag.Body1[language],
    },
  ];

 

  return (
    <Stack width="100%" height="100%" mb={10}>
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
          marginTop: "80px",
        }}
      >
        <CustomTimeline topics={text.Travel.itinerary} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "80px 0 -60px 0",
        }}
      >
        <ContainerPageCity>
          <TituloDescription>
            {text.Travel.Heading2[language]}
          </TituloDescription>
          <Description>{text.Travel.Body2P1[language]}</Description>
          <Description>
            {" "}
            <ul>
              <li>{text.Travel.storypoints[0][language]}</li>
              <li>{text.Travel.storypoints[1][language]}</li>
              <li>{text.Travel.storypoints[2][language]}</li>
            </ul>
          </Description>

          <Description>{text.Travel.Body2P2[language]}</Description>
          <Description>{text.Travel.Body2P3[language]}</Description>
        </ContainerPageCity>
      </Box>
      <ContainerCarouselTravel>
        <Carousel
         additionalTransfrom={0}
         //arrows={isMobile}
         autoPlaySpeed={3000}
         draggable={true} // Tornar o carousel deslizável com o mouse/touchpad
         swipeable={true} // Tornar o scroll mais suave
         // focusOnSelect={false}
         // keyBoardControl
         // minimumTouchDrag={80}
         // pauseOnHover
         // renderArrowsWhenDisabled={false}
         // renderButtonGroupOutside
         // showDots={true}
         renderDotsOutside={false}
         responsive={{
           desktop: {
             breakpoint: {
               max: 3000,
               min: 1441,
             },
             items: 3.4,
           },
           desktopOld: {
             breakpoint: {
               max: 1440,
               min: 1024,
             },
             items: 2.65,
             partialVisibilityGutter: 50,
             centerMode: true,
           },
           mobile: {
             breakpoint: {
               max: 464,
               min: 0,
             },
             items: 1,
             centerMode: true,
             partialVisibilityGutter: 50,
           },
           tablet: {
             breakpoint: {
               max: 1024,
               min: 465,
             },
             items: 1,
             partialVisibilityGutter: 30,
           },
         }}
         rewind={false}
         rewindWithAnimation={false}
         rtl={false}
         shouldResetAutoplay
         sliderClass=""
         slidesToSlide={1}
         infinite={true}
       >
          {citys.map((city) => (
            <CardPage
              key={city.id}
              image={city.image}
              destination={city.destination}
              description={city.description}
              title={city.title}
            />
          ))}
        </Carousel>
      </ContainerCarouselTravel>
    </Stack>
  );
};

export default Travel;
