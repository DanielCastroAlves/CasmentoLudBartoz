import React from "react";
import { styled } from "@mui/material";

const breakpoints = {
  xs: "0px",
  sm: "37.5rem", // 600px / 16px
  md: "60rem",   // 960px / 16px
  lg: "80rem",   // 1280px / 16px
  xl: "120rem",  // 1920px / 16px
};

const createMediaQuery = (size) => `@media (max-width: ${breakpoints[size]})`;

export const SectionText = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "2rem",     // 32px / 16px
  alignSelf: "stretch",
  width: "100%",
  margin: "3.75rem", // 60px / 16px

  [createMediaQuery("sm")]: {
    width: "21.375rem",         // 342px / 16px
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",               // 16px / 16px
    margin: "1.875rem 0.9375rem 1.875rem 0.9375rem", // 30px / 16px, 15px / 16px
  },
  [createMediaQuery("md")]: {
    width: "21.375rem",         // 342px / 16px
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",               // 16px / 16px
    margin: "1.875rem 0.9375rem 1.875rem 0.9375rem", // 30px / 16px, 15px / 16px
  },
}));

export const CustomParagraph = styled("div")(({ theme }) => ({
  width: "68rem",   // 1088px / 16px
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flexStart",
  color: "var(--Black, #545454)",
  fontFamily: "Open Sans",
  fontSize: "1.125rem", // 18px / 16px
  fontStyle: "normal",
  fontWeight: 300,
  lineHeight: "normal",

  [createMediaQuery("sm")]: {
    width: "21.375rem", // 342px / 16px

    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",               // 16px / 16px
    fontSize: "0.75rem",        // 12px / 16px
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  },
  [createMediaQuery("md")]: {
    width: "21.375rem", // 342px / 16px

    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",               // 16px / 16px
    fontSize: "0.75rem",        // 12px / 16px
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  },
}));

export const CustomImage = ({ src, alt }) => (
  <div>
    <img
      src={src}
      alt={alt}
      style={{
        width: "100%",
        marginTop: "3.75rem", // 60px / 16px
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
        marginTop: "3.75rem", // 60px / 16px
      }}
    />
  </div>
);

export const CustomVideo = styled("div")(({ theme }) => ({
  width: "68.5625rem", // 1097px / 16px
  height: "38.375rem",  // 614px / 16px
  "& iframe": {
    width: "100%",
    height: "100%",
  },
  [createMediaQuery("sm")]: {
    width: "21.875rem",  // 350px / 16px
    height: "13.6875rem", // 219px / 16px
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",           // 16px / 16px

    "& iframe": {
      width: "100%",
      height: "100%",
    },
  },
  [createMediaQuery("md")]: {
    width: "21.875rem",  // 350px / 16px
    height: "13.6875rem", // 219px / 16px
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",           // 16px / 16px
    "& iframe": {
      width: "100%",
      height: "100%",
    },
  },
}));

export const CustomList = ({ items }) => (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);
