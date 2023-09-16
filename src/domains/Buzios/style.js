import { styled } from "@mui/material";

const breakpoints = {
  xs: "0px",
  sm: "600px",
  md: "960px",
  lg: "1280px",
  xl: "1920px",
};

const createMediaQuery = (size) => `@media (max-width: ${breakpoints[size]})`;

const BannerImage = styled("div")(({ theme }) => ({
  margin: "20px",
  padding: "20px",

  "& > .imgBuziosMb": {
    display: "none",
  },

  [createMediaQuery("sm")]: {
    margin: "0",
    padding: "0",
    width: "390px",
    height: "358px",
    "& > .imgBuzios": {
      display: "none",
    },
    "& > .imgBuziosMb": {
      display: "block",
      margin: "32px 0 32px 0",
    },
  },
  [createMediaQuery("md")]: {
    margin: "0",
    padding: "0",
    width: "390px",
    height: "358px",
    "& > .imgBuzios": {
      display: "none",
    },
    "& > .imgBuziosMb": {
      display: "block",
      margin: "32px 0 32px 0",
    },
  },
}));

const ContainerBanner = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "16px",

  [createMediaQuery("sm")]: {
    width: "",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
  },
  [createMediaQuery("md")]: {
    width: "",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
  },
}));

const BannerImageBuzios = styled("div")(({ theme }) => ({
  width: "356.344px",
  height: "238px",
  border: "1px solid var(--Terracota, #9C4522)",
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
  gap: "14.992px",

  margin: "25% auto",

  "& > h1": {
    display: "flex",
    padding: "4px 8px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    color: "var(--Terracota, #9C4522)",
    textAlign: "center",
    fontFamily: "Cinzel",
    fontSize: "28px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  },
  "& > p": {
    color: "var(--Black, #545454)",
    textAlign: "center",
    fontFamily: "Open Sans",
    fontSize: "14px",
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
  margin: "auto 12%",
  marginBottom: 60,

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
  fontSize: "20px",
  fontWeight: 400,
  marginBottom: 32,

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
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 300,
  lineHeight: "normal",
  ul: {
    paddingLeft: "20px",
  },
  li: {
    position: "relative",
    marginBottom: "5px",
    paddingLeft: "5px",
    color: "var(--Black, #545454)",
    fontFamily: "Open Sans",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "normal",
  },
  marginBottom: 20,

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
