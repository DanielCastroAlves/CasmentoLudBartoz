import React from "react";
import CardPage from "../CardPage";
import Carousel from "react-multi-carousel";
import ContainerCarouselTravel from "./style";



const CarouselTravel = ({ dataInfo }) => {
  return (
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
          desktopExtraLarge: {
            breakpoint: {
              max: 4000,
              min: 1921,
            },
            items: 2,
            partialVisibilityGutter: 50,
          },
          desktop: {
            breakpoint: {
              max: 1920, // Adjusted to match the max value of desktopExtraLarge
              min: 1441,
            },
            items: 2,
            partialVisibilityGutter: 50,
          },
          desktopOld: {
            breakpoint: {
              max: 1440,
              min: 1025,
            },
            items: 2,
            partialVisibilityGutter: 50,
          },
          tablet: {
            breakpoint: {
              max: 1000,
              min: 551,
            },
            items: 1,
            partialVisibilityGutter: 50,
            centerMode: true,
          },
          mobile: {
            breakpoint: {
              max: 550,
              min: 0,
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
        {dataInfo.map((city) => (
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
  );
};

export default CarouselTravel;
