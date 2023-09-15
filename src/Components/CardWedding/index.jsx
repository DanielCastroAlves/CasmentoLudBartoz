import React from "react";
import {
  CardWeddingContainer,
  CardWeddingDescription,
  CardWeddingImage,
  CardWeddingTitle,
  ContainerTitleDescription,
} from "./style";

const CardWedding = ({ image, title, description, link }) => {
  return (
    <CardWeddingContainer key={title}>
      <CardWeddingImage src={image} alt="Imagem do item" />
      <ContainerTitleDescription>
        <CardWeddingTitle>{title}</CardWeddingTitle>
        <CardWeddingDescription>{description}</CardWeddingDescription>
      </ContainerTitleDescription>
    </CardWeddingContainer>
  );
};

export default CardWedding;
