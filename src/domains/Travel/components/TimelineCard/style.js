import { Card, styled } from "@mui/material";

const CustomCard = styled(Card)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "34px",
  flexShrink: 0,
  width: "430px",
  height: "186px",
  "& .content": {
    color: "var(--terracota, #9C4522)",
    fontFamily: "Cinzel",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
  },
  "& .programacao": {
    color: "var(--verde-oliva, #52736B)",
    textAlign: "center",
    fontFamily: "Open Sans",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "normal",
    textTransform: "uppercase",
  },
  marginTop: 71,
  marginBottom: 60,
});

export { CustomCard };
