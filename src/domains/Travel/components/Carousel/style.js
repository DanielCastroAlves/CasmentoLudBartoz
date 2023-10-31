import { styled } from "@mui/material";

const breakpoints = {
  xs: "0rem",
  sm: "37.5rem", // 600px converted to rem
  md: "60rem", // 960px converted to rem
  lg: "80rem", // 1280px converted to rem
  xl: "120rem", // 1920px converted to rem
  custom: "87.5rem", // 1400px converted to rem
};

const createMediaQuery = (size) => `@media (max-width: ${breakpoints[size]})`;

export const ContainerCarouselTravel = styled("div")(({ theme }) => ({
  height: 530,
  //background: "blue",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "& .react-multi-carousel-list": {},
  [createMediaQuery("xl")]: {
    "& .react-multi-carousel-list": {
      width: "80%",
      margin: "auto",
      //background: "red",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },

  "& .react-multiple-carousel__arrow": {
    backgroundColor: "rgba(255, 255, 255, 0.45);",
    blur: "12px",
    color: "blue",
    padding: "0px",
    height: "600px",
  },
  "& .react-multiple-carousel__arrow::before": {
    color: theme.palette.primary.main,
    fontSize: "18px",
    fontWeight: "600",
  },
  "& .react-multiple-carousel__arrow--left": {
    background:
      "linear-gradient(270deg, rgba(255, 255, 255, 0.00) 0%, #FFF 52.6%)",
    left: 0,
  },
  "& .react-multiple-carousel__arrow--right": {
    background:
      "linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, #FFF 52.6%)",
    right: 0,
  },

  [createMediaQuery("sm")]: {
    width: "100%",
    "& .react-multiple-carousel__arrow": {
      backgroundColor: "rgba(255, 255, 255, 0.45);",
      blur: "12px",
      color: "blue",
      padding: "0px",
      height: "50px",
    },
    "& .react-multiple-carousel__arrow::before": {
      color: theme.palette.primary.main,
      fontSize: "18px",
      fontWeight: "600",
    },
    "& .react-multiple-carousel__arrow--left": {
      left: 0,
      borderRadius: "22px",
      background:
        "var(--Background-Arrow-Radial, radial-gradient(50% 50% at 50% 50%, #FFF 47.4%, rgba(255, 255, 255, 0.00) 100%))", // Adicione o background aqui
    },
    "& .react-multiple-carousel__arrow--right": {
      background:
        "linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, #FFF 52.6%)",
      right: 0,
    },
  },
  [createMediaQuery("md")]: {
    width: "100%",
    "& .react-multiple-carousel__arrow": {
      backgroundColor: "rgba(255, 255, 255, 0.45);",
      blur: "12px",
      color: "blue",
      padding: "0px",
      height: "50px",
    },
    "& .react-multiple-carousel__arrow::before": {
      color: theme.palette.primary.main,
      fontSize: "18px",
      fontWeight: "600",
    },
    "& .react-multiple-carousel__arrow--left": {
      left: 0,
      margin: -10,
      width: "50px",
      height: "50px",
      borderRadius: "22px",
      background:
        "var(--Background-Arrow-Radial, radial-gradient(50% 50% at 50% 50%, #FFF 47.4%, rgba(255, 255, 255, 0.00) 100%))", // Adicione o background aqui
    },
    "& .react-multiple-carousel__arrow--right": {
      right: 0,
      margin: -10,
      width: "50px",
      height: "50px",
      borderRadius: "22px",
      background:
        "var(--Background-Arrow-Radial, radial-gradient(50% 50% at 50% 50%, #FFF 47.4%, rgba(255, 255, 255, 0.00) 100%))", // Adicione o background aqui
    },
  },
}));
