import { styled } from "@mui/material";

const breakpoints = {
  xs: "0px",
  sm: "37.5rem", // 600px
  md: "60rem", // 960px
  lg: "80rem", // 1280px
  xl: "120rem", // 1920px
};

const createMediaQuery = (size) => `@media (max-width: ${breakpoints[size]})`;

const CardGiftContainer = styled("div")(({ theme, isSelected }) => ({
  [createMediaQuery("lg")]: {
    display: "flex",
    /*  height: "34.5rem", // 552px */
    padding: "1rem", // 16px
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "1rem", // 16px
    flexShrink: 0,
    background: "#FFF",
    cursor: "pointer",
    marginBottom: "0.3125rem", // 5px
    marginRight: "1.25rem", // 20px
  },
  [createMediaQuery("xl")]: {
    display: "flex",
    /*  height: "34.5rem", // 552px */
    padding: "1rem", // 16px
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "1rem", // 16px
    flexShrink: 0,
    background: "#FFF",
    cursor: "pointer",
    marginRight: "1.25rem", // 20px
    marginBottom: "0.3125rem", // 5px
  },
  [createMediaQuery("sm")]: {
    display: "flex",
    width: "22.375rem", // 358px
    marginLeft: 10,
    padding: "1rem", // 16px
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem", // 16px
    flexShrink: 0,
    background: "#FFF",
    cursor: "pointer",
  },
  [createMediaQuery("md")]: {
    display: "flex",
    width: "22.375rem", // 358px
    marginLeft: 10,
    padding: "1rem", // 16px
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem", // 16px
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
  /*  "&:hover": {
    border: "1px solid var(--Terracota, #9C4522)",
    boxShadow: "0 0.25rem 0.25rem 0 rgba(0, 0, 0, 0.25)",
    "& img": {},
    "& h6": {
      color: "var(--terracota, #9C4522)",
      textAlign: "center",
      fontFamily: "Cinzel",
      fontSize: "28px", // 28px
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "normal",
    },
    "& p": {},
  }, */
}));

const CardGiftImage = styled("img")({
  [createMediaQuery("lg")]: {
    width: "25.75rem", // 412px
    height: "25.75rem", // 252px
  },
  [createMediaQuery("xl")]: {
    width: "25.75rem", // 412px
    height: "25.75rem", // 252px
  },
  [createMediaQuery("sm")]: {
    width: "20.375rem", // 326px
    height: "20.375rem", // 326px
  },
  [createMediaQuery("md")]: {
    width: "20.375rem", // 326px
    height: "20.375rem", // 326px
  },
});

const ContainerTitleDescription = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "1rem", // 16px
  alignSelf: "stretch",

  [createMediaQuery("sm")]: {
    display: "flex",
    padding: " 4px 8px",

    gap: "10px",
    alignSelf: "stretch",
  },
  [createMediaQuery("md")]: {
    display: "flex",
    padding: " 4px 8px",

    gap: "10px",
    alignSelf: "stretch",
  },
}));

const ContainerLink = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  gap: "1rem", // 16px

  [createMediaQuery("sm")]: {},
  [createMediaQuery("md")]: {},
}));

const CardGiftLink = styled("p")(({ theme }) => ({
  color: "var(--Terracota, #9C4522)",
  textAlign: "center",
  fontFeatureSettings: "'clig' off, 'liga' off",
  fontFamily: "Open Sans",
  fontSize: "16px", // 16px
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "1.5", // 150%
  letterSpacing: "0.15rem", // 0.15px
  textTransform: "uppercase",
}));

const CardGiftLink1 = styled(CardGiftLink)(({ theme }) => ({
  // Styles for link1
  // For example:
  color: theme.link1Color,

  "&:hover": {
    textDecoration: "none", // Remova o sublinhado ao passar o mouse
    fontWeight: 700, // Adicione o negrito ao passar o mouse
  },
}));

const CardGiftLink2 = styled(CardGiftLink)(({ theme }) => ({
  // Styles for link2
  // For example:
  color: theme.link2Color,
  "&:hover": {
    textDecoration: "none", // Remova o sublinhado ao passar o mouse
    fontWeight: 700, // Adicione o negrito ao passar o mouse
  },
}));

const CopyFeedback = styled("div")(({ theme }) => ({
  color: "var(--Green-Olive, #52736B)",
  textAlign: "center",
  fontFamily: "Open Sans",
  fontSize: "16px",
  fontStyle: " normal",
  fontWeight: 600,
  lineHeight: "150%" /* 24px */,
  letterSpacing: " 0.15px",
  textTransform: "uppercase",
  marginTop: "-12px",

  [createMediaQuery("sm")]: {},
  [createMediaQuery("md")]: {},
}));

const ContainerInfo = styled("div")(({ theme }) => ({
  display: "flex",
  width: "25.75rem", // 412px
  padding: "0.25rem 0.5rem", // 4px 8px
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "1rem", // 16px
  alignSelf: "stretch",
  [createMediaQuery("lg")]: {},
  [createMediaQuery("xl")]: {},
  [createMediaQuery("sm")]: { width: "100%" },
  [createMediaQuery("md")]: { width: "100%" },
}));

const CardGiftTitle = styled("h6")(({ theme }) => ({
  color: "var(--terracota, #9C4522)",
  textAlign: "center",
  fontFamily: "Cinzel",
  fontSize: "28px", // 28px
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
  [createMediaQuery("sm")]: { fontSize: "22px" },
  [createMediaQuery("md")]: { fontSize: "22px" },
}));

const CardGiftDescription = styled("p")(({ theme }) => ({
  color: "var(--black, #545454)",
  fontFamily: "Open Sans",
  fontSize: "14px", // 14px
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
  textTransform: "uppercase",
  [createMediaQuery("sm")]: { fontSize: "14px" },
  [createMediaQuery("md")]: { fontSize: "14px" },
}));

const CardGiftMoedas = styled("p")(({ theme }) => ({
  color: "var(--Black, #545454)",
  fontFamily: "Open Sans",
  fontSize: "14px", // 14px
  fontStyle: "normal",
  fontWeight: 300,
  lineHeight: "normal",
  textTransform: "uppercase",
}));

export {
  CardGiftContainer,
  CardGiftImage,
  ContainerTitleDescription,
  CardGiftTitle,
  CardGiftMoedas,
  CardGiftDescription,
  CardGiftLink,
  CardGiftLink1,
  CardGiftLink2,
  ContainerLink,
  ContainerInfo,
  CopyFeedback,
};
