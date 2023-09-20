import { styled } from "@mui/material";

export const ContainerCardGift = styled("div")(() => ({
  display: "flex",
  width: "1096px",
  height: "308px",

  justifyContent: "center",
  alignItems: "center",
  gap: "300px",
  flexShrink: 0,
  border: "1px solid var(--Green-Olive, #52736B)",
  background: "var(--White, #FFF)",

  "& .container-text": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    "& .title": {
      display: "flex",
      height: "54px",
      padding: "4px 8px",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px",
      alignSelf: "stretch",

      "& h1": {
        lignItems: "stretch",
        color: "var(--Green-Olive, #52736B)",
        textAlign: "center",
        fontFamily: "Corinthia",
        fontSize: "38px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "normal",
      },
    },
    "& .describe": {
      width: "500px",
      display: "flex",
      height: "84px",
      padding: "4px 8px",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px",
      alignSelf: "stretch",

      "& p": {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        flex: "1 0 0",
        alignSelf: "stretch",
        fontSize: "14px",
        color: "var(--Black, #545454)",
        textAlign: "center",
        fontFamily: "Open Sans",
        fontWeight: 400,
        lineHeight: "normal",
      },
    },
    "& .grupo": {
      "& p": {
        fontSize: "14px",
        color: "#52736B;",
        textAlign: "center",
        fontFamily: "Open Sans",
        fontWeight: 600,
        lineHeight: "normal",
        textTransform: "uppercase",
      },
    },
  },
  "& .container-qrcode": {
    /*   width: "1096px",
    height: "308px", */
  },
}));
