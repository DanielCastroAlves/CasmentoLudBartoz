// style.js
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import styled from "styled-components";

export const ContainerAcc = styled.div`
  width: 1000px;
  margin-top: 60px;
  margin-bottom: 60px;
`;

export const AccordionStyled = styled(Accordion)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--green-olive, #52736b);
  font-family: Cinzel;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const AccordionSummaryStyled = styled(AccordionSummary)``;

export const AccordionDetailsStyled = styled(AccordionDetails)`
  color: var(--green-olive, #52736b);
  font-family: Cinzel;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const TypographyStyled = styled(Typography)`
  color: var(--green-olive, #52736b);
  font-family: Cinzel;
  font-size: 20.631px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &.resposta {
    border: 1px solid #52736b;
    background: var(--light-gray, #f5f5f5);
    color: #545454;
    font-family: Open Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
`;
