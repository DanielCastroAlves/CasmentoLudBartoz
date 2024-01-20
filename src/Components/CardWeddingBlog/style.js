import { styled } from "@mui/material";

const CardWeddingContainerBlog = styled("div")(({ theme, isSelected }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "5.76px",
  marginLeft:"1rem",
  flexShrink: 0,
  background: "#FFF",
  cursor: "pointer",

  border: isSelected
    ? "1px solid var(--Green-Olive, #52736B)"
    : "1px solid var(--terracota, #9C4522)",

  "& img": {
    border: isSelected
      ? "1px solid var(--Green-Olive, #52736B)"
      : "null",
  },
  "& h6": {
    color: isSelected ? "var(--Green-Olive, #52736B)" : "none",
  },
}));

const CardWeddingImageBlog = styled("img")({
  width: "100%",
  height:"50%",
});

const ContainerTitleDescriptionBlog = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  height:"5.5rem !important",
  flexDirection: "column",
  alignItems: "flex-start",
  alignSelf: "stretch",
  padding: "0.25rem 0.25rem",
}));

const CardWeddingTitleBlog = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: 10,
  flex: "1 0 0",
  padding: "0.25rem 0.25rem",
  alignSelf: "stretch",
  "& h6": {
    color: "var(--terracota, #9C4522)",
    textAlign: "center",
    fontFamily: "Cinzel",
    fontSize: "1.125rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  },
}));

const CardWeddingDescriptionBlog = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: 10,
  flex: "1 0 0",
  padding: "0.25rem 0.5rem",
  alignSelf: "stretch",
  "& p": {
    color: "var(--black, #545454)",
    fontFamily: "Open Sans, sans-serif",
    fontSize: "0.6875rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    textTransform: "uppercase",
  },
}));

export {
  CardWeddingContainerBlog,
  CardWeddingImageBlog,
  ContainerTitleDescriptionBlog,
  CardWeddingTitleBlog,
  CardWeddingDescriptionBlog,
};
