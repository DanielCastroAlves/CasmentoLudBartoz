import { Button } from "@mui/base";
import { styled } from "@mui/material";
import { TimelineConnector, TimelineDot, TimelineContent } from "@mui/lab";

const ContainerTimeline = styled("div")(() => ({
  width: 100,
  height: 1000,
  transform: "rotate(270deg)",
  /* background: "red", */
  margin: "0 auto",
}));

const ButtonTimeLine = styled(Button)(({ theme }) => ({
  padding: 0,
  margin: 0,
  border: "none",
  cursor: "pointer",
  /*   background: "blue", */
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
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  },
}));

const StyledTimelineConnector = styled(TimelineConnector)(({ theme }) => ({
  height: "70px",
  flexShrink: 0,
  strokeWidth: "2px",
  /*   background: "red", */
  stroke: "var(--terracota, #52736B)",
  zIndex: -9999,
}));

const StyledTimelineDot = styled(TimelineDot)(({ theme }) => ({
  width: "32px",
  height: "32px",
  flexShrink: 0,
  background: "var(--terracota, #52736B)",
  transition: "background 0.3s",
  margin: 0,

  "&:hover": {
    backgroundColor: "#fff",
    boxShadow: "0px 0px 0px 5px #52736B",
    width: "32px",
    height: "32px",
    margin: 0,
    padding: 0,
  },
}));

const StyledTimelineContent = styled(TimelineContent)(({ theme }) => ({
  width: "32px",
  height: "32px",
  background: "green",
  margin: 0,
  padding: 0,
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
}));
const ContainerImagemLud = styled("img")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "134px",
  height: "167px",
  transform: "rotate(-270deg)",
  /*  background: "orange", */
  margin: "0 auto",
  marginTop: -50,
}));

const ContainerLabel = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "32px",
  height: "32px",
  transform: "rotate(0deg)",
  /*  background: "brown", */
  marginTop: 70,
}));

const CenteredImagem = styled("div")(({ theme }) => ({
  transform: "rotate(-270deg)",
  margin: "0 auto",
  marginLeft: -30,
  width: 100,
  height: 100,
}));

const ContainerDotLabel = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "&:hover": {
    // Defina os estilos de hover desejados aqui
    // Por exemplo, você pode definir a cor de fundo para ambos os elementos
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
  StyledTimelineContent,
  ContainerImagemLud,
  ContainerImagemBartoz,
  ContainerLabel,
  CenteredImagem,
  ContainerDotLabel,
};
