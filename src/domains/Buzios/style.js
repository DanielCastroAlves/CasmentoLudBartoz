import { styled } from "@mui/material";

const baseRem = 16; // Defina o valor base em pixels (1rem = 16px)

const breakpoints = {
  xs: "0rem",
  sm: "37.5rem", // 600px / 16px = 37.5rem
  md: "60rem",   // 960px / 16px = 60rem
  lg: "80rem",   // 1280px / 16px = 80rem
  xl: "120rem",  // 1920px / 16px = 120rem
};

const createMediaQuery = (size) => `@media (max-width: ${breakpoints[size]})`;

const BannerImage = styled("div")(({ theme }) => ({
  margin: "1.25rem 0 1.25rem 0",
  padding: "1.25rem 0 1.25rem 0",

  "& > .imgBuziosMb": {
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
    "& > .imgBuziosMb": {
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
    "& > .imgBuziosMb": {
      display: "block",
    },
  },
}));

const ContainerBanner = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem", // 16px / 16px = 1rem

  [createMediaQuery("sm")]: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
  },
  [createMediaQuery("md")]: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
  },
}));

const BannerImageBuzios = styled("div")(({ theme }) => ({
  width: "22.271rem", // 356.344px / 16px = 22.271rem
  height: "14.875rem", // 238px / 16px = 14.875rem
  border: "1px solid var(--Terracota, #9C4522)",
  flexShrink: 0,

  [createMediaQuery("sm")]: {
    width: "24.375rem",
  },
  [createMediaQuery("md")]: {
    width: "24.375rem",
  },
}));

const ContainerTitleBanner = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.9375rem", // 15px / 16px = 0.9375rem
  margin: "1.5625rem auto", // 25px / 16px = 1.5625rem

  "& > h1": {
    display: "flex",
    padding: "0.25rem 0.5rem", // 4px / 16px = 0.25rem, 8px / 16px = 0.5rem
    justifyContent: "center",
    alignItems: "center",
    gap: "0.625rem", // 10px / 16px = 0.625rem
    color: "var(--Terracota, #9C4522)",
    textAlign: "center",
    fontFamily: "Cinzel",
    fontSize: "1.75rem", // 28px / 16px = 1.75rem
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  },
  "& > p": {
    color: "var(--Black, #545454)",
    textAlign: "center",
    fontFamily: "Open Sans",
    fontSize: "0.875rem", // 14px / 16px = 0.875rem
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    textTransform: "uppercase",
  },

  [createMediaQuery("sm")]: {
    // Ajuste os valores em rem conforme necessário
  },
  [createMediaQuery("md")]: {
    // Ajuste os valores em rem conforme necessário
  },
}));

const ContainerPageCity = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  margin: "auto 0.75rem", // 12px / 16px = 0.75rem
  marginBottom: "3.75rem", // 60px / 16px = 3.75rem

  [createMediaQuery("sm")]: {
    // Ajuste os valores em rem conforme necessário
  },
  [createMediaQuery("md")]: {
    // Ajuste os valores em rem conforme necessário
  },
}));

const TituloDescription = styled("h2")(({ theme }) => ({
  color: "var(--verde-oliva, #52736B);",
  fontFamily: "Cinzel",
  fontSize: "1.25rem", // 20px / 16px = 1.25rem
  fontWeight: 400,
  marginBottom: "2rem", // 32px / 16px = 2rem

  [createMediaQuery("sm")]: {
    // Ajuste os valores em rem conforme necessário
  },
  [createMediaQuery("md")]: {
    // Ajuste os valores em rem conforme necessário
  },
}));

const Description = styled("p")(({ theme }) => ({
  color: "var(--Black, #545454)",
  fontFamily: "Open Sans",
  fontSize: "0.875rem", // 14px / 16px = 0.875rem
  fontStyle: "normal",
  fontWeight: 300,
  lineHeight: "normal",
  ul: {
    paddingLeft: "1.25rem", // 20px / 16px = 1.25rem
  },
  li: {
    position: "relative",
    marginBottom: "0.3125rem", // 5px / 16px = 0.3125rem
    paddingLeft: "0.3125rem", // 5px / 16px = 0.3125rem
    color: "var(--Black, #545454)",
    fontFamily: "Open Sans",
    fontSize: "0.875rem", // 14px / 16px = 0.875rem
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "normal",
  },
  marginBottom: "1.25rem", // 20px / 16px = 1.25rem

  [createMediaQuery("sm")]: {
    // Ajuste os valores em rem conforme necessário
  },
  [createMediaQuery("md")]: {
    // Ajuste os valores em rem conforme necessário
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
};
