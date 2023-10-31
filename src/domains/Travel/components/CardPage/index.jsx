import React, { useState } from "react";
import {
  CardCityContainer,
  PageCityDescription,
  PageCityImage,
  PageCityTitle,
  ContainerTitleDescription,
} from "./style";
import { Link } from "@mui/material";

const PageCity = ({ image, title, description, destination }) => {
  const [isSelected, setIsSelected] = useState(false);

  const toggleSelection = () => {
    setIsSelected(!isSelected);
  };
  return (
    <Link href={destination} underline="none">
      <CardCityContainer
        key={title}
        isSelected={isSelected}
        onClick={toggleSelection}
      >
        <PageCityImage src={image} alt="Imagem do item" />
        <ContainerTitleDescription>
          <PageCityTitle>{title}</PageCityTitle>
          <PageCityDescription>{description}</PageCityDescription>
        </ContainerTitleDescription>
      </CardCityContainer>
    </Link>
  );
};

export default PageCity;
