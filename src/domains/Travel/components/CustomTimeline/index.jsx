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

export default function CustomTimeline({ topics }) {
  return (
    <ContainerTimeline>
      {topics.map((item) => (
        <PlanTravel>
          <ContainerData>
            <TitleDay>{item.content}</TitleDay>
            <NumberDay>{item.label}</NumberDay>
          </ContainerData>
          <ContainerDescription>
            <TravelDescription>• {item.programacao}</TravelDescription>
          </ContainerDescription>
        </PlanTravel>
      ))}
    </ContainerTimeline>
  );
}
