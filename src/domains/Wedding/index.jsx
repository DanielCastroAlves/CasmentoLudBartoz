import { Box, Stack, Typography, useTheme } from "@mui/material";
import text from "../../Assets/text.json";
import { useLanguage } from "../../hooks/useLanguage";
import { LocationAndWeather } from "./components/LocationAndWeather";
/* import { Gallery } from "./components/Gallery"; */
import { FirstSection } from "../../Components/FirstSection";
import CarouselWedding from "./components/Carousel";

import DressCodeImage from "../../Assets/Images/cardImage/DressCode.svg";
import PreWeddingImage from "../../Assets/Images/cardImage/PreWedding.svg";
import RioDeJaneiroImage from "../../Assets/Images/cardImage/RioDeJaneiro.svg";
import NossaHistoriaImage from "../../Assets/Images/cardImage/NossaHistoria.svg";
import PresenteImage from "../../Assets/Images/cardImage/Presente.svg";
import BuziosImage from "../../Assets/Images/cardImage/Buzios.svg";

export const Wedding = () => {
  const theme = useTheme();
  const { language } = useLanguage();

  const dataWedding = [
    {
      link: "/wedding/dresscode",
      image: DressCodeImage,
      title: "Dress Code",
      description: "Com que roupa eu vou?",
    },
    {
      link: "/wedding/prewedding",
      image: PreWeddingImage,
      title: "Pre Wedding",
      description: "Vamos ver o pôr-do-sol mais bonito da cidade juntos?",
    },
    {
      link: "/travel/rio-de-janeiro",
      image: RioDeJaneiroImage,
      title: "Rio de Janeiro",
      description:
        "Detalhes sobre o destino mais famoso do Brasil, passeios e hospedagem.",
    },
    {
      link: "/nossa-historia",
      image: NossaHistoriaImage,
      title: "Nossa História",
      description: "Tudo começou há um tempo atrás, na ilha do sol...",
    },
    {
      link: "/wedding/gifts",
      image: PresenteImage,
      title: "Presente",
      description:
        "Quer fazer um agrado para os noivos? Saiba sobre a 'lista de presentes' aqui!",
    },
    {
      link: "/travel/buzios",
      image: BuziosImage,
      title: "Búzios",
      description:
        "Detalhes sobre o local do casamento, passeios e recomendações de estadia!",
    },
  ];
  return (
    <Stack width="100%" height="100%" mb={10}>
      <FirstSection
        title={text.Wedding.title[language]}
        subtitle={text.Wedding.subTitle[language]}
        paragraph1={text.Wedding.introP1[language]}
        paragraph2={text.Wedding.introP2[language]}
      />
      <LocationAndWeather />
      <CarouselWedding dataInfo={dataWedding} />
    </Stack>
  );
};
