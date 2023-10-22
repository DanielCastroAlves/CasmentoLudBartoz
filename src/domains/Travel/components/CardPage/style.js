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

const PageCityContainer = styled("div")(({ theme, isSelected }) => ({
  [createMediaQuery("lg")]: {
    display: "flex",
    width: "27.75rem", // 444px converted to rem
    height: "34.5rem", // 552px converted to rem
    padding: "1rem", // 16px converted to rem
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "1rem", // 16px converted to rem
    flexShrink: 0,
    background: "#FFF",
    marginBottom: "0.625rem", // 10px converted to rem
  },
  [createMediaQuery("xl")]: {
    display: "flex",
    width: "27.75rem", // 444px converted to rem
    height: "34.5rem", // 552px converted to rem
    padding: "1rem", // 16px converted to rem
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "1rem", // 16px converted to rem
    flexShrink: 0,
    background: "#FFF",
    marginBottom: "0.625rem", // 10px converted to rem
  },
  [createMediaQuery("sm")]: {
    display: "flex",
    width: "22.375rem", // 358px converted to rem
    height: "28.625rem", // 458px converted to rem
    padding: "1rem", // 16px converted to rem
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem", // 16px converted to rem
    flexShrink: 0,
    background: "#FFF",
    marginBottom: "0.625rem", // 10px converted to rem
  },
  [createMediaQuery("md")]: {
    display: "flex",
    width: "22.375rem", // 358px converted to rem
    height: "28.625rem", // 458px converted to rem
    padding: "1rem", // 16px converted to rem
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem", // 16px converted to rem
    flexShrink: 0,
    background: "#FFF",
    marginBottom: "0.625rem", // 10px converted to rem
  },
  border: isSelected
    ? "0.0625rem solid var(--Green-Olive, #52736B)" // 1px converted to rem
    : "0.0625rem solid var(--terracota, #9C4522)", // 1px converted to rem
  "& img": {
    border: isSelected
      ? "0.0625rem solid var(--Green-Olive, #52736B)" // 1px converted to rem
      : "none",
  },
  "& h6": {
    color: isSelected ? "var(--Green-Olive, #52736B)" : "none",
  },
  "&:hover": {
    border: isSelected
      ? "0.0625rem solid var(--Green-Olive, #52736B)" // 1px converted to rem
      : "0.0625rem solid var(--terracota, #9C4522)", // 1px converted to rem
    boxShadow: "0 0.25rem 0.25rem 0 rgba(0, 0, 0, 0.25)", // 4px converted to rem
    "& img": {},
    "& h6": {
      color: "var(--terracota, #9C4522)",
      textAlign: "center",
      fontFamily: "Cinzel",
      fontSize: "1.75rem", // 28px converted to rem
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

export const ContainerCarouselTravel = styled("div")(({ theme }) => ({
  height: "33.125rem", // 530px converted to rem
  [createMediaQuery("lg")]: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    "& .tees": {
      margin: "auto 13rem", // 208px converted to rem
      display: "flex",
      justifyContent: "center !important",
      alignItems: "center",
      width: "80%",
    },
  },
  [createMediaQuery("xl")]: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    "& .tees": {
      margin: "auto 13rem", // 208px converted to rem
      display: "flex",
      justifyContent: "center !important",
      alignItems: "center",
      width: "80%",
    },
  },
  [createMediaQuery("sm")]: {
    "& .tees": {},
  },
  [createMediaQuery("md")]: {
    width: "100% !important",
    display: "flex !important",
    justifyContent: "center !important",
    "& .tees": {
      margin: "auto 13rem !important", // 208px converted to rem
      display: "flex !important",
      justifyContent: "center !important",
      alignItems: "center !important",
      width: "80%",
    },
  },
}));

export const CustomButtonGroupTravel = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "relative",
  top: "-6.5rem", // -104% converted to rem
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
    top: "-5rem", // -80% converted to rem
    left: "-3.125rem", // -50px converted to rem
    width: "90%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    transform: "translateX(auto)",
    zIndex: 1,
  },
  [createMediaQuery("md")]: {
    top: "-5rem", // -80% converted to rem
    left: "-3.125rem", // -50px converted to rem
    width: "90%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    transform: "translateX(auto)",
    zIndex: 1,
  },
}));

export const CustomArrowButtonBaseTravel = {
  display: "flex",
  width: "3.125rem", // 50px converted to rem
  height: "34.5rem", // 552px converted to rem
  padding: "0.5rem 0.6875rem", // 8px 11px converted to rem
  justifyContent: "center",
  alignItems: "center",
  gap: "0.625rem", // 10px converted to rem
  flexShrink: 0,
  position: "relative",
  top: "5.3125rem", // 85% converted to rem
};

export const CustomArrowButtonRightTravel = styled("div")(({ theme }) => ({
  ...CustomArrowButtonBaseTravel,
  background:
    "var(--backround-linear-gradient-l, linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, #FFF 52.60%))",
  [createMediaQuery("sm")]: {
    margin: "-0.625rem", // -10px converted to rem
    width: "3.125rem", // 50px converted to rem
    height: "3.125rem", // 50px converted to rem
    borderRadius: "1.375rem", // 22px converted to rem
    background:
      "var(--Background-Arrow-Radial, radial-gradient(50% 50% at 50% 50%, #FFF 47.4%, rgba(255, 255, 255, 0.00) 100%))",
  },
}));

export const CustomArrowButtonLeftTravel = styled("div")(({ theme }) => ({
  ...CustomArrowButtonBaseTravel,
  [createMediaQuery("sm")]: {
    margin: "-0.625rem", // -10px converted to rem
    width: "3.125rem", // 50px converted to rem
    height: "3.125rem", // 50px converted to rem
    borderRadius: "1.375rem", // 22px converted to rem
    background:
      "var(--Background-Arrow-Radial, radial-gradient(50% 50% at 50% 50%, #FFF 47.4%, rgba(255, 255, 255, 0.00) 100%))",
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
