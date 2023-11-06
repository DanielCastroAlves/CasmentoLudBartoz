import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { ContainerCarousel } from "./style.js";
import CardWedding from "../../../../Components/CardWedding";
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
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3.3,
            partialVisibilityGutter: 80,
            centerMode: false,
          },
          desktopOld: {
            breakpoint: {
              max: 1440,
              min: 1024,
            },
            items: 2.6,
            partialVisibilityGutter: 80,
            centerMode: false,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1.05,
            partialVisibilityGutter: 30,
            centerMode: true,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 465,
            },
            items: 1,
            partialVisibilityGutter: 30,
            centerMode: false,
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
