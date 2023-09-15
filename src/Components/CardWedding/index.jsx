import React from "react";
import {
  CardWeddingContainer,
  CardWeddingDescription,
  CardWeddingImage,
  CardWeddingTitle,
} from "./style";

const CardWedding = ({ image, title, description }) => {
  return (
    <CardWeddingContainer key={title}>
      <CardWeddingImage src={image} alt="Imagem do item" />
      <CardWeddingTitle>{title}</CardWeddingTitle>
      <CardWeddingDescription>{description}</CardWeddingDescription>
    </CardWeddingContainer>
  );
};

export default CardWedding;
