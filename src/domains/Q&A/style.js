import { styled } from "styled-components";

export const ContainerQeA = styled.div(({ theme }) => ({
  // Adicione os estilos do ContainerQeA aqui
}));

export const IntroPage = styled.div(({ theme }) => ({
  display: "flex",
  paddingBottom: "0px",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

export const Title = styled.h1(({ theme }) => ({
  color: "var(--terracota, #9C4522)",
  textAlign: "center",
  fontFamily: "Cinzel",
  fontSize: "38px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
}));

export const Subtitle = styled.h6(({ theme }) => ({
  color: "var(--terracota, #9C4522)",
  textAlign: "center",
  fontFamily: "Open Sans",
  fontSize: "20px",
  fontStyle: "normal",
  fontWeight: 300,
  lineHeight: "normal",
  textTransform: "uppercase",
  marginBottom: 40,
}));

export const Paragraph = styled.p(({ theme }) => ({
  color: "var(--automtico-padro, #545454)",
  textAlign: "center",
  fontFamily: "Open Sans",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: 300,
  lineHeight: "normal",
  marginBottom: 40,
}));
