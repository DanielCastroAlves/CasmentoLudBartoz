import React, { useState } from "react";
import { Typography, Container, Box } from "@mui/material";
import CustomTimeline from "./components/CustomTimeline";
import TimelineCard from "./components/TimelineCard";
import PageCity from "./components/PageCity";
import rioImage from '../../Assets/Images/background-rio.svg';
import buziosImage from '../../Assets/Images/background-buzios.svg';


const Travel = () => {
  const [timelineItem, setTimelineItem] = useState(null);

  const handleTimelineItemClick = (item) => {
    setTimelineItem(item);
  };

  const topics = [
    {
      label: "09.05.2024",
      content: "Quinta-feira",
      programacao: ["Chegada em Armação de Búzios"],
      id: 1,
      icon: "CheckCircleOutlineIcon",
    },
    {
      label: "10.05.2024",
      content: "Sexta-feira",
      programacao: ["Passeio em Arraial do Cabo"],
      id: 2,
      icon: "CheckCircleOutlineIcon",
    },
    {
      label: "11.05.2024",
      content: "Sábado",
      programacao: ["Pre Wedding"],
      id: 3,
      icon: "CheckCircleOutlineIcon",
    },
    {
      label: "12.05.2024",
      content: "Domingo",
      programacao: ["Casamento"],
      id: 4,
      icon: "CheckCircleOutlineIcon",
    },
    {
      label: "13.05.2024",
      content: "Segunda-feira",
      programacao: ["Passeio em Búzios"],
      id: 5,
      icon: "CheckCircleOutlineIcon",
    },
    {
      label: "14.05.2024",
      content: "Terça-feira",
      programacao: ["Transfer para o Rio de Janeiro e Passeio na cidade"],
      id: 6,
      icon: "CheckCircleOutlineIcon",
    },
    {
      label: "15.05.2024",
      content: "Quarta-feira",
      programacao: ["Passeio no Rio de Janeiro"],
      id: 7,
      icon: "CheckCircleOutlineIcon",
    },
    {
      label: "16.05.2024",
      content: "Quinta-feira",
      programacao: ["Passeio no Rio de Janeiro"],
      id: 8,
      icon: "CheckCircleOutlineIcon",
    },
    {
      label: "17.05.2024",
      content: "Sexta-feira",
      programacao: ["Passeio no Rio de Janeiro"],
      id: 9,
      icon: "CheckCircleOutlineIcon",
    },
  ];

  const citys = [
    {
      id: 1,
      name: "Rio de Janeiro",
      imagem: rioImage,
      destination: "travel/rio-de-janeiro",
    },
    {
      id: 2,
      name: "Buzios",
      imagem: buziosImage,
      destination: "travel/buzios",
    },
  ];

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minWidth: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{
            color: "var(--terracota, #9C4522)",
            textAlign: "center",
            fontFamily: "Cinzel",
            fontSize: 38,
            fontWeight: 700,
          }}
        >
          Lorem ipsum
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            color: "var(--terracota, #9C4522)",
            textAlign: "center",
            fontFamily: "Open Sans",
            fontSize: 20,
            fontWeight: 300,
            textTransform: "uppercase",
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Volutpat mattis massa turpis
          adipiscing dignissim nibh non habitant a.
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{
            color: "var(--automtico-padro, #545454)",
            textAlign: "center",
            fontFamily: "Open Sans",
            fontSize: 18,
            fontWeight: 300,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non
          urna ut enim rhoncus dapibus.
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{
            color: "var(--automtico-padro, #545454)",
            textAlign: "center",
            fontFamily: "Open Sans",
            fontSize: 18,
            fontWeight: 300,
          }}
        >
          Phasellus vitae eros vitae risus malesuada pulvinar. Sed vehicula odio
          in lectus fermentum, non mollis ipsum ullamcorper.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "80px",
        }}
      >
        <CustomTimeline
          topics={topics}
          onTimelineItemClick={handleTimelineItemClick}
        />

        {timelineItem && <TimelineCard item={timelineItem} />}
      </Box>
      <Box sx={{
          display: "flex",
          flexDirection: "row",
          marginTop: "60px",
          
        }}>
      {citys.map((city) => (
        <PageCity key={city.id} imagem={city.imagem} destination={city.destination} name={city.name}/>
      ))}
    </Box>
    </Container>
  );
};

export default Travel;
