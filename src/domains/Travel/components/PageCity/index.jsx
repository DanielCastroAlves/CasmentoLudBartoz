import React from "react";
import {
  PageCityContainer,
  PageCityDescription,
  PageCityImage,
  PageCityTitle,
  ContainerTitleDescription,
} from "./style";

const PageCity = ({ image, title, description, link }) => {
  return (
    <PageCityContainer key={title}>
      <PageCityImage src={image} alt="Imagem do item" />
      <ContainerTitleDescription>
        <PageCityTitle>{title}</PageCityTitle>
        <PageCityDescription>{description}</PageCityDescription>
      </ContainerTitleDescription>
    </PageCityContainer>
  );
};

export default PageCity;
