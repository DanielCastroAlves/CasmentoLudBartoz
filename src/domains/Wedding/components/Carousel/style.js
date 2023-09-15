import { styled } from "@mui/material";

const breakpoints = {
  xs: "0px",
  sm: "600px",
  md: "960px",
  lg: "1280px",
  xl: "1920px",
};

const createMediaQuery = (size) => `@media (max-width: ${breakpoints[size]})`;

const ContainerCarousel = styled("div")(({ theme }) => ({
  width: "90%",
  height: 530,
  margin: "50px auto",
  [createMediaQuery("lg")]: {
    width: "90%",
  },
  [createMediaQuery("xl")]: {
    width: "90%",
  },
  [createMediaQuery("sm")]: {
    width: "90%",
  },
  [createMediaQuery("md")]: {
    width: "90%",
  },
}));

const CustomButtonGroup = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "relative",
  width: "100%",

  top: "-104%",
  transform: "translateX(auto)",
  zIndex: 1,
  [createMediaQuery("lg")]: {
    width: "100%",
  },
  [createMediaQuery("xl")]: {
    width: "100%",
  },
  [createMediaQuery("sm")]: {
    top: "-50%",
  },
  [createMediaQuery("xs")]: {
    top: "-50%",
  },
}));

const CustomArrowButtonBase = {
  display: "flex",
  width: "50px",
  height: "552px",
  padding: "8px 11px",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  flexShrink: 0,
  position: "relative",
  top: "85%",
};

const CustomArrowButtonRight = styled("div")(({ theme }) => ({
  ...CustomArrowButtonBase,

  background:
    "var(--backround-linear-gradient-l, linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, #FFF 52.60%))",
  [createMediaQuery("sm")]: {
    width: "50px",
    height: "50px",
    borderRadius: "22px",
    background:
      "var(--Background-Arrow-Radial, radial-gradient(50% 50% at 50% 50%, #FFF 47.4%, rgba(255, 255, 255, 0.00) 100%))", // Adicione o background aqui
  },
  [createMediaQuery("xs")]: {
    width: "50px",
    height: "50px",
    borderRadius: "22px",
    background:
      "var(--Background-Arrow-Radial, radial-gradient(50% 50% at 50% 50%, #FFF 47.4%, rgba(255, 255, 255, 0.00) 100%))", // Adicione o background aqui
  },
}));

const CustomArrowButtonLeft = styled("div")(({ theme }) => ({
  ...CustomArrowButtonBase,
  [createMediaQuery("sm")]: {
    top: "-90%",
    width: "50px",
    height: "50px",
    borderRadius: "22px",
    background:
      "var(--Background-Arrow-Radial, radial-gradient(50% 50% at 50% 50%, #FFF 47.4%, rgba(255, 255, 255, 0.00) 100%))", // Adicione o background aqui
  },
  [createMediaQuery("xs")]: {
    top: "-90%",
    width: "50px",
    height: "50px",
    borderRadius: "22px",
    background:
      "var(--Background-Arrow-Radial, radial-gradient(50% 50% at 50% 50%, #FFF 47.4%, rgba(255, 255, 255, 0.00) 100%))", // Adicione o background aqui
  },
  background:
    "var(--backround-linear-gradient-l, linear-gradient(270deg, rgba(255, 255, 255, 0.00) 0%, #FFF 52.60%))",
}));

const CustomArrowButton = styled("img")(({ theme }) => ({}));

export {
  CustomArrowButtonLeft,
  CustomArrowButtonRight,
  CustomButtonGroup,
  ContainerCarousel,
  CustomArrowButton,
};
