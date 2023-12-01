// CardGift.jsx
import React, { useState } from "react";
import {
  CardGiftContainer,
  CardGiftDescription,
  CardGiftImage,
  CardGiftLink1,
  CardGiftLink2,
  CardGiftMoedas,
  CardGiftTitle,
  ContainerInfo,
  ContainerLink,
  ContainerTitleDescription,
} from "./style";
import { useMediaQuery, useTheme } from "@mui/material";

const CardGift = ({
  imagem,
  title,
  description,
  link1,
  link2,
  moedas,
  options,
  destinoURL1,
  destinoURL2,
  onSelect,
  isSelected,
}) => {
  const [hoveredText, setHoveredText] = useState(link2);
  const [selectedText, setSelectedText] = useState("");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleHoverEnter = () => {
    if (link2 === "BLIK" && !isMobile) {
      setHoveredText("Bartosz S.");
    } else if (link2 === "PIX" && !isMobile) {
      setHoveredText("PIX: LUDMILLA");
    }
  };

  const handleHoverLeave = () => {
    setHoveredText(link2);
  };

  const handleClick = () => {
    if (link2 === "BLIK" && !isMobile) {
      setSelectedText("+48 602 180485");
    } else if (link2 === "PIX" && !isMobile) {
      setSelectedText("PIX: LUDMILLA");
    }
  };

  return (
    <CardGiftContainer isSelected={isSelected} onClick={onSelect}>
      <CardGiftImage src={imagem} alt="Imagem do item" />
      <ContainerTitleDescription>
        <CardGiftTitle>{title}</CardGiftTitle>
        <ContainerInfo>
          <CardGiftDescription>{description}</CardGiftDescription>
          <CardGiftMoedas>{moedas}</CardGiftMoedas>
          <CardGiftDescription>{options}</CardGiftDescription>
          <ContainerLink>
            <CardGiftLink1 onClick={() => window.open(destinoURL1, "_blank")}>
              {link1}
            </CardGiftLink1>
            <CardGiftLink2
              onClick={() => {
                handleClick();
                if (destinoURL2) {
                  window.open(destinoURL2, "_blank");
                }
              }}
              onMouseEnter={handleHoverEnter}
              onMouseLeave={handleHoverLeave}
            >
              {isSelected ? selectedText || hoveredText : hoveredText}
            </CardGiftLink2>
          </ContainerLink>
        </ContainerInfo>
      </ContainerTitleDescription>
    </CardGiftContainer>
  );
};

export default CardGift;
