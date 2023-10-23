import React from "react";
import QAAccordion from "./componets/index.jsx";
import { Stack } from "@mui/material";
import { useLanguage } from "../../hooks/useLanguage.jsx";
import text from "../../Assets/text.json";
import { FirstSection } from "../../Components/FirstSection/index.jsx";

const QeA = () => {
  const { language } = useLanguage();
  const data = [
    {
      Q: text.QEA.Accordion[0].questions[language],
      A: [
        {
          id: 1,
          description: [text.QEA.Accordion[0].answers[language]],
        },
      ],
    },
    {
      Q: text.QEA.Accordion[1].questions[language],
      A: [
        {
          id: 2,
          description: [
            text.QEA.Accordion[1].answers[language],
            text.QEA.Accordion[1].answers2[language],
          ],
        },
      ],
    },
    {
      Q: text.QEA.Accordion[2].questions[language],
      A: [
        {
          id: 3,
          description: [
            text.QEA.Accordion[2].answers[language],
            text.QEA.Accordion[2].answers2[language],
          ],
        },
      ],
    },
    {
      Q: text.QEA.Accordion[3].questions[language],
      A: [
        {
          id: 4,
          description: [text.QEA.Accordion[3].answers[language]],
          lista: [
            text.QEA.Accordion[3].transfer[0][language],
            text.QEA.Accordion[3].transfer[1][language],
            text.QEA.Accordion[3].transfer[2][language],
            text.QEA.Accordion[3].transfer[3][language],
          ],
        },
      ],
    },
    {
      Q: text.QEA.Accordion[4].questions[language],
      A: [
        {
          id: 5,
          description: [
            text.QEA.Accordion[4].answers[language],
            text.QEA.Accordion[4].answers2[language],
          ],
          lista: [
            "Londres (LHR) - Rio de Janeiro (GIG): British Airway | 11h40",
            "Madrid (MAD) - Rio de Janeiro (GIG): Iberia | 10h50",
            "Lisbon (LIS) - Rio de Janeiro (GIG): TAP |  09h55",
            "Porto (OPO) - Rio de Janeiro (GIG): TAP | 10h20",
            "Paris (CDG) - Rio de Janeiro (GIG): Air France | 11h20",
            "Amsterdam (AMS) - Rio de Janeiro (GIG): KLM | 11h55",
            "Munique (MUC) - Rio de Janeiro (GIG): Lufthansa | 11h50",
            "Roma (FCO) - Rio de Janeiro (GIG): ITA Airways | 12h15",
            "Dubai (DXB) - Rio de Janeiro (GIG): Emirates | 14h20",
            "Panamá (PTY) - Rio de Janeiro (GIG): Copa Airlines | 07h05",
            "Bogotá (BOG) -Rio de Janeiro (GIG): Avianca | 06h20",
            "Lima (LIM) - Rio de Janeiro (GIG): Latam | 05h05",
            "Nova Yorque (JFK) - Rio de Janeiro (GIG): American Airline e Delta | 09h45",
            "Miami (MIA) - Rio de Janeiro (GIG): American Airline | 08h07",
            "Atlanta (ATA) - Rio de Janeiro (GIG): Delta | 09h45",
            "Huston (IAH) - Rio de Janeiro (GIG): United Airlines | 10h15",
          ],
          additionalInfo: [
            text.QEA.Accordion[4].answers3[language],
            text.QEA.Accordion[4].answers4[language],
          ],
        },
      ],
    },
    {
      Q: text.QEA.Accordion[5].questions[language],
      A: [
        {
          id: 6,
          description: [text.QEA.Accordion[5].answers[language]],
        },
      ],
    },
    {
      Q: text.QEA.Accordion[6].questions[language],
      A: [
        {
          id: 7,
          description: [text.QEA.Accordion[6].answers[language]],
        },
      ],
    },
    {
      Q: text.QEA.Accordion[7].questions[language],
      A: [
        {
          id: 8,
          description: [
            text.QEA.Accordion[7].answers[language],
            text.QEA.Accordion[7].answer1[language],
            text.QEA.Accordion[7].answer2[language],
         
          ],
          lista: [
            "Búzios:",
            text.QEA.Accordion[7].opcoesBuzios[0][language],
            text.QEA.Accordion[7].opcoesBuzios[1][language],
            text.QEA.Accordion[7].opcoesBuzios[2][language],
            
          ],
        },
      ],
    },
    {
      Q: text.QEA.Accordion[8].questions[language],
      A: [
        {
          id: 9,
          description: [
            text.QEA.Accordion[8].answers[language],
            text.QEA.Accordion[8].answers2[language],
          ],
        },
      ],
    },
    {
      Q: text.QEA.Accordion[9].questions[language],
      A: [
        {
          id: 10,
          description: [text.QEA.Accordion[9].answers[language]],
        },
      ],
    },
    {
      Q: text.QEA.Accordion[10].questions[language],
      A: [
        {
          id: 11,
          description: [text.QEA.Accordion[10].answers[language]],
        },
      ],
    },
    {
      Q: text.QEA.Accordion[11].questions[language],
      A: [
        {
          id: 12,
          description: [text.QEA.Accordion[11].answers[language]],
        },
      ],
    },
    {
      Q: text.QEA.Accordion[9].questions[language],
      A: [
        {
          id: 13,
          description: [text.QEA.Accordion[9].answers[language]],
        },
      ],
    },
    {
      Q: text.QEA.Accordion[13].questions[language],
      A: [
        {
          id: 14,
          description: [text.QEA.Accordion[13].answers[language]],
          emprAir: ["KLM:"],
          descriptionData: ["Cracóvia – Rio de Janeiro 09.05.2024"],
          additionalInfo: [
            "1ª parada: Cracóvia – Amsterdam (06:35 – 08:35; duração: 2h)",
            "Parada 4h 15 min",
            "2ª parada: Amsterdã – Rio de Janeiro (12h50 – 19h45; duração: 11h 55min)",
            "Rio de Janeiro – Cracóvia 19.05.2024 (chegada a Cracóvia em 20.05.2024)",
            "1ª parada: Rio de Janeiro – Amsterdã (21h55, 19.05.2024 – 14h25, 20.05.2024; duração: 11h 30 min)",
            "Parada: 6h 10 min",
            "2ª parada: Amsterdã – Cracóvia (20h35 – 22h25; duração: 1h 50 min)",
            "Custo total por pessoa: cerca de 3 800 PLN",
          ],
          additionalInfoemprAir: ["Lufthansa"],
          additionalInfodescriptionData: [
            "Cracóvia – Rio de Janeiro 09.05.2024",
          ],
          additionalInfodescription: [
            "1ª parada: Cracóvia – Munique (06:00 – 07:20; duração: 1h 20 min)",
            "Parada 4h 55 min",
            "2ª parada: Munique – Rio de Janeiro (12h15 – 19h05; duração: 11h 50 min)",
            "Rio de Janeiro – Cracóvia 19.05.2024 (chegada a Cracóvia em 20.05.2024",
            "1ª parada: Rio de Janeiro – Munique (20h50, 19.05.2024 – 13h15, 20.05.2024; duração: 11h 25 min)",
            "Parada: 8h 45 min",
            "2ª parada: Munique – Cracóvia (22:00 – 23h20; duração: 1h 20 min)",
            "Custo total por pessoa: cerca de 4 800 PLN",
          ],
        },
      ],
    },
  ];

  return (
    <Stack width="100%" height="100%" mb={0}>
      <FirstSection
        title={text.Wedding.title[language]}
        subtitle={text.Wedding.subTitle[language]}
        paragraph1={text.Wedding.introP1[language]}
        paragraph2={text.Wedding.introP2[language]}
      />

      <QAAccordion data={data} />
    </Stack>
  );
};

export default QeA;
