import { styled } from "@mui/material";

const breakpoints = {
  xs: "0px",
  sm: "600px",
  md: "960px",
  lg: "1280px",
  xl: "1920px",
};

const createMediaQuery = (size) => `@media (max-width: ${breakpoints[size]})`;

const CardBGContainer = styled("div")(({ theme }) => ({
  [createMediaQuery("lg")]: {
    display: "inline-flex",
    height: "533px",
    padding: "16px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "16px",
    border: "1px solid var(--Green-Olive, #52736B)",
    background: "#FFF",
  },
  [createMediaQuery("xl")]: {
    display: "inline-flex",
    height: "533px",
    padding: "16px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "16px",
    border: "1px solid var(--Green-Olive, #52736B)",
    background: "#FFF",
  },
  [createMediaQuery("sm")]: {
    display: "flex",
    height: "269px",
    width: 200,
    padding: "16px",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
    flexShrink: 0,
    border: "1px solid var(--Green-Olive, #52736B)",
    background: "#FFF",
  },
  [createMediaQuery("md")]: {
    display: "flex",
    height: "269px",
    width: 200,
    padding: "16px",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
    flexShrink: 0,
    border: "1px solid var(--Green-Olive, #52736B)",
    background: "#FFF",
  },
}));

const CardBContainer = styled("div")(({ theme }) => ({
  [createMediaQuery("lg")]: {
    display: "inline-flex",
    height: "533px",
    padding: "16px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "16px",
    border: "1px solid var(--terracota, #9C4522)",
    background: "#FFF",
  },
  [createMediaQuery("xl")]: {
    display: "inline-flex",
    height: "533px",
    padding: "16px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "16px",
    border: "1px solid var(--terracota, #9C4522)",
    background: "#FFF",
  },
  [createMediaQuery("sm")]: {
    display: "flex",
    height: "269px",
    width: 200,
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
    height: "269px",
    width: 200,
    padding: "16px",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
    flexShrink: 0,
    border: "1px solid var(--terracota, #9C4522)",
    background: "#FFF",
  },
}));

const CardBGImage = styled("img")({
  flexShrink: 0,
  [createMediaQuery("lg")]: {
    width: "412px",
  },
  [createMediaQuery("xl")]: {
    width: "412px",
  },
  [createMediaQuery("sm")]: {
    width: "159px",
  },
  [createMediaQuery("md")]: {
    width: "159px",
  },
});

const CardBGTitle = styled("h6")(({ theme }) => ({
  display: "flex",
  height: "38px",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignSelf: "stretch",
  color: "var(--Green-Olive, #52736B)",
  textAlign: "start",
  fontFamily: "Cinzel",
  fontSize: "28px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",

  [createMediaQuery("lg")]: {
    fontSize: "20px",
  },
  [createMediaQuery("xl")]: {
    fontSize: "20px",
  },
}));

const CardBTitle = styled("h6")(({ theme }) => ({
  display: "flex",
  height: "38px",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignSelf: "stretch",
  color: "var(--terracota, #9C4522)",
  textAlign: "start",
  fontFamily: "Cinzel",
  fontSize: "28px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",

  [createMediaQuery("lg")]: {
    fontSize: "20px",
  },
  [createMediaQuery("xl")]: {
    fontSize: "20px",
  },
}));

const CardBGDescription = styled("p")(({ theme }) => ({
  display: "flex",
  padding: "4px 8px",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "10px",
  alignSelf: "stretch",
  color: "var(--Black, #545454)",
  fontFamily: "Open Sans",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
  textTransform: "uppercase",
}));

export {
  CardBGContainer,
  CardBGImage,
  CardBGTitle,
  CardBTitle,
  CardBGDescription,
  CardBContainer,
};
