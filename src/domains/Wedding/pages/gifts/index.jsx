import { Grid, Stack, useMediaQuery, useTheme } from "@mui/material";
import { ButtonNavigation } from "../../../../Components/ButtonNavigation";
import { FirstSection } from "../../../../Components/FirstSection";
import text from "../../../../Assets/text.json";
import { useLanguage } from "../../../../hooks/useLanguage";
import { BreadCrumb } from "../../../../Components/BreadCrumb";
import CardGift from "./components/novosComponets/CardGift";
import imagem1 from "../../../../Assets/Images/cardImage/PresenteBartosz.png";
import imagem2 from "../../../../Assets/Images/cardImage/PresenteLudmilla.png";
export const Gifts = () => {
  const { language } = useLanguage();
  const path = [
    { label: text.MenuHeaderLinks.wedding[language], url: "/wedding" },
    { label: text.dressCode.title[language], url: "/wedding/dresscode" },
  ];

  const topics = [
    {
      imagem: imagem1,
      title: text.gifts.Cards_Gift.TitleGiftBox1[language],
      description: text.gifts.Cards_Gift.Body1[language],
      moedas: text.gifts.Cards_Gift.Body2[language],
      options: text.gifts.Cards_Gift.Body3G[language],
      link1: text.gifts.Cards_Gift.BUTTON1[language],
      link2: text.gifts.Cards_Gift.BUTTON2[language],
      destinoURL1: "https://revolut.me/bartosmw9s",
      destinoURL2: "",
      copyPasteBlink: "+48 602 180485",
    },
    {
      imagem: imagem2,
      title: text.gifts.Cards_Gift.TitleGiftBox2[language],
      description: text.gifts.Cards_Gift.Body1[language],
      moedas: text.gifts.Cards_Gift.Body2[language],
      options: text.gifts.Cards_Gift.Body3B[language],
      link1: text.gifts.Cards_Gift.BUTTON1[language],
      link2: text.gifts.Cards_Gift.BUTTON3[language],
      destinoURL1: "https://revolut.me/ludmillakramos",
      destinoURL2: "https://nubank.com.br/pagar/16xuh8/Zr8AfCO23q",
      copyPastePix:
        "00020126460014BR.GOV.BCB.PIX0124ludmillakramos@gmail.com5204000053039865802BR5924Ludmilla Kolanscki Ramos6009SAO PAULO61080540900062250521pAU9VGKziYM8NeR16xuh863049467",
    },
  ];

  const data = [
    { label: text.MenuHeaderLinks.home[language], url: "/home" },
    { label: text.MenuHeaderLinks.wedding[language], url: "/wedding" },
    { label: text.gifts.title[language], url: "/wedding/gifts" },
  ];

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
              destinoURL1={item.destinoURL1}
              destinoURL2={item.destinoURL2}
              copyPasteBlink={item.copyPasteBlink}
              copyPastePix={item.copyPastePix}
            />
          </Grid>
        ))}
      </Grid>

      <ButtonNavigation path={path} />
    </Stack>
  );
};
