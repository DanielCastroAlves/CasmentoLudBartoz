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
import { Link } from "@mui/material";

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
        {dataInfo.map((data, index) => (
          <Link
            href={`${data.link}`}
            style={{ cursor: "pointer", textDecoration: "none" }}
          >
            <CardWedding {...data} />
          </Link>
        ))}
      </Carousel>
    </ContainerCarousel>
  );
};

export default CarouselWedding;
