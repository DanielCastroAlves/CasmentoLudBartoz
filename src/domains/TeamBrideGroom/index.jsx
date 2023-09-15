import { Stack } from "@mui/material";
import text from "../../Assets/text.json";
import { useLanguage } from "../../hooks/useLanguage";
import { FirstSection } from "../../Components/FirstSection";
import Dress from "../../Assets/Images/cardImage/Pixabay-1274056.png";
import Groom from "../../Assets/Images/cardImage/Pixabay-1845166.png";

import CarouselBG from "./componets/Carousel";

export const TeamBrideGroom = () => {
  const { language } = useLanguage();

  const dataWedding = [
    {
      image: Dress,
      title: "Dress",
      description: "Bridesmaid",
    },
    {
      image: Groom,
      title: "Groomsman",
      description: "Groomsman",
    },
  ];
  return (
    <Stack width="100%" height="100%" mb={0}>
      <FirstSection
        title={text.Wedding.title[language]}
        subtitle={text.Wedding.subTitle[language]}
        paragraph1={text.Wedding.introP1[language]}
        paragraph2={text.Wedding.introP2[language]}
      />
      <CarouselBG dataInfo={dataWedding} />
    </Stack>
  );
};
