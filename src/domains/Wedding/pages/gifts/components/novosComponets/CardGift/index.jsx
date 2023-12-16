import React, { useState, useEffect, useRef } from "react";
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
  const [text, setText] = useState(link2);
  const [isLink2Clicked, setIsLink2Clicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const cardRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setIsLink2Clicked(false);
        setIsHovered(false);
        setText(link2);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [link2, text]);

  const handleClick = () => {
    setIsLink2Clicked(!isLink2Clicked);

    if (link2 === "BLIK" && !isMobile) {
      setText("048 602 180 485");
    } else if (link2 === "PIX" && !isMobile) {
      setText("PIX: LUDMILLA");
    }
  };

  const handleHoverEnter = () => {
    if (!isMobile) {
      setIsHovered(true);
  
      if (link2 === "BLIK") {
        setText(isLink2Clicked ? "048 602 180 485" : "Blik: Bartosz");
      } else if (link2 === "PIX") {
        setText("PIX: LUDMILLA");
      }
    }
  };
  

  const handleHoverLeave = () => {
    setIsHovered(false);
    if (!isLink2Clicked) {
      setText(link2);
    }
  };

  return (
    <CardGiftContainer ref={cardRef} isSelected={isSelected} onClick={onSelect}>
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
              onMouseEnter={handleHoverEnter}
              onMouseLeave={handleHoverLeave}
              onClick={() => {
                handleClick();
                if (destinoURL2) {
                  window.open(destinoURL2, "_blank");
                }
              }}
              data-clicked={isLink2Clicked}
            >
              {text}
            </CardGiftLink2>
          </ContainerLink>
        </ContainerInfo>
      </ContainerTitleDescription>
    </CardGiftContainer>
  );
};

export default CardGift;
