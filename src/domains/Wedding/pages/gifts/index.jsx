import { Box, Stack } from "@mui/material";
import { ButtonNavigation } from "../../../../Components/ButtonNavigation";
import { FirstSection } from "../../../../Components/FirstSection";
import text from "../../../../Assets/text.json";
import { useLanguage } from "../../../../hooks/useLanguage";

import TimeLineGift from "./components/TimeLineGift";
import { useState } from "react";
import { CardGifts } from "./components/CardTimeLine";
import { BreadCrumb } from "../../../../Components/BreadCrumb";

export const Gifts = () => {
  const path = [
    { label: "Casamento", url: "/wedding" },
    { label: "Nossa História", url: "/wedding/ourhistory" },
  ];

  const { language } = useLanguage();

  const topics = [
    {
      label: "CARTÃO",
      title: ["Presente para o noivo!"],
      grupo: "Quero presentear o noivo",
      id: 1,
      describe: [
        "Você pode presentear com qualquer valor, efetuando o pagamento com seu cartão de crédito ou débito nas seguintes moedas:",

        "USD, EUR, AUD, CAD, CHF, DKK, SEK, PLN.",
      ],
    },
    {
      label: "BLIK",
      title: ["Presente para o noivo!"],
      grupo: "Quero presentear o noivo",
      id: 2,
      describe:
        "Essa opção é exclusiva para os convidados do noivo, facilitando o presente em Zlotys através do sistema Blik!",
    },
    {
      label: "",
      title: ["Que tal colaborar com a lua de mel dos noivos?"],
      id: "icone",
      describe: "CheckCircleOutlineIcon",
      grupo: "entrar no grupo",
    },
    {
      label: "PIX",
      title: ["Presente para a noiva!"],
      grupo: "Quero presentear a noiva",
      id: 3,
      describe:
        "Essa opção é exclusiva para os convidados da noiva, facilitando o presente em Reais através do PIX!",
    },
    {
      label: "CARTÃO",
      title: ["Presente para a noiva!"],
      grupo: "Quero presentear a noiva",
      id: 4,
      describe: [
        "Você pode presentear com qualquer valor, efetuando o pagamento com seu cartão de crédito ou débito nas seguintes moedas:",

        "USD, EUR, AUD, CAD, CHF, DKK, SEK, PLN.",
      ],
    },
  ];
  const [timelineItem, setTimelineItem] = useState(null);
  const data = [
    { label: text.MenuHeaderLinks.home[language], url: "/home" },
    { label: text.MenuHeaderLinks.wedding[language], url: "/wedding" },
    { label: text.gifts.title[language], url: "/wedding/gifts" },
  ];

  const handleTimelineItemClick = (item) => {
    setTimelineItem(item);
  };

  const selectedItem = topics.find((item) => item.id === timelineItem);

  return (
    <Stack width="100%" height="100%" mb={10}>
      <BreadCrumb data={data} />
      <FirstSection
        title={text.gifts.title[language]}
        subtitle={text.gifts.subtitle[language]}
        paragraph1={text.gifts.introP1[language]}
      />
      <TimeLineGift
        topics={topics}
        onTimelineItemClick={handleTimelineItemClick}
      />
      <Box
        sx={{
          marginTop: "-300px",
          marginLeft: "23%",
        }}
      >
        {timelineItem !== null ? (
          <CardGifts
            grupo={selectedItem.grupo}
            title={selectedItem.title}
            describe={selectedItem.describe}
            id={selectedItem.id}
          />
        ) : (
          <CardGifts
            grupo={"Entrar no grupo"}
            title={"Que tal colaborar com a lua de mel dos noivos?"}
            describe={[
              "Você pode colaborar com qualquer valor que quiser, basta escolher uma das opções acima!",
              "Se quiser deixar uma mensagem para os noivos, entre em contato individualmente ou pelo Grupo no Whatsapp!",
            ]}
          />
        )}
      </Box>

      <ButtonNavigation path={path} />
    </Stack>
  );
};
