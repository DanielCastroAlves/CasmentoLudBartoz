import React, { useState, useEffect } from "react";
import {
  CardGiftContainer,
  CardGiftDescription,
  CardGiftImage,
  CardGiftLink,
  CardGiftMoedas,
  CardGiftTitle,
  ContainerInfo,
  ContainerLink,
  ContainerTitleDescription,
} from "./style";
import { Link } from "@mui/material";

const CardGift = ({ imagem, title, description, link1, link2, moedas, options }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const toggleSelection = () => {
    setIsSelected(!isSelected);
  };

  useEffect(() => {
    setSelectedValue(""); // Redefina o valor selecionado quando a página mudar
  }, [link1, link2]);

  return (
    <CardGiftContainer
      key={title}
      isSelected={isSelected}
      onClick={toggleSelection}
    >
      <CardGiftImage src={imagem} alt="Imagem do item" />
      <ContainerTitleDescription>
        <CardGiftTitle>{title}</CardGiftTitle>
        <ContainerInfo>
          <CardGiftDescription>{description}</CardGiftDescription>
          <CardGiftMoedas>{moedas}</CardGiftMoedas>
          <CardGiftDescription>{options}</CardGiftDescription>
          <ContainerLink>
            <CardGiftLink>{link1}</CardGiftLink>
            <CardGiftLink>{link2}</CardGiftLink>
          </ContainerLink>
        </ContainerInfo>
      </ContainerTitleDescription>
    </CardGiftContainer>
  );
};

export default CardGift;
