import { styled } from "@mui/material";

const breakpoints = {
  xs: "0px",
  sm: "600px",
  md: "960px",
  lg: "1280px",
  xl: "1920px",
};

const createMediaQuery = (size) => `@media (max-width: ${breakpoints[size]})`;

const CardWeddingContainer = styled("div")(({ theme, isSelected }) => ({
  [createMediaQuery("lg")]: {
    display: "flex",
    width: "444px",
    height: "552px",
    padding: "16px",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "16px",
    flexShrink: 0,

    background: "#FFF",
    cursor: "pointer",
    marginBottom: 5,
  },
  [createMediaQuery("xl")]: {
    display: "flex",
    width: "444px",
    height: "552px",
    padding: "16px",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "16px",
    flexShrink: 0,

    background: "#FFF",
    cursor: "pointer",
    marginBottom: 5,
  },

  [createMediaQuery("sm")]: {
    display: "flex",
    width: "358px",
    height: "458px",
    padding: "16px",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
    flexShrink: 0,

    background: "#FFF",
    cursor: "pointer",
  },

  [createMediaQuery("md")]: {
    display: "flex",
    width: "358px",
    height: "458px",
    padding: "16px",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
    flexShrink: 0,

    background: "#FFF",
    cursor: "pointer",
  },

  border: isSelected
    ? "1px solid var(--Green-Olive, #52736B)"
    : "1px solid var(--terracota, #9C4522)",

  "& img": {
    border: isSelected
      ? "1px solid var(--Green-Olive, #52736B)"
      : "1px solid var(--terracota, #9C4522)",
  },
  "& h6": {
    color: isSelected ? "var(--Green-Olive, #52736B)" : "none",
  },
  "&:hover": {
    border: "1px solid var(--Terracota, #9C4522)",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",

    "& img": {},
    "& h6": {
      color: "var(--terracota, #9C4522)",
      textAlign: "center",
      fontFamily: "Cinzel",
      fontSize: 28,
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "normal",
    },
    "& p": {},
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
    width: "326px",
    height: "326px",
  },
  [createMediaQuery("md")]: {
    width: "326px",
    height: "326px",
  },
});

const ContainerTitleDescription = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  flex: "1 0 0",
  alignSelf: "stretch",
  [createMediaQuery("lg")]: {},
  [createMediaQuery("xl")]: {},
  [createMediaQuery("sm")]: {},
  [createMediaQuery("md")]: {},
}));

const CardWeddingTitle = styled("h6")(({ theme }) => ({
  color: "var(--terracota, #9C4522)",
  textAlign: "center",
  fontFamily: "Cinzel",
  fontSize: 28,
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
