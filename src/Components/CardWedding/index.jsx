import React, { useState, useEffect } from "react";
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
  const [selectedValue, setSelectedValue] = useState("");

  const toggleSelection = () => {
    setIsSelected(!isSelected);
  };

  useEffect(() => {
    setSelectedValue(""); // Redefina o valor selecionado quando a página mudar
  }, [destination]);

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
