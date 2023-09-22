import React, { useState } from "react";
import { Box, Stack } from "@mui/material";
import text from "../../Assets/text.json";
import CustomTimeline from "./components/CustomTimeline";
import CardPage from "./components/CardPage";
import rioImage from "../../Assets/Images/cardImage/B_Nossa História=Enabled.png";
import buziosImage from "../../Assets/Images/cardImage/B_Búzios=Enabled.png";
import { FirstSection } from "../../Components/FirstSection";
import { useLanguage } from "../../hooks/useLanguage";

import iconR from "../../Assets/Images/iconRt.svg";
import iconL from "../../Assets/Images/iconLf.svg";
import Carousel from "react-multi-carousel";
import {
  ContainerCarouselTravel,
  CustomArrowButtonLeftTravel,
  CustomArrowButtonRightTravel,
  CustomArrowButtonTravel,
  CustomButtonGroupTravel,
} from "./components/CardPage/style";

const Travel = () => {
  const { language } = useLanguage();

  const topics = [
    {
      label: "09.05.2024",
      content: "Quinta",
      programacao: "Chegada em Armação de Búzios",
      id: 1,
      icon: "CheckCircleOutlineIcon",
    },
    {
      label: "10.05.2024",
      content: "Sexta",
      programacao: "Passeio em Arraial do Cabo",
      id: 2,
      icon: "CheckCircleOutlineIcon",
    },
    {
      label: "11.05.2024",
      content: "Sábado",
      programacao: "Pre Wedding",
      id: 3,
      icon: "CheckCircleOutlineIcon",
    },
    {
      label: "12.05.2024",
      content: "Domingo",
      programacao: "Casamento",
      id: 4,
      icon: "CheckCircleOutlineIcon",
    },
    {
      label: "13.05.2024",
      content: "Segunda",
      programacao: "Passeio em Búzios",
      id: 5,
      icon: "CheckCircleOutlineIcon",
    },
    {
      label: "14.05.2024",
      content: "Terça",
      programacao: "Transfer para o Rio de Janeiro e Passeio na cidade",
      id: 6,
      icon: "CheckCircleOutlineIcon",
    },
    {
      label: "15.05.2024",
      content: "Quarta",
      programacao: "Passeio no Rio de Janeiro",
      id: 7,
      icon: "CheckCircleOutlineIcon",
    },
    {
      label: "16.05.2024",
      content: "Quinta",
      programacao: "Passeio no Rio de Janeiro",
      id: 8,
      icon: "CheckCircleOutlineIcon",
    },
    {
      label: "17.05.2024",
      content: "Sexta",
      programacao: "Passeio no Rio de Janeiro",
      id: 9,
      icon: "CheckCircleOutlineIcon",
    },
  ];

  const citys = [
    {
      id: 1,
      title: "Rio de Janeiro",
      image: rioImage,
      destination: "travel/rio-de-janeiro",
      description: "EVERYTHING YOU SHOULD KNOW BEFORE ARRIVE THERE!",
    },
    {
      id: 2,
      title: "Buzios",
      image: buziosImage,
      destination: "travel/buzios",
      description: "EVERYTHING YOU SHOULD KNOW BEFORE ARRIVE THERE!",
    },
  ];

  const CustomButtonGroupAsArrowsTravel = ({ next, previous }) => {
    return (
      <CustomButtonGroupTravel>
        <CustomArrowButtonLeftTravel onClick={() => previous()}>
          <CustomArrowButtonTravel src={iconL} alt="Left Arrow" />
        </CustomArrowButtonLeftTravel>
        <CustomArrowButtonRightTravel onClick={() => next()}>
          <CustomArrowButtonTravel src={iconR} alt="Right Arrow" />
        </CustomArrowButtonRightTravel>
      </CustomButtonGroupTravel>
    );
  };

  return (
    <Stack width="100%" height="100%" mb={10}>
      <FirstSection
        title={text.Wedding.title[language]}
        subtitle={text.Wedding.subTitle[language]}
        paragraph1={text.Wedding.introP1[language]}
        paragraph2={text.Wedding.introP2[language]}
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
      <ContainerCarouselTravel>
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlaySpeed={3000}
          customButtonGroup={<CustomButtonGroupAsArrowsTravel />}
          draggable
          focusOnSelect={false}
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 2,
              partialVisibilityGutter: 90,
              centerMode: false,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,

              centerMode: true,
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
          swipeable
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
