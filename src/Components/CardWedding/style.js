import { styled } from "@mui/material";

const CardWeddingContainer = styled("div")(({ theme }) => ({
  display: "flex",
  width: "358px",
  height: "458px",
  padding: "16px",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "16px",
  flexShrink: 0,
  border: "1px solid var(--terracota, #9C4522)",
  background: "#FFF",
}));

const CardWeddingImage = styled("img")({
  width: "326px",
  height: "326px",
  flexShrink: 0,
});

const CardWeddingTitle = styled("h6")(({ theme }) => ({
  color: "var(--terracota, #9C4522)",
  textAlign: "center",
  fontFamily: "Cinzel",
  fontSize: 22,
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
}));

const CardWeddingDescription = styled("p")(({ theme }) => ({
  color: "var(--black, #545454)",
  fontFamily: "Open Sans",
  fontSize: 14,
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
  textTransform: "uppercase",
}));

export {
  CardWeddingContainer,
  CardWeddingImage,
  CardWeddingTitle,
  CardWeddingDescription,
};
