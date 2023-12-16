import React, { useState, useEffect } from "react";
import {
  CardWeddingContainerBlog,
  CardWeddingDescriptionBlog,
  CardWeddingImageBlog,
  CardWeddingTitleBlog,
  ContainerTitleDescriptionBlog,
} from "./style";
import { Link } from "@mui/material";

const CardWeddingBlog = ({ image, title, description, destination }) => {
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
      <CardWeddingContainerBlog
        key={title}
        isSelected={isSelected}
        onClick={toggleSelection}
      >
        <CardWeddingImageBlog src={image} alt="Imagem do item" />
        <ContainerTitleDescriptionBlog>
          <CardWeddingTitleBlog>{title}</CardWeddingTitleBlog>
          <CardWeddingDescriptionBlog>{description}</CardWeddingDescriptionBlog>
        </ContainerTitleDescriptionBlog>
      </CardWeddingContainerBlog>
    </Link>
  );
};

export default CardWeddingBlog;
