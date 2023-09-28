import React from "react";
import { Box, Stack } from "@mui/material";
import text from "../../Assets/text.json";
import CustomTimeline from "./components/CustomTimeline";
import CardPage from "./components/CardPage";
import rioImage from "../../Assets/Images/cardImage/RiodeJaneiroCard.png";
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
import { ContainerPageCity, Description, TituloDescription } from "../RJ/style";

const Travel = () => {
  const { language } = useLanguage();

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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "80px 0 -60px 0",
        }}
      >
        <ContainerPageCity>
          <TituloDescription>Lorem ipsum</TituloDescription>
          <Description>
            At ultricies scelerisque consequat sed vestibulum. Vel hac aliquet
            mollis suspendisse auctor ut. Urna volutpat enim in vitae cursus
            pellentesque consectetur lacus habitant. In faucibus massa augue
            pretium pellentesque tincidunt. Dolor fringilla vivamus ullamcorper
            pellentesque blandit integer. Sed massa turpis proin nulla quam id.
            Etiam amet massa vulputate pretium sed. Lectus fames quam purus
            vulputate. Urna lectus ut sed posuere amet mauris semper tempus.
            Feugiat nunc netus nisl iaculis ultrices netus. Varius volutpat
            facilisis vel nisi nisl sapien egestas a pharetra. Volutpat
            malesuada viverra nisi adipiscing.
          </Description>
          <Description>
            At ultricies scelerisque consequat sed vestibulum. Vel hac aliquet
            mollis suspendisse auctor ut. Urna volutpat enim in vitae cursus
            pellentesque consectetur lacus habitant. In faucibus massa augue
            pretium pellentesque tincidunt. Dolor fringilla vivamus ullamcorper
            pellentesque blandit integer. Sed massa turpis proin nulla quam id.
            Etiam amet massa vulputate pretium sed. Lectus fames quam purus
            vulputate. Urna lectus ut sed posuere amet mauris semper tempus.
            Feugiat nunc netus nisl iaculis ultrices netus. Varius volutpat
            facilisis vel nisi nisl sapien egestas a pharetra. Volutpat
            malesuada viverra nisi adipiscing.
          </Description>
          <Description>
            At ultricies scelerisque consequat sed vestibulum. Vel hac aliquet
            mollis suspendisse auctor ut. Urna volutpat enim in vitae cursus
            pellentesque consectetur lacus habitant. In faucibus massa augue
            pretium pellentesque tincidunt. Dolor fringilla vivamus ullamcorper
            pellentesque blandit integer. Sed massa turpis proin nulla quam id.
            Etiam amet massa vulputate pretium sed. Lectus fames quam purus
            vulputate. Urna lectus ut sed posuere amet mauris semper tempus.
            Feugiat nunc netus nisl iaculis ultrices netus. Varius volutpat
            facilisis vel nisi nisl sapien egestas a pharetra. Volutpat
            malesuada viverra nisi adipiscing.
          </Description>
        </ContainerPageCity>
      </Box>
      <ContainerCarouselTravel>
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlaySpeed={3000}
          customButtonGroup={<CustomButtonGroupAsArrowsTravel />}
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
                min: 1441,
              },
              items: 2,
              partialVisibilityGutter: 20,
              centerMode: false,
            },
            desktopOld: {
              breakpoint: {
                max: 1440,
                min: 1024,
              },
              items: 2.1,
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
          draggable={true} // Tornar o carousel deslizável com o mouse/touchpad
          swipeable={true}
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
