import { styled } from "@mui/material";

const breakpoints = {
  xs: "0rem",
  sm: "37.5rem",
  md: "60rem",
  lg: "80rem",
  xl: "120rem",
};

const createMediaQuery = (size) => `@media (max-width: ${breakpoints[size]})`;

const BannerImage = styled("div")(({ theme }) => ({
  margin: "1.25rem 0 1.25rem 0",
  padding: "1.25rem 0 1.25rem 0",

  "& > .imgrioMb": {
    display: "none",
  },

  [createMediaQuery("sm")]: {
    margin: "2rem 0 3.25rem 0",
    padding: "2rem 0 2rem 0",
    width: "24.375rem",
    height: "22.375rem",
    "& > .imgBuzios": {
      display: "none",
    },
    "& > .imgrioMb": {
      display: "block",
    },
  },
  [createMediaQuery("md")]: {
    margin: "2rem 0 3.25rem 0",
    padding: "2rem 0 2rem 0",
    width: "24.375rem",
    height: "22.375rem",
    "& > .imgBuzios": {
      display: "none",
    },
    "& > .imgrioMb": {
      display: "block",
    },
  },
}));

const ContainerBanner = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",

  [createMediaQuery("sm")]: {
    width: "",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
  },
  [createMediaQuery("md")]: {
    width: "",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
  },
}));

const CardBanner = styled("div")(({ theme, isSelected }) => ({
  display: "flex",
  height: "552px",
  padding: "10px",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "16px",
  flexShrink: 0,

  background: "#FFF",
  border: isSelected
    ? "0.0625rem solid var(--Green-Olive, #52736B)" // 1px converted to rem
    : "0.0625rem solid var(--terracota, #9C4522)", // 1px converted to rem
  "& img": {
    border: isSelected
      ? "0.0625rem solid var(--Green-Olive, #52736B)" // 1px converted to rem
      : "none",
  },
  "& h1": {
    color: isSelected ? "var(--Green-Olive, #52736B)" : "none",
  },
  "&:hover": {
    border: isSelected
      ? "0.0625rem solid var(--Green-Olive, #52736B)" // 1px converted to rem
      : "0.0625rem solid var(--terracota, #9C4522)", // 1px converted to rem
    boxShadow: "0 0.25rem 0.25rem 0 rgba(0, 0, 0, 0.25)", // 4px converted to rem
    "& img": {},
    "& h1": {
      color: "var(--terracota, #9C4522)",
      textAlign: "center",
      fontFamily: "Cinzel",
      fontSize: "1.75rem", // 28px converted to rem
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "normal",
    },
  },
  [createMediaQuery("sm")]: {
    // Estilos específicos para "sm" aqui
  },
  [createMediaQuery("md")]: {
    // Estilos específicos para "md" aqui
  },
}));


const BannerImageBuzios = styled("div")(({ theme }) => ({
  width: "412px",
  height: "410px",
  border: "0.0625rem solid var(--Terracota, #9C4522)",
  

  [createMediaQuery("sm")]: {
    width: "",
  },
  [createMediaQuery("md")]: {
    width: "",
  },
}));

const ContainerTitleBanner = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.9375rem",

  margin: "1.5625rem auto",

  "& > h1": {
    display: "flex",
    padding: "0.25rem 0.5rem",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.625rem",
    color: "var(--Terracota, #9C4522)",
    textAlign: "center",
    fontFamily: "Cinzel",
    fontSize: "1.75rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  },
  "& > p": {
    color: "var(--Black, #545454)",
    textAlign: "center",
    fontFamily: "Open Sans",
    fontSize: "0.875rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    textTransform: "uppercase",
  },

  [createMediaQuery("sm")]: {
    width: "",
  },
  [createMediaQuery("md")]: {
    width: "",
  },
}));

const ContainerPageCity = styled("div")(({ theme }) => ({
  width:"70rem",
  display: "flex",
  flexDirection: "column",
  margin: "auto 0.75rem",
  marginBottom: "3.75rem",

  [createMediaQuery("sm")]: {
    width: "80%",
  },
  [createMediaQuery("md")]: {
    width: "80%",
  },
}));

const TituloDescription = styled("h2")(({ theme }) => ({
  color: "var(--verde-oliva, #52736B);",
  fontFamily: "Cinzel",
  fontSize: "1.25rem",
  fontWeight: 400,
  margin:"auto 10%",
  marginBottom: "2rem",

  [createMediaQuery("sm")]: {
    width: "",
  },
  [createMediaQuery("md")]: {
    width: "",
  },
}));

const Description = styled("p")(({ theme }) => ({
  color: "var(--Black, #545454)",
  fontFamily: "Open Sans",
  fontSize: "0.875rem",
  fontStyle: "normal",
  fontWeight: 300,
  lineHeight: "normal",
  ul: {
    paddingLeft: "1.25rem",
  },
  li: {
    position: "relative",
    marginBottom: "0.625rem",
    paddingLeft: "0.3125rem",
    color: "var(--Black, #545454)",
    fontFamily: "Open Sans",
    fontSize: "0.875rem",
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "normal",
  },
  margin:"auto 10%",
  marginBottom: "1.25rem",

  [createMediaQuery("sm")]: {
    width: "",
  },
  [createMediaQuery("md")]: {
    width: "",
  },
}));

export {
  ContainerPageCity,
  TituloDescription,
  Description,
  BannerImage,
  BannerImageBuzios,
  ContainerTitleBanner,
  ContainerBanner,
  CardBanner
};
