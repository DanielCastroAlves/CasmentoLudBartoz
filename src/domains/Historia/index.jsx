import { Stack, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { CustomImage, CustomMB, CustomVideo, SectionText } from "./style";
import ibiza from "./imagens/Picture Ibiza [01].png";
import civil from "./imagens/Galeria Civil Wedding 2021 Desktop.png";
import galeria from "./imagens/Galeria Engagement 2021 Desktop.png";
import viagem from "./imagens/Galeria Viagem Desktop.png";
import original from "./imagens/Original.png";

import originalMB from "./imagens/mobile/Ibiza 02 [Desktop].png";
import ibizaMB from "./imagens/mobile/Ibiza 01MB.png";
import civilMB from "./imagens/mobile/Galeria Civil Wedding 2021MB.png";
import galeriaMB from "./imagens/mobile/Galeria Engagement 2021MB.png";
import viagemMB from "./imagens/mobile/Galeria ViagemMB.png";

import { FirstSection } from "../../Components/FirstSection";
import { useLanguage } from "../../hooks/useLanguage";
import text from "../../Assets/text.json";
import { BreadCrumb } from "../../Components/BreadCrumb";
import { ButtonNavigation } from "../../Components/ButtonNavigation";

const Historia = () => {
  const { language } = useLanguage();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const data = [
    { label: text.MenuHeaderLinks.home[language], url: "/home" },
    { label: text.MenuHeaderLinks.wedding[language], url: "/wedding" },
    { label: text.story.title[language], url: "/wedding/ourstory" },
  ];

  const path = [
    { label: text.gifts.title[language], url: "/wedding/gifts" },
    {
      label: text.MenuHeaderLinks.teamBrideGroom[language],
      url: "/wedding/weddingparty",
    },
  ];

  return (
    <Stack width="100%" height="100%" mb={10}>
      <BreadCrumb data={data} />
      <FirstSection
        title={text.story.title[language]}
        subtitle={text.story.subtitle[language]}
      />
      {!isMobile ? (
        <CustomImage src={ibiza} alt="Descrição da imagem" />
      ) : (
        <CustomMB src={originalMB} alt="Descrição da imagem" />
      )}

      <FirstSection
        title={""}
        paragraph1={text.story.Bloco1body1[language]}
        paragraph2={text.story.Bloco1body2[language]}
        paragraph3={text.story.Bloco1body3[language]}
        paragraph4={text.story.Bloco1body4[language]}
      />

      <SectionText>
        <CustomVideo>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/fIWuD1b4xNI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </CustomVideo>
      </SectionText>
      <FirstSection
        title={""}
        paragraph1={text.story.Bloco2body1[language]}
        paragraph2={text.story.Bloco2body2[language]}
        paragraph3={text.story.Bloco2body3[language]}
        paragraph4={text.story.Bloco2body4[language]}
        paragraph5={text.story.Bloco2body5[language]}
      />
      <SectionText>
        {!isMobile ? (
          <CustomImage src={original} alt="Descrição da imagem" />
        ) : (
          <CustomMB src={ibizaMB} alt="Descrição da imagem" />
        )}
      </SectionText>
      <FirstSection
        title={""}
        paragraph1={text.story.Bloco3body1[language]}
        paragraph2={text.story.Bloco3Story[language]}
        paragraph3={text.story.Bloco3body2[language]}
        paragraph4={text.story.Bloco3body3[language]}
      />
      <SectionText>
        {!isMobile ? (
          <CustomImage src={viagem} alt="Descrição da imagem" />
        ) : (
          <CustomImage src={viagemMB} alt="Descrição da imagem" />
        )}
      </SectionText>
      <FirstSection
        title={""}
        paragraph1={text.story.Bloco4body1[language]}
        paragraph2={text.story.Bloco4body2[language]}
        paragraph3={text.story.Bloco4body3[language]}
        paragraph4={text.story.Bloco4body4[language]}
        paragraph5={text.story.Bloco4body5[language]}
      />

      <SectionText>
        <CustomVideo>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/z-602UWUcMc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </CustomVideo>
      </SectionText>
      <FirstSection
        title={""}
        paragraph1={text.story.Bloco5body1[language]}
        paragraph2={text.story.Bloco5body2[language]}
        paragraph3={text.story.Bloco5body3[language]}
      />

      <SectionText>
        {!isMobile ? (
          <CustomImage src={galeria} alt="Descrição da imagem" />
        ) : (
          <CustomImage src={galeriaMB} alt="Descrição da imagem" />
        )}
      </SectionText>
      <FirstSection
        title={""}
        paragraph1={text.story.Bloco6body1[language]}
        paragraph2={text.story.Bloco6body2[language]}
      />
      <SectionText>
        {!isMobile ? (
          <CustomImage src={civil} alt="Descrição da imagem" />
        ) : (
          <CustomImage src={civilMB} alt="Descrição da imagem" />
        )}
      </SectionText>

      <FirstSection title={""} paragraph1={text.story.Bloco7body1[language]} />
      <ButtonNavigation path={path} />
    </Stack>
  );
};

export default Historia;
