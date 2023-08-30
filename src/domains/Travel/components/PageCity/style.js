import { Button } from "@mui/material";
import { styled } from "@mui/material";

const ButtonContainer = styled(Button)(({ theme }) => ({
  border: "none",
  background: "none",
  cursor: "pointer",
}));

const ButtonImage = styled("img")(({ theme }) => ({
    border: "none",
    background: "none",
    cursor: "pointer",
  }));;

export { ButtonContainer, ButtonImage };
