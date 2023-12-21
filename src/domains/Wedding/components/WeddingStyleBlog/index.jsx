import { Grid, Container, styled } from "@mui/material";
import CardWeddingBlog from "../../../../Components/CardWeddingBlog";
import CardTop from "../../../../Components/CardWeddingBlog/cardTop";

const StyledContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  maxWidth: "100rem !important",
  justifyContent: "center",
  alignItems: "center",
  alignContent: "center",
  margin: "auto 10rem",
  marginTop: "16px",
}));

const StyledContainer2 = styled(Container)(({ theme }) => ({
  display: "flex",
  alignItems: "center !important",
  alignContent: "center !important",
  maxWidth: "96rem !important",
  justifyContent: "spaceBetween",
  marginTop: "16px",
  marginLeft: "9.8rem",
}));

const StyledGridItem = styled(Grid)(({ theme }) => ({
  /*  background: "red",
  width: "100rem !important", */
}));

const WeddingStyleBlog = ({ dataWedding }) => {
  return (
    <>
      <Grid container spacing={2}>
        <StyledContainer>
          <Grid item xs={12} md={12}>
            {/* O primeiro card ocupa toda a largura na tela pequena e média */}
            <CardTop
              image={dataWedding[0].imageTop}
              title={dataWedding[0].title}
              description={dataWedding[0].description}
              destination={dataWedding[0].destination}
            />
          </Grid>
        </StyledContainer>
        <StyledContainer2>
          {dataWedding.slice(1).map((weddingItem, index) => (
            <StyledGridItem item key={weddingItem.title} md={3}>
              {/* Os demais cards ocupam metade da largura na tela pequena e um terço na tela média */}
              <CardWeddingBlog
                image={weddingItem.image}
                title={weddingItem.title}
                description={weddingItem.description}
                destination={weddingItem.destination}
              />
            </StyledGridItem>
          ))}
        </StyledContainer2>
      </Grid>
    </>
  );
};

export default WeddingStyleBlog;
