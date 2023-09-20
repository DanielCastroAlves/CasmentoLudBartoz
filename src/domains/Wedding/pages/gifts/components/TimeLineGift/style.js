import { Button } from "@mui/base";
import { styled } from "@mui/material";
import { TimelineConnector, TimelineDot } from "@mui/lab";

const breakpoints = {
  xs: "0px",
  sm: "600px",
  md: "960px",
  lg: "1280px",
  xl: "1920px",
};

const createMediaQuery = (size) => `@media (max-width: ${breakpoints[size]})`;

const ContainerTimeline = styled("div")(() => ({
  position: "relative",
  top: -350,
  width: 100,
  height: "100%",
  margin: "0 auto",
  transform: "rotate(270deg)",

  [createMediaQuery("sm")]: {
    position: "relative",
    alignItems: "center",
    top: 30,
    left: -80,
    height: "100%",
    margin: "0 auto",
    transform: "rotate(0deg)",
  },
  [createMediaQuery("md")]: {
    position: "relative",
    alignItems: "center",
    top: 30,
    left: -80,
    height: "100%",
    margin: "0 auto",
    transform: "rotate(0deg)",
  },
}));

const ButtonTimeLine = styled(Button)(({ theme }) => ({
  padding: 0,
  margin: 0,
  border: "none",
  cursor: "pointer",
}));

const RotatedLabel = styled(ButtonTimeLine)(({ theme }) => ({
  color: "var(--Black, #545454)",
  fontFamily: "Open Sans",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
  textTransform: "uppercase",
  transform: "rotate(-270deg)",
  background: "#ffff",
  "&:hover": {
    color: "var(--Green-Olive, #52736B)",
    fontFamily: "Open Sans",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
    textTransform: "uppercase",
    textShadow: "0px 4px 4px 40px rgba(0, 0, 0, 0.25)",
  },

  [createMediaQuery("sm")]: {
    transform: "rotate(0deg)",
  },
  [createMediaQuery("md")]: {
    transform: "rotate(0deg)",
  },
}));

const StyledTimelineConnector = styled(TimelineConnector)(({ theme }) => ({
  height: "70px",
  flexShrink: 0,
  strokeWidth: "2px",
  stroke: "var(--terracota, #52736B)",
  zIndex: -9999,

  [createMediaQuery("sm")]: {
    height: "30px",
  },
  [createMediaQuery("md")]: {
    height: "30px",
  },
}));

const StyledTimelineDot = styled(TimelineDot)(({ theme }) => ({
  width: "26px",
  height: "26px",
  flexShrink: 0,
  background: "var(--terracota, #52736B)",
  transition: "background 0.3s",
  margin: 0,
  padding: 0,

  "&:hover": {
    background: "#fff",
    boxShadow: "0px 0px 0px 4px #52736B",
    margin: 0,
    padding: 0,
  },
}));

const DotSelected = styled("img")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "40px",
  height: "40px",
  transform: "rotate(-270deg)",
  margin: "0 auto",
  marginBottom: -50,
  zIndex: 9999,
  [createMediaQuery("sm")]: {
    transform: "rotate(0deg)",
    width: "50px",
    height: "50px",

    marginBottom: 0,
    marginTop: 30,
    marginLeft: 25,
  },
  [createMediaQuery("md")]: {
    transform: "rotate(0deg)",
    width: "50px",
    height: "50px",

    marginBottom: 0,
    marginTop: 30,
    marginLeft: 25,
  },
}));

const ContainerImagemBartoz = styled("img")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "134px",
  height: "167px",
  transform: "rotate(-270deg)",
  margin: "0 auto",
  marginBottom: -50,
  zIndex: 9999,

  [createMediaQuery("sm")]: {
    transform: "rotate(0deg)",
    width: "95px",
    height: "122.46",
    marginLeft: 25,
  },

  [createMediaQuery("md")]: {
    transform: "rotate(0deg)",
    width: "95px",
    height: "122.46",
    marginLeft: 25,
  },
}));

const ContainerImagemLud = styled("img")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "134px",
  height: "167px",
  transform: "rotate(-270deg)",
  margin: "0 auto",
  marginTop: -50,

  [createMediaQuery("sm")]: {
    transform: "rotate(0deg)",
    width: "95px",
    height: "122.46",
    marginLeft: 25,
  },
  [createMediaQuery("md")]: {
    transform: "rotate(0deg)",
    width: "95px",
    height: "122.46",
    marginLeft: 25,
  },
}));

const ContainerLabel = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "32px",
  transform: "rotate(0deg)",
  marginTop: 0,
  marginLeft: 30,

  [createMediaQuery("sm")]: {
    position: "absolute",
    right: 60,
  },
  [createMediaQuery("md")]: {
    position: "absolute",
    right: 60,
  },
}));

const CenteredImagem = styled("div")(({ theme }) => ({
  transform: "rotate(-270deg)",
  margin: "0 auto",
  marginLeft: -30,
  width: 100,
  height: 100,
  [createMediaQuery("sm")]: {
    transform: "rotate(0deg)",
    height: 20,
    margin: "0 auto",
    marginLeft: -13,
    "& img": {
      width: 70,
      height: 70,
    },
  },
  [createMediaQuery("md")]: {
    transform: "rotate(0deg)",
    height: 20,
    margin: "0 auto",
    marginLeft: -13,
    "& img": {
      width: 70,
      height: 70,
    },
  },
}));

const ContainerDotLabel = styled("div")(({ theme }) => ({
  "&:hover": {
    backgroundColor: "#fff",
    boxShadow: "0px 0px 0px 5px #52736B",
  },
}));

export {
  ContainerTimeline,
  ButtonTimeLine,
  RotatedLabel,
  StyledTimelineConnector,
  StyledTimelineDot,
  ContainerImagemLud,
  ContainerImagemBartoz,
  ContainerLabel,
  CenteredImagem,
  ContainerDotLabel,
  DotSelected,
};
