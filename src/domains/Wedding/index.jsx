import { Stack, useTheme } from "@mui/material";
import text from "../../Assets/text.json";
import { useLanguage } from "../../hooks/useLanguage";
import { LocationAndWeather } from "./components/LocationAndWeather";
import { FirstSection } from "../../Components/FirstSection";
import CarouselWedding from "./components/Carousel";
import DressCodeImage from "../../Assets/Images/cardImage/DressCode.svg";
import PreWeddingImage from "../../Assets/Images/cardImage/PreWedding.svg";
import teambrideGroom from "../../Assets/Images/cardImage/teambrideGroom.png";

import PresenteImage from "../../Assets/Images/cardImage/Presente.svg";
import historiacard from "../../Assets/Images/cardImage/historiacard.png";

export const Wedding = () => {
  const theme = useTheme();
  const { language } = useLanguage();

  const dataWedding = [
    {
      destination: "/wedding/prewedding",
      image: PreWeddingImage,
      title: "Pre Wedding",
      description: "Vamos ver o pôr-do-sol mais bonito da cidade juntos?",
    },
    {
      destination: "/wedding/dresscode",
      image: DressCodeImage,
      title: "Dress Code",
      description: "Com que roupa eu vou?",
    },
    {
      destination: "/wedding/gifts",
      image: PresenteImage,
      title: "Wedding Gift",
      description: "THINGS YOU SHOULD KNOW BEFORE GIFTING THE BRIDE AND GROOM",
    },
    {
      destination: "/wedding/ourhistory",
      image: historiacard,
      title: "Our Love Story",
      description: "Our wedding party",
    },
    {
      destination: "/wedding/teamBG",
      image: teambrideGroom,
      title: "Team Bride & Groom",
      description: "Our wedding party",
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
