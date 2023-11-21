import { KeyboardArrowDown } from "@mui/icons-material";
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
  cursor: pointer;

  &:hover {
    background-color: #ffffff;

    .icon-typography-container {
      
    }

    .icon {
     
      font-weight: 900; //nao pega
  
  
    }

    .typography {
      color: var(--green-olive, #52736b);
      &:hover {
        background-color: #ffffff;
        font-weight: bold;
      }
    }
  }

  .icon-typography-container {
    display: flex;
    align-items: center;
  }
  .icon {
    color: #52736b;
    margin-right: 10px;
   
  }


  .typography {
    color: var(--green-olive, #52736b);
    font-family: Cinzel;
    font-size: 20.631px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const IconContainer = styled.div`
  display: inline-block;
  margin-right: 10px;

  &:hover {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5));
  }
`;

export const ArrowDownIcon = styled(KeyboardArrowDown)`
  margin-right: 10px;
  
  
`;
export const AccordionDetailsStyled = styled(AccordionDetails)`
  display: flex;
  width: 1032px;
  padding: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: start;
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
  &:hover {
    background-color: #ffffff;
    box-shadow: none;
  }

  &.pergunta-aberta {
    color: var(--Terracota, #9c4522) !important;
  }

  &.resposta {
    fill: none !important;
    color: #545454;
  }
  & ul {
    list-style-type: none;
    padding: 10px;
    & li {
      font-family: "Open Sans" !important;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin-bottom: 10px;
    }
  }
`;

export const CustomList = styled.ul`
  color: var(--Black, #545454);
  margin: 12px;
  list-style: none !important;
`;

export const ListItem = styled.li``;

export const Description = styled.p`
  list-style: none !important;

  font-family: "Open Sans" !important;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 10px;
`;

export const SubList = styled.ul`
  list-style: none !important;
  font-family: "Open Sans" !important;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 10px;
  margin: 12px;
  list-style-type: disc !important;
`;

export const SubListItem = styled.li`
  font-family: "Open Sans" !important;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 10px;
  margin: 12px;
`;

export const EmprAir = styled.div``;

export const Text = styled.p`
  font-family: "Open Sans" !important;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 8px;
  font-size: 16px !important;
`;
