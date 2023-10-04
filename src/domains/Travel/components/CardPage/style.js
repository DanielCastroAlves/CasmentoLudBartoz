import { styled } from "@mui/material";

const breakpoints = {
  xs: "0px",
  sm: "600px",
  md: "960px",
  lg: "1280px",
  xl: "1920px",
  custom: "1400px",
};

const createMediaQuery = (size) => `@media (max-width: ${breakpoints[size]})`;

const PageCityContainer = styled("div")(({ theme, isSelected }) => ({
  [createMediaQuery("lg")]: {
    display: "flex",
    width: "444px",
    height: "552px",
    padding: "16px",
    flexDirection: "column",
    alignItems: "flexStart",
    gap: "16px",
    flexShrink: 0,

    background: "#FFF",
    marginBottom: 10,
  },
  [createMediaQuery("xl")]: {
    display: "flex",
    width: "444px",
    height: "552px",
    padding: "16px",
    flexDirection: "column",
    alignItems: "flexStart",
    gap: "16px",
    flexShrink: 0,

    background: "#FFF",
    marginBottom: 10,
  },

  [createMediaQuery("sm")]: {
    display: "flex",
    width: "358px",
    height: "458px",
    padding: "16px",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
    flexShrink: 0,

    background: "#FFF",
    marginBottom: 10,
  },

  [createMediaQuery("md")]: {
    display: "flex",
    width: "358px",
    height: "458px",
    padding: "16px",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
    flexShrink: 0,

    background: "#FFF",
    marginBottom: 10,
  },

  border: isSelected
    ? "1px solid var(--Green-Olive, #52736B)"
    : "1px solid var(--terracota, #9C4522)",

  "& img": {
    border: isSelected ? "1px solid var(--Green-Olive, #52736B)" : "none",
  },
  "& h6": {
    color: isSelected ? "var(--Green-Olive, #52736B)" : "none",
  },
  "&:hover": {
    border: isSelected
      ? "1px solid var(--Green-Olive, #52736B)"
      : "1px solid var(--terracota, #9C4522)",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",

    "& img": {},
    "& h6": {
      color: "var(--terracota, #9C4522)",
      textAlign: "center",
      fontFamily: "Cinzel",
      fontSize: 28,
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "normal",
    },
  },
}));

const PageCityImage = styled("img")({
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
    width: "326px",
    height: "326px",
  },
  [createMediaQuery("md")]: {
    width: "326px",
    height: "326px",
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
  fontSize: 28,
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
}));

const PageCityDescription = styled("p")(({ theme }) => ({
  color: "var(--black, #545454)",
  fontFamily: "Open Sans",
  fontSize: 14,
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
  textTransform: "uppercase",
}));

// estilos carousel

export const ContainerCarouselTravel = styled("div")(({ theme }) => ({
  height: 530,
  margin: "50px auto",
  [createMediaQuery("lg")]: {
    width: "50%",
  },

  [createMediaQuery("xl")]: {
    width: "100%",
    display: "flex",
    margin: "0px 50px 0px 50px",
    justifyContent: "center",
    height: 630,
    "& .tees": {
      display: "flex",
      justifyContent: "center",
      width: "70%",
      margin: 0,
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
  [createMediaQuery("lg")]: {
    width: "70%",
    position: "relative",
    margin: "auto 500px",
  },
  [createMediaQuery("xl")]: {
    width: "70%",
    position: "relative",
    margin: "auto 500px",
  },
  [createMediaQuery("sm")]: {
    width: "100%",
    margin: 0,
    display: "flex",
    justifyContent: "center",
    flexDirection:"column",
    marginLeft: 8,

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
    margin: 0,
    display: "flex",
    justifyContent: "center",
    flexDirection:"column",
    marginLeft: 8,
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

export const CustomButtonGroupTravel = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "relative",

  top: "-104%",
  transform: "translateX(auto)",
  zIndex: 1,
  [createMediaQuery("lg")]: {
    width: "100%",
    display: "none",
  },
  [createMediaQuery("xl")]: {
    width: "100%",
    display: "none",
  },
  [createMediaQuery("sm")]: {
    top: "-50%",
    width: "90%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    transform: "translateX(auto)",
    zIndex: 1,
  },
  [createMediaQuery("md")]: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    transform: "translateX(auto)",
    zIndex: 1,
  },
}));

export const CustomArrowButtonBaseTravel = {
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

export const CustomArrowButtonRightTravel = styled("div")(({ theme }) => ({
  ...CustomArrowButtonBaseTravel,

  background:
    "var(--backround-linear-gradient-l, linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, #FFF 52.60%))",
  [createMediaQuery("sm")]: {
    margin: -10,
    width: "50px",
    height: "50px",
    borderRadius: "22px",
    background:
      "var(--Background-Arrow-Radial, radial-gradient(50% 50% at 50% 50%, #FFF 47.4%, rgba(255, 255, 255, 0.00) 100%))", // Adicione o background aqui
  },
}));

export const CustomArrowButtonLeftTravel = styled("div")(({ theme }) => ({
  ...CustomArrowButtonBaseTravel,
  [createMediaQuery("sm")]: {
    margin: -10,
    width: "50px",
    height: "50px",
    borderRadius: "22px",
    background:
      "var(--Background-Arrow-Radial, radial-gradient(50% 50% at 50% 50%, #FFF 47.4%, rgba(255, 255, 255, 0.00) 100%))", // Adicione o background aqui
  },

  background:
    "var(--backround-linear-gradient-l, linear-gradient(270deg, rgba(255, 255, 255, 0.00) 0%, #FFF 52.60%))",
}));

export const CustomArrowButtonTravel = styled("img")(({ theme }) => ({}));
export {
  PageCityContainer,
  PageCityImage,
  ContainerTitleDescription,
  PageCityTitle,
  PageCityDescription,
};
