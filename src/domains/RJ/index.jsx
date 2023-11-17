import React, { useState } from "react";
import text from "../../Assets/text.json";
import { useLanguage } from "../../hooks/useLanguage";
import { Link, Stack } from "@mui/material";
import rio from "../../Assets/Images/Picture-RJ.png";
import rioMb from "../../Assets/Images/cardImage/IMG=Mobile.png";

import { FirstSection } from "../../Components/FirstSection";
import IMG_2905 from "../../Assets/Images/hoteis/IMG_2905.png";
import ipanemaHotel from "../../Assets/Images/hoteis/ipanemaHotel.png";
import {
  Description,
  BannerImage,
  BannerImageBuzios,
  ContainerBanner,
  ContainerPageCity,
  ContainerTitleBanner,
  TituloDescription,
} from "./style";
import { BreadCrumb } from "../../Components/BreadCrumb";
import { CardBanner } from "../Buzios/style";

const RioDeJaneiro = () => {
  const [isSelected, setIsSelected] = useState(false);

  const toggleSelection = () => {
    setIsSelected(!isSelected);
  };
  const { language } = useLanguage();
  const hoteis = [
    {
      nome: "hotel arpoador",
      destination: "http://pousadaalforria.com.br/",
      imagem: IMG_2905,
    },
    {
      nome: "hotel ipanema inn",
      destination: "https://www.ipanemainn.com.br/en",
      imagem: ipanemaHotel,
    },
  ];

  const data = [
    { label: text.MenuHeaderLinks.home[language], url: "/home" },
    { label: text.MenuHeaderLinks.travel[language], url: "/travel" },
    { label: "Rio de Janeiro", url: "travel/rio-de-janeiro" },
  ];

  return (
    <Stack width="100%" height="100%" mb={10}>
      <BreadCrumb data={data} />
      <FirstSection
        title={text.RiodeJaneiro.titleP1[language]}
        subtitle={text.RiodeJaneiro.subTitle[language]}
        paragraph1={text.RiodeJaneiro.introP1[language]}
        paragraph2={text.RiodeJaneiro.introP2[language]}
        paragraph3={text.RiodeJaneiro.introP3[language]}
      />
      <BannerImage>
        <div className="imgBuzios">
          <img src={rio} alt="rio" style={{ width: "100%" }} />
        </div>
        <div className="imgrioMb">
          <img src={rioMb} alt="rio" style={{ maxWidth: "100%" }} />
        </div>
      </BannerImage>

      <ContainerPageCity>
        <TituloDescription>
          {text.RiodeJaneiro.heading1[language]}
        </TituloDescription>
        <Description>{text.RiodeJaneiro.bodyRio1[language]}</Description>
        <Description>{text.RiodeJaneiro.bodyRio2[language]}</Description>
        <Description>
          <ul>
            <li>{text.RiodeJaneiro.destinosRio.d1[language]}</li>
            <li>{text.RiodeJaneiro.destinosRio.d2[language]}</li>
            <li>{text.RiodeJaneiro.destinosRio.d3[language]}</li>
            <li>{text.RiodeJaneiro.destinosRio.d4[language]}</li>
            <li>{text.RiodeJaneiro.destinosRio.d5[language]}</li>
            <li>{text.RiodeJaneiro.destinosRio.d6[language]}</li>
            <li>{text.RiodeJaneiro.destinosRio.d7[language]}</li>
            <li>{text.RiodeJaneiro.destinosRio.d8[language]}</li>
          </ul>
        </Description>

        <Description
          dangerouslySetInnerHTML={{
            __html: text.RiodeJaneiro.bodyConfirmation3[language],
          }}
        />
      </ContainerPageCity>

      <ContainerPageCity>
        <TituloDescription>
          {text.RiodeJaneiro.heading2[language]}
        </TituloDescription>
        <Description>{text.RiodeJaneiro.body1[language]}</Description>
        <Description>{text.RiodeJaneiro.body2[language]}</Description>
        <Description>{text.RiodeJaneiro.body3[language]}</Description>
      </ContainerPageCity>

      <ContainerBanner>
        {hoteis.map((hotel, index) => (
          <Link href={hotel.destination} underline="none" target="blank">
            <CardBanner isSelected={isSelected} onClick={toggleSelection}>
              <BannerImageBuzios
                style={{
                  position: "relative",
                  backgroundImage: `url(${hotel.imagem})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              />
              <ContainerTitleBanner>
                <h1>{hotel.nome}</h1>
                <p>Conheça o hotel</p>
              </ContainerTitleBanner>
            </CardBanner>
          </Link>
        ))}
      </ContainerBanner>
    </Stack>
  );
};

export default RioDeJaneiro;
