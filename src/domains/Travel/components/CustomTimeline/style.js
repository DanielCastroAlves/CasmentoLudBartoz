import { Button } from "@mui/base";
import TimelineConnector from "@mui/lab/TimelineConnector/TimelineConnector";
import { styled } from "@mui/material";

const ContainerTimeline = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "0",
  width: "0",
  transform: "rotate(90deg)",
  padding: "0",
  margin: "0",
}));

const ButtonTimeLine = styled(Button)(({ theme }) => ({
  backgroundColor: "#ffff",
  padding: 0,
  margin: 0,
  border: "none",
  cursor: "pointer",
}));

const RotatedLabel = styled(ButtonTimeLine)(({ theme }) => ({
  transform: "rotate(-90deg)",
  fontFamily: "Cinzel, Arial, sans-serif",
  fontSize: "16px",
  fontWeight: 700,
  fontStyle: "normal",
  lineHeight: "normal",
  color: "var(--terracota, #9C4522)",
}));

const StyledTimelineConnector = styled(TimelineConnector)(({ theme }) => ({
  height: "0px",
  flexShrink: 0,
  strokeWidth: "2px",
  stroke: "var(--terracota, #9C4522)",
}));

export {
  ContainerTimeline,
  ButtonTimeLine,
  RotatedLabel,
  StyledTimelineConnector,
};
