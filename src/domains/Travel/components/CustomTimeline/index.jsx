import React from "react";

import {
  ContainerData,
  ContainerDescription,
  ContainerTimeline,
  NumberDay,
  PlanTravel,
  TitleDay,
  TravelDescription,
} from "./style";
import { useLanguage } from "../../../../hooks/useLanguage";

export default function CustomTimeline({ topics }) {
  const { language } = useLanguage();
  return (
    <ContainerTimeline>
      {topics.map((item) => (
        <PlanTravel key={item.id}>
          <ContainerData>
            <TitleDay>{item.day[language]}</TitleDay>
            <NumberDay>{item.date[language]}</NumberDay>
          </ContainerData>
          <ContainerDescription>
            <TravelDescription>
              • {item.description[language]}
            </TravelDescription>
          </ContainerDescription>
        </PlanTravel>
      ))}
    </ContainerTimeline>
  );
}
