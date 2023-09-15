import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import bartoz from "../../gifit/Bartosz [RJ].svg";
import lud from "../../gifit/Ludmilla [RJ].svg";
import present from "../../gifit/circlegift.svg";
import {
  ButtonTimeLine,
  ContainerTimeline,
  RotatedLabel,
  StyledTimelineContent,
  StyledTimelineConnector,
  ContainerImagem,
  ContainerLabel,
  CenteredImagem,
  StyledTimelineDot,
  ContainerImagemLud,
  ContainerImagemBartoz,
} from "./style";

export default function TimeLineGift({ topics, onTimelineItemClick }) {
  return (
    <ContainerTimeline>
      <ContainerImagemBartoz src={bartoz} alt="" />
      <Timeline position="right">
        {topics.map((item, index) => (
          <TimelineItem key={item.id}>
            <TimelineSeparator>
              {item.id === "icone" ? (
                <>
                  <CenteredImagem>
                    <img src={present} alt="" />
                  </CenteredImagem>
                </>
              ) : (
                <>
                  <StyledTimelineConnector
                    sx={{
                      bgcolor: "#52736B",
                    }}
                  />
                  <StyledTimelineDot

                  
                    onClick={() => {
                      onTimelineItemClick(item);
                      console.log("ButtonTimeLine Clicked: " + item.label);
                    }}
                  />
                  <StyledTimelineConnector
                    sx={{
                      bgcolor: "#52736B",
                    }}
                  />
                </>
              )}
              <ButtonTimeLine variant="outlined" color="primary" />
            </TimelineSeparator>

            <ContainerLabel>
              <RotatedLabel>{item.label}</RotatedLabel>
            </ContainerLabel>
            
          </TimelineItem>
        ))}
      </Timeline>
      <ContainerImagemLud src={lud} alt="" />
    </ContainerTimeline>
  );
}
