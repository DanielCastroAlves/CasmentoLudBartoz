import { styled } from "@mui/material";

const breakpoints = {
  xs: "0px",
  sm: "600px",
  md: "960px",
  lg: "1280px",
  xl: "1920px",
};

const createMediaQuery = (size) => `@media (max-width: ${breakpoints[size]})`;

const CardWeddingContainer = styled("div")(({ theme }) => ({
  display: "flex",

  padding: "16px",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "16px",
  flexShrink: 0,
  border: "1px solid var(--terracota, #9C4522)",
  background: "#FFF",

  [createMediaQuery("lg")]: {
    display: "flex",
    width: "552px",
   
    padding: "16px",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "16px",
    flexShrink: 0,
    border: "1px solid var(--terracota, #9C4522)",
    background: "#FFF",
  },
  [createMediaQuery("xl")]: {
    display: "flex",
    width: "552px",
   
    padding: "16px",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "16px",
    flexShrink: 0,
    border: "1px solid var(--terracota, #9C4522)",
    background: "#FFF",
  },

  [createMediaQuery("sm")]: {
    display: "flex",
    width: "335px",
    height: "458px",
    padding: "16px",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
    flexShrink: 0,
    border: "1px solid var(--terracota, #9C4522)",
    background: "#FFF",
  },

  [createMediaQuery("md")]: {
    display: "flex",
    width: "335px",
    height: "458px",
    padding: "16px",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
    flexShrink: 0,
    border: "1px solid var(--terracota, #9C4522)",
    background: "#FFF",
  },
}));

const CardWeddingImage = styled("img")({
 
  flexShrink: 0,
  [createMediaQuery("lg")]: {
    width: "412px",
    height: "412px",
  },
  [createMediaQuery("xl")]: {
    width: "412px",
    height: "412px",
  },
  [createMediaQuery("sm")]: {
    width: "306px",
  },
  [createMediaQuery("md")]: {
    width: "306px",
  },

});


const ContainerTitleDescription = styled("div")(({ theme }) => ({
  [createMediaQuery("lg")]: {
    width: "412px",
    height: "412px",
  },
  [createMediaQuery("xl")]: {
    width: "412px",
    height: "412px",
  },
  [createMediaQuery("sm")]: {
    width: "306px",
  },
  [createMediaQuery("md")]: {
    width: "306px",
  },
}));

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
  ContainerTitleDescription,
  CardWeddingTitle,
  CardWeddingDescription,
};
