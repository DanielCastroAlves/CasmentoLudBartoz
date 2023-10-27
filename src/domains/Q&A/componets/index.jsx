import * as React from "react";
import {
  ContainerAcc,
  AccordionStyled,
  AccordionSummaryStyled,
  AccordionDetailsStyled,
  TypographyStyled,
  ListItem,
  Description,
  SubList,
  SubListItem,
  CustomList,
  EmprAir,
  Text,
} from "./style";
import { KeyboardArrowUp, KeyboardArrowDown } from "@mui/icons-material";
import { Link } from "react-router-dom";

function formatData(data) {
  const formattedData = data.map((item, index) => {
    return {
      id: index, // Usamos o índice como identificador único
      Q: item.Q,
      A: item.A.map((paragraph) => {
        if (typeof paragraph === "string") {
          return { text: paragraph };
        } else if (typeof paragraph === "object") {
          const formattedParagraph = {
            description: paragraph.description || null,
            lista: paragraph.lista || null,
            emprAir: paragraph.emprAir || null,
            descriptionData: paragraph.descriptionData || null,
            additionalInfo: paragraph.additionalInfo || null,
            additionalInfoemprAir: paragraph.additionalInfoemprAir || null,
            additionalInfodescriptionData:
              paragraph.additionalInfodescriptionData || null,
            additionalInfodescription:
              paragraph.additionalInfodescription || null,
          };

          return formattedParagraph;
        }
        return null;
      }),
    };
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
      {formattedData.map((item) => (
        <AccordionStyled key={item.id}>
          <AccordionSummaryStyled
            id={`panel${item.id}-header`}
            onClick={() => handleChangeIndex(item.id)}
            isExpanded={expandedIndex === item.id}
          >
            <div className="icon-typography-container">
              {expandedIndex === item.id ? (
                <KeyboardArrowUp
                  style={{
                    fill: "var(--Terracota, #9c4522)",
                    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                    marginRight: "10px",
                  }}
                  className="icon"
                />
              ) : (
                <KeyboardArrowDown
                  style={{ fill: "var(--green-olive, #52736b)" }}
                  className="icon"
                />
              )}
              <TypographyStyled
                className={`typography ${
                  expandedIndex === item.id ? "pergunta-aberta" : ""
                }`}
              >
                {item.Q}
              </TypographyStyled>
            </div>
          </AccordionSummaryStyled>
          {expandedIndex === item.id && (
            <AccordionDetailsStyled>
              <CustomList>
                {item.A.map((paragraph, i) => (
                  <ListItem key={i}>
                    {paragraph.description && (
                        <Description dangerouslySetInnerHTML={ {__html: paragraph.description} } />
                    //   <Description>{paragraph.description}</Description>
                    //   <Description>{paragraph.description}</Description>
                    )}
                    {paragraph.lista && (
                      <SubList>
                        {paragraph.lista.map((p, j) => (
                            // <Link to="/home">
                            // </Link>
                          <SubListItem key={j}>{p}</SubListItem>
                        ))}
                      </SubList>
                    )}
                    {paragraph.emprAir && (
                      <EmprAir>
                        <Text>{paragraph.emprAir[0]}</Text>
                        <SubList>
                          {paragraph.emprAir.slice(1).map((p, j) => (
                            <SubListItem key={j}>{p}</SubListItem>
                          ))}
                        </SubList>
                      </EmprAir>
                    )}
                    {paragraph.text && <Text>{paragraph.text}</Text>}
                    {paragraph.descriptionData && (
                      <Text>{paragraph.descriptionData[0]}</Text>
                    )}
                    {paragraph.additionalInfo && (
                      <SubList>
                        {paragraph.additionalInfo.map((info, k) => (
                          <SubListItem key={k}>{info}</SubListItem>
                        ))}
                      </SubList>
                    )}
                    {paragraph.additionalInfoemprAir && (
                      <EmprAir>
                        <Text>{paragraph.additionalInfoemprAir[0]}</Text>
                        <SubList>
                          {paragraph.additionalInfoemprAir
                            .slice(1)
                            .map((info, k) => (
                              <SubListItem key={k}>{info}</SubListItem>
                            ))}
                        </SubList>
                      </EmprAir>
                    )}
                    {paragraph.additionalInfodescriptionData && (
                      <Text>{paragraph.additionalInfodescriptionData[0]}</Text>
                    )}
                    {paragraph.additionalInfodescription && (
                      <SubList>
                        {paragraph.additionalInfodescription.map((info, k) => (
                          <SubListItem key={k}>{info}</SubListItem>
                        ))}
                      </SubList>
                    )}
                  </ListItem>
                ))}
              </CustomList>
            </AccordionDetailsStyled>
          )}
        </AccordionStyled>
      ))}
    </ContainerAcc>
  );
}
