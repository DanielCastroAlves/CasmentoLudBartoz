import { styled } from "@mui/material";

const breakpoints = {
  xs: "0rem",
  sm: "37.5rem",
  md: "60rem",
  lg: "80rem",
  xl: "100rem",
  xxl: "220rem", // Ajustado para 120rem para tela 4K
};

const createMediaQuery = (size) => `@media (max-width: ${breakpoints[size]})`;

const CardCityContainer = styled("div")(({ theme, isSelected }) => ({
  // Estilos para telas grandes (lg) e extra grandes (xl)
  [createMediaQuery("lg")]: {
    display: "flex",
    width: "27.75rem",
    height: "34.5rem",
    padding: "1rem",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "1rem",
    flexShrink: 0,
    background: "#FFF",
    marginBottom: "0.625rem",
    marginLeft: "20px",
  },
  [createMediaQuery("xl")]: {
    display: "flex",
    width: "27.75rem",
    height: "34.5rem",
    padding: "1rem",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "1rem",
    flexShrink: 0,
    background: "#FFF",
    marginBottom: "0.625rem",
    marginLeft: "20px",
  },
  [createMediaQuery("xxl")]: {
    display: "flex",
    width: "27.75rem",
    height: "34.5rem",
    padding: "1rem",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "1rem",
    flexShrink: 0,
    background: "#FFF",
    marginBottom: "0.625rem",
    marginLeft: "20px",
  },
  // Estilos para telas pequenas (sm) e médias (md)
  [createMediaQuery("sm")]: {
    display: "flex",
    width: "22.375rem",
    height: "28.625rem",
    padding: "1rem",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
    flexShrink: 0,
    background: "#FFF",
    marginBottom: "0.625rem",
    marginLeft: 10,
  },
  [createMediaQuery("md")]: {
    display: "flex",
    width: "22.375rem",
    height: "28.625rem",
    padding: "1rem",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
    flexShrink: 0,
    background: "#FFF",
    marginBottom: "0.625rem",
    marginLeft: 10,
  },
  border: isSelected
    ? "0.0625rem solid var(--Green-Olive, #52736B)"
    : "0.0625rem solid var(--terracota, #9C4522)",
  "& img": {
    border: isSelected ? "0.0625rem solid var(--Green-Olive, #52736B)" : "none",
  },
  "& h6": {
    color: isSelected ? "var(--Green-Olive, #52736B)" : "none",
  },
  "&:hover": {
    border: isSelected
      ? "0.0625rem solid var(--Green-Olive, #52736B)"
      : "0.0625rem solid var(--terracota, #9C4522)",
    boxShadow: "0 0.25rem 0.25rem 0 rgba(0, 0, 0, 0.25)",
    "& img": {},
    "& h6": {
      color: "var(--terracota, #9C4522)",
      textAlign: "center",
      fontFamily: "Cinzel",
      fontSize: "1.75rem",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "normal",
    },
  },
}));

const PageCityImage = styled("img")({
  flexShrink: 0,
  [createMediaQuery("lg")]: {
    width: "25.75rem", // 412px converted to rem
    height: "25.75rem", // 412px converted to rem
  },
  [createMediaQuery("xl")]: {
    width: "25.75rem", // 412px converted to rem
    height: "25.75rem", // 412px converted to rem
  },
  [createMediaQuery("sm")]: {
    width: "20.375rem", // 326px converted to rem
    height: "20.375rem", // 326px converted to rem
  },
  [createMediaQuery("md")]: {
    width: "20.375rem", // 326px converted to rem
    height: "20.375rem", // 326px converted to rem
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

const PageCityTitle = styled("h6")(({ theme }) => ({
  color: "var(--terracota, #9C4522)",
  textAlign: "center",
  fontFamily: "Cinzel",
  fontSize: "1.75rem", // 28px converted to rem
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
}));

const PageCityDescription = styled("p")(({ theme }) => ({
  color: "var(--black, #545454)",
  fontFamily: "Open Sans",
  fontSize: "0.875rem", // 14px converted to rem
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
  textTransform: "uppercase",
}));

export {
  CardCityContainer,
  PageCityImage,
  ContainerTitleDescription,
  PageCityTitle,
  PageCityDescription,
};
