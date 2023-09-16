import React from "react";
import { CardWeddingContainer, CardWeddingDescription, CardWeddingImage, CardWeddingTitle, ContainerTitleDescription } from "./style";
import { Link } from "@mui/material";

const CardWedding = ({ image, title, description, destination }) => {
    return (
        <CardWeddingContainer key={title}>
            <Link href={destination} underline="none">
                <CardWeddingImage src={image} alt="Imagem do item" />
                <ContainerTitleDescription>
                    <CardWeddingTitle>{title}</CardWeddingTitle>
                    <CardWeddingDescription>{description}</CardWeddingDescription>
                </ContainerTitleDescription>
            </Link>
        </CardWeddingContainer>
    );
};

export default CardWedding;
