import { styled } from "@mui/material";

const ContainerCarouselTravel = styled("div")(({ theme }) => ({
  "@media (min-width: 350px) and (max-width: 1000px)": {
    "& .react-multiple-carousel__arrow": {
      backgroundColor: "rgba(255, 255, 255, 0.45)",
      blur: "12px",
      color: "blue",
      padding: "0px",
      height: "50px",
    },
    "& .react-multiple-carousel__arrow::before": {
      color: theme.palette.primary.main,
      fontSize: "18px",
      fontWeight: "600",
    },
    "& .react-multiple-carousel__arrow--left": {
      left: 0,
      borderRadius: "22px",
      background:
        "var(--Background-Arrow-Radial, radial-gradient(50% 50% at 50% 50%, #FFF 47.4%, rgba(255, 255, 255, 0.00) 100%))",
    },
    "& .react-multiple-carousel__arrow--right": {
      right: 0,
      background:
        "var(--Background-Arrow-Radial, radial-gradient(50% 50% at 50% 50%, #FFF 47.4%, rgba(255, 255, 255, 0.00) 100%))",
    },

    marginTop: "2%",
  },

  "@media (min-width: 1001px) and (max-width: 1279px)": {
    "& .react-multiple-carousel__arrow": { display: "none" },
    margin: "auto 12%",
    marginTop: "2%",
  },

  "@media (min-width: 1280px) and (max-width: 1440px)": {
    "& .react-multiple-carousel__arrow": { display: "none" },
    margin: "auto 15%",
    marginTop: "2%",
  },

  "@media (min-width: 1441px) and (max-width: 2559px)": {
    "& .react-multiple-carousel__arrow": { display: "none" },
    margin: "auto 25%",
    marginTop: "2%",
  },

  "@media (min-width: 2560px)": {
    "& .react-multiple-carousel__arrow": { display: "none" },
    background: "blue", // Fundo azul para telas acima de 2560px
    margin: "auto 35%",
    marginTop: "2%",
  },

  // Estilos comuns a todas as telas
}));

export default ContainerCarouselTravel;
