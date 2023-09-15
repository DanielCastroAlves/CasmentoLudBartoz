import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { ButtonTimeLine, ContainerTimeline, RotatedLabel } from "./style";

export default function CustomTimeline({ topics, onTimelineItemClick }) {
  return (
    <ContainerTimeline  sx={{
      padding: "100px 0 0 0",
    }}>
      <Timeline
        position="left"
       
      >
        {topics.map((item) => (
          <TimelineItem key={item.id}>
            <TimelineSeparator>
              <TimelineConnector
                sx={{
                  bgcolor: "#9C4522",
                }}
              />

              <TimelineDot
                onClick={() => {
                  onTimelineItemClick(item);
                  console.log("ButtonTimeLine Clicked: " + item.label);
                }}
                sx={{
                  width: "32px",
                  height: "32px",
                  flexShrink: 0,
                  background: "var(--terracota, #9C4522)",
                  transition: "background 0.3s",

                  "&:hover": {
                    backgroundColor: "#fff",
                    boxShadow: "0px 0px 0px 5px #9C4522",
                    width: "32px",
                    height: "32px",
                  },
                }}
              >
                <ButtonTimeLine variant="outlined" color="primary" />
              </TimelineDot>
            </TimelineSeparator>

            <TimelineContent sx={{ py: "50px", px: 2 }}>
              <RotatedLabel>{item.label}</RotatedLabel>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </ContainerTimeline>
  );
}
