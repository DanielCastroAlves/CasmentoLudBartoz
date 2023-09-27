import React, { useState } from "react";
import {
  CardWeddingContainer,
  CardWeddingDescription,
  CardWeddingImage,
  CardWeddingTitle,
  ContainerTitleDescription,
} from "./style";
import { Link } from "@mui/material";

const CardWedding = ({ image, title, description, destination }) => {
  const [isSelected, setIsSelected] = useState(false);


  const toggleSelection = () => {
    setIsSelected(!isSelected);
  };
  return (
    <Link href={destination} underline="none">
      <CardWeddingContainer
        key={title}
        isSelected={isSelected}
        onClick={toggleSelection}
      >
        <CardWeddingImage src={image} alt="Imagem do item" />
        <ContainerTitleDescription>
          <CardWeddingTitle>{title}</CardWeddingTitle>
          <CardWeddingDescription>{description}</CardWeddingDescription>
        </ContainerTitleDescription>
      </CardWeddingContainer>
    </Link>
  );
};

export default CardWedding;
