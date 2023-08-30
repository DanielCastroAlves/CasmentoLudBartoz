import React from "react";
import { Typography } from "@mui/material";

export const CustomTitle = ({ children }) => (
  <Typography
    variant="h4"
    gutterBottom
    sx={{
      color: "var(--terracota, #9C4522)",
      textAlign: "center",
      fontFamily: "Cinzel",
      fontSize: "38px",
      fontWeight: 700,
    }}
  >
    {children}
  </Typography>
);

export const CustomSubtitle = ({ children }) => (
  <Typography
    variant="h6"
    gutterBottom
    sx={{
      color: "var(--terracota, #9C4522)",
      textAlign: "center",
      fontFamily: "Open Sans",
      fontSize: "20px",
      fontWeight: 300,
      textTransform: "uppercase",
    }}
  >
    {children}
  </Typography>
);

export const CustomParagraph = ({ children }) => (
  <Typography
    variant="body1"
    paragraph
    sx={{
      color: "var(--black, #545454)",
      display: "flex",
      alignItems: "flexStart", // Alinhar à esquerda
      fontFamily: "Open Sans",
      fontSize: "18px",
      fontWeight: 300,
    }}
  >
    {children}
  </Typography>
);

export const CustomImage = ({ src, alt }) => (
  <div>
    <img src={src} alt={alt} style={{ maxWidth: "100%" }} />
  </div>
);

export const CustomVideo = () => (
  <div>{/* Coloque aqui o seu componente de vídeo */}</div>
);

export const CustomList = ({ items }) => (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);
