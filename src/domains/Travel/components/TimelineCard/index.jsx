import React from "react";
import { Box, Typography } from "@mui/material";
import { CustomCard } from "./style";

const TimelineCard = ({ item }) => {
  return (
    <Box>
      <CustomCard>
        <Typography variant="h6" className="content">
          {item.content}
        </Typography>
        <Typography variant="body1" className="programacao">
          {item.programacao.join(", ")}
        </Typography>
      </CustomCard>
    </Box>
  );
};

export default TimelineCard;
