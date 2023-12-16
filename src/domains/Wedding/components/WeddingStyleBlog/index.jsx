import { Grid, Container, styled } from "@mui/material";
import CardWeddingBlog from "../../../../Components/CardWeddingBlog";
import CardTop from "../../../../Components/CardWeddingBlog/cardTop";

const StyledContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  width: "100rem",
  justifyContent: "center",
  alignItems: "center",
  alignContent: "center",
  flexWrap: "wrap",
  marginTop: "16px",
}));

const WeddingStyleBlog = ({ dataWedding }) => {
  return (
    <StyledContainer>
      <Grid container spacing={2}>
        <Grid item>
          <CardTop
            image={dataWedding[0].imageTop}
            title={dataWedding[0].title}
            description={dataWedding[0].description}
            destination={dataWedding[0].destination}
          />
        </Grid>
        {dataWedding.slice(1).map((weddingItem, index) => (
          <Grid item key={weddingItem.title} md={5.7}>
            <CardWeddingBlog
              image={weddingItem.image}
              title={weddingItem.title}
              description={weddingItem.description}
              destination={weddingItem.destination}
            />
          </Grid>
        ))}
      </Grid>
    </StyledContainer>
  );
};

export default WeddingStyleBlog;
