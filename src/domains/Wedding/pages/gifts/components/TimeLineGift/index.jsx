import React, { useState } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import bartoz from "../../gifit/Bartosz [RJ].svg";
import lud from "../../gifit/Ludmilla [RJ].svg";
import present from "../../gifit/circlegift.svg";
import presentSelected from "../../gifit/circlegiftwhite.svg";
import {
  ButtonTimeLine,
  ContainerTimeline,
  RotatedLabel,
  StyledTimelineConnector,
  ContainerLabel,
  CenteredImagem,
  StyledTimelineDot,
  ContainerImagemLud,
  ContainerImagemBartoz,
  DotSelected,
} from "./style";

export default function TimeLineGift({ topics, onTimelineItemClick }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    onTimelineItemClick(item);
    setSelectedItem(item.id);
    onTimelineItemClick(item.id);
  };

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
                  <StyledTimelineDot onClick={() => handleItemClick(item)}>
                    <DotSelected
                      src={presentSelected}
                      alt=""
                      sx={{
                        display: selectedItem === item.id ? "block" : "none",
                        width: 100,
                        height: 100,
                        position: "relative",
                        top: -40,
                        left: -40,
                      }}
                    />
                    <ContainerLabel>
                      <RotatedLabel>{item.label}</RotatedLabel>
                    </ContainerLabel>
                  </StyledTimelineDot>
                  <StyledTimelineConnector
                    sx={{
                      bgcolor: "#52736B",
                    }}
                  />
                </>
              )}
              <ButtonTimeLine variant="outlined" color="primary" />
            </TimelineSeparator>
          </TimelineItem>
        ))}
      </Timeline>
      <ContainerImagemLud src={lud} alt="" />
    </ContainerTimeline>
  );
}
