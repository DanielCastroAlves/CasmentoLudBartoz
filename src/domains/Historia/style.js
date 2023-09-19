import React from "react";
import { styled } from "@mui/material";

const breakpoints = {
  xs: "0px",
  sm: "600px",
  md: "960px",
  lg: "1280px",
  xl: "1920px",
};

const createMediaQuery = (size) => `@media (max-width: ${breakpoints[size]})`;

export const SectionText = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "32px",
  alignSelf: "stretch",
  width: "100%",
  margin: 60,

  [createMediaQuery("sm")]: {
    width: "390px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
  },
  [createMediaQuery("md")]: {
    width: "390px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
  },
}));

export const CustomParagraph = styled("div")(({ theme }) => ({
  width: 1088,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flexStart",
  color: "var(--Black, #545454)",
  fontFamily: "Open Sans",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: 300,
  lineHeight: "normal",
}));

export const CustomImage = ({ src, alt }) => (
  <div>
    <img
      src={src}
      alt={alt}
      style={{
        width: "100%",
        
        marginTop: 60,
      }}
    />
  </div>
);

export const CustomMB = ({ src, alt }) => (
  <div>
    <img
      src={src}
      alt={alt}
      style={{
        width: "100%",
       
        marginTop: 60,
      }}
    />
  </div>
);

export const CustomVideo = styled("div")(({ theme }) => ({
  width: 1097,
  height: 614,
  "& iframe": {
    width: "100%",
    height: "100%",
  },
}));

export const CustomList = ({ items }) => (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);
