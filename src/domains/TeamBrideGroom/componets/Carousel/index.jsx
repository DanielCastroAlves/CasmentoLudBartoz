import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import iconR from "../../../../Assets/Images/iconRt.svg";
import iconL from "../../../../Assets/Images/iconLf.svg";
import {
  ContainerCarousel,
  CustomArrowButton,
  CustomArrowButtonLeft,
  CustomArrowButtonRight,
  CustomButtonGroup,
} from "./style.js";

import CardBG from "../../../../Components/CardBG";

const CarouselBG = ({ dataInfo }) => {
  const CustomButtonGroupAsArrows = ({ next, previous }) => {
    return (
      <CustomButtonGroup>
        <CustomArrowButtonLeft onClick={() => previous()}>
          <CustomArrowButton src={iconL} alt="Left Arrow" />
        </CustomArrowButtonLeft>
        <CustomArrowButtonRight onClick={() => next()}>
          <CustomArrowButton src={iconR} alt="Right Arrow" />
        </CustomArrowButtonRight>
      </CustomButtonGroup>
    );
  };

  return (
    <ContainerCarousel>
      <Carousel
        additionalTransfrom={0}
        arrows={false}
    
        autoPlaySpeed={3000}
        customButtonGroup={<CustomButtonGroupAsArrows />}
        draggable
        focusOnSelect={true}
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
            partialVisibilityGutter: 8,
            centerMode: true,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1.2,
            partialVisibilityGutter: 50,
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
        /*   showDots={true} */
      >
        {dataInfo.map((data, index) => (
          <CardBG {...data} />
        ))}
      </Carousel>
    </ContainerCarousel>
  );
};

export default CarouselBG;
