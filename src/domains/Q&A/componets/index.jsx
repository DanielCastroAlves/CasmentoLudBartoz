import * as React from "react";
import {
  ContainerAcc,
  AccordionStyled,
  AccordionSummaryStyled,
  AccordionDetailsStyled,
  TypographyStyled,
} from "./style";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

function formatData(data) {
  const formattedData = [];

  data.forEach((item) => {
    const formattedItem = {
      Q: item.Q,
      A: item.A.map((paragraph) =>
        Array.isArray(paragraph)
          ? paragraph.map((p) => `${p}`)
          : [`${paragraph}`]
      ),
    };

    formattedData.push(formattedItem);
  });

  return formattedData;
}

export default function QAAccordion({ data }) {
  const [expandedIndex, setExpandedIndex] = React.useState(null);

  const handleChangeIndex = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const formattedData = formatData(data);

  return (
    <ContainerAcc>
      {formattedData.map((item, index) => (
        <AccordionStyled key={index}>
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
            >
              {item.Q}
            </TypographyStyled>
          </AccordionSummaryStyled>
          {expandedIndex === index && (
            <AccordionDetailsStyled>
              <TypographyStyled className="resposta">
                <ul>
                  {item.A.map((paragraph, i) => (
                    <li key={i}>{paragraph}</li>
                  ))}
                </ul>
              </TypographyStyled>
            </AccordionDetailsStyled>
          )}
        </AccordionStyled>
      ))}
    </ContainerAcc>
  );
}
