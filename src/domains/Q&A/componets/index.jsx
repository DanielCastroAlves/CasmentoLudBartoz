import * as React from "react";
import {
  ContainerAcc,
  AccordionStyled,
  AccordionSummaryStyled,
  AccordionDetailsStyled,
  TypographyStyled,
} from "./style";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

export default function QAAccordion({ data }) {
  const [expandedIndex, setExpandedIndex] = React.useState(null);

  const handleChangeIndex = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <ContainerAcc>
      {data.map((item, index) => (
        <AccordionStyled>
          <AccordionSummaryStyled
            id={`panel${index + 1}-header`}
            onClick={() => handleChangeIndex(index)}
          >
            {expandedIndex === index ? (
              <KeyboardArrowUp
                style={{
                  fill: "var(--Terracota, #9c4522)",
                  filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                  marginRight: "10px",
                }}
              />
            ) : (
              <KeyboardArrowDown
                style={{
                  fill: "var(--green-olive, #52736B)",
                  filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                  marginRight: "10px",
                }}
              />
            )}
              <TypographyStyled
              className={expandedIndex === index ? "pergunta-aberta" : ""}
            >{item.Q}</TypographyStyled>
          </AccordionSummaryStyled>
          {expandedIndex === index && (
            <AccordionDetailsStyled>
              <TypographyStyled className="resposta">{item.A}</TypographyStyled>
            </AccordionDetailsStyled>
          )}
        </AccordionStyled>
      ))}
    </ContainerAcc>
  );
}
