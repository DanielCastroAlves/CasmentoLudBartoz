import React from "react";
import { ButtonContainer, ButtonImage } from "./style";

const PageCity = ({ imagem, destination }) => {
  const handleButtonClick = () => {
    window.location.href = destination;
  };

  return (
    <ButtonContainer onClick={handleButtonClick}>
      <ButtonImage src={imagem} alt="Button" />
    </ButtonContainer>
  );
};

export default PageCity;
