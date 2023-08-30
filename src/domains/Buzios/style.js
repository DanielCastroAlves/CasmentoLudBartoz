import { styled } from "@mui/material";

const ContainerPageCity = styled("div")(({ theme }) => ({
  margin: "20px",
  padding: "20px",
}));

const BannerImage = styled("div")(({ theme }) => ({
  margin: "20px",
  padding: "20px",
}));

const BannerImageBuzios = styled("div")(({ theme }) => ({
  display: "flex",
  padding: "40px 0px",
  justifyContent: "center",
  alignItems: "center",
  gap: "14.992px",

  "& > div": {
    paddingLeft: "7px",
    paddingRight: "7px",
  },
}));

const TituloDescription = styled("h2")(({ theme }) => ({
  color: "var(--verde-oliva, #52736B);",
  fontFamily: "Cinzel",
  fontSize: "20px",
  fontWeight: 400,
  marginBottom: 16,
  marginTop: 16,
}));

const Description = styled("p")(({ theme }) => ({
  color: "var(--automtico-padro, #545454)",
  fontFamily: "Open Sans",
  fontSize: "18px",
  fontWeight: 300,
  marginBottom: 16,
  marginTop: 16,
}));

const Topicos = styled("div")(({ theme }) => ({
  color: "var(--automtico-padro, #545454)",
  fontFamily: "Open Sans",
  fontSize: "18px",
  fontWeight: 300,
  marginBottom: 16,
  marginTop: 16,
  ul: {
    paddingLeft: "20px",
  },
  li: {
    position: "relative",
    marginBottom: "5px",
    paddingLeft: "5px",
  },
}));

export {
  ContainerPageCity,
  TituloDescription,
  Description,
  Topicos,
  BannerImage,
  BannerImageBuzios,
};
