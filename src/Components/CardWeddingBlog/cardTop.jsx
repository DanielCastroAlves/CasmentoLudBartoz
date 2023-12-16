import React, { useState, useEffect } from "react";
import {
  CardWeddingContainerBlogTop,
  CardWeddingDescriptionBlogTop,
  CardWeddingImageBlogTop,
  CardWeddingTitleBlogTop,
  ContainerTitleDescriptionBlogTop,
} from "./cardTopStyle";
import { Link } from "@mui/material";

const CardTop = ({ image, title, description, destination }) => {
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
      <CardWeddingContainerBlogTop
        key={title}
        isSelected={isSelected}
        onClick={toggleSelection}
      >
        <CardWeddingImageBlogTop src={image} alt="Imagem do item" />
        <ContainerTitleDescriptionBlogTop>
          <CardWeddingTitleBlogTop>{title}</CardWeddingTitleBlogTop>
          <CardWeddingDescriptionBlogTop>{description}</CardWeddingDescriptionBlogTop>
        </ContainerTitleDescriptionBlogTop>
      </CardWeddingContainerBlogTop>
    </Link>
  );
};

export default CardTop;
