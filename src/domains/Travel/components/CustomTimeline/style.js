import { styled } from "@mui/material";

const breakpoints = {
  xs: "0px",
  sm: "600px",
  md: "960px",
  lg: "1280px",
  xl: "1920px",
};

const createMediaQuery = (size) => `@media (max-width: ${breakpoints[size]})`;

export const ContainerTimeline = styled("div")(() => ({
  display: "flex",
  width: "540px",
  height: "772px",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "12px",
  marginTop:"-70px",

  [createMediaQuery("sm")]: {
    alignItems: "center",
    width: "100%",
  },
  [createMediaQuery("md")]: {
    alignItems: "center",
    width: "100%",
  },
}));

export const PlanTravel = styled("div")(() => ({
  display: "flex",
  width: "540px",
  height: "63px",
  alignItems: "center",
  gap: "32px",
  flexShrink: 0,
  border: "1px solid var(--Terracota, #9C4522)",
  [createMediaQuery("sm")]: {
    width: "358px",
    height: "",
  },
  [createMediaQuery("md")]: {
    width: "358px",
    height: "",
  },
}));
export const ContainerData = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  width: "125px",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",

  [createMediaQuery("sm")]: {
    width: "",
    height: "",
  },
  [createMediaQuery("md")]: {
    width: "",
    height: "",
  },
}));
export const TitleDay = styled("h1")(() => ({
  alignSelf: "stretch",
  color: "var(--Terracota, #9C4522)",
  textAlign: "center",
  fontFamily: "Open Sans",
  fontSize: "22px",
  fontStyle: "normal",
  fontWeight: 300,
  lineHeight: "normal",
  textTransform: "uppercase",
}));

export const NumberDay = styled("h2")(() => ({
  alignSelf: "stretch",
  color: "var(--Green-Olive, #52736B)",
  fontFamily: "Cinzel",
  fontSize: "20px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
}));

export const ContainerDescription = styled("div")(() => ({
  display: "flex",
  padding: "4px 8px",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  flex: "1 0 0",

  [createMediaQuery("sm")]: {
    alignItems: "center",
  },
  [createMediaQuery("md")]: {
    alignItems: "center",
  },
}));

export const TravelDescription = styled("h6")(() => ({
  alignSelf: "stretch",
  color: "var(--Black, #545454)",
  fontFamily: "Open Sans",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
}));
