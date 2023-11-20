import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import CardWedding from "../../../../Components/CardWedding";
import ContainerCarousel from "./style";
//import { useMediaQuery, useTheme } from "@mui/material";

const CarouselWedding = ({ dataInfo }) => {
  //  const theme = useTheme();
  //const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <ContainerCarousel>
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
          desktopCustom1: {
            breakpoint: {
              max: 1200,
              min: 1001,
            },
            items: 2.1,
            partialVisibilityGutter: 50,
            centerMode: false,
          },
          desktopCustom2: {
            breakpoint: {
              max: 1300,
              min: 1201,
            },
            items: 2.55,
            partialVisibilityGutter: 50,
            centerMode: true,
          },
          desktopCustom3: {
            breakpoint: {
              max: 1400,
              min: 1301,
            },
            items: 2.8,
            partialVisibilityGutter: 50,
            centerMode: true,
          },
          desktopCustom4: {
            breakpoint: {
              max: 1440,
              min: 1401,
            },
            items: 2.85,
            partialVisibilityGutter: 50,
            centerMode: true,
          },
          desktopCustom5: {
            breakpoint: {
              max: 1600,
              min: 1441,
            },
            items: 3.2,
            partialVisibilityGutter: 50,
            centerMode: true,
          },
          desktopCustom6: {
            breakpoint: {
              max: 1800,
              min: 1601,
            },
            items: 3.2,
            partialVisibilityGutter: 50,
            centerMode: true,
          },
          desktopCustom7: {
            breakpoint: {
              max: 2559,
              min: 1801,
            },
            items: 3.5,
            partialVisibilityGutter: 50,
            centerMode: true,
          },
          desktopCustom8: {
            breakpoint: {
              min: 2560,
            },
            items: 4,
            partialVisibilityGutter: 50,
            centerMode: true,
          },
          mobileCustom: {
            breakpoint: {
              max: 500,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
            centerMode: true,
          },
          tabletCustom: {
            breakpoint: {
              max: 1000,
              min: 501,
            },
            items: 1,
            partialVisibilityGutter: 30,
            centerMode: true,
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
        {dataInfo.map((data, index) => (
          <CardWedding {...data} />
        ))}
      </Carousel>
    </ContainerCarousel>
  );
};

export default CarouselWedding;
