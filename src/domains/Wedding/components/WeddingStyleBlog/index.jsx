import {
  Container,
  styled,
  useTheme,
  useMediaQuery,
  Stack,
} from "@mui/material";
import CardWeddingBlog from "../../../../Components/CardWeddingBlog";
import CardTop from "../../../../Components/CardWeddingBlog/cardTop";
import imagem from "./B_Pre Wedding=Enabled (2).png";

const StyledContainer2 = styled(Container)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr", // Inicialmente, uma coluna para dispositivos menores
  gap: "16px",
  flexWrap: "wrap",
  [theme.breakpoints.up("lg")]: {
    gridTemplateColumns: "repeat(2, 1fr)", // A partir de 1440px, duas colunas
  },
}));

const WeddingStyleBlog = ({ dataWedding }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack
      width="100%"
      alignItems="stretch" // Alterado para 'stretch'
      flexDirection={isMobile ? "column" : "row"} // Alterado para 'column' em dispositivos móveis
      px={!isMobile && 42.75}
      mt={!isMobile && 15}
    >
      <Stack width="100%">
        <CardTop
          image={imagem}
          title={dataWedding[0].title}
          description={dataWedding[0].description}
          destination={dataWedding[0].destination}
          height="100%" // Adicionado para garantir a mesma altura
        />
      </Stack>

      <Stack width="100%">
        <StyledContainer2>
          {dataWedding.slice(1).map((weddingItem, index) => (
            <CardWeddingBlog
              key={weddingItem.title}
              image={weddingItem.image}
              title={weddingItem.title}
              description={weddingItem.description}
              destination={weddingItem.destination}
              height="100%" // Adicionado para garantir a mesma altura
            />
          ))}
        </StyledContainer2>
      </Stack>
    </Stack>
  );
};

export default WeddingStyleBlog;
