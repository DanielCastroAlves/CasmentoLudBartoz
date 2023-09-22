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
  debugger;
  const { language } = useLanguage();
  return (
    <ContainerTimeline>
      {topics.map((item) => (
        <PlanTravel key={item.id}>
          <ContainerData>
            <TitleDay>{item.date[language]}</TitleDay>
            <NumberDay>{item.day[language]}</NumberDay>
          </ContainerData>
          <ContainerDescription>
            <TravelDescription>• {item.description[language]}</TravelDescription>
          </ContainerDescription>
        </PlanTravel>
      ))}
    </ContainerTimeline>
  );
}

