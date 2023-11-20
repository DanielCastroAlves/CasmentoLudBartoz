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
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const [hoveredText, setHoveredText] = useState(link2);
  const [copyFeedback, setCopyFeedback] = useState("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const toggleSelection = () => {
    setIsSelected(!isSelected);
  };

  useEffect(() => {
    // O código aqui é executado quando o componente é montado
  }, [link1, link2]);

  const handleHoverEnter = () => {
    if (hoveredText === "BLIK" && !isMobile) {
      setHoveredText("Blik: Bartosz");
    } else if (hoveredText === "PIX" && !isMobile) {
      setHoveredText("Pix: Ludmilla");
    }
  };

  const handleHoverLeave = () => {
    setHoveredText(link2);
  };

  const handleLinkClick = () => {
    let textToCopy = "";
    if (hoveredText === "BLIK") {
      textToCopy = copyPasteBlink;
    } else if (hoveredText === "PIX") {
      textToCopy = copyPastePix;
    }

    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();

    try {
      navigator.clipboard.writeText(textToCopy);

      if (link2 === "PIX") {
        setCopyFeedback("PIX copiado");
      } else {
        setCopyFeedback("+48 602 180485");
      }
    } catch (err) {
      console.error("Erro ao copiar texto:", err);
      setCopyFeedback("Erro ao copiar o texto para a área de transferência.");
    }
  };

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
