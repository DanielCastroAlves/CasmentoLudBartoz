// CardGift.jsx
import React, { useState, useEffect } from "react";
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
  CopyFeedback,
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
  copyPasteBlink,
  copyPastePix,
  onSelect,
  isSelected,
}) => {
  const [hoveredText, setHoveredText] = useState(link2);
  const [copyFeedback, setCopyFeedback] = useState("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleHoverEnter = () => {
    if (hoveredText === "BLIK" && !isMobile) {
      setHoveredText(copyPasteBlink);
    } else if (hoveredText === "PIX" && !isMobile) {
      setHoveredText("PIX: LUDMILLA");
    }
  };

  const handleHoverLeave = () => {
    setHoveredText(link2);
  };

  const handleLinkClick = () => {
    let textToCopy = "";
    let linkToOpen = "";

    if (hoveredText === copyPasteBlink) {
      textToCopy = copyPasteBlink;
      linkToOpen = destinoURL2;
    } else if (hoveredText === "PIX: LUDMILLA") {
      textToCopy = copyPastePix;
      linkToOpen = destinoURL1;
    }

    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();

    try {
      navigator.clipboard.writeText(textToCopy);

      if (hoveredText === "PIX: LUDMILLA") {
        window.open(linkToOpen, "_blank");
      } else {
        setCopyFeedback("BLIK copiado");
      }

      onSelect(); // Chama a função para informar ao componente pai que este card foi selecionado
    } catch (err) {
      console.error("Erro ao copiar texto:", err);
      setCopyFeedback("Erro ao copiar o texto para a área de transferência.");
    }
  };

  return (
    <CardGiftContainer
      isSelected={isSelected}
      onClick={onSelect} // Chama a função para informar ao componente pai que este card foi selecionado
    >
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
              onClick={handleLinkClick}
              onMouseEnter={handleHoverEnter}
              onMouseLeave={handleHoverLeave}
            >
              {hoveredText}
            </CardGiftLink2>
          </ContainerLink>
          <CopyFeedback>{copyFeedback}</CopyFeedback>
        </ContainerInfo>
      </ContainerTitleDescription>
    </CardGiftContainer>
  );
};

export default CardGift;
