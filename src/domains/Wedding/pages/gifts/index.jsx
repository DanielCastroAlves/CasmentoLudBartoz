import { Stack } from "@mui/material";
import { ButtonNavigation } from "../../../../Components/ButtonNavigation";
import { FirstSection } from "../../../../Components/FirstSection";
import text from "../../../../Assets/text.json";
import { useLanguage } from "../../../../hooks/useLanguage";

import TimeLineGift from "./components/TimeLineGift";
import { useState } from "react";


export const Gifts = () => {
  const path = [
    { label: "Casamento", url: "/wedding" },
    { label: "Nossa História", url: "/wedding/ourhistory" },
  ];

  const { language } = useLanguage();

  const topics = [
    /* {
      label: "",
      content: "",
      programacao: [""],
      id: 0,
      icon: "",
    }, */
    {
      label: "CARTÃO",
      content: "Quinta-feira",
      programacao: ["Presente para o noivo!"],
      id: 1,
      icon: "CheckCircleOutlineIcon",
    },
    {
      label: "BLIK",
      content: "Sexta-feira",
      programacao: ["Presente para o noivo!"],
      id: 2,
      icon: "CheckCircleOutlineIcon",
    },
    {
      label: "",
      content: "Segunda-feira",
      programacao: ["Que tal colaborar com a lua de mel dos noivos?"],
      id: "icone",
      icon: "CheckCircleOutlineIcon",
    },
    {
      label: "PIX",
      content: "Sábado",
      programacao: ["Presente para a noiva!"],
      id: 3,
      icon: "CheckCircleOutlineIcon",
    },
    {
      label: "CARTÃO",
      content: "Domingo",
      programacao: ["Presente para a noiva!"],
      id: 4,
      icon: "CheckCircleOutlineIcon",
    },
    /* {
      label: "",
      content: "",
      programacao: [""],
      id: 5,
      icon: "",
    }, */
   
    
  ];

  const [timelineItem, setTimelineItem] = useState(null);

  const handleTimelineItemClick = (item) => {
    setTimelineItem(item);
  };
  return (
    <Stack width="100%" height="100%" mb={10}>
      <FirstSection
        title={text.gifts.title[language]}
        subtitle={text.gifts.subtitle[language]}
        paragraph1={text.gifts.introP1[language]}
      />
      <TimeLineGift
        topics={topics}
        onTimelineItemClick={handleTimelineItemClick}
      />

      <ButtonNavigation path={path} />
    </Stack>
  );
};
