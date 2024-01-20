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

  const toggleSelection = () => {
    setIsSelected(!isSelected);
  };

  useEffect(() => {}, [destination]);

  return (
    <Link href={destination} underline="none">
      <CardWeddingContainerBlog
        key={title}
        isSelected={isSelected}
        onClick={toggleSelection}
      >
        <CardWeddingImageBlog src={image} alt="Imagem do item" />
        <ContainerTitleDescriptionBlog>
          <CardWeddingTitleBlog>
            <h6>{title}</h6>
          </CardWeddingTitleBlog>
          <CardWeddingDescriptionBlog>
            <p>{description}</p>
          </CardWeddingDescriptionBlog>
        </ContainerTitleDescriptionBlog>
      </CardWeddingContainerBlog>
    </Link>
  );
};

export default CardWeddingBlog;
