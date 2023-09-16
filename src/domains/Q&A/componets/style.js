import { AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import styled from "styled-components";

const breakpoints = {
  xs: "0px",
  sm: "600px",
  md: "960px",
  lg: "1280px",
  xl: "1920px",
};

const createMediaQuery = (size) => `@media (max-width: ${breakpoints[size]})`;

export const ContainerAcc = styled.div`
  width: 100%;
  display: flex;
  justify-content: center !important;
  flex-direction: column;
  align-items: flex-start;
  border: none !important;
  fill: none !important;
  box-shadow: none !important;
  border-bottom: none !important;
  margin-top: 60px;
  margin-left: 160px;
  margin-bottom: 60px;
  ${createMediaQuery("sm")} {
    width: 326px;
    margin-left: 20px;
  }

  ${createMediaQuery("md")} {
    width: 326px;
    margin-left: 20px;
  }
`;

export const AccordionStyled = styled("div")`
  fill: none !important;
  box-shadow: none !important;
  border: none !important;
  width: 100%;
`;

export const AccordionSummaryStyled = styled(AccordionSummary)`
  fill: none !important;
  box-shadow: none !important;
  border: none !important;
  border-bottom: none !important;
`;

export const AccordionDetailsStyled = styled(AccordionDetails)`
  display: flex;
  width: 1032px;
  padding: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--Terracota, #9c4522) !important;
  ${createMediaQuery("sm")} {
    width: 336px;
  }

  ${createMediaQuery("md")} {
    width: 336px;
  }
`;

export const TypographyStyled = styled(Typography)`
  color: var(--green-olive, #52736b);
  font-family: Cinzel;
  font-size: 20.631px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &.pergunta-aberta {
    color: var(--Terracota, #9c4522) !important;
  }
  &.resposta {
    fill: none !important;
    color: #545454;
    font-family: Open Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
