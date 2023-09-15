import React from "react";
import {
  CardBContainer,
  CardBGContainer,
  CardBGDescription,
  CardBGImage,
  CardBGTitle,
  CardBTitle,
} from "./style";

const CardBG = ({ image, title, description }) => {
  return (
    <>
      {title === "Dress" ? (
        <CardBContainer key={title}>
          <CardBGImage src={image} alt="Imagem do item" />
          <CardBTitle>{title}</CardBTitle>
          <CardBGDescription>{description}</CardBGDescription>
        </CardBContainer>
      ) : (
        <CardBGContainer key={title}>
          <CardBGImage src={image} alt="Imagem do item" />
          <CardBGTitle>{title}</CardBGTitle>
          <CardBGDescription>{description}</CardBGDescription>
        </CardBGContainer>
      )}
    </>
  );
};

export default CardBG;
