import { Grid, Stack, useMediaQuery, useTheme } from "@mui/material";
import { ButtonNavigation } from "../../../../Components/ButtonNavigation";
import { FirstSection } from "../../../../Components/FirstSection";
import text from "../../../../Assets/text.json";
import { useLanguage } from "../../../../hooks/useLanguage";
import { useState } from "react";
import { BreadCrumb } from "../../../../Components/BreadCrumb";
import CardGift from "./components/novosComponets/CardGift";
import imagem1 from "./image/little-girl-with-sunflower-in-a-sunflower-field.png";
import imagem2 from "./image/little-girl.png";

export const Gifts = () => {
  const { language } = useLanguage();
  const path = [
    { label: text.MenuHeaderLinks.wedding[language], url: "/wedding" },
    { label: text.story.title[language], url: "/wedding/ourhistory" },
  ];

  const topics = [
    {
      imagem: imagem1,
      title: "Presenteie o Noivo",
      description:
        "Você pode presentear com qualquer valor, efetuando o pagamento com seu cartão de crédito ou débito nas seguintes moedas:",
      moedas: " USD, EUR, AUD, CAD, CHF, DKK, SEK, PLN.",
      options: "Ou se preferir pagar em zlotys, através do blik.",
      link1: "CARTÃO",
      link2: "BLIK",
    },
    {
      imagem: imagem2,
      title: "Presenteie a Noiva",
      description:
        "Você pode presentear com qualquer valor, efetuando o pagamento com seu cartão de crédito ou débito nas seguintes moedas:",
      moedas: " USD, EUR, AUD, CAD, CHF, DKK, SEK, PLN.",
      options: "Ou se preferir pagar em reais, através do pix.",
      link1: "CARTÃO",
      link2: "PIX",
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

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack width="100%" height="100%" mb={!isMobile && 10}>
      <BreadCrumb data={data} />
      <FirstSection
        title={text.gifts.title[language]}
        subtitle={text.gifts.subtitle[language]}
        paragraph1={text.gifts.introP1[language]}
        paragraph2={text.gifts.introP2[language]}
        paragraph3={text.gifts.introP3[language]}
        paragraph4={text.gifts.introP4[language]}
      />
      <Grid
        container
        spacing={2}
        justifyContent={isMobile ? "flex-start" : "center"}
        alignItems="center"
        marginTop={"20px"}
      >
        {topics.map((item) => (
          <Grid item xs={12} sm={"auto"} key={item.title}>
            <CardGift
              imagem={item.imagem}
              title={item.title}
              description={item.description}
              link1={item.link1}
              link2={item.link2}
              moedas={item.moedas}
              options={item.options}
            />
          </Grid>
        ))}
      </Grid>

      <ButtonNavigation path={path} />
    </Stack>
  );
};
