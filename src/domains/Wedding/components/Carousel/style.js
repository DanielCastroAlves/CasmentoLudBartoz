import { styled } from "@mui/material";
const ContainerCarousel = styled("div")(({ theme }) => ({
  width: "90%",
  height: 530,
  margin: "50px auto",
}));

const CustomButtonGroup = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "relative",
  width: "100%",
  top: "-95%",
  transform: "translateX(auto)",
  zIndex: 1,
}));
const CustomArrowButtonRight = styled("div")(({ theme }) => ({
  display: "flex",
  width: "50px",
  height: "530px",
  padding: "8px 11px",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  flexShrink: 0,
  background:
    "var(--backround-linear-gradient-l, linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, #FFF 52.60%))",
}));

const CustomArrowButtonLeft = styled("div")(({ theme }) => ({
  display: "flex",
  width: "50px",
  height: "530px",
  padding: "8px 11px",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  flexShrink: 0,
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
