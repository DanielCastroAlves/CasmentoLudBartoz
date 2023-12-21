import { styled } from "@mui/material";

const CardWeddingContainerBlog = styled("div")(({ theme, isSelected }) => ({
  display: "flex",
  width: "22.5rem",
  
  padding: "0 1rem",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.5rem",
  background: "#FFF",
  cursor: "pointer",
  marginBottom: "1.5125rem",
  border: isSelected
    ? "1px solid var(--Green-Olive, #52736B)"
    : "1px solid var(--terracota, #9C4522)",

  "& img": {
    border: isSelected
      ? "1px solid var(--Green-Olive, #52736B)"
      : "1px solid var(--terracota, #9C4522)",
  },
  "& h6": {
    color: isSelected ? "var(--Green-Olive, #52736B)" : "none",
  },
}));

const CardWeddingImageBlog = styled("img")({
 
  width: "22.5rem",
});

const ContainerTitleDescriptionBlog = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  alignSelf: "stretch",
  height: "6rem",
}));

const CardWeddingTitleBlog = styled("h6")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: 10,
  flex: "1 0 0",
  padding: "0.25rem 0.5rem",
  color: "var(--terracota, #9C4522)",
  textAlign: "center",
  fontFamily: "Cinzel",
  fontSize: "20px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
}));

const CardWeddingDescriptionBlog = styled("p")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: 10,
  flex: "1 0 0",
  padding: "0.25rem 0.5rem",
  color: "var(--black, #545454)",
  fontFamily: "Open Sans",
  fontSize: "0.875rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
  textTransform: "uppercase",
}));

export {
  CardWeddingContainerBlog,
  CardWeddingImageBlog,
  ContainerTitleDescriptionBlog,
  CardWeddingTitleBlog,
  CardWeddingDescriptionBlog,
};
