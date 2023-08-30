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
import CardWedding from "../../../../Components/CardWedding";

const CarouselWedding = ({ dataInfo }) => {
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
        centerMode={true}
        customButtonGroup={<CustomButtonGroupAsArrows />}
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
            items: 2.8,
            partialVisibilityGutter: 8,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
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
          <CardWedding {...data} />
        ))}
      </Carousel>
    </ContainerCarousel>
  );
};

export default CarouselWedding;
