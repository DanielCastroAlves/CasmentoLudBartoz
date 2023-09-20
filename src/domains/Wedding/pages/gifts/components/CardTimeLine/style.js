import { styled } from "@mui/material";

const breakpoints = {
  xs: "0px",
  sm: "600px",
  md: "960px",
  lg: "1280px",
  xl: "1920px",
};

const createMediaQuery = (size) => `@media (max-width: ${breakpoints[size]})`;

export const ContainerCardGift = styled("div")(() => ({
  display: "flex",
  width: "1096px",
  height: "308px",
  position: "relative",
  top: "-350px",
  justifyContent: "center",
  alignItems: "center",
  gap: "300px",
  flexShrink: 0,
  border: "1px solid var(--Green-Olive, #52736B)",
  background: "var(--White, #FFF)",

  [createMediaQuery("sm")]: {
    display: "flex",
    width: "183px",
    height: "351px",
    position: "relative",
    top: "-175px",
    left: "95px",
    border: "1px solid var(--Green-Olive, #52736B)",
    background: "var(--White, #FFF)",
    "& .container-qrcode": {
      display: "none",
    },
  },
  [createMediaQuery("md")]: {
    display: "flex",
    width: "183px",
    height: "351px",
    position: "relative",
    top: "-175px",
    left: "95px",
    border: "1px solid var(--Green-Olive, #52736B)",
    background: "var(--White, #FFF)",
    "& .container-qrcode": {
      display: "none",
    },
  },

  "& .container-text": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    [createMediaQuery("sm")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    [createMediaQuery("md")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },

    "& .title": {
      display: "flex",
      height: "54px",
      padding: "4px 8px",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px",
      alignSelf: "stretch",
      [createMediaQuery("sm")]: {
        display: "flex",
        padding: "4px 8px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        alignSelf: "stretch",
      },
      [createMediaQuery("md")]: {
        display: "flex",
        padding: "4px 8px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        alignSelf: "stretch",
      },

      "& h1": {
        lignItems: "stretch",
        color: "var(--Green-Olive, #52736B)",
        textAlign: "center",
        fontFamily: "Corinthia",
        fontSize: "38px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "normal",
        [createMediaQuery("sm")]: {
          fontSize: "24px",
        },
        [createMediaQuery("md")]: {
          fontSize: "24px",
        },
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
      [createMediaQuery("sm")]: {
        width: "185px",
        display: "flex",
        height: "84px",
        padding: "4px 8px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        alignSelf: "stretch",
      },
      [createMediaQuery("md")]: {
        width: "185px",
        display: "flex",
        height: "84px",
        padding: "4px 8px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        alignSelf: "stretch",
      },

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
        [createMediaQuery("sm")]: { fontSize: "12px" },
        [createMediaQuery("md")]: { fontSize: "12px" },
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
        [createMediaQuery("sm")]: {},
        [createMediaQuery("md")]: {},
      },
    },
  },
  "& .container-qrcode": {
    /*   width: "1096px",
    height: "308px", */
  },
}));
