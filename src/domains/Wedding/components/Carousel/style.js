import { styled } from "@mui/material";

const breakpoints = {
  xs: "0px",
  sm: "37.5rem", // 600px in rem
  md: "60rem",    // 960px in rem
  lg: "80rem",    // 1280px in rem
  xl: "120rem",   // 1920px in rem
};

const createMediaQuery = (size) => `@media (max-width: ${breakpoints[size]})`;

const ContainerCarousel = styled("div")(({ theme }) => ({
  height: "33.125rem", // 530px in rem
  margin: "3.125rem auto", // 50px in rem

  "& .react-multiple-carousel__arrow": {
    backgroundColor: "rgba(255, 255, 255, 0.45);",
    blur: "0.75rem",    // 12px in rem
    color: "blue",
    padding: "0px",
    height: "37.5rem",  // 600px in rem
  },
  "& .react-multiple-carousel__arrow::before": {
    color: theme.palette.primary.main,
    fontSize: "1.125rem",  // 18px in rem
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
    width: "85%",  // 85% of the viewport width in rem
  },
  [createMediaQuery("xl")]: {
    width: "85%",  // 85% of the viewport width in rem
  },
  [createMediaQuery("sm")]: {
    width: "100%",
    "& .react-multiple-carousel__arrow": {
      backgroundColor: "rgba(255, 255, 255, 0.45);",
      blur: "0.75rem",    // 12px in rem
      color: "blue",
      padding: "0px",
      height: "18.75rem",  // 300px in rem
    },
    "& .react-multiple-carousel__arrow::before": {
      color: theme.palette.primary.main,
      fontSize: "1.125rem",  // 18px in rem
      fontWeight: "600",
    },
    "& .react-multiple-carousel__arrow--left": {
      left: 0,
      borderRadius: "1.375rem",  // 22px in rem
      background:
        "var(--Background-Arrow-Radial, radial-gradient(50% 50% at 50% 50%, #FFF 47.4%, rgba(255, 255, 255, 0.00) 100%))",
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
      blur: "0.75rem",    // 12px in rem
      color: "blue",
      padding: "0px",
      height: "18.75rem",  // 300px in rem
    },
    "& .react-multiple-carousel__arrow::before": {
      color: theme.palette.primary.main,
      fontSize: "1.125rem",  // 18px in rem
      fontWeight: "600",
    },
    "& .react-multiple-carousel__arrow--left": {
      left: 0,
      margin: "-1.25rem",   // -10px in rem
      width: "3.125rem",    // 50px in rem
      height: "3.125rem",   // 50px in rem
      borderRadius: "1.375rem",  // 22px in rem
      background:
        "var(--Background-Arrow-Radial, radial-gradient(50% 50% at 50% 50%, #FFF 47.4%, rgba(255, 255, 255, 0.00) 100%))",
    },
    "& .react-multiple-carousel__arrow--right": {
      right: 0,
      margin: "-1.25rem",   // -10px in rem
      width: "3.125rem",    // 50px in rem
      height: "3.125rem",   // 50px in rem
      borderRadius: "1.375rem",  // 22px in rem
      background:
        "var(--Background-Arrow-Radial, radial-gradient(50% 50% at 50% 50%, #FFF 47.4%, rgba(255, 255, 255, 0.00) 100%))",
    },
  },
}));

export { ContainerCarousel };
