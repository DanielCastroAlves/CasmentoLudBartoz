import { styled } from "@mui/material";

const ContainerCarouselTravel = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(2),
  marginTop: "20px",
  "@media (max-width: 850px)": {
    flexDirection: "column",
    marginRight: "10px",
  },
}));

export default ContainerCarouselTravel;
