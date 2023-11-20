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
    display: "flex !important",
    marginLeft:"30px",
    width: "300px !important",
    height: "400px !important",
    padding: "16px !important",
    flexDirection: "column !important",
    alignItems: "center !important",
    justifyContent: "center !important",
    gap: "16px !important",
    flexShrink: 1,

    background: "#FFF",
    cursor: "pointer",
  },

  [createMediaQuery("md")]: {
    display: "flex",
    marginLeft:"35px",
    width: "300px",
    height: "400px",
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
    width: "276px",
    height: "296px",
  },
  [createMediaQuery("md")]: {
    width: "276px",
    height: "296px",
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
  [createMediaQuery("lg")]: {},
  [createMediaQuery("xl")]: {},
  [createMediaQuery("sm")]: {fontSize: 15,},
  [createMediaQuery("md")]: {fontSize: 15,},
}));

const CardWeddingDescription = styled("p")(({ theme }) => ({
  color: "var(--black, #545454)",
  fontFamily: "Open Sans",
  fontSize: 14,
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
  textTransform: "uppercase",
  [createMediaQuery("lg")]: {},
  [createMediaQuery("xl")]: {},
  [createMediaQuery("sm")]: {fontSize: 9,},
  [createMediaQuery("md")]: {fontSize: 9,},
}));

export {
  CardWeddingContainer,
  CardWeddingImage,
  ContainerTitleDescription,
  CardWeddingTitle,
  CardWeddingDescription,
};
