import React from "react";
import CardPage from "../CardPage";
import ContainerCarouselTravel from "./style";

const CarouselTravel = ({ dataInfo }) => {
  return (
    <ContainerCarouselTravel>
      {dataInfo.map((city) => (
        <CardPage
          key={city.id}
          image={city.image}
          destination={city.destination}
          description={city.description}
          title={city.title}
        />
      ))}
    </ContainerCarouselTravel>
  );
};

export default CarouselTravel;
