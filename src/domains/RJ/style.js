import { styled } from "@mui/material";

const breakpoints = {
  xs: "0px",
  sm: "37.5rem", // 600px / 16px
  md: "60rem",   // 960px / 16px
  lg: "80rem",   // 1280px / 16px
  xl: "120rem",  // 1920px / 16px
};

const createMediaQuery = (size) => `@media (max-width: ${breakpoints[size]})`;

const BannerImage = styled("div")(({ theme }) => ({
  margin: "1.25rem 0 1.25rem 0", // 20px / 16px
  padding: "1.25rem 0 1.25rem 0", // 20px / 16px

  "& > .imgBuziosMb": {
    display: "none",
  },

  [createMediaQuery("sm")]: {
    margin: "2rem 0 3.25rem 0",   // 32px / 16px
    padding: "2rem 0 2rem 0",     // 32px / 16px
    width: "24.375rem",           // 390px / 16px
    height: "22.375rem",          // 358px / 16px
    "& > .imgBuzios": {
      display: "none",
    },
    "& > .imgBuziosMb": {
      display: "block",
    },
  },
  [createMediaQuery("md")]: {
    margin: "2rem 0 3.25rem 0",   // 32px / 16px
    padding: "2rem 0 2rem 0",     // 32px / 16px
    width: "24.375rem",           // 390px / 16px
    height: "22.375rem",          // 358px / 16px
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
  gap: "1rem", // 16px / 16px

  [createMediaQuery("sm")]: {
    width: "",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem", // 16px / 16px
  },
  [createMediaQuery("md")]: {
    width: "",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem", // 16px / 16px
  },
}));

const BannerImageBuzios = styled("div")(({ theme }) => ({
  width: "22.272rem",   // 356.344px / 16px
  height: "14.875rem",  // 238px / 16px
  border: "0.0625rem solid var(--Terracota, #9C4522)", // 1px / 16px
  flexShrink: 0,

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
  gap: "0.9375rem", // 15px / 16px

  margin: "25% auto",

  "& > h1": {
    display: "flex",
    padding: "0.25rem 0.5rem", // 4px / 16px, 8px / 16px
    justifyContent: "center",
    alignItems: "center",
    gap: "0.625rem", // 10px / 16px
    color: "var(--Terracota, #9C4522)",
    textAlign: "center",
    fontFamily: "Cinzel",
    fontSize: "1.75rem", // 28px / 16px
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  },
  "& > p": {
    color: "var(--Black, #545454)",
    textAlign: "center",
    fontFamily: "Open Sans",
    fontSize: "0.875rem", // 14px / 16px
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
  display: "flex",
  flexDirection: "column",
  margin: "auto 0.75rem", // 12px / 16px
  marginBottom: "3.75rem", // 60px / 16px

  [createMediaQuery("sm")]: {
    width: "",
  },
  [createMediaQuery("md")]: {
    width: "",
  },
}));

const TituloDescription = styled("h2")(({ theme }) => ({
  color: "var(--verde-oliva, #52736B);",
  fontFamily: "Cinzel",
  fontSize: "1.25rem", // 20px / 16px
  fontWeight: 400,
  marginBottom: "2rem", // 32px / 16px

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
  fontSize: "0.875rem", // 14px / 16px
  fontStyle: "normal",
  fontWeight: 300,
  lineHeight: "normal",
  ul: {
    paddingLeft: "1.25rem", // 20px / 16px
  },
  li: {
    position: "relative",
    marginBottom: "0.3125rem", // 5px / 16px
    paddingLeft: "0.3125rem",   // 5px / 16px
    color: "var(--Black, #545454)",
    fontFamily: "Open Sans",
    fontSize: "0.875rem", // 14px / 16px
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "normal",
  },
  marginBottom: "1.25rem", // 20px / 16px

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
};
