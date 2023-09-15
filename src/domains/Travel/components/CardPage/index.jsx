import React from "react";
import {
  PageCityContainer,
  PageCityDescription,
  PageCityImage,
  PageCityTitle,
  ContainerTitleDescription,
} from "./style";
import { Link } from "@mui/material";

const PageCity = ({ image, title, description, destination }) => {
  return (
    <Link href={destination} underline="none">
      <PageCityContainer key={title}>
        <PageCityImage src={image} alt="Imagem do item" />
        <ContainerTitleDescription>
          <PageCityTitle>{title}</PageCityTitle>
          <PageCityDescription>{description}</PageCityDescription>
        </ContainerTitleDescription>
      </PageCityContainer>
    </Link>
  );
};

export default PageCity;
